(function() {
  define(function() {
    window.ENV || (window.ENV = {});
    return window.ENV.FILES_CONTEXTS = [
      {
        "asset_string": "course_1",
        "name": "ryans test course",
        "root_folder_id": "2",
        "permissions": {
          "manage_files": true,
          "read_contents": true
        }
      }
    ];
  });

}).call(this);
