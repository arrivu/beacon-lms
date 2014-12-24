(function() {
  require(['jquery', 'full_files', 'jquery.google-analytics', 'uploadify'], function($) {
    return $(function() {
      return $('.manage_collaborations').on('click', function() {
        return $.trackEvent('files', 'click', 'manage_collaborations');
      });
    });
  });

}).call(this);
