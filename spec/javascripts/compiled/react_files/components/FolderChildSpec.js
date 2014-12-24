(function() {
  define(['react', 'jquery', 'compiled/react_files/components/FolderChild', 'compiled/models/Folder', 'compiled/react_files/routes'], function(React, $, FolderChild, Folder, routes) {
    var Simulate, TEST_FOLDERS_COLLECTION_URL;

    Simulate = React.addons.TestUtils.Simulate;
    return TEST_FOLDERS_COLLECTION_URL = '/courses/<course_id>/folders/<folder_id>/folders';
  });

}).call(this);
