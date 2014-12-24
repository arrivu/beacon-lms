(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'Backbone', 'jquery', 'underscore', 'compiled/views/PublishIconView', 'compiled/views/assignments/DateDueColumnView', 'compiled/views/assignments/DateAvailableColumnView', 'compiled/views/assignments/CreateAssignmentView', 'compiled/views/MoveDialogView', 'compiled/fn/preventDefault', 'jst/assignments/AssignmentListItem', 'jst/assignments/_assignmentListItemScore', 'compiled/util/round', 'compiled/views/assignments/AssignmentKeyBindingsMixin', 'jqueryui/tooltip', 'compiled/behaviors/tooltip'], function(I18n, Backbone, $, _, PublishIconView, DateDueColumnView, DateAvailableColumnView, CreateAssignmentView, MoveDialogView, preventDefault, template, scoreTemplate, round, AssignmentKeyBindingsMixin) {
    var AssignmentListItemView, _ref;

    return AssignmentListItemView = (function(_super) {
      __extends(AssignmentListItemView, _super);

      function AssignmentListItemView() {
        this.focusOnFirstGroup = __bind(this.focusOnFirstGroup, this);
        this.focusOnGroupByID = __bind(this.focusOnGroupByID, this);
        this.focusOnGroup = __bind(this.focusOnGroup, this);
        this.focusOnAssignment = __bind(this.focusOnAssignment, this);
        this.previousAssignmentInGroup = __bind(this.previousAssignmentInGroup, this);
        this.nextAssignmentInGroup = __bind(this.nextAssignmentInGroup, this);
        this.nextVisibleGroup = __bind(this.nextVisibleGroup, this);
        this.visibleAssignments = __bind(this.visibleAssignments, this);
        this.assignmentGroupView = __bind(this.assignmentGroupView, this);
        this.showAssignment = __bind(this.showAssignment, this);
        this.addItem = __bind(this.addItem, this);
        this.deleteItem = __bind(this.deleteItem, this);
        this.editItem = __bind(this.editItem, this);
        this.goToPrevItem = __bind(this.goToPrevItem, this);
        this.goToNextItem = __bind(this.goToNextItem, this);
        this.updateScore = __bind(this.updateScore, this);
        this.onDelete = __bind(this.onDelete, this);
        this.createModuleToolTip = __bind(this.createModuleToolTip, this);
        this.toggleHidden = __bind(this.toggleHidden, this);
        this.updatePublishState = __bind(this.updatePublishState, this);        _ref = AssignmentListItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentListItemView.mixin(AssignmentKeyBindingsMixin);

      AssignmentListItemView.prototype.tagName = "li";

      AssignmentListItemView.prototype.className = "assignment";

      AssignmentListItemView.prototype.template = template;

      AssignmentListItemView.child('publishIconView', '[data-view=publish-icon]');

      AssignmentListItemView.child('dateDueColumnView', '[data-view=date-due]');

      AssignmentListItemView.child('dateAvailableColumnView', '[data-view=date-available]');

      AssignmentListItemView.child('editAssignmentView', '[data-view=edit-assignment]');

      AssignmentListItemView.child('moveAssignmentView', '[data-view=moveAssignment]');

      AssignmentListItemView.prototype.els = {
        '.edit_assignment': '$editAssignmentButton',
        '.move_assignment': '$moveAssignmentButton'
      };

      AssignmentListItemView.prototype.events = {
        'click .delete_assignment': 'onDelete',
        'click .tooltip_link': preventDefault(function() {}),
        'keydown': 'handleKeys'
      };

      AssignmentListItemView.prototype.messages = {
        confirm: I18n.t('confirms.delete_assignment', 'Are you sure you want to delete this assignment?'),
        ag_move_label: I18n.beforeLabel('assignment_group_move_label', 'Assignment Group')
      };

      AssignmentListItemView.prototype.initialize = function() {
        var attrs, observe;

        AssignmentListItemView.__super__.initialize.apply(this, arguments);
        this.initializeChildViews();
        this.model.assignmentView = this;
        this.model.on('change:hidden', this.toggleHidden);
        if (this.canManage()) {
          this.model.on('change:published', this.updatePublishState);
          attrs = ["name", "points_possible", "due_at", "lock_at", "unlock_at", "modules"];
          observe = _.map(attrs, function(attr) {
            return "change:" + attr;
          }).join(" ");
          this.model.on(observe, this.render);
        }
        return this.model.on('change:submission', this.updateScore);
      };

      AssignmentListItemView.prototype.initializeChildViews = function() {
        var _ref1;

        this.publishIconView = false;
        this.editAssignmentView = false;
        this.dateAvailableColumnView = false;
        this.moveAssignmentView = false;
        if (this.canManage()) {
          this.publishIconView = new PublishIconView({
            model: this.model
          });
          this.editAssignmentView = new CreateAssignmentView({
            model: this.model
          });
          this.moveAssignmentView = new MoveDialogView({
            model: this.model,
            nested: true,
            parentCollection: (_ref1 = this.model.collection.view) != null ? _ref1.parentCollection : void 0,
            parentLabelText: this.messages.ag_move_label,
            parentKey: 'assignment_group_id',
            childKey: 'assignments',
            closeTarget: this.$el.find('a[id*=manage_link]'),
            saveURL: function() {
              return "" + ENV.URLS.assignment_sort_base_url + "/" + (this.parentListView.value()) + "/reorder";
            }
          });
        }
        this.dateDueColumnView = new DateDueColumnView({
          model: this.model
        });
        return this.dateAvailableColumnView = new DateAvailableColumnView({
          model: this.model
        });
      };

      AssignmentListItemView.prototype.updatePublishState = function() {
        return this.$('.ig-row').toggleClass('ig-published', this.model.get('published'));
      };

      AssignmentListItemView.prototype.render = function() {
        this.toggleHidden(this.model, this.model.get('hidden'));
        if (this.publishIconView) {
          this.publishIconView.remove();
        }
        if (this.editAssignmentView) {
          this.editAssignmentView.remove();
        }
        if (this.dateDueColumnView) {
          this.dateDueColumnView.remove();
        }
        if (this.dateAvailableColumnView) {
          this.dateAvailableColumnView.remove();
        }
        if (this.moveAssignmentView) {
          this.moveAssignmentView.remove();
        }
        AssignmentListItemView.__super__.render.apply(this, arguments);
        if (this.model) {
          return this.model.view = this;
        }
      };

      AssignmentListItemView.prototype.afterRender = function() {
        this.createModuleToolTip();
        if (this.editAssignmentView) {
          this.editAssignmentView.hide();
          this.editAssignmentView.setTrigger(this.$editAssignmentButton);
        }
        if (this.moveAssignmentView) {
          this.moveAssignmentView.hide();
          this.moveAssignmentView.setTrigger(this.$moveAssignmentButton);
        }
        if (!(this.canManage() || !this.userIsStudent())) {
          return this.updateScore();
        }
      };

      AssignmentListItemView.prototype.toggleHidden = function(model, hidden) {
        this.$el.toggleClass('hidden', hidden);
        return this.$el.toggleClass('search_show', !hidden);
      };

      AssignmentListItemView.prototype.createModuleToolTip = function() {
        var link;

        link = this.$el.find('.tooltip_link');
        if (link.length > 0) {
          return link.tooltip({
            position: {
              my: 'center bottom',
              at: 'center top-10',
              collision: 'fit fit'
            },
            tooltipClass: 'center bottom vertical',
            content: function() {
              return $(link.data('tooltipSelector')).html();
            }
          });
        }
      };

      AssignmentListItemView.prototype.toJSON = function() {
        var data, has_modules, joinedNames, moduleName, modules, _ref1, _ref2,
          _this = this;

        data = this.model.toView();
        data.canManage = this.canManage();
        if (!data.canManage) {
          data = this._setJSONForGrade(data);
        }
        data.canMove = ((_ref1 = this.model.collection.view) != null ? (_ref2 = _ref1.parentCollection) != null ? _ref2.length : void 0 : void 0) > 1 || this.model.collection.length > 1;
        if (data.canManage) {
          data.spanWidth = 'span3';
          data.alignTextClass = '';
        } else {
          data.spanWidth = 'span4';
          data.alignTextClass = 'align-right';
        }
        if (this.model.isQuiz()) {
          data.menu_tools = ENV.quiz_menu_tools;
          _.each(data.menu_tools, function(tool) {
            return tool.url = tool.base_url + ("&quizzes[]=" + (_this.model.get("quiz_id")));
          });
        } else if (this.model.isDiscussionTopic()) {
          data.menu_tools = ENV.discussion_topic_menu_tools;
          _.each(data.menu_tools, function(tool) {
            return tool.url = tool.base_url + ("&discussion_topics[]=" + (_this.model.get("discussion_topic_id")));
          });
        } else {
          data.menu_tools = ENV.assignment_menu_tools;
          _.each(data.menu_tools, function(tool) {
            return tool.url = tool.base_url + ("&assignments[]=" + (_this.model.get("id")));
          });
        }
        if (modules = this.model.get('modules')) {
          moduleName = modules[0];
          has_modules = modules.length > 0;
          joinedNames = modules.join(",");
          return _.extend(data, {
            modules: modules,
            module_count: modules.length,
            module_name: moduleName,
            has_modules: has_modules,
            joined_names: joinedNames
          });
        } else {
          return data;
        }
      };

      AssignmentListItemView.prototype.onDelete = function(e) {
        var id;

        e.preventDefault();
        if (!confirm(this.messages.confirm)) {
          return this.$el.find('a[id*=manage_link]').focus();
        }
        if (this.previousAssignmentInGroup() != null) {
          this.focusOnAssignment(this.previousAssignmentInGroup());
          return this["delete"]();
        } else {
          id = this.model.attributes.assignment_group_id;
          this["delete"]();
          return this.focusOnGroupByID(id);
        }
      };

      AssignmentListItemView.prototype["delete"] = function() {
        this.model.destroy();
        return this.$el.remove();
      };

      AssignmentListItemView.prototype.canManage = function() {
        return ENV.PERMISSIONS.manage;
      };

      AssignmentListItemView.prototype.gradeStrings = function(grade) {
        var pass_fail_map;

        pass_fail_map = {
          incomplete: I18n.t('incomplete', 'Incomplete'),
          complete: I18n.t('complete', 'Complete')
        };
        grade = pass_fail_map[grade] || grade;
        return {
          'percent': {
            nonscreenreader: I18n.t('grade_percent', '%{grade}%', {
              grade: grade
            }),
            screenreader: I18n.t('grade_percent_screenreader', 'Grade: %{grade}%', {
              grade: grade
            })
          },
          'pass_fail': {
            nonscreenreader: "" + grade,
            screenreader: I18n.t('grade_pass_fail_screenreader', 'Grade: %{grade}', {
              grade: grade
            })
          },
          'letter_grade': {
            nonscreenreader: "" + grade,
            screenreader: I18n.t('grade_letter_grade_screenreader', 'Grade: %{grade}', {
              grade: grade
            })
          },
          'gpa_scale': {
            nonscreenreader: "" + grade,
            screenreader: I18n.t('grade_gpa_scale_screenreader', 'Grade: %{grade}', {
              grade: grade
            })
          }
        };
      };

      AssignmentListItemView.prototype._setJSONForGrade = function(json) {
        var grade, gradeString, pointsPossible, score, submission, submissionJSON;

        if (submission = this.model.get('submission')) {
          submissionJSON = submission.present ? submission.present() : submission.toJSON();
          score = submission.get('score');
          if (typeof score === 'number' && !isNaN(score)) {
            submissionJSON.score = round(score, round.DEFAULT);
          }
          json.submission = submissionJSON;
          grade = submission.get('grade');
          gradeString = this.gradeStrings(grade)[json.gradingType];
          json.submission.gradeDisplay = gradeString != null ? gradeString.nonscreenreader : void 0;
          json.submission.gradeDisplayForScreenreader = gradeString != null ? gradeString.screenreader : void 0;
        }
        pointsPossible = json.pointsPossible;
        if (typeof pointsPossible === 'number' && !isNaN(pointsPossible)) {
          json.pointsPossible = round(pointsPossible, round.DEFAULT);
          if (json.submission != null) {
            json.submission.pointsPossible = json.pointsPossible;
          }
        }
        if (json.submission != null) {
          json.submission.gradingType = json.gradingType;
        }
        if (json.gradingType === 'not_graded') {
          json.hideGrade = true;
        }
        return json;
      };

      AssignmentListItemView.prototype.updateScore = function() {
        var json;

        json = this.model.toView();
        if (!this.canManage()) {
          json = this._setJSONForGrade(json);
        }
        return this.$('.js-score').html(scoreTemplate(json));
      };

      AssignmentListItemView.prototype.userIsStudent = function() {
        return _.include(ENV.current_user_roles, "student");
      };

      AssignmentListItemView.prototype.goToNextItem = function() {
        if (this.nextAssignmentInGroup() != null) {
          return this.focusOnAssignment(this.nextAssignmentInGroup());
        } else if (this.nextVisibleGroup() != null) {
          return this.focusOnGroup(this.nextVisibleGroup());
        } else {
          return this.focusOnFirstGroup();
        }
      };

      AssignmentListItemView.prototype.goToPrevItem = function() {
        if (this.previousAssignmentInGroup() != null) {
          return this.focusOnAssignment(this.previousAssignmentInGroup());
        } else {
          return this.focusOnGroupByID(this.model.attributes.assignment_group_id);
        }
      };

      AssignmentListItemView.prototype.editItem = function() {
        return this.$("#assignment_" + this.model.id + "_settings_edit_item").click();
      };

      AssignmentListItemView.prototype.deleteItem = function() {
        return this.$("#assignment_" + this.model.id + "_settings_delete_item").click();
      };

      AssignmentListItemView.prototype.addItem = function() {
        var group_id;

        group_id = this.model.attributes.assignment_group_id;
        return $(".add_assignment", "#assignment_group_" + group_id).click();
      };

      AssignmentListItemView.prototype.showAssignment = function() {
        return $(".ig-title", "#assignment_" + this.model.id)[0].click();
      };

      AssignmentListItemView.prototype.assignmentGroupView = function() {
        return this.model.collection.view;
      };

      AssignmentListItemView.prototype.visibleAssignments = function() {
        return this.assignmentGroupView().visibleAssignments();
      };

      AssignmentListItemView.prototype.nextVisibleGroup = function() {
        return this.assignmentGroupView().nextGroup();
      };

      AssignmentListItemView.prototype.nextAssignmentInGroup = function() {
        var current_assignment_index;

        current_assignment_index = this.visibleAssignments().indexOf(this.model);
        return this.visibleAssignments()[current_assignment_index + 1];
      };

      AssignmentListItemView.prototype.previousAssignmentInGroup = function() {
        var current_assignment_index;

        current_assignment_index = this.visibleAssignments().indexOf(this.model);
        return this.visibleAssignments()[current_assignment_index - 1];
      };

      AssignmentListItemView.prototype.focusOnAssignment = function(assignment) {
        return $("#assignment_" + assignment.id).attr("tabindex", -1).focus();
      };

      AssignmentListItemView.prototype.focusOnGroup = function(group) {
        return $("#assignment_group_" + group.attributes.id).attr("tabindex", -1).focus();
      };

      AssignmentListItemView.prototype.focusOnGroupByID = function(group_id) {
        return $("#assignment_group_" + group_id).attr("tabindex", -1).focus();
      };

      AssignmentListItemView.prototype.focusOnFirstGroup = function() {
        return $(".assignment_group").filter(":visible").first().attr("tabindex", -1).focus();
      };

      return AssignmentListItemView;

    })(Backbone.View);
  });

}).call(this);
