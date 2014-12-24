(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/QTIZip', 'compiled/views/content_migrations/MigrationView'], function(Backbone, template, MigrationView) {
    var QTIZipView, _ref;

    return QTIZipView = (function(_super) {
      __extends(QTIZipView, _super);

      function QTIZipView() {
        _ref = QTIZipView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QTIZipView.prototype.template = template;

      QTIZipView.child('chooseMigrationFile', '.chooseMigrationFile');

      QTIZipView.child('questionBank', '.selectQuestionBank');

      QTIZipView.child('overwriteAssessmentContent', '.overwriteAssessmentContent');

      return QTIZipView;

    })(MigrationView);
  });

}).call(this);
