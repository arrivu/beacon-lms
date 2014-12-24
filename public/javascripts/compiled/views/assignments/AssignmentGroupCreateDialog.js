(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'Backbone', 'jquery', 'jst/assignments/AssignmentGroupCreateDialog', 'jquery.toJSON', 'jquery.instructure_forms', 'jquery.disableWhileLoading', 'compiled/jquery.rails_flash_notifications', 'compiled/jquery/fixDialogButtons'], function(I18n, _arg, $, template) {
    var AssignmentGroupCreateDialog, View, _ref;

    View = _arg.View;
    return AssignmentGroupCreateDialog = (function(_super) {
      __extends(AssignmentGroupCreateDialog, _super);

      function AssignmentGroupCreateDialog() {
        this.closeDialog = __bind(this.closeDialog, this);
        this.cancel = __bind(this.cancel, this);
        this.createAssignmentGroup = __bind(this.createAssignmentGroup, this);
        this.render = __bind(this.render, this);        _ref = AssignmentGroupCreateDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupCreateDialog.prototype.events = {
        submit: 'createAssignmentGroup',
        'click .cancel-button': 'cancel'
      };

      AssignmentGroupCreateDialog.prototype.tagName = 'div';

      AssignmentGroupCreateDialog.prototype.render = function() {
        this.$el.html(template());
        this.$el.dialog({
          title: I18n.t('titles.add_assignment_group', "Add Assignment Group"),
          width: 'auto',
          modal: true
        }).fixDialogButtons();
        return this;
      };

      AssignmentGroupCreateDialog.prototype.createAssignmentGroup = function(event) {
        var disablingDfd,
          _this = this;

        event.preventDefault();
        event.stopPropagation();
        disablingDfd = new $.Deferred();
        this.$el.disableWhileLoading(disablingDfd);
        return $.ajaxJSON("/courses/" + ENV.CONTEXT_ID + "/assignment_groups", 'POST', this.$el.find('form').toJSON(), function(data) {
          disablingDfd.resolve();
          _this.closeDialog();
          return _this.trigger('assignmentGroup:created', data.assignment_group);
        });
      };

      AssignmentGroupCreateDialog.prototype.cancel = function() {
        this.trigger('assignmentGroup:canceled');
        return this.closeDialog();
      };

      AssignmentGroupCreateDialog.prototype.closeDialog = function() {
        this.$el.dialog('close');
        return this.trigger('close');
      };

      return AssignmentGroupCreateDialog;

    })(View);
  });

}).call(this);
