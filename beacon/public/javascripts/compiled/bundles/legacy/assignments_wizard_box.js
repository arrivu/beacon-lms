(function() {
  require(["jquery", 'compiled/userSettings', "jquery.instructure_misc_plugins", "vendor/jquery.scrollTo"], function($, userSettings) {
    return $(document).ready(function() {
      var closeWizard, screenreaderFocus;

      $(document).bind("add_assignment", function() {
        if ($("#wizard_box .option.create_assignment_option.selected").length > 0) {
          return $("#wizard_box .edit_assignment_option").click();
        }
      }).bind("assignment_update", function() {
        if ($("#wizard_box .option.edit_assignment_option.selected").length > 0) {
          return $("#wizard_box .review_assignment_option").click();
        }
      });
      closeWizard = function() {
        var pathname;

        pathname = window.location.pathname;
        userSettings.set('hide_wizard_' + pathname, true);
        $("#wizard_box").slideUp('fast');
        $(".wizard_popup_link").slideDown('fast');
        return $("#wizard_spacer_box").height($("#wizard_box").height() || 0);
      };
      screenreaderFocus = function(elem) {
        $("html,body").scrollTo(elem);
        closeWizard();
        return elem.focus();
      };
      $(".highlight_add_assignment_icon").hover((function() {
        var $link;

        $link = $(".assignment_group:visible:first").find(".add_assignment_link");
        if ($link.length === 0) {
          $(".no_groups_message").show();
        }
        $("html,body").scrollTo($link);
        return $link.indicate();
      }), function() {
        return $(".no_groups_message").hide();
      });
      $(".highlight_add_assignment_group_icon").hover((function() {
        var $link;

        $link = $(".add_group_link:visible:first");
        $("html,body").scrollTo($link);
        return $link.indicate();
      }), function() {});
      $(".highlight_weight_groups").hover((function() {
        var $item;

        $item = $("#class_weighting_box");
        $("html,body").scrollTo($item);
        return $item.indicate();
      }), function() {});
      $(".show_me_add_assignment_group").click(function(e) {
        e.preventDefault();
        return screenreaderFocus($(".add_group_link:visible:first"));
      });
      $(".show_me_weight_final_grade").click(function(e) {
        e.preventDefault();
        return screenreaderFocus($("#class_weighting_policy"));
      });
      return $(".show_me_add_assignment").click(function(e) {
        var $link;

        e.preventDefault();
        $link = $(".assignment_group:visible:first").find(".add_assignment_link");
        if ($link.length === 0) {
          return $(".no_groups_message").show();
        } else {
          return screenreaderFocus($link);
        }
      });
    });
  });

}).call(this);
