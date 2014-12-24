(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/backbone-ext/DefaultUrlMixin', 'compiled/models/TurnitinSettings', 'compiled/models/DateGroup', 'compiled/collections/AssignmentOverrideCollection', 'compiled/collections/DateGroupCollection', 'i18n!assignments'], function($, _, _arg, DefaultUrlMixin, TurnitinSettings, DateGroup, AssignmentOverrideCollection, DateGroupCollection, I18n) {
    var Assignment, Model, _ref;

    Model = _arg.Model;
    return Assignment = (function(_super) {
      __extends(Assignment, _super);

      function Assignment() {
        this.setNullDates = __bind(this.setNullDates, this);
        this._filterFrozenAttributes = __bind(this._filterFrozenAttributes, this);
        this._getAssignmentType = __bind(this._getAssignmentType, this);
        this._hasOnlyType = __bind(this._hasOnlyType, this);
        this._submissionTypes = __bind(this._submissionTypes, this);
        this.toView = __bind(this.toView, this);
        this.singleSectionDueDate = __bind(this.singleSectionDueDate, this);
        this.allDates = __bind(this.allDates, this);
        this.multipleDueDates = __bind(this.multipleDueDates, this);
        this.defaultDates = __bind(this.defaultDates, this);
        this.postToSISEnabled = __bind(this.postToSISEnabled, this);
        this.labelId = __bind(this.labelId, this);
        this.htmlEditUrl = __bind(this.htmlEditUrl, this);
        this.htmlUrl = __bind(this.htmlUrl, this);
        this.objectType = __bind(this.objectType, this);
        this.iconType = __bind(this.iconType, this);
        this.published = __bind(this.published, this);
        this.isGpaScaled = __bind(this.isGpaScaled, this);
        this.isLetterGraded = __bind(this.isLetterGraded, this);
        this.isSimple = __bind(this.isSimple, this);
        this.externalToolNewTab = __bind(this.externalToolNewTab, this);
        this.externalToolUrl = __bind(this.externalToolUrl, this);
        this.gradingStandardId = __bind(this.gradingStandardId, this);
        this.groupCategoryId = __bind(this.groupCategoryId, this);
        this.turnitinEnabled = __bind(this.turnitinEnabled, this);
        this.gradeGroupStudentsIndividually = __bind(this.gradeGroupStudentsIndividually, this);
        this.turnitinAvailable = __bind(this.turnitinAvailable, this);
        this.allowedExtensions = __bind(this.allowedExtensions, this);
        this.restrictFileExtensions = __bind(this.restrictFileExtensions, this);
        this.notifyOfUpdate = __bind(this.notifyOfUpdate, this);
        this.peerReviewsAssignAt = __bind(this.peerReviewsAssignAt, this);
        this.peerReviewCount = __bind(this.peerReviewCount, this);
        this.automaticPeerReviews = __bind(this.automaticPeerReviews, this);
        this.peerReviews = __bind(this.peerReviews, this);
        this.isOnlineSubmission = __bind(this.isOnlineSubmission, this);
        this.acceptsOnlineTextEntries = __bind(this.acceptsOnlineTextEntries, this);
        this.acceptsMediaRecording = __bind(this.acceptsMediaRecording, this);
        this.acceptsOnlineURL = __bind(this.acceptsOnlineURL, this);
        this.acceptsOnlineUpload = __bind(this.acceptsOnlineUpload, this);
        this.withoutGradedSubmission = __bind(this.withoutGradedSubmission, this);
        this.allowedToSubmit = __bind(this.allowedToSubmit, this);
        this.expectsSubmission = __bind(this.expectsSubmission, this);
        this.submissionType = __bind(this.submissionType, this);
        this.submissionTypes = __bind(this.submissionTypes, this);
        this.courseID = __bind(this.courseID, this);
        this.gradingType = __bind(this.gradingType, this);
        this.frozenAttributes = __bind(this.frozenAttributes, this);
        this.frozen = __bind(this.frozen, this);
        this.freezeOnCopy = __bind(this.freezeOnCopy, this);
        this.canFreeze = __bind(this.canFreeze, this);
        this.assignmentGroupId = __bind(this.assignmentGroupId, this);
        this.pointsPossible = __bind(this.pointsPossible, this);
        this.postToSIS = __bind(this.postToSIS, this);
        this.name = __bind(this.name, this);
        this.description = __bind(this.description, this);
        this.lockAt = __bind(this.lockAt, this);
        this.unlockAt = __bind(this.unlockAt, this);
        this.dueAt = __bind(this.dueAt, this);
        this.assignmentType = __bind(this.assignmentType, this);
        this.isAssignment = __bind(this.isAssignment, this);
        this.isNotGraded = __bind(this.isNotGraded, this);
        this.isExternalTool = __bind(this.isExternalTool, this);
        this.isDiscussionTopic = __bind(this.isDiscussionTopic, this);
        this.isQuiz = __bind(this.isQuiz, this);        _ref = Assignment.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Assignment.mixin(DefaultUrlMixin);

      Assignment.prototype.resourceName = 'assignments';

      Assignment.prototype.urlRoot = function() {
        return this._defaultUrl();
      };

      Assignment.prototype.defaults = {
        "publishable": true,
        "hidden": false,
        "unpublishable": true
      };

      Assignment.prototype.initialize = function() {
        var all_dates, overrides, turnitin_settings;

        if ((overrides = this.get('assignment_overrides')) != null) {
          this.set('assignment_overrides', new AssignmentOverrideCollection(overrides));
        }
        if ((turnitin_settings = this.get('turnitin_settings')) != null) {
          this.set('turnitin_settings', new TurnitinSettings(turnitin_settings), {
            silent: true
          });
        }
        if ((all_dates = this.get('all_dates')) != null) {
          this.set('all_dates', new DateGroupCollection(all_dates));
        }
        if (this.postToSISEnabled()) {
          if (!(this.get('post_to_sis') === true || this.get('post_to_sis') === false)) {
            return this.set('post_to_sis', true);
          }
        }
      };

      Assignment.prototype.isQuiz = function() {
        return this._hasOnlyType('online_quiz');
      };

      Assignment.prototype.isDiscussionTopic = function() {
        return this._hasOnlyType('discussion_topic');
      };

      Assignment.prototype.isExternalTool = function() {
        return this._hasOnlyType('external_tool');
      };

      Assignment.prototype.isNotGraded = function() {
        return this._hasOnlyType('not_graded');
      };

      Assignment.prototype.isAssignment = function() {
        return !_.include(this._submissionTypes(), 'online_quiz', 'discussion_topic', 'not_graded', 'external_tool');
      };

      Assignment.prototype.assignmentType = function(type) {
        if (!(arguments.length > 0)) {
          return this._getAssignmentType();
        }
        if (type === 'assignment') {
          return this.set('submission_types', ['none']);
        } else {
          return this.set('submission_types', [type]);
        }
      };

      Assignment.prototype.dueAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('due_at');
        }
        return this.set('due_at', date);
      };

      Assignment.prototype.unlockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('unlock_at');
        }
        return this.set('unlock_at', date);
      };

      Assignment.prototype.lockAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('lock_at');
        }
        return this.set('lock_at', date);
      };

      Assignment.prototype.description = function(newDescription) {
        if (!(arguments.length > 0)) {
          return this.get('description');
        }
        return this.set('description', newDescription);
      };

      Assignment.prototype.name = function(newName) {
        if (!(arguments.length > 0)) {
          return this.get('name');
        }
        return this.set('name', newName);
      };

      Assignment.prototype.postToSIS = function() {
        if (!(arguments.length > 0)) {
          return this.get('post_to_sis');
        }
      };

      Assignment.prototype.pointsPossible = function(points) {
        if (!(arguments.length > 0)) {
          return this.get('points_possible') || 0;
        }
        return this.set('points_possible', points);
      };

      Assignment.prototype.assignmentGroupId = function(assignment_group_id) {
        if (!(arguments.length > 0)) {
          return this.get('assignment_group_id');
        }
        return this.set('assignment_group_id', assignment_group_id);
      };

      Assignment.prototype.canFreeze = function() {
        return (this.get('frozen_attributes') != null) && !this.frozen();
      };

      Assignment.prototype.freezeOnCopy = function() {
        return this.get('freeze_on_copy');
      };

      Assignment.prototype.frozen = function() {
        return this.get('frozen');
      };

      Assignment.prototype.frozenAttributes = function() {
        return this.get('frozen_attributes') || [];
      };

      Assignment.prototype.gradingType = function(gradingType) {
        if (!gradingType) {
          return this.get('grading_type') || 'points';
        }
        return this.set('grading_type', gradingType);
      };

      Assignment.prototype.courseID = function() {
        return this.get('course_id');
      };

      Assignment.prototype.submissionTypes = function(submissionTypes) {
        if (!(arguments.length > 0)) {
          return this._submissionTypes();
        }
        return this.set('submission_types', submissionTypes);
      };

      Assignment.prototype.submissionType = function() {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        if (_.include(submissionTypes, 'none') || submissionTypes.length === 0) {
          return 'none';
        } else if (_.include(submissionTypes, 'on_paper')) {
          return 'on_paper';
        } else if (_.include(submissionTypes, 'external_tool')) {
          return 'external_tool';
        } else {
          return 'online';
        }
      };

      Assignment.prototype.expectsSubmission = function() {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        return submissionTypes.length > 0 && !_.include(submissionTypes, "") && !_.include(submissionTypes, 'none') && !_.include(submissionTypes, 'not_graded') && !_.include(submissionTypes, 'on_paper') && !_.include(submissionTypes, 'external_tool');
      };

      Assignment.prototype.allowedToSubmit = function() {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        return this.expectsSubmission() && !this.get('locked_for_user') && !_.include(submissionTypes, 'online_quiz') && !_.include(submissionTypes, 'attendance');
      };

      Assignment.prototype.withoutGradedSubmission = function() {
        var sub;

        sub = this.get('submission');
        return (sub == null) || sub.withoutGradedSubmission();
      };

      Assignment.prototype.acceptsOnlineUpload = function() {
        return !!_.include(this._submissionTypes(), 'online_upload');
      };

      Assignment.prototype.acceptsOnlineURL = function() {
        return !!_.include(this._submissionTypes(), 'online_url');
      };

      Assignment.prototype.acceptsMediaRecording = function() {
        return !!_.include(this._submissionTypes(), 'media_recording');
      };

      Assignment.prototype.acceptsOnlineTextEntries = function() {
        return !!_.include(this._submissionTypes(), 'online_text_entry');
      };

      Assignment.prototype.isOnlineSubmission = function() {
        return _.any(this._submissionTypes(), function(thing) {
          return thing === 'online' || thing === 'online_text_entry' || thing === 'media_recording' || thing === 'online_url' || thing === 'online_upload';
        });
      };

      Assignment.prototype.peerReviews = function(peerReviewBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('peer_reviews');
        }
        return this.set('peer_reviews', peerReviewBoolean);
      };

      Assignment.prototype.automaticPeerReviews = function(autoPeerReviewBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('automatic_peer_reviews');
        }
        return this.set('automatic_peer_reviews', autoPeerReviewBoolean);
      };

      Assignment.prototype.peerReviewCount = function(peerReviewCount) {
        if (!(arguments.length > 0)) {
          return this.get('peer_review_count') || 0;
        }
        return this.set('peer_review_count', peerReviewCount);
      };

      Assignment.prototype.peerReviewsAssignAt = function(date) {
        if (!(arguments.length > 0)) {
          return this.get('peer_reviews_assign_at') || null;
        }
        return this.set('peer_reviews_assign_at', date);
      };

      Assignment.prototype.notifyOfUpdate = function(notifyOfUpdateBoolean) {
        if (!(arguments.length > 0)) {
          return this.get('notify_of_update');
        }
        return this.set('notify_of_update', notifyOfUpdateBoolean);
      };

      Assignment.prototype.restrictFileExtensions = function() {
        return !!this.allowedExtensions();
      };

      Assignment.prototype.allowedExtensions = function(extensionsList) {
        if (!(arguments.length > 0)) {
          return this.get('allowed_extensions');
        }
        return this.set('allowed_extensions', extensionsList);
      };

      Assignment.prototype.turnitinAvailable = function() {
        return typeof this.get('turnitin_enabled') !== 'undefined';
      };

      Assignment.prototype.gradeGroupStudentsIndividually = function(setting) {
        if (!(arguments.length > 0)) {
          return this.get('grade_group_students_individually');
        }
        return this.set('grade_group_students_individually', setting);
      };

      Assignment.prototype.turnitinEnabled = function(setting) {
        if (arguments.length === 0) {
          if (this.get('turnitin_enabled') === void 0) {
            return false;
          } else {
            return !!this.get('turnitin_enabled');
          }
        } else {
          return this.set('turnitin_enabled', setting);
        }
      };

      Assignment.prototype.groupCategoryId = function(id) {
        if (!(arguments.length > 0)) {
          return this.get('group_category_id');
        }
        return this.set('group_category_id', id);
      };

      Assignment.prototype.canGroup = function() {
        return !this.get('has_submitted_submissions');
      };

      Assignment.prototype.differentiatedAssignmentsEnabled = function() {
        return (typeof ENV !== "undefined" && ENV !== null ? ENV.DIFFERENTIATED_ASSIGNMENTS_ENABLED : void 0) || false;
      };

      Assignment.prototype.gradingStandardId = function(id) {
        if (!(arguments.length > 0)) {
          return this.get('grading_standard_id');
        }
        return this.set('grading_standard_id', id);
      };

      Assignment.prototype.externalToolUrl = function(url) {
        var tagAttributes;

        tagAttributes = this.get('external_tool_tag_attributes') || {};
        if (!(arguments.length > 0)) {
          return tagAttributes.url;
        }
        tagAttributes.url = url;
        return this.set('external_tool_tag_attributes', tagAttributes);
      };

      Assignment.prototype.externalToolNewTab = function(b) {
        var tagAttributes;

        tagAttributes = this.get('external_tool_tag_attributes') || {};
        if (!(arguments.length > 0)) {
          return tagAttributes.new_tab;
        }
        tagAttributes.new_tab = b;
        return this.set('external_tool_tag_attributes', tagAttributes);
      };

      Assignment.prototype.isSimple = function() {
        var overrides;

        overrides = this.get('assignment_overrides');
        return this.gradingType() === 'points' && this.submissionType() === 'none' && !this.groupCategoryId() && !this.peerReviews() && !this.frozen() && (!overrides || overrides.isSimple());
      };

      Assignment.prototype.isLetterGraded = function() {
        return this.gradingType() === 'letter_grade';
      };

      Assignment.prototype.isGpaScaled = function() {
        return this.gradingType() === 'gpa_scale';
      };

      Assignment.prototype.published = function(newPublished) {
        if (!(arguments.length > 0)) {
          return this.get('published');
        }
        return this.set('published', newPublished);
      };

      Assignment.prototype.position = function(newPosition) {
        if (!(arguments.length > 0)) {
          return this.get('position') || 0;
        }
        return this.set('position', newPosition);
      };

      Assignment.prototype.iconType = function() {
        if (this.isQuiz()) {
          return 'quiz';
        }
        if (this.isDiscussionTopic()) {
          return 'discussion';
        }
        return 'assignment';
      };

      Assignment.prototype.objectType = function() {
        if (this.isQuiz()) {
          return 'Quiz';
        }
        if (this.isDiscussionTopic()) {
          return 'Discussion';
        }
        return 'Assignment';
      };

      Assignment.prototype.htmlUrl = function() {
        return this.get('html_url');
      };

      Assignment.prototype.htmlEditUrl = function() {
        return "" + (this.get('html_url')) + "/edit";
      };

      Assignment.prototype.labelId = function() {
        return this.id;
      };

      Assignment.prototype.postToSISEnabled = function() {
        return ENV.POST_TO_SIS;
      };

      Assignment.prototype.defaultDates = function() {
        var group;

        return group = new DateGroup({
          due_at: this.get("due_at"),
          unlock_at: this.get("unlock_at"),
          lock_at: this.get("lock_at")
        });
      };

      Assignment.prototype.multipleDueDates = function() {
        var dateGroups;

        dateGroups = this.get("all_dates");
        return dateGroups && dateGroups.length > 1;
      };

      Assignment.prototype.allDates = function() {
        var groups, models, result;

        groups = this.get("all_dates");
        models = (groups && groups.models) || [];
        return result = _.map(models, function(group) {
          return group.toJSON();
        });
      };

      Assignment.prototype.singleSectionDueDate = function() {
        var allDates, section, _i, _len;

        if (!this.multipleDueDates() && !this.dueAt()) {
          allDates = this.allDates();
          for (_i = 0, _len = allDates.length; _i < _len; _i++) {
            section = allDates[_i];
            if (section.dueAt) {
              return section.dueAt.toISOString();
            }
          }
        } else {
          return this.dueAt();
        }
      };

      Assignment.prototype.toView = function() {
        var field, fields, hash, _i, _len;

        fields = ['name', 'dueAt', 'description', 'pointsPossible', 'lockAt', 'unlockAt', 'gradingType', 'notifyOfUpdate', 'peerReviews', 'automaticPeerReviews', 'peerReviewCount', 'peerReviewsAssignAt', 'acceptsOnlineUpload', 'acceptsMediaRecording', 'submissionType', 'acceptsOnlineTextEntries', 'acceptsOnlineURL', 'allowedExtensions', 'restrictFileExtensions', 'isOnlineSubmission', 'isNotGraded', 'isExternalTool', 'externalToolUrl', 'externalToolNewTab', 'turnitinAvailable', 'turnitinEnabled', 'gradeGroupStudentsIndividually', 'groupCategoryId', 'frozen', 'frozenAttributes', 'freezeOnCopy', 'canFreeze', 'isSimple', 'gradingStandardId', 'isLetterGraded', 'isGpaScaled', 'assignmentGroupId', 'iconType', 'published', 'htmlUrl', 'htmlEditUrl', 'labelId', 'position', 'postToSIS', 'multipleDueDates', 'allDates', 'isQuiz', 'singleSectionDueDate'];
        if (ENV.DIFFERENTIATED_ASSIGNMENTS_ENABLED) {
          fields.push('isOnlyVisibleToOverrides');
        }
        hash = {
          id: this.get('id')
        };
        for (_i = 0, _len = fields.length; _i < _len; _i++) {
          field = fields[_i];
          hash[field] = this[field]();
        }
        return hash;
      };

      Assignment.prototype.toJSON = function() {
        var data;

        data = Assignment.__super__.toJSON.apply(this, arguments);
        data = this._filterFrozenAttributes(data);
        if (this.alreadyScoped) {
          return data;
        } else {
          return {
            assignment: data
          };
        }
      };

      Assignment.prototype.search = function(regex) {
        if (this.get('name').match(regex)) {
          this.set('hidden', false);
          return true;
        } else {
          this.set('hidden', true);
          return false;
        }
      };

      Assignment.prototype.endSearch = function() {
        return this.set('hidden', false);
      };

      Assignment.prototype.parse = function(data) {
        var overrides, turnitin_settings;

        data = Assignment.__super__.parse.call(this, data);
        if ((overrides = data.assignment_overrides) != null) {
          data.assignment_overrides = new AssignmentOverrideCollection(overrides);
        }
        if ((turnitin_settings = data.turnitin_settings) != null) {
          data.turnitin_settings = new TurnitinSettings(turnitin_settings);
        }
        return data;
      };

      Assignment.prototype.doNotParse = function() {
        return this.parse = function() {
          return {};
        };
      };

      Assignment.prototype._submissionTypes = function() {
        return this.get('submission_types') || [];
      };

      Assignment.prototype._hasOnlyType = function(type) {
        var submissionTypes;

        submissionTypes = this._submissionTypes();
        return submissionTypes.length === 1 && submissionTypes[0] === type;
      };

      Assignment.prototype._getAssignmentType = function() {
        if (this.isDiscussionTopic()) {
          return 'discussion_topic';
        } else if (this.isQuiz()) {
          return 'online_quiz';
        } else if (this.isExternalTool()) {
          return 'external_tool';
        } else if (this.isNotGraded()) {
          return 'not_graded';
        } else {
          return 'assignment';
        }
      };

      Assignment.prototype._filterFrozenAttributes = function(data) {
        var key, value, _ref1;

        _ref1 = this.attributes;
        for (key in _ref1) {
          if (!__hasProp.call(_ref1, key)) continue;
          value = _ref1[key];
          if (_.contains(this.frozenAttributes(), key)) {
            delete data[key];
          }
        }
        if (_.contains(this.frozenAttributes(), "title")) {
          delete data.name;
        }
        if (_.contains(this.frozenAttributes(), "group_category_id")) {
          delete data.grade_group_students_individually;
        }
        if (_.contains(this.frozenAttributes(), "peer_reviews")) {
          delete data.automatic_peer_reviews;
          delete data.peer_review_count;
          delete data.peer_reviews_assign_at;
        }
        delete data.frozen;
        delete data.frozen_attributes;
        return data;
      };

      Assignment.prototype.setNullDates = function() {
        this.dueAt(null);
        this.lockAt(null);
        this.unlockAt(null);
        return this;
      };

      Assignment.prototype.publish = function() {
        return this.save("published", true);
      };

      Assignment.prototype.unpublish = function() {
        return this.save("published", false);
      };

      Assignment.prototype.disabledMessage = function() {
        return I18n.t('cant_unpublish_when_students_submit', "Can't unpublish if there are student submissions");
      };

      Assignment.prototype.isOnlyVisibleToOverrides = function(override_flag) {
        if (!(arguments.length > 0)) {
          return this.get('only_visible_to_overrides') || false;
        }
        return this.set('only_visible_to_overrides', override_flag);
      };

      return Assignment;

    })(Model);
  });

}).call(this);
