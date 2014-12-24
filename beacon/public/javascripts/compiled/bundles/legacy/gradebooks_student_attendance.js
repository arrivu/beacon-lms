(function() {
  require(["jquery", "jquery.instructure_misc_helpers", "jquery.instructure_misc_plugins", "vendor/jquery.scrollTo"], function($) {
    return $(document).ready(function() {
      return $(document).fragmentChange(function(event, hash) {
        var $tr;

        $("#student_attendance tr.highlighted").removeClass("highlighted");
        if (hash.indexOf("#assignment_") === 0) {
          $tr = $("#" + hash.substring(1)).parents("tr");
          $tr.addClass("highlighted");
          return $("html,body").scrollTo($tr);
        }
      });
    });
  });

}).call(this);
