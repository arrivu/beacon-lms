(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/CanvasExport', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var CanvasExportView, _ref;

    return CanvasExportView = (function(_super) {
      __extends(CanvasExportView, _super);

      function CanvasExportView() {
        _ref = CanvasExportView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CanvasExportView.prototype.template = template;

      CanvasExportView.child('chooseMigrationFile', '.chooseMigrationFile');

      CanvasExportView.child('dateShift', '.dateShift');

      CanvasExportView.child('selectContent', '.selectContent');

      return CanvasExportView;

    })(MigrationView);
  });

}).call(this);
