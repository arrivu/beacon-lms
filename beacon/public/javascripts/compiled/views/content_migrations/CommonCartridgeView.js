(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/CommonCartridge', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var CommonCartridge, _ref;

    return CommonCartridge = (function(_super) {
      __extends(CommonCartridge, _super);

      function CommonCartridge() {
        _ref = CommonCartridge.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommonCartridge.prototype.template = template;

      CommonCartridge.child('chooseMigrationFile', '.chooseMigrationFile');

      CommonCartridge.child('questionBank', '.selectQuestionBank');

      CommonCartridge.child('dateShift', '.dateShift');

      CommonCartridge.child('selectContent', '.selectContent');

      CommonCartridge.child('overwriteAssessmentContent', '.overwriteAssessmentContent');

      return CommonCartridge;

    })(MigrationView);
  });

}).call(this);
