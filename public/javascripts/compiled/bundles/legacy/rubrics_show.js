(function() {
  require(["i18n!rubrics.show", "jquery", "jquery.instructure_misc_plugins"], function(I18n, $) {
    return $(document).ready(function() {
      $("#right-side .edit_rubric_link").click(function(event) {
        event.preventDefault();
        return $(".rubric:visible:first .edit_rubric_link").click();
      });
      $("#right-side .delete_rubric_link").click(function(event) {
        var callback;

        event.preventDefault();
        callback = function() {
          return location.href = $(".rubrics_url").attr("href");
        };
        callback.confirmationMessage = I18n.t("prompts.are_you_sure_delete", "Are you sure you want to delete this rubric? Any course currently associated with this rubric will still have access to it, but, no new courses will be able to use it.");
        return $(".rubric:visible:first .delete_rubric_link").triggerHandler("click", callback);
      });
      return $(document).fragmentChange(function(event, hash) {
        if (hash === "#edit") {
          return $("#right-side .edit_rubric_link").click();
        }
      });
    });
  });

}).call(this);
