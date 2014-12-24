(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!notification_preferences', 'jquery', 'underscore'], function(I18n, $, _) {
    var NotificationGroupMappings;

    return NotificationGroupMappings = (function() {
      function NotificationGroupMappings(options) {
        this.options = options;
        this.getGroupDisplayName = __bind(this.getGroupDisplayName, this);
        this.groups = {
          Course: ['due_date', 'grading_policies', 'course_content', 'files', 'announcement', 'announcement_created_by_you', 'announcement_reply', 'grading', 'invitation', 'all_submissions', 'late_grading', 'submission_comment'],
          Discussions: ['discussion', 'discussion_entry'],
          Communication: ['added_to_conversation', 'conversation_message', 'conversation_created'],
          Scheduling: ['student_appointment_signups', 'appointment_signups', 'appointment_cancelations', 'appointment_availability', 'calendar'],
          Parent: [],
          Groups: ['membership_update'],
          Alerts: ['other']
        };
      }

      NotificationGroupMappings.prototype.getGroupDisplayName = function(groupName) {
        switch (groupName) {
          case 'Course':
            return I18n.t('groups.course', 'Course Activities');
          case 'Discussions':
            return I18n.t('groups.discussions', 'Discussions');
          case 'Communication':
            return I18n.t('groups.communication', 'Conversations');
          case 'Scheduling':
            return I18n.t('groups.scheduling', 'Scheduling');
          case 'Parent':
            return I18n.t('groups.parent', 'Parent Emails');
          case 'Groups':
            return I18n.t('groups.groups', 'Groups');
          case 'Alerts':
            return I18n.t('groups.alerts', 'Alerts');
          case 'Other':
            return I18n.t('groups.admin', 'Administrative');
          default:
            return I18n.t('groups.other', 'Other');
        }
      };

      return NotificationGroupMappings;

    })();
  });

}).call(this);
