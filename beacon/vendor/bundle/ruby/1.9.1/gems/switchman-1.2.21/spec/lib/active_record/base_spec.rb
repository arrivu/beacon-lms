require "spec_helper"

module Switchman
  module ActiveRecord
    describe Base do
      include RSpecHelper

      describe "to_param" do
        it "should return nil if no id" do
          user = User.new
          expect(user.to_param).to be_nil
        end

        it "should return the id even if not persisted" do
          user = User.new
          user.id = 1
          expect(user.to_param).to eq '1'
        end

        it "should return local id if in the current shard" do
          user = User.create!
          expect(user.to_param).to eq user.local_id.to_s
          @shard1.activate do
            user2 = User.create!
            expect(user2.to_param).to eq user2.local_id.to_s
          end
        end

        it "should return a short form global id if not in the current shard" do
          user = nil
          @shard1.activate do
            user = User.create!
          end
          @shard2.activate do
            expect(user.to_param).to eq "#{@shard1.id}~#{user.local_id}"
          end
        end

        it "should use to_param in url helpers" do
          helpers = ::Rails.application.routes.url_helpers
          user = nil
          appendage = nil

          @shard1.activate do
            user = User.create!
            appendage = Appendage.create!

            expect(helpers.user_path(user)).to eq "/users/#{user.local_id}"
            expect(helpers.user_appendages_path(user)).to eq "/users/#{user.local_id}/appendages"
            expect(helpers.user_appendage_path(user, appendage)).to eq "/users/#{user.local_id}/appendages/#{appendage.local_id}"
            expect(helpers.user_test1_path(user)).to eq "/users/#{user.local_id}"
            expect(helpers.user_test2_path(user)).to eq "/users/#{user.local_id}/test2"
          end

          @shard2.activate do
            user_short_id = "#{@shard1.id}~#{user.local_id}"
            appendage_short_id = "#{@shard1.id}~#{appendage.local_id}"

            expect(helpers.user_path(user)).to eq "/users/#{user_short_id}"
            expect(helpers.user_appendages_path(user)).to eq "/users/#{user_short_id}/appendages"
            expect(helpers.user_appendage_path(user, appendage)).to eq "/users/#{user_short_id}/appendages/#{appendage_short_id}"
            expect(helpers.user_test1_path(user)).to eq "/users/#{user_short_id}"
            expect(helpers.user_test2_path(user)).to eq "/users/#{user_short_id}/test2"

            appendage2 = Appendage.create!
            expect(helpers.user_appendage_path(user, appendage2)).to eq "/users/#{user_short_id}/appendages/#{appendage2.local_id}"
          end
        end
      end

      describe "shard=" do
        it "should adjust foreign ids when shard is changed" do
          user = User.create!
          appendage = Appendage.new
          appendage.user_id = user.id
          appendage.shard = @shard1
          expect(appendage.attributes["user_id"]).to eq user.global_id
        end
      end

      describe ".shard_category=" do
        it "should set up connection pools correctly for a model on a different db in the default shard" do
          skip "remove_connection working properly"
          ::Rails.env.stubs(:test?).returns(false)
          begin
            config = { :adapter => 'sqlite3', :database => ':memory:', :something_unique_in_the_spec => true }
            MirrorUser.establish_connection(config)

            expect(MirrorUser.connection).not_to eq ::ActiveRecord::Base.connection
            ::Shackles.activate(:slave) do
              expect(MirrorUser.connection).not_to eq ::ActiveRecord::Base.connection
            end
          ensure
            MirrorUser.remove_connection
          end
        end
      end
    end
  end
end
