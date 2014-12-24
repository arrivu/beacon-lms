(function() {
  require(['jquery', 'jst/courses/autocomplete_item', 'compiled/behaviors/autocomplete'], function($, autocompleteItemTemplate) {
    return $(document).ready(function() {
      var $courseSearchField, autocompleteSource;

      $courseSearchField = $('#course_name');
      if ($courseSearchField.length) {
        autocompleteSource = $courseSearchField.data('autocomplete-source');
        $courseSearchField.autocomplete({
          minLength: 4,
          delay: 150,
          source: autocompleteSource,
          select: function(e, ui) {
            var path;

            path = autocompleteSource.replace(/\?.+$/, '');
            return window.location = "" + path + "/" + ui.item.id;
          }
        });
        return $courseSearchField.data('ui-autocomplete')._renderItem = function(ul, item) {
          return $(autocompleteItemTemplate(item)).appendTo(ul);
        };
      }
    });
  });

}).call(this);
