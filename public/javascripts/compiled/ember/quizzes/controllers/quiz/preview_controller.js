(function() {
  define(['ember', './show_controller', 'i18n!quiz_show'], function(Ember, ShowController, I18n) {
    return ShowController.extend({
      isPreview: true
    });
  });

}).call(this);
