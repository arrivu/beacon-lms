(function() {
  define(['i18n!shared.flash_notices', 'jquery', 'underscore', 'compiled/fn/preventDefault', 'str/htmlEscape', 'jqueryui/effects/drop', 'vendor/jquery.cookie'], function(I18n, $, _, preventDefault, htmlEscape) {
    var $holder, $screenreader_holder, escapeContent, flashBox, initFlashContainer, renderServerNotifications, screenReaderFlashBox;

    $holder = [];
    $screenreader_holder = [];
    initFlashContainer = function() {
      $holder = $("#flash_message_holder");
      if ($holder.length === 0) {
        return;
      }
      $screenreader_holder = $("#flash_screenreader_holder");
      $holder.on('click', '.close_link', preventDefault(function() {}));
      return $holder.on('click', 'li', function() {
        var $this;

        $this = $(this);
        if ($this.hasClass('no_close')) {
          return;
        }
        if ($this.hasClass('unsupported_browser')) {
          $.cookie('unsupported_browser_dismissed', '1');
        }
        return $this.stop(true, true).remove();
      });
    };
    initFlashContainer();
    escapeContent = function(content) {
      if (content.hasOwnProperty('html')) {
        return content.html;
      } else {
        return htmlEscape(content);
      }
    };
    screenReaderFlashBox = function(type, content) {
      var $screenreader_node;

      $screenreader_node = $("<span>" + (escapeContent(content)) + "</span>");
      $screenreader_node.appendTo($screenreader_holder);
      return window.setTimeout((function() {
        return $screenreader_node.remove();
      }), 20000);
    };
    flashBox = function(type, content, timeout, cssOptions) {
      var $node;

      if (cssOptions == null) {
        cssOptions = {};
      }
      $node = $("<li class=\"ic-flash-" + type + "\">\n  <i></i>\n  " + (escapeContent(content)) + "\n  <a href=\"#\" class=\"close_link icon-end\">" + (I18n.t("close", "Close")) + "</a>\n</li>");
      $node.appendTo($holder).css(_.extend({
        zIndex: 1
      }, cssOptions)).show('drop', {
        direction: "up"
      }, 'fast', function() {
        return $(this).css('z-index', 2);
      }).delay(timeout || 7000).animate({
        'z-index': 1
      }, 0).fadeOut('slow', function() {
        return $(this).slideUp('fast', function() {
          return $(this).remove();
        });
      });
      return setTimeout((function() {
        return screenReaderFlashBox(type, content);
      }), 100);
    };
    $.flashMessage = function(content, timeout) {
      if (timeout == null) {
        timeout = 3000;
      }
      return flashBox("success", content, timeout);
    };
    $.flashError = function(content, timeout) {
      return flashBox("error", content, timeout);
    };
    $.flashWarning = function(content, timeout) {
      if (timeout == null) {
        timeout = 3000;
      }
      return flashBox("warning", content, timeout);
    };
    $.screenReaderFlashMessage = function(content) {
      return screenReaderFlashBox('success', content);
    };
    $.screenReaderFlashError = function(content) {
      return screenReaderFlashBox('error', content);
    };
    $.initFlashContainer = function() {
      return initFlashContainer();
    };
    renderServerNotifications = function() {
      var notice, _i, _len, _ref, _results;

      if (ENV.notices != null) {
        _ref = ENV.notices;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          notice = _ref[_i];
          _results.push(flashBox(notice.type, notice.content));
        }
        return _results;
      }
    };
    return $(function() {
      return setTimeout(renderServerNotifications, 500);
    });
  });

}).call(this);
