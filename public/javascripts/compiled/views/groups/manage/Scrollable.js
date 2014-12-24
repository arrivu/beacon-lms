(function() {
  define(['underscore', 'jquery'], function(_, $) {
    var $document, $footer, $window, CLASS_ATTRIBUTE, SCROLL_RATE, p;

    CLASS_ATTRIBUTE = 'ui-cnvs-scrollable';
    SCROLL_RATE = 10;
    $footer = $window = $document = null;
    p = function(str) {
      return parseInt(str, 10);
    };
    return {
      afterRender: function() {
        var _this = this;

        if (this._rendered) {
          return;
        }
        this.$el.addClass(CLASS_ATTRIBUTE);
        this.$el.css('overflowY', 'auto');
        this._initializeDragAndDropHandling();
        _.defer(function() {
          return _this._initializeAutoResize();
        });
        return this._rendered = true;
      },
      _initializeAutoResize: function() {
        var $minHeightParent, minHeightParent, oldMaxHeight, verticalOffset,
          _this = this;

        $window || ($window = $(window));
        minHeightParent = _.find(this.$el.parents(), function(el) {
          return p($(el).css('minHeight')) > 30;
        });
        if (!minHeightParent) {
          return;
        }
        $minHeightParent = $(minHeightParent);
        oldMaxHeight = $minHeightParent.css('maxHeight');
        $minHeightParent.css('maxHeight', $minHeightParent.css('minHeight'));
        verticalOffset = $minHeightParent.offset().top || 0;
        verticalOffset += p($minHeightParent.css('paddingTop'));
        this._minHeight = $minHeightParent.height() + verticalOffset;
        $minHeightParent.css('maxHeight', oldMaxHeight);
        $window.resize(_.throttle((function() {
          return _this._resize();
        }), 50));
        return this._resize();
      },
      _resize: function() {
        var bottomSpacing;

        $footer || ($footer = $('#footer'));
        $document || ($document = $(document));
        bottomSpacing = _.reduce(this.$el.parents(), function(sum, el) {
          var $el;

          $el = $(el);
          sum += p($el.css('marginBottom'));
          sum += p($el.css('paddingBottom'));
          return sum += p($el.css('borderBottomWidth'));
        }, 0);
        this._resize = function() {
          var availableHeight, offsetTop;

          offsetTop = this.$el.offset().top;
          availableHeight = $window.height();
          availableHeight -= $footer.outerHeight(true);
          availableHeight -= offsetTop;
          availableHeight -= bottomSpacing;
          return this.$el.height(Math.max(availableHeight, this._minHeight - offsetTop));
        };
        return this._resize();
      },
      _initializeDragAndDropHandling: function() {
        var _this = this;

        this.$el.on('dragstart', function(event, ui) {
          return _this._$pointerScrollable = _this.$el;
        });
        this.$el.on('drag', function(_arg, ui) {
          var pageX, pageY;

          pageX = _arg.pageX, pageY = _arg.pageY;
          clearTimeout(_this._checkScrollTimeout);
          _this._checkScroll = function() {
            var $pointerElement, $scrollable, offsetTop, scrollTop;

            ui.helper.hide();
            $pointerElement = $(document.elementFromPoint(pageX, pageY));
            ui.helper.show();
            $scrollable = $pointerElement.closest("." + CLASS_ATTRIBUTE);
            if (!$scrollable.length) {
              $scrollable = _this._$pointerScrollable;
            }
            scrollTop = $scrollable.scrollTop();
            offsetTop = $scrollable.offset().top;
            if (scrollTop > 0 && ui.offset.top < offsetTop) {
              $scrollable.scrollTop(scrollTop - SCROLL_RATE);
            } else if (ui.offset.top + ui.helper.height() > offsetTop + $scrollable.height()) {
              $scrollable.scrollTop(scrollTop + SCROLL_RATE);
            }
            _this._$pointerScrollable = $scrollable;
            return _this._checkScrollTimeout = setTimeout(_this._checkScroll, 50);
          };
          return _this._checkScroll();
        });
        return this.$el.on('dragstop', function(event, ui) {
          return clearTimeout(_this._checkScrollTimeout);
        });
      }
    };
  });

}).call(this);
