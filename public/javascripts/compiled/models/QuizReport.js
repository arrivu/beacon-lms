(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/models/progressable', 'Backbone', 'jquery.instructure_date_and_time'], function($, _, progressable, _arg) {
    var Model, QuizReport, _ref;

    Model = _arg.Model;
    return QuizReport = (function(_super) {
      __extends(QuizReport, _super);

      function QuizReport() {
        _ref = QuizReport.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      QuizReport.mixin(progressable);

      QuizReport.prototype.url = function() {
        return this.get('url');
      };

      QuizReport.prototype.baseUrl = function() {
        return this.url().replace(RegExp("/" + (this.get('id')) + "$"), '');
      };

      QuizReport.prototype.toJSON = function() {
        return {
          quiz_report: _.pick(QuizReport.__super__.toJSON.apply(this, arguments), 'report_type', 'includes_all_versions')
        };
      };

      QuizReport.prototype.present = function() {
        var data;

        data = _.extend({}, this.attributes);
        if (this.progressModel.id) {
          data.progress = this.progressModel.toJSON();
        }
        if (data.file) {
          data.dateAndTime = $.datetimeString(data.file.created_at);
        }
        return data;
      };

      return QuizReport;

    })(Model);
  });

}).call(this);
