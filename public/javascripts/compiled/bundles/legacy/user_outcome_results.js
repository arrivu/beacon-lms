(function() {
  require(["jquery", "i18n!outcomes.user_outcome_results"], function($, I18n) {
    return $(document).ready(function() {
      var showAllArtifacts;

      showAllArtifacts = $("#show_all_artifacts_link");
      return showAllArtifacts.click(function(event) {
        event.preventDefault();
        $("tr.artifact_details").toggle();
        if (showAllArtifacts.html() === I18n.t("#buttons.show_all_artifacts", "Show All Artifacts")) {
          return showAllArtifacts.html(I18n("#buttons.hide_all_artifacts", "Hide All Artifacts"));
        } else {
          return showAllArtifacts.html(I18n.t("#buttons.show_all_artifacts", "Show All Artifacts"));
        }
      });
    });
  });

}).call(this);
