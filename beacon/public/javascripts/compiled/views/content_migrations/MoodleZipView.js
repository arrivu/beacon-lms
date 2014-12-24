(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/MoodleZip', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var MoodleZip, _ref;

    return MoodleZip = (function(_super) {
      __extends(MoodleZip, _super);

      function MoodleZip() {
        _ref = MoodleZip.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MoodleZip.prototype.template = template;

      MoodleZip.child('chooseMigrationFile', '.chooseMigrationFile');

      MoodleZip.child('questionBank', '.selectQuestionBank');

      MoodleZip.child('dateShift', '.dateShift');

      MoodleZip.child('selectContent', '.selectContent');

      return MoodleZip;

    })(MigrationView);
  });

}).call(this);
