(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/models/Assignment', 'compiled/views/DialogFormView', 'jst/assignments/CreateAssignment', 'jst/EmptyDialogFormWrapper', 'i18n!assignments', 'jquery', 'jquery.instructure_date_and_time'], function(_, Assignment, DialogFormView, template, wrapper, I18n, $) {
    var CreateAssignmentView, _ref;

    return CreateAssignmentView = (function(_super) {
      __extends(CreateAssignmentView, _super);

      function CreateAssignmentView() {
        this._validatePointsPossible = __bind(this._validatePointsPossible, this);
        this.getFormData = __bind(this.getFormData, this);
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);        _ref = CreateAssignmentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CreateAssignmentView.prototype.defaults = {
        width: 500,
        height: 350
      };

      CreateAssignmentView.prototype.events = _.extend({}, CreateAssignmentView.prototype.events, {
        'click .dialog_closer': 'close',
        'click .more_options': 'moreOptions'
      });

      CreateAssignmentView.prototype.template = template;

      CreateAssignmentView.prototype.wrapperTemplate = wrapper;

      CreateAssignmentView.optionProperty('assignmentGroup');

      CreateAssignmentView.prototype.initialize = function() {
        var _ref1;

        CreateAssignmentView.__super__.initialize.apply(this, arguments);
        if ((_ref1 = this.model) == null) {
          this.model = this.generateNewAssignment();
        }
        return this.on("close", function() {
          return this.$el[0].reset();
        });
      };

      CreateAssignmentView.prototype.onSaveSuccess = function() {
        CreateAssignmentView.__super__.onSaveSuccess.apply(this, arguments);
        if (this.assignmentGroup) {
          this.assignmentGroup.get('assignments').add(this.model);
          return this.model = this.generateNewAssignment();
        }
      };

      CreateAssignmentView.prototype.getFormData = function() {
        var data, unfudged;

        data = CreateAssignmentView.__super__.getFormData.apply(this, arguments);
        unfudged = $.unfudgeDateForProfileTimezone(data.due_at);
        if (unfudged != null) {
          data.due_at = unfudged.toISOString();
        }
        return data;
      };

      CreateAssignmentView.prototype.moreOptions = function() {
        var data, dataParams, url, valid;

        valid = ['submission_types', 'name', 'due_at', 'points_possible', 'assignment_group_id'];
        data = this.getFormData();
        if (this.assignmentGroup) {
          data.assignment_group_id = this.assignmentGroup.get('id');
        }
        dataParams = {};
        _.each(data, function(value, key) {
          if (value && _.contains(valid, key) && value !== "") {
            return dataParams[key] = value;
          }
        });
        url = this.assignmentGroup ? this.newAssignmentUrl() : this.model.htmlEditUrl();
        return this.redirectTo("" + url + "?" + ($.param(dataParams)));
      };

      CreateAssignmentView.prototype.redirectTo = function(url) {
        return window.location.href = url;
      };

      CreateAssignmentView.prototype.generateNewAssignment = function() {
        var assign;

        assign = new Assignment;
        if (this.assignmentGroup) {
          assign.assignmentGroupId(this.assignmentGroup.id);
        }
        return assign;
      };

      CreateAssignmentView.prototype.toJSON = function() {
        var json, uniqLabel;

        json = this.model.toView();
        uniqLabel = this.assignmentGroup ? "ag_" + (this.assignmentGroup.get('id')) : "assign_" + (this.model.get('id'));
        return _.extend(json, {
          canChooseType: this.assignmentGroup != null,
          uniqLabel: uniqLabel
        });
      };

      CreateAssignmentView.prototype.openAgain = function() {
        var timeField;

        CreateAssignmentView.__super__.openAgain.apply(this, arguments);
        timeField = this.$el.find(".datetime_field");
        if (this.model.multipleDueDates()) {
          return timeField.tooltip({
            position: {
              my: 'center bottom',
              at: 'center top-10',
              collision: 'fit fit'
            },
            tooltipClass: 'center bottom vertical',
            content: function() {
              return $($(this).data('tooltipSelector')).html();
            }
          });
        } else {
          if (!timeField.hasClass("hasDatepicker")) {
            return timeField.datetime_field();
          }
        }
      };

      CreateAssignmentView.prototype.newAssignmentUrl = function() {
        return ENV.URLS.new_assignment_url;
      };

      CreateAssignmentView.prototype.validateBeforeSave = function(data, errors) {
        errors = this._validateTitle(data, errors);
        errors = this._validatePointsPossible(data, errors);
        return errors;
      };

      CreateAssignmentView.prototype._validateTitle = function(data, errors) {
        var frozenTitle;

        frozenTitle = _.contains(this.model.frozenAttributes(), "title");
        if (!frozenTitle && (!data.name || $.trim(data.name.toString()).length === 0)) {
          errors["name"] = [
            {
              message: I18n.t('name_is_required', 'Name is required!')
            }
          ];
        }
        if ($.trim(data.name.toString()).length > 255) {
          errors["name"] = [
            {
              message: I18n.t('name_too_long', 'Name is too long')
            }
          ];
        }
        return errors;
      };

      CreateAssignmentView.prototype._validatePointsPossible = function(data, errors) {
        var frozenPoints;

        frozenPoints = _.contains(this.model.frozenAttributes(), "points_possible");
        if (!frozenPoints && data.points_possible && isNaN(parseFloat(data.points_possible))) {
          errors["points_possible"] = [
            {
              message: I18n.t('points_possible_number', 'Points possible must be a number')
            }
          ];
        }
        return errors;
      };

      return CreateAssignmentView;

    })(DialogFormView);
  });

}).call(this);
