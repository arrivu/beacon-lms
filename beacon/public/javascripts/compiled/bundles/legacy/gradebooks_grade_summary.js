(function() {
  require(["jquery"], function($) {
    return $(document).ready(function() {
      return $("#course_url").change(function() {
        if (location.href !== $(this).val()) {
          return location.href = $(this).val();
        }
      });
    });
  });

}).call(this);
