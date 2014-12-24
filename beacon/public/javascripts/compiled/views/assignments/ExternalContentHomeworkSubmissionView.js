(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery'], function($) {
    var ExternalContentHomeworkSubmissionView, _ref;

    return ExternalContentHomeworkSubmissionView = (function(_super) {
      __extends(ExternalContentHomeworkSubmissionView, _super);

      function ExternalContentHomeworkSubmissionView() {
        this._triggerSubmit = __bind(this._triggerSubmit, this);
        this._triggerCancel = __bind(this._triggerCancel, this);
        this._relaunchTool = __bind(this._relaunchTool, this);        _ref = ExternalContentHomeworkSubmissionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalContentHomeworkSubmissionView.optionProperty('externalTool');

      ExternalContentHomeworkSubmissionView.prototype.events = {
        'click .relaunch-tool': '_relaunchTool',
        'click .submit_button': '_triggerSubmit',
        'click .cancel_button': '_triggerCancel'
      };

      ExternalContentHomeworkSubmissionView.prototype._relaunchTool = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return this.trigger('relaunchTool', this.externalTool, this.model);
      };

      ExternalContentHomeworkSubmissionView.prototype._triggerCancel = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return this.trigger('cancel', this.externalTool, this.model);
      };

      ExternalContentHomeworkSubmissionView.prototype._triggerSubmit = function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.model.set('comment', this.$el.find('.submission_comment').val());
        return this.submitHomework();
      };

      return ExternalContentHomeworkSubmissionView;

    })(Backbone.View);
  });

}).call(this);
