require "spec_helper"

module Switchman
  describe Shard do
    include RSpecHelper

    describe ".activate" do
      it "should activate a hash of shard categories" do
        expect(Shard.current).to eq Shard.default
        expect(Shard.current(:other)).to eq Shard.default
        Shard.activate(:default => @shard1, :other => @shard2) do
          expect(Shard.current).to eq @shard1
          expect(Shard.current(:other)).to eq @shard2
        end
        expect(Shard.current).to eq Shard.default
        expect(Shard.current(:other)).to eq Shard.default
      end

      it "should not allow activating the unsharded category" do
        expect(Shard.current(:unsharded)).to eq Shard.default
        Shard.activate(:unsharded => @shard1) do
          expect(Shard.current(:unsharded)).to eq Shard.default
        end
        expect(Shard.current(:unsharded)).to eq Shard.default
      end
    end

    describe "#activate" do
      it "should activate the default category when no args are used" do
        expect(Shard.current).to eq Shard.default
        @shard1.activate do
          expect(Shard.current).to eq @shard1
        end
        expect(Shard.current).to eq Shard.default
      end

      it "should activate other categories" do
        expect(Shard.current(:other)).to eq Shard.default
        @shard1.activate(:other) do
          expect(Shard.current(:other)).to eq @shard1
          expect(Shard.current).to eq Shard.default
        end
        expect(Shard.current(:other)).to eq Shard.default
      end

      it "should activate multiple categories" do
        expect(Shard.current).to eq Shard.default
        expect(Shard.current(:other)).to eq Shard.default
        @shard1.activate(:default, :other) do
          expect(Shard.current).to eq @shard1
          expect(Shard.current(:other)).to eq @shard1
        end
        expect(Shard.current).to eq Shard.default
        expect(Shard.current(:other)).to eq Shard.default
      end
    end

    describe "#shard" do
      it "should return the default shard if the instance variable is not set" do
        # i.e. the instance var would not be set if we got this back from a cache
        # that was populated pre-sharding
        a = User.new
        expect(a.shard).to eq Shard.default
        a.instance_variable_set(:@shard, nil)
        expect(a.shard).to eq Shard.default
      end
    end

    describe "#drop_database" do
      it "should work" do
        # use a separate connection so we don't commit the transaction
        server = DatabaseServer.create(:config => Shard.default.database_server.config)
        shard = server.create_new_shard
        shard.activate do
          User.create!
          expect(User.count).to eq 1
        end
        shard.drop_database
        shard.activate do
          expect { User.count }.to raise_error
        end
      end
    end

    describe ".lookup" do
      it "should work with pseudo-ids" do
        expect(Shard.lookup('default')).to eq Shard.default
        expect(Shard.lookup('self')).to eq Shard.current
        @shard1.activate do
          expect(Shard.lookup('default')).to eq Shard.default
          expect(Shard.lookup('self')).to eq Shard.current
        end
      end

      it "should work with string ids" do
        expect(Shard.lookup(Shard.current.id.to_s)).to eq Shard.current
        expect(Shard.lookup(@shard1.id.to_s)).to eq @shard1
      end

      it "should raise an error for non-ids" do
        expect { Shard.lookup('jacob') }.to raise_error(ArgumentError)
      end
    end

    describe ".with_each_shard" do
      describe ":exception" do
        it "should default to :raise" do
          expect { Shard.with_each_shard { raise "error" } }.to raise_error
        end

        it "should :ignore" do
          expect(Shard.with_each_shard(exception: :ignore) { raise "error" }).to eq []
        end

        it "should :defer" do
          counter = 0
          expect { Shard.with_each_shard(exception: :defer) { counter += 1; raise "error" } }.to raise_error
          # called more than once
          expect(counter).to be > 1
        end

        it "should call a proc" do
          counter = 0
          expect(Shard.with_each_shard(exception: -> { counter += 1 }) { raise "error" }).to eq []
          # called more than once
          expect(counter).to be > 1
        end
      end

      context "non-transactional" do
        self.use_transactional_fixtures = false

        it "should disconnect when switching among different database servers" do
          User.connection
          expect(User.connected?).to eq true
          Shard.with_each_shard([Shard.default, @shard2]) {}
          expect(User.connected?).to  eq false
        end

        it "should disconnect from other environments" do
          ::Shackles.activate(:slave) do
            Shard.with_each_shard([Shard.default, @shard2]) do
              ::Shackles.activate(:master) do
                User.connection
                expect(User.connected?).to eq true
              end
            end
          end

          ::Shackles.activate(:slave) { expect(User.connected?).to eq false }
          ::Shackles.activate(:master) { expect(User.connected?).to eq false }
        end

        it "should not disconnect when it's the current shard" do
          User.connection
          expect(User.connected?).to eq true
          Shard.with_each_shard([Shard.default]) {}
          expect(User.connected?).to eq true
        end

        it "should not disconnect for zero shards" do
          User.connection
          expect(User.connected?).to eq true
          Shard.with_each_shard([]) {}
          expect(User.connected?).to eq true
        end
      end
    end

    describe ".partition_by_shard" do
      it "should work" do
        ids = [2, 48, Shard::IDS_PER_SHARD * @shard1.id + 6, Shard::IDS_PER_SHARD * @shard1.id + 8, 10, 12]
        results = Shard.partition_by_shard(ids) do |ids|
          expect(ids.length == 4 || ids.length == 2).to eq true
          ids.map { |id| id + 1}
        end

        # could have done either shard first, but we can't sort, because we want to see the shards grouped together
        expect(results == [3, 49, 11, 13, 7, 9] ||
            results == [7, 9, 3, 49, 11, 13]).to eq true
      end

      it "should work for a partition_proc that returns a shard" do
        array = [{:id => 1, :shard => @shard1}, {:id => 2, :shard => @shard2}]
        results = Shard.partition_by_shard(array, lambda { |a| a[:shard] }) do |objects|
          expect(objects.length).to eq 1
          expect(Shard.current).to eq objects.first[:shard]
          objects.first[:id]
        end
        expect(results.sort).to eq [1, 2]
      end

      it "should support shortened id syntax, and strings" do
        ids = [@shard1.global_id_for(1), "#{@shard2.id}~2"]
        result = Shard.partition_by_shard(ids) do |ids|
          expect(ids.length).to eq 1
          expect([@shard1, @shard2].include?(Shard.current)).to eq true
          expect(ids.first).to eq 1 if Shard.current == @shard1
          expect(ids.first).to eq 2 if Shard.current == @shard2
          ids.first
        end
        expect(result.sort).to eq [1, 2]
      end

      it "should partition unrecognized types unchanged into current shard" do
        expected_shard = Shard.current
        items = [:symbol, Object.new]
        result = Shard.partition_by_shard(items) do |shard_items|
          [Shard.current, shard_items]
        end
        expect(result).to eq [expected_shard, items]
      end

      it "should partition unrecognized strings unchanged into current shard" do
        expected_shard = Shard.current
        items = ["not an id", "something other than an id"]
        result = Shard.partition_by_shard(items) do |shard_items|
          [Shard.current, shard_items]
        end
        expect(result).to eq [expected_shard, items]
      end

      it "should partition recognized ids with an invalid shard unchanged into current shard" do
        expected_shard = Shard.current
        bad_shard_id = @shard2.id + 10000
        items = ["#{bad_shard_id}~1", Shard::IDS_PER_SHARD * bad_shard_id + 1]
        result = Shard.partition_by_shard(items) do |shard_items|
          [Shard.current, shard_items]
        end
        expect(result).to eq [expected_shard, items]
      end
    end

    describe "#name" do
      it "the default shard should not be marked as dirty after reading its name" do
        s = Shard.default
        expect(s).not_to be_new_record
        s.name
        expect(s).not_to be_changed
      end

      it "should fall back to shard_name in the config if nil" do
        db = DatabaseServer.new(config: { adapter: 'mysql', database: 'canvas', shard_name: 'yoyoyo' })
        shard = Shard.new(database_server: db)
        expect(shard.name).to eq 'yoyoyo'
      end

      it "should fall back to the database_server if nil" do
        db = DatabaseServer.new(config: { adapter: 'mysql', database: 'canvas' })
        shard = Shard.new(database_server: db)
        expect(shard.name).to eq 'canvas'
      end

      it "should get it from the postgres connection if not otherwise specified" do
        db = DatabaseServer.create(config: { adapter: 'postgresql', database: 'notme' })
        shard = Shard.new(database_server: db)
        shard.database_server = db
        connection = mock()
        connection.stubs(:open_transactions).returns(0)
        connection.expects(:schemas).returns(['canvas', 'public']).once
        connection.expects(:schema_search_path=).with(nil).once
        connection.stubs(:shard).returns(Shard.default)
        connection.expects(:shard=).with(shard)
        connection.stubs(:adapter_name).returns('PostgreSQL')
        connection.stubs(:run_callbacks).returns(nil)
        ::ActiveRecord::ConnectionAdapters::ConnectionPool.any_instance.stubs(:checkout).returns(connection)
        begin
          expect(shard.name).to eq 'canvas'
        ensure
          shard.activate { ::ActiveRecord::Base.connection_pool.current_pool.disconnect! }
        end
      end
    end

    describe ".shard_for" do
      it "should work" do
        expect(Shard.shard_for(1)).to eq Shard.default
        expect(Shard.shard_for(1, @shard1)).to eq @shard1
        expect(Shard.shard_for(@shard1.global_id_for(1))).to eq @shard1
        expect(Shard.shard_for(Shard.default.global_id_for(1))).to eq Shard.default
        expect(Shard.shard_for(@shard1.global_id_for(1), @shard1)).to eq @shard1
        expect(Shard.shard_for(Shard.default.global_id_for(1), @shard1)).to eq Shard.default
      end
    end

    describe ".local_id_for" do
      it "should recognize shortened string ids" do
        expected_id = 1
        expected_shard = @shard2
        id, shard = Shard.local_id_for("#{expected_shard.id}~#{expected_id}")
        expect(id).to eq expected_id
        expect(shard).to eq expected_shard
      end

      it "should recognize global ids" do
        expected_id = 1
        expected_shard = @shard2
        id, shard = Shard.local_id_for(Shard::IDS_PER_SHARD * expected_shard.id + expected_id)
        expect(id).to eq expected_id
        expect(shard).to eq expected_shard
      end

      it "should recognize local ids with no shard" do
        expected_id = 1
        id, shard = Shard.local_id_for(expected_id)
        expect(id).to eq expected_id
        expect(shard).to be_nil
      end

      it "should return nil for unrecognized input" do
        id, shard = Shard.local_id_for("not an id")
        expect(id).to be_nil
        expect(shard).to be_nil
      end

      it "should return nil for ids with bad shard values" do
        bad_shard_id = @shard2.id + 10000
        id, shard = Shard.local_id_for("#{bad_shard_id}~1")
        expect(id).to be_nil
        expect(shard).to be_nil
      end
    end

    context "id translation" do
      before do
        @local_id = 1
        @global_id = Shard::IDS_PER_SHARD * @shard1.id + @local_id
      end

      describe ".integral_id" do
        it "should return recognized ids" do
          expect(Shard.integral_id_for(@local_id)).to eq @local_id
          expect(Shard.integral_id_for(@local_id.to_s)).to eq @local_id
          expect(Shard.integral_id_for(@global_id)).to eq @global_id
          expect(Shard.integral_id_for(@global_id.to_s)).to eq @global_id
          expect(Shard.integral_id_for("#{@shard1.id}~#{@local_id}")).to eq @global_id
        end

        it "should work even for shards that don't exist" do
          shard = Shard.create!
          shard.destroy
          global_id = shard.global_id_for(1)
          expect(Shard.integral_id_for(global_id)).to eq global_id
          expect(Shard.integral_id_for(global_id.to_s)).to eq global_id
          expect(Shard.integral_id_for("#{shard.id}~1")).to eq global_id
        end

        it "should return nil for unrecognized ids" do
          expect(Shard.integral_id_for('not an id')).to eq nil
        end
      end

      describe ".local_id_for" do
        it "should return id without shard for local id" do
          expect(Shard.local_id_for(@local_id)).to eq [@local_id, nil]
        end

        it "should return id with shard for global id" do
          expect(Shard.local_id_for(@global_id)).to eq [@local_id, @shard1]
        end

        it "should return nil for shards that don't exist" do
          shard = Shard.create!
          shard.destroy
          expect(Shard.local_id_for(shard.global_id_for(1))).to eq [nil, nil]
        end

        it "should return nil for unrecognized ids" do
          expect(Shard.local_id_for('not an id')).to eq [nil, nil]
        end
      end

      describe ".relative_id_for" do
        it "should return recognized ids relative to the target shard" do
          expect(Shard.relative_id_for(@local_id, @shard1, @shard2)).to eq @global_id
          expect(Shard.relative_id_for(@local_id, @shard2, @shard2)).to eq @local_id
          expect(Shard.relative_id_for(@global_id, @shard1, @shard2)).to eq @global_id
          expect(Shard.relative_id_for(@global_id, @shard2, @shard2)).to eq @global_id
        end

        it "should return the original id for unrecognized ids" do
          expect(Shard.relative_id_for('not an id', @shard1, @shard2)).to eq 'not an id'
        end
      end

      describe ".short_id_for" do
        it "should return shorted strings for global ids" do
          expect(Shard.short_id_for(@local_id)).to eq @local_id
          expect(Shard.short_id_for("#{@local_id}")).to eq @local_id
          expect(Shard.short_id_for(@global_id)).to eq "#{@shard1.id}~#{@local_id}"
        end

        it "should return the original id for unrecognized ids" do
          expect(Shard.short_id_for('not an id')).to eq 'not an id'
        end
      end

      describe ".global_id_for" do
        it "should return the provided id if already global" do
          local_id = 5
          Shard.with_each_shard do
            global_id = Shard.current.global_id_for(local_id)
            expect(Shard.global_id_for(global_id)).to eq global_id
          end
        end

        it "should treat local ids as local to the current shard" do
          local_id = 5
          Shard.with_each_shard do
            next if Shard.current == Shard.default
            expect(Shard.shard_for(Shard.global_id_for(local_id))).to eq Shard.current
          end
        end
      end
    end
  end
end
