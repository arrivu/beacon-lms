(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/ExternalToolContent', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var ExternalToolContentView, _ref;

    return ExternalToolContentView = (function(_super) {
      __extends(ExternalToolContentView, _super);

      function ExternalToolContentView() {
        _ref = ExternalToolContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalToolContentView.prototype.template = template;

      ExternalToolContentView.child('externalToolLaunch', '.externalToolLaunch');

      ExternalToolContentView.child('selectContent', '.selectContent');

      return ExternalToolContentView;

    })(MigrationView);
  });

}).call(this);
