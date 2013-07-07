server "classroom.example.com", :app, :web, :db, :primary => true
set :deploy_to, "/var/deploy/beacon/canvas"
set :branch,    "production"
set :scm_passphrase, ""
set :smart_lms_data_files, "#{deploy_to}/data/files"
