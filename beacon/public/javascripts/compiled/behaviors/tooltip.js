(function() {
  define(['underscore', 'jquery', 'jqueryui/tooltip'], function(_, $) {
    var setPosition, using;

    (function($) {
      return $.widget("custom.timeoutTooltip", $.ui.tooltip, {
        _open: function(event, target, content) {
          var apply,
            _this = this;

          if (this.timeout) {
            return;
          }
          apply = this._superApply.bind(this, arguments);
          this.timeout = setTimeout((function() {
            delete _this.timeout;
            _this._off(target, "mouseleave focusout keyup");
            return apply.call(_this);
          }), 20);
          return this._on(target, {
            mouseleave: "close",
            focusout: "close",
            keyup: function(event) {
              var fakeEvent;

              if (event.keyCode === $.ui.keyCode.ESCAPE) {
                fakeEvent = $.Event(event);
                fakeEvent.currentTarget = target[0];
                return this.close(fakeEvent, true);
              }
            }
          });
        },
        close: function(event) {
          if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
            return;
          }
          return this._superApply(arguments);
        }
      });
    })($);
    using = function(position, feedback) {
      return $(this).css(position).removeClass("left right top bottom center middle vertical horizontal").addClass([feedback.horizontal, feedback.vertical, feedback.important].join(' '));
    };
    setPosition = function(opts) {
      var caret, positions;

      caret = function() {
        var _ref;

        if ((_ref = opts.tooltipClass) != null ? _ref.match('popover') : void 0) {
          return 30;
        } else {
          return 5;
        }
      };
      positions = {
        right: {
          my: "left center",
          at: "right+" + (caret()) + " center",
          collision: 'flipfit flipfit'
        },
        left: {
          my: "right center",
          at: "left-" + (caret()) + " center",
          collision: 'flipfit flipfit'
        },
        top: {
          my: "center bottom",
          at: "center top-" + (caret()),
          collision: 'flipfit flipfit'
        },
        bottom: {
          my: "center top",
          at: "center bottom+" + (caret()),
          collision: 'flipfit flipfit'
        }
      };
      if (opts.position in positions) {
        return opts.position = positions[opts.position];
      }
    };
    return $('body').on('mouseenter focusin', '[data-tooltip]', function(event) {
      var $this, opts, _base;

      $this = $(this);
      opts = $this.data('tooltip');
      if (opts === 'right' || opts === 'left' || opts === 'top' || opts === 'bottom') {
        opts = {
          position: opts
        };
      }
      opts || (opts = {});
      opts.position || (opts.position = 'top');
      setPosition(opts);
      if (opts.collision) {
        opts.position.collision = opts.collision;
      }
      (_base = opts.position).using || (_base.using = using);
      if ($this.data('tooltip-title')) {
        opts.content = function() {
          return $(this).data('tooltip-title');
        };
        opts.items = '[data-tooltip-title]';
      }
      return $this.removeAttr('data-tooltip').timeoutTooltip(opts).timeoutTooltip('open').click(function() {
        return $this.timeoutTooltip('close');
      });
    });
  });

}).call(this);
