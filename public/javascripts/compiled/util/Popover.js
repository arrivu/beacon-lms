(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    var Popover, activePopovers, idCounter, using;

    using = function(position, feedback) {
      return $(this).css(position).toggleClass('carat-bottom', feedback.vertical === 'bottom');
    };
    idCounter = 0;
    activePopovers = [];
    return Popover = (function() {
      function Popover(clickEvent, content, options) {
        var _this = this;

        this.content = content;
        this.options = options != null ? options : {};
        this.position = __bind(this.position, this);
        this.outsideClickHandler = __bind(this.outsideClickHandler, this);
        this.trigger = $(clickEvent.currentTarget);
        this.el = $(this.content).addClass('carat-bottom').data('popover', this).keydown(function(event) {
          var index, tabbables;

          if (event.keyCode === $.ui.keyCode.ESCAPE) {
            _this.hide();
            if (_this.previousTarget && _this.previousTarget.is(':visible')) {
              _this.previousTarget.focus();
            }
          }
          if (event.keyCode !== $.ui.keyCode.TAB) {
            return;
          }
          tabbables = $(":tabbable", _this.el);
          index = $.inArray(event.target, tabbables);
          if (index === -1) {
            return;
          }
          if (event.shiftKey) {
            if (index === 0) {
              return _this.hide();
            }
          } else {
            if (index === tabbables.length - 1) {
              return _this.hide();
            }
          }
        });
        this.el.delegate('.popover_close', 'click', function(event) {
          event.preventDefault();
          _this.hide();
          if (_this.previousTarget && _this.previousTarget.is(':visible')) {
            return _this.previousTarget.focus();
          }
        });
        this.show(clickEvent);
      }

      Popover.prototype.show = function(clickEvent) {
        var actualOffset, caratOffset, differenceInOffset, id, leftBound, popoverToHide, rightBound,
          _this = this;

        while (popoverToHide = activePopovers.pop()) {
          popoverToHide.hide();
        }
        activePopovers.push(this);
        id = "popover-" + (idCounter++);
        this.trigger.attr({
          "aria-expanded": true,
          "aria-controls": id
        });
        this.previousTarget = clickEvent.currentTarget;
        this.el.attr({
          'id': id
        }).appendTo(document.body).show();
        this.position();
        this.el.find(':tabbable').first().focus();
        setTimeout(function() {
          return _this.el.find(':tabbable').first().focus();
        }, 100);
        this.el.find(".ui-menu-carat").remove();
        differenceInOffset = this.trigger.offset().left - this.el.offset().left;
        actualOffset = clickEvent.pageX - this.trigger.offset().left;
        leftBound = Math.max(0, this.trigger.width() / 2 - this.el.width() / 2) + 20;
        rightBound = this.trigger.width() - leftBound;
        caratOffset = Math.min(Math.max(leftBound, actualOffset), rightBound) + differenceInOffset;
        $('<span class="ui-menu-carat"><span /></span>').css('left', caratOffset).prependTo(this.el);
        this.positionInterval = setInterval(this.position, 200);
        return $(window).click(this.outsideClickHandler);
      };

      Popover.prototype.hide = function() {
        var index, popover, _i, _len;

        for (index = _i = 0, _len = activePopovers.length; _i < _len; index = ++_i) {
          popover = activePopovers[index];
          if (this === popover) {
            activePopovers.splice(index, 1);
          }
        }
        this.el.detach();
        this.trigger.attr('aria-expanded', false);
        clearInterval(this.positionInterval);
        return $(window).unbind('click', this.outsideClickHandler);
      };

      Popover.prototype.ignoreOutsideClickSelector = '.ui-dialog';

      Popover.prototype.outsideClickHandler = function(event) {
        if (!$(event.target).closest(this.el.add(this.trigger).add(this.ignoreOutsideClickSelector)).length) {
          return this.hide();
        }
      };

      Popover.prototype.position = function() {
        return this.el.position({
          my: 'center ' + (this.options.verticalSide === 'bottom' ? 'top' : 'bottom'),
          at: 'center ' + (this.options.verticalSide || 'top'),
          of: this.trigger,
          offset: '0 -10px',
          within: 'body',
          collision: 'flipfit ' + (this.options.verticalSide ? 'none' : 'flipfit'),
          using: using
        });
      };

      return Popover;

    })();
  });

}).call(this);
