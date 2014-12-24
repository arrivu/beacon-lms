(function() {
  require(["jquery", "jquery.instructure_misc_plugins"], function($) {
    return $(document).ready(function() {
      $(document).bind("edit_event_dialog", function() {
        if ($("#wizard_box .option.create_calendar_event_option.selected").length > 0) {
          return $("#wizard_box .edit_calendar_event_option").click();
        } else {
          if ($("#wizard_box .option.create_assignment_option.selected").length > 0) {
            return $("#wizard_box .tab_assignment_option").click();
          }
        }
      }).bind("event_dialog", function() {
        if ($("#wizard_box .option.delete_calendar_event_option.selected").length > 0) {
          return $("#wizard_box .confirm_delete_calendar_event_option").click();
        }
      }).bind("event_tag_select", function(event, index) {
        if (index === 1 && $("#wizard_box .option.tab_assignment_option.selected").length > 0) {
          return $("#wizard_box .edit_assignment_option").click();
        }
      }).bind("add_event", function(event, $object) {
        if ($("#wizard_box .option.edit_calendar_event_option.selected").length > 0) {
          return $("#wizard_box .review_calendar_event_option").click();
        } else {
          if ($("#wizard_box .option.edit_assignment_option.selected").length > 0) {
            return $("#wizard_box .review_assignment_option").click();
          }
        }
      }).bind("delete_event", function() {
        if ($("#wizard_box .option.confirm_delete_calendar_event_option.selected").length > 0) {
          return $("#wizard_box .review_delete_calendar_event_option").click();
        }
      });
      $(".highlight_calendar_event_title").hover((function() {
        return $("#edit_calendar_event_form input[name='calendar_event[title]']").indicate();
      }), function() {});
      $(".highlight_undated_events").hover((function() {
        return $(".calendar_undated").indicate();
      }), function() {});
      $(".highlight_assignment_tab").hover((function() {
        return $(".edit_assignment_option").indicate();
      }), function() {});
      $(".highlight_assignment_title").hover((function() {
        return $("#edit_assignment_form input[name='assignment[title]']").indicate();
      }), function() {});
      return $(".highlight_delete_event").hover((function() {
        return $("#event_details .delete_event_link").indicate();
      }), function() {});
    });
  });

}).call(this);
