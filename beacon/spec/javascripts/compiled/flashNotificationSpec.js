(function() {
  require(['jquery', 'compiled/jquery.rails_flash_notifications'], function($) {
    module('FlashNotifications', {
      setup: function() {
        this.fixture = $('<div id="flash_message_holder"/><div id="flash_screenreader_holder"/>').appendTo('#fixtures');
        return $.initFlashContainer();
      },
      teardown: function() {
        return this.fixture.remove();
      }
    });
    test('text notification', function() {
      $.flashMessage('here is a thing');
      return ok($('#flash_message_holder .ic-flash-success').text().match(/here is a thing/));
    });
    test('html sanitization', function() {
      $.flashWarning('<script>evil()</script>');
      return ok($('#flash_message_holder .ic-flash-warning').html().match(/&lt;script&gt;/));
    });
    test('html messages', function() {
      $.flashError({
        html: '<div class="blah">test</div>'
      });
      return ok($('#flash_message_holder .ic-flash-error div.blah').text().match(/test/));
    });
    return test('screenreader message', function() {
      $.screenReaderFlashMessage('<script>evil()</script>');
      return ok($('#flash_screenreader_holder span').html().match(/&lt;script&gt;/));
    });
  });

}).call(this);
