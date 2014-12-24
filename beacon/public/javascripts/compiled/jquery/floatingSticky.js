(function() {
  define(['underscore', 'jquery'], function(_, $) {
    var FloatingSticky, instanceID;

    instanceID = 0;
    FloatingSticky = (function() {
      function FloatingSticky(el, container, options) {
        var _this = this;

        if (options == null) {
          options = {};
        }
        this.instanceID = "floatingSticky" + (instanceID++);
        this.$window = $(window);
        this.$el = $(el);
        this.$top = $(options.top || container);
        this.$bottom = $(options.bottom || container);
        this.$el.data('floatingSticky', this);
        this.$window.on("scroll." + this.instanceID + " resize." + this.instanceID, function() {
          return _this.reposition();
        });
        this.reposition();
      }

      FloatingSticky.prototype.remove = function() {
        this.$window.off(this.instanceID);
        return this.$el.data('floatingSticky', null);
      };

      FloatingSticky.prototype.reposition = function() {
        var containerBottom, containerTop, elHeight, newTop, windowHeight, windowTop;

        windowTop = this.$window.scrollTop();
        windowHeight = this.$window.height();
        if (windowTop < 0) {
          windowTop = 0;
        } else {
          windowTop = Math.min(windowTop, document.body.scrollHeight - windowHeight);
        }
        containerTop = this.$top.offset().top;
        if (windowTop < containerTop) {
          if (windowTop === 0) {
            newTop = containerTop;
          } else {
            newTop = containerTop - windowTop;
          }
        } else {
          newTop = 0;
          elHeight = this.$el.height();
          containerBottom = this.$bottom.offset().top + this.$bottom.height();
          if (windowTop + elHeight > containerBottom) {
            newTop = containerBottom - elHeight - windowTop;
          }
          if (newTop < containerTop - windowTop) {
            newTop = containerTop - windowTop;
          }
        }
        return this.$el.css({
          top: newTop
        });
      };

      return FloatingSticky;

    })();
    $.fn.floatingSticky = function(container, options) {
      if (options == null) {
        options = {};
      }
      return this.map(function() {
        var floatingSticky;

        floatingSticky = $(this).data('floatingSticky');
        if (!floatingSticky) {
          floatingSticky = new FloatingSticky(this, container, options);
        }
        return floatingSticky;
      });
    };
    return FloatingSticky;
  });

}).call(this);
