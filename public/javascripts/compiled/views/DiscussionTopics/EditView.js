(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussion_topics', 'compiled/views/ValidatedFormView', 'compiled/views/assignments/AssignmentGroupSelector', 'compiled/views/assignments/GradingTypeSelector', 'compiled/views/assignments/GroupCategorySelector', 'compiled/views/assignments/PeerReviewsSelector', 'underscore', 'jst/DiscussionTopics/EditView', 'wikiSidebar', 'str/htmlEscape', 'compiled/models/DiscussionTopic', 'compiled/models/Announcement', 'compiled/models/Assignment', 'jquery', 'compiled/fn/preventDefault', 'compiled/views/calendar/MissingDateDialogView', 'compiled/tinymce', 'tinymce.editor_box', 'jquery.instructure_misc_helpers', 'compiled/jquery.rails_flash_notifications'], function(I18n, ValidatedFormView, AssignmentGroupSelector, GradingTypeSelector, GroupCategorySelector, PeerReviewsSelector, _, template, wikiSidebar, htmlEscape, DiscussionTopic, Announcement, Assignment, $, preventDefault, MissingDateDialog) {
    var EditView, _ref;

    return EditView = (function(_super) {
      __extends(EditView, _super);

      function EditView() {
        this._validatePointsPossible = __bind(this._validatePointsPossible, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this.submit = __bind(this.submit, this);
        this.updateAssignment = __bind(this.updateAssignment, this);
        this.renderPeerReviewOptions = __bind(this.renderPeerReviewOptions, this);
        this.renderGroupCategoryOptions = __bind(this.renderGroupCategoryOptions, this);
        this.renderGradingTypeOptions = __bind(this.renderGradingTypeOptions, this);
        this.renderAssignmentGroupOptions = __bind(this.renderAssignmentGroupOptions, this);
        this.render = __bind(this.render, this);
        this.isAnnouncement = __bind(this.isAnnouncement, this);
        this.isTopic = __bind(this.isTopic, this);        _ref = EditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditView.prototype.template = template;

      EditView.prototype.tagName = 'form';

      EditView.prototype.className = 'form-horizontal no-margin';

      EditView.prototype.dontRenableAfterSaveSuccess = true;

      EditView.prototype.els = {
        '#availability_options': '$availabilityOptions',
        '#use_for_grading': '$useForGrading'
      };

      EditView.prototype.events = _.extend(EditView.prototype.events, {
        'click .removeAttachment': 'removeAttachment',
        'change #use_for_grading': 'toggleAvailabilityOptions'
      });

      EditView.prototype.messages = {
        group_category_section_label: I18n.t('group_discussion_title', 'Group Discussion'),
        group_category_field_label: I18n.t('this_is_a_group_discussion', 'This is a Group Discussion'),
        group_locked_message: I18n.t('group_discussion_locked', 'Students have already submitted to this discussion, so group settings cannot be changed.')
      };

      EditView.optionProperty('permissions');

      EditView.prototype.initialize = function(options) {
        var _this = this;

        this.assignment = this.model.get("assignment");
        this.dueDateOverrideView = options.views['js-assignment-overrides'];
        this.model.on('sync', function() {
          _this.unwatchUnload();
          return window.location = _this.model.get('html_url');
        });
        return EditView.__super__.initialize.apply(this, arguments);
      };

      EditView.prototype.isTopic = function() {
        return this.model.constructor === DiscussionTopic;
      };

      EditView.prototype.isAnnouncement = function() {
        return this.model.constructor === Announcement;
      };

      EditView.prototype.toJSON = function() {
        var data, json;

        data = EditView.__super__.toJSON.apply(this, arguments);
        json = _.extend(data, this.options, {
          showAssignment: !!this.assignmentGroupCollection,
          useForGrading: this.model.get('assignment') != null,
          isTopic: this.isTopic(),
          isAnnouncement: this.isAnnouncement(),
          contextIsCourse: this.options.contextType === 'courses',
          canAttach: this.permissions.CAN_ATTACH,
          canModerate: this.permissions.CAN_MODERATE,
          isLargeRoster: (typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0) || false,
          threaded: data.discussion_type === "threaded",
          draftStateEnabled: ENV.DRAFT_STATE && ENV.DISCUSSION_TOPIC.PERMISSIONS.CAN_MODERATE,
          differentiatedAssignmentsEnabled: this.model.differentiatedAssignmentsEnabled()
        });
        json.assignment = json.assignment.toView();
        return json;
      };

      EditView.prototype.render = function() {
        var $textarea;

        EditView.__super__.render.apply(this, arguments);
        if (!wikiSidebar.inited) {
          wikiSidebar.init();
          $.scrollSidebar();
        }
        $textarea = this.$('textarea[name=message]').attr('id', _.uniqueId('discussion-topic-message'));
        _.defer(function() {
          $textarea.editorBox();
          return $('.rte_switch_views_link').click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            $textarea.editorBox('toggle');
            return $(event.currentTarget).siblings('.rte_switch_views_link').andSelf().toggle();
          });
        });
        wikiSidebar.attachToEditor($textarea);
        wikiSidebar.show();
        if (this.assignmentGroupCollection) {
          (this.assignmentGroupFetchDfd || (this.assignmentGroupFetchDfd = this.assignmentGroupCollection.fetch())).done(this.renderAssignmentGroupOptions);
        }
        _.defer(this.renderGradingTypeOptions);
        _.defer(this.renderGroupCategoryOptions);
        _.defer(this.renderPeerReviewOptions);
        _.defer(this.watchUnload);
        this.$(".datetime_field").datetime_field();
        return this;
      };

      EditView.prototype.renderAssignmentGroupOptions = function() {
        this.assignmentGroupSelector = new AssignmentGroupSelector({
          el: '#assignment_group_options',
          assignmentGroups: this.assignmentGroupCollection.toJSON(),
          parentModel: this.assignment,
          nested: true
        });
        return this.assignmentGroupSelector.render();
      };

      EditView.prototype.renderGradingTypeOptions = function() {
        this.gradingTypeSelector = new GradingTypeSelector({
          el: '#grading_type_options',
          parentModel: this.assignment,
          nested: true,
          preventNotGraded: true
        });
        return this.gradingTypeSelector.render();
      };

      EditView.prototype.renderGroupCategoryOptions = function() {
        this.groupCategorySelector = new GroupCategorySelector({
          el: '#group_category_options',
          parentModel: this.model,
          groupCategories: ENV.GROUP_CATEGORIES,
          hideGradeIndividually: true,
          sectionLabel: this.messages.group_category_section_label,
          fieldLabel: this.messages.group_category_field_label,
          lockedMessage: this.messages.group_locked_message
        });
        return this.groupCategorySelector.render();
      };

      EditView.prototype.renderPeerReviewOptions = function() {
        this.peerReviewSelector = new PeerReviewsSelector({
          el: '#peer_review_options',
          parentModel: this.assignment,
          nested: true
        });
        return this.peerReviewSelector.render();
      };

      EditView.prototype.getFormData = function() {
        var assign_data, data;

        data = EditView.__super__.getFormData.apply(this, arguments);
        data.title || (data.title = I18n.t('default_discussion_title', 'No Title'));
        data.discussion_type = data.threaded === '1' ? 'threaded' : 'side_comment';
        if (data.podcast_enabled !== '1') {
          data.podcast_has_student_posts = false;
        }
        if (!(typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0)) {
          data = this.groupCategorySelector.filterFormData(data);
        }
        assign_data = data.assignment;
        delete data.assignment;
        if ((assign_data != null ? assign_data.set_assignment : void 0) === '1') {
          data.set_assignment = '1';
          data.assignment = this.updateAssignment(assign_data);
          data.delayed_post_at = '';
          data.lock_at = '';
        } else {
          data.assignment = this.model.createAssignment({
            set_assignment: '0'
          });
        }
        this.saveOpts = {
          multipart: !!data.attachment,
          proxyAttachment: true
        };
        return data;
      };

      EditView.prototype.updateAssignment = function(data) {
        var assignment, defaultDate;

        this.dueDateOverrideView.updateOverrides();
        defaultDate = this.dueDateOverrideView.getDefaultDueDate();
        data.lock_at = (defaultDate != null ? defaultDate.get('lock_at') : void 0) || null;
        data.unlock_at = (defaultDate != null ? defaultDate.get('unlock_at') : void 0) || null;
        data.due_at = (defaultDate != null ? defaultDate.get('due_at') : void 0) || null;
        data.assignment_overrides = this.dueDateOverrideView.getOverrides();
        if (typeof ENV !== "undefined" && ENV !== null ? ENV.DIFFERENTIATED_ASSIGNMENTS_ENABLED : void 0) {
          data.only_visible_to_overrides = this.dueDateOverrideView.containsSectionsWithoutOverrides();
        }
        assignment = this.model.get('assignment');
        assignment || (assignment = this.model.createAssignment());
        return assignment.set(data);
      };

      EditView.prototype.removeAttachment = function() {
        this.model.set('attachments', []);
        this.$el.append('<input type="hidden" name="remove_attachment" >');
        this.$('.attachmentRow').remove();
        return this.$('[name="attachment"]').show();
      };

      EditView.prototype.submit = function(event) {
        var missingDateDialog, sections,
          _this = this;

        event.preventDefault();
        event.stopPropagation();
        if (this.dueDateOverrideView.containsSectionsWithoutOverrides()) {
          sections = this.dueDateOverrideView.sectionsWithoutOverrides();
          missingDateDialog = new MissingDateDialog({
            validationFn: function() {
              return sections;
            },
            labelFn: function(section) {
              return section.get('name');
            },
            success: function() {
              var _ref1;

              missingDateDialog.$dialog.dialog('close').remove();
              if ((_ref1 = _this.model.get('assignment')) != null) {
                _ref1.setNullDates();
              }
              return ValidatedFormView.prototype.submit.call(_this);
            }
          });
          missingDateDialog.cancel = function(e) {
            return missingDateDialog.$dialog.dialog('close').remove();
          };
          return missingDateDialog.render();
        } else {
          return EditView.__super__.submit.apply(this, arguments);
        }
      };

      EditView.prototype.fieldSelectors = _.extend({}, AssignmentGroupSelector.prototype.fieldSelectors, GroupCategorySelector.prototype.fieldSelectors);

      EditView.prototype.validateBeforeSave = function(data, errors) {
        var data2;

        if (data.delay_posting === "0") {
          data.delayed_post_at = null;
        }
        if (this.isTopic() && data.set_assignment === '1') {
          if (this.assignmentGroupSelector != null) {
            errors = this.assignmentGroupSelector.validateBeforeSave(data, errors);
          }
          if (!(typeof ENV !== "undefined" && ENV !== null ? ENV.IS_LARGE_ROSTER : void 0)) {
            errors = this.groupCategorySelector.validateBeforeSave(data, errors);
          }
          data2 = {
            assignment_overrides: this.dueDateOverrideView.getAllDates(data.assignment.toJSON())
          };
          errors = this.dueDateOverrideView.validateBeforeSave(data2, errors);
          errors = this._validatePointsPossible(data, errors);
        } else {
          this.model.set('assignment', this.model.createAssignment({
            set_assignment: false
          }));
        }
        return errors;
      };

      EditView.prototype._validatePointsPossible = function(data, errors) {
        var assign, frozenPoints;

        assign = data.assignment;
        frozenPoints = _.contains(assign.frozenAttributes(), "points_possible");
        if (!frozenPoints && assign.pointsPossible() && isNaN(parseFloat(assign.pointsPossible()))) {
          errors["assignment[points_possible]"] = [
            {
              message: I18n.t('points_possible_number', 'Points possible must be a number')
            }
          ];
        }
        return errors;
      };

      EditView.prototype.showErrors = function(errors) {
        delete errors.assignmentOverrides;
        return EditView.__super__.showErrors.call(this, errors);
      };

      EditView.prototype.toggleAvailabilityOptions = function() {
        if (this.$useForGrading.is(':checked')) {
          return this.$availabilityOptions.hide();
        } else {
          return this.$availabilityOptions.show();
        }
      };

      return EditView;

    })(ValidatedFormView);
  });

}).call(this);
