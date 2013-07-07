server "192.168.1.54", :app, :web, :db, :primary => true
set :deploy_to, "/var/deploy/beacon/canvas"
set :rails_env, "staging" 
set :branch,    "becon_deploy"
set :scm_passphrase, ""
#set :smart_lms_data_files "/var/capistrano/beacon/lms_staging/data/files"
set :smart_lms_data_files, "#{deploy_to}/data/files"

