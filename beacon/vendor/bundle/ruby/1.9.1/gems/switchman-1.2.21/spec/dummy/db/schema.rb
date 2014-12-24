# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140219183820) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appendages", force: true do |t|
    t.integer  "user_id",    limit: 8
    t.integer  "value"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "digits", force: true do |t|
    t.integer  "appendage_id", limit: 8
    t.integer  "value"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "features", force: true do |t|
    t.integer  "owner_id",   limit: 8
    t.string   "owner_type"
    t.integer  "value"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "mirror_users", force: true do |t|
    t.integer  "user_id",    limit: 8
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "roots", force: true do |t|
    t.integer  "user_id",    limit: 8
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "switchman_shards", force: true do |t|
    t.string  "name"
    t.string  "database_server_id"
    t.boolean "default",            default: false, null: false
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.integer  "mirror_user_id", limit: 8
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.integer  "parent_id",      limit: 8
  end

end
