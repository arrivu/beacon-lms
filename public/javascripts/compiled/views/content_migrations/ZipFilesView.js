(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/ZipFiles', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var ZipFiles, _ref;

    return ZipFiles = (function(_super) {
      __extends(ZipFiles, _super);

      function ZipFiles() {
        _ref = ZipFiles.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ZipFiles.prototype.template = template;

      ZipFiles.child('chooseMigrationFile', '.chooseMigrationFile');

      ZipFiles.child('folderPicker', '.folderPicker');

      return ZipFiles;

    })(MigrationView);
  });

}).call(this);
