(function() {
  define(['react', 'compiled/models/Folder', 'compiled/models/FilesystemObject'], function(React, Folder, FilesystemObject) {
    var customPropTypes;

    return customPropTypes = {
      contextType: React.PropTypes.oneOf(['users', 'groups', 'accounts', 'courses']),
      contextId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      folder: React.PropTypes.instanceOf(Folder),
      filesystemObject: React.PropTypes.instanceOf(FilesystemObject)
    };
  });

}).call(this);
