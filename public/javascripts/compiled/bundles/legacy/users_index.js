(function() {
  require(["jquery"], function($) {
    return $(document).ready(function() {
      return $("#enrollment_term_id").change(function() {
        return $(this).closest("form").submit();
      });
    });
  });

}).call(this);
