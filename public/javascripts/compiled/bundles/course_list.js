(function() {
  require(['jquery', 'i18n!course_list'], function($, I18n) {
    var success;

    success = function(target) {
      var favorited_tooltip, nonfavorite_tooltip;

      favorited_tooltip = I18n.t('favorited_tooltip', "Click to remove from the courses menu.");
      nonfavorite_tooltip = I18n.t('nonfavorited_tooltip', 'Click to add to the courses menu.');
      if (target.hasClass('course-list-favorite-course')) {
        target.removeClass('course-list-favorite-course');
        target.attr('title', nonfavorite_tooltip);
        target.data('ui-tooltip-title', nonfavorite_tooltip);
        return target.children('.screenreader-only').text(nonfavorite_tooltip);
      } else {
        target.addClass('course-list-favorite-course');
        target.attr('title', favorited_tooltip);
        target.data('ui-tooltip-title', favorited_tooltip);
        return target.children('.screenreader-only').text(favorited_tooltip);
      }
    };
    return $('[data-favorite-url]').on('click keyclick', function(event) {
      var target, url;

      event.preventDefault();
      url = $(this).data('favoriteUrl');
      target = $(event.currentTarget);
      if (target.hasClass('course-list-favorite-course')) {
        return $.ajaxJSON(url, 'DELETE', {}, success(target), null);
      } else {
        return $.ajaxJSON(url, 'POST', {}, success(target), null);
      }
    });
  });

}).call(this);
