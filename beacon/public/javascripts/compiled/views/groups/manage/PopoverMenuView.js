(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'compiled/jquery/outerclick'], function($, _arg) {
    var PopoverMenuView, View, _ref;

    View = _arg.View;
    return PopoverMenuView = (function(_super) {
      __extends(PopoverMenuView, _super);

      function PopoverMenuView() {
        this.hide = __bind(this.hide, this);
        this.cancelHide = __bind(this.cancelHide, this);        _ref = PopoverMenuView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PopoverMenuView.prototype.defaults = {
        zIndex: 1
      };

      PopoverMenuView.prototype.events = {
        'click': 'cancelHide',
        'focusin': 'cancelHide',
        'focusout': 'hide',
        'outerclick': 'hide',
        'keyup': 'checkEsc'
      };

      PopoverMenuView.prototype.showBy = function($target, focus) {
        var _this = this;

        if (focus == null) {
          focus = false;
        }
        this.cancelHide();
        return setTimeout(function() {
          _this.render();
          _this.attachElement($target);
          _this.$el.show();
          _this.setElement(_this.$el);
          _this.$el.zIndex(_this.options.zIndex);
          if (typeof _this.setWidth === "function") {
            _this.setWidth();
          }
          _this.$el.position({
            my: _this.my || 'left+6 top-47',
            at: _this.at || 'right center',
            of: $target,
            collision: 'none',
            using: function(coords) {
              var content;

              content = _this.$el.find('.popover-content');
              _this.$el.css({
                top: coords.top,
                left: coords.left
              });
              return _this.setPopoverContentHeight(_this.$el, content, $('#content'));
            }
          });
          if (focus) {
            return typeof _this.focus === "function" ? _this.focus() : void 0;
          }
        }, 20);
      };

      PopoverMenuView.prototype.setPopoverContentHeight = function(popover, content, parent) {
        var defaultHeight, newHeight, parentBound, popoverHeader, popoverOffset;

        parentBound = parent.offset().top + parent.height();
        popoverOffset = popover.offset().top;
        popoverHeader = popover.find('.popover-title').outerHeight();
        defaultHeight = parseInt(content.css('maxHeight'));
        newHeight = parentBound - popoverOffset - popoverHeader;
        return content.css({
          maxHeight: Math.min(defaultHeight, newHeight)
        });
      };

      PopoverMenuView.prototype.cancelHide = function() {
        return clearTimeout(this.hideTimeout);
      };

      PopoverMenuView.prototype.hide = function() {
        var _this = this;

        return this.hideTimeout = setTimeout(function() {
          return _this.$el.detach();
        }, 100);
      };

      PopoverMenuView.prototype.checkEsc = function(e) {
        if (e.keyCode === 27) {
          return this.hide();
        }
      };

      PopoverMenuView.prototype.attachElement = function($target) {
        return this.$el.insertAfter($target);
      };

      return PopoverMenuView;

    })(View);
  });

}).call(this);
