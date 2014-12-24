(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'i18n!course_logging'], function(_, Backbone, I18n) {
    var CourseEvent, _ref;

    return CourseEvent = (function(_super) {
      __extends(CourseEvent, _super);

      function CourseEvent() {
        _ref = CourseEvent.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CourseEvent.prototype.present = function() {
        var data, iterator, json,
          _this = this;

        json = Backbone.Model.prototype.toJSON.call(this);
        data = {};
        iterator = function(dataValue, dataKey) {
          dataKey = _this.presentLabel(dataKey);
          return data[dataKey] = _this.presentField(dataValue);
        };
        switch (json.event_type) {
          case "created":
            json.event_type_present = I18n.t("event_type.created", "Created");
            iterator = function(dataValues, dataKey) {
              dataKey = _this.presentLabel(dataKey);
              return data[dataKey] = _this.presentField(_.last(dataValues));
            };
            break;
          case "updated":
            json.event_type_present = I18n.t("event_type.updated", "Updated");
            iterator = function(dataValues, dataKey) {
              dataKey = _this.presentLabel(dataKey);
              return data[dataKey] = _.object(["from", "to"], _this.presentField(dataValues));
            };
            break;
          case "concluded":
            json.event_type_present = I18n.t("event_type.concluded", "Concluded");
            break;
          case "unconcluded":
            json.event_type_present = I18n.t("event_type.unconcluded", "Unconcluded");
            break;
          case "restored":
            json.event_type_present = I18n.t("event_type.restored", "Restored");
            break;
          case "deleted":
            json.event_type_present = I18n.t("event_type.deleted", "Deleted");
            break;
          case "published":
            json.event_type_present = I18n.t("event_type.published", "Published");
            break;
          case "copied_from":
            json.event_type_present = I18n.t("event_type.copied_from", "Copied From");
            break;
          case "copied_to":
            json.event_type_present = I18n.t("event_type.copied_to", "Copied To");
            break;
          case "reset_from":
            json.event_type_present = I18n.t("event_type.reset_from", "Reset From");
            break;
          case "reset_to":
            json.event_type_present = I18n.t("event_type.reset_to", "Reset To");
            break;
          case "corrupted":
            json.event_type_present = I18n.t("event_type.corrupted", "Details Not Available");
            break;
          default:
            json.event_type_present = json.event_type;
        }
        switch (json.event_source) {
          case "manual":
            json.event_source_present = I18n.t("event_source.manual", "Manual");
            break;
          case "api":
            json.event_source_present = I18n.t("event_source.api", "Api");
            break;
          case "sis":
            json.event_source_present = I18n.t("event_source.sis", "SIS");
            break;
          default:
            json.event_source_present = json.event_source || I18n.t("blank_placeholder", "-");
        }
        _.each(json.event_data, iterator);
        if (!_.isEmpty(data)) {
          json.event_data = data;
        }
        return json;
      };

      CourseEvent.prototype.presentField = function(value) {
        var blank;

        blank = I18n.t("blank_placeholder", "-");
        if (_.isNull(value)) {
          return blank;
        }
        if (_.isBoolean(value)) {
          return value.toString();
        }
        if (_.isArray(value)) {
          return _.map(value, this.presentField, this);
        }
        if (_.isString(value)) {
          if (!value.length) {
            return blank;
          }
          if (value.match(/^\d{4}-\d{2}-\d{2}(T| )\d{2}:\d{2}:\d{2}(.\d+)?Z$/)) {
            return I18n.l("#date.formats.medium", value) + " " + I18n.l("#time.formats.tiny", value);
          }
        }
        return value;
      };

      CourseEvent.prototype.presentLabel = function(label) {
        switch (label.toLowerCase()) {
          case "name":
            return I18n.t("field_label.name", "Name");
          case "account_id":
            return I18n.t("field_label.account_id", "Account Id");
          case "group_weighting_scheme":
            return I18n.t("field_label.group_weighting_scheme", "Group Weighting Scheme");
          case "old_account_id":
            return I18n.t("field_label.old_account_id", "Old Account Id");
          case "workflow_state":
            return I18n.t("field_label.workflow_state", "Workflow State");
          case "uuid":
            return I18n.t("field_label.uuid", "UUID");
          case "start_at":
            return I18n.t("field_label.start_at", "Start At");
          case "conclude_at":
            return I18n.t("field_label.conclude_at", "Concluded At");
          case "grading_standard_id":
            return I18n.t("field_label.grading_standard_id", "Grading Standard Id");
          case "is_public":
            return I18n.t("field_label.is_public", "Is Public");
          case "allow_student_wiki_edits":
            return I18n.t("field_label.allow_student_wiki_edits", "Allow Student Wiki Edit");
          case "created_at":
            return I18n.t("field_label.created_at", "Created At");
          case "updated_at":
            return I18n.t("field_label.updated_at", "Updated At");
          case "show_public_context_messages":
            return I18n.t("field_label.show_public_context_messages", "Show Public Context Message");
          case "syllabus_body":
            return I18n.t("field_label.syllabus_body", "syllabus_body");
          case "allow_student_forum_attachments":
            return I18n.t("field_label.allow_student_forum_attachments", "Allow Student Forum Attachments");
          case "default_wiki_editing_roles":
            return I18n.t("field_label.default_wiki_editing_roles", "Default Wiki Editing Roles");
          case "wiki_id":
            return I18n.t("field_label.wiki_id", "Wiki Id");
          case "allow_student_organized_groups":
            return I18n.t("field_label.allow_student_organized_groups", "Allow Student Organized Groups");
          case "course_code":
            return I18n.t("field_label.course_code", "Course Code");
          case "default_view":
            return I18n.t("field_label.default_view", "Default View");
          case "abstract_course_id":
            return I18n.t("field_label.abstract_course_id", "Abstract Course Id");
          case "root_account_id":
            return I18n.t("field_label.root_account_id", "Root Account Id");
          case "enrollment_term_id":
            return I18n.t("field_label.enrollment_term_id", "Enrollment Term Id");
          case "sis_source_id":
            return I18n.t("field_label.sis_source_id", "SIS Source Id");
          case "sis_batch_id":
            return I18n.t("field_label.sis_batch_id", "SIS Batch Id");
          case "show_all_discussion_entries":
            return I18n.t("field_label.show_all_discussion_entries", "Show All Discussion Entries");
          case "open_enrollment":
            return I18n.t("field_label.open_enrollment", "Open Enrollment");
          case "storage_quota":
            return I18n.t("field_label.storage_quota", "Storage Quota");
          case "tab_configuration":
            return I18n.t("field_label.tab_configuration", "Tab Configuration");
          case "allow_wiki_comments":
            return I18n.t("field_label.allow_wiki_comments", "Allow Wiki Comments");
          case "turnitin_comments":
            return I18n.t("field_label.turnitin_comments", "Turnitin Comments");
          case "self_enrollment":
            return I18n.t("field_label.self_enrollment", "Self Enrollment");
          case "license":
            return I18n.t("field_label.license", "License");
          case "indexed":
            return I18n.t("field_label.indexed", "Indexed");
          case "restrict_enrollments_to_course_dates":
            return I18n.t("field_label.restrict_enrollments_to_course_dates", "Restrict Enrollments To Course Dates");
          case "template_course_id":
            return I18n.t("field_label.template_course_id", "Template Course Id");
          case "locale":
            return I18n.t("field_label.locale", "Locale");
          case "replacement_course_id":
            return I18n.t("field_label.replacement_course_id", "Replacement Course Id");
          case "public_description":
            return I18n.t("field_label.public_description", "Public Description");
          case "self_enrollment_code":
            return I18n.t("field_label.self_enrollment_code", "Self Enrollment Code");
          case "self_enrollment_limit":
            return I18n.t("field_label.self_enrollment_limit", "Self Enrollment Limit");
          case "integration_id":
            return I18n.t("field_label.integration_id", "Integration Id");
          case "hide_final_grade":
            return I18n.t("field_label.hide_final_grade", "Hide Final Grade");
          case "hide_distribution_graphs":
            return I18n.t("field_label.hide_distribution_graphs", "Hide Distribution Graphs");
          case "allow_student_discussion_topics":
            return I18n.t("field_label.allow_student_discussion_topics", "Allow Student Discussion Topics");
          case "allow_student_discussion_editing":
            return I18n.t("field_label.allow_student_discussion_editing", "Allow Student Discussion Editing");
          case "lock_all_announcements":
            return I18n.t("field_label.lock_all_announcements", "Lock All Announcements");
          case "large_roster":
            return I18n.t("field_label.large_roster", "Large Roster");
          case "public_syllabus":
            return I18n.t("field_label.public_syllabus", "Public Syllabus");
          default:
            return label;
        }
      };

      return CourseEvent;

    })(Backbone.Model);
  });

}).call(this);
