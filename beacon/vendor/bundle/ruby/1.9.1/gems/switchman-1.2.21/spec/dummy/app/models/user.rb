class User < ActiveRecord::Base
  has_many :appendages, :multishard => true
  has_many :digits, :through => :appendages, :multishard => true

  has_many :features, :as => :owner, :multishard => true

  belongs_to :parent, :class_name => "User", :foreign_key => :parent_id
  has_many :children, :class_name => "User", :inverse_of => :parent, :foreign_key => :parent_id
  has_many :grandchildren, :class_name => "User", :through => :children, :source => :children

  has_many :roots

  belongs_to :mirror_user

  attr_writer :associated_shards
  class << self
    attr_accessor :associated_shards_map
  end

  def self.associated_shards_for(global_id)
    associated_shards_map[global_id] if global_id && associated_shards_map
  end

  def associated_shards
    self.class.associated_shards_for(self.global_id) || @associated_shards || [self.shard]
  end
end
