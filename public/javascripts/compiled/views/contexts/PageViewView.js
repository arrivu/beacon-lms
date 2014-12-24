(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/PaginatedView', 'jst/contexts/PageView'], function($, _, PaginatedView, pageViewTemplate) {
    var PageViewView, _ref;

    return PageViewView = (function(_super) {
      __extends(PageViewView, _super);

      function PageViewView() {
        _ref = PageViewView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PageViewView.prototype.initialize = function(_arg) {
        var fetchOptions;

        fetchOptions = _arg.fetchOptions;
        this.paginationScrollContainer = this.$el.parent();
        return PageViewView.__super__.initialize.call(this, {
          fetchOptions: fetchOptions
        });
      };

      PageViewView.prototype.render = function() {
        var html;

        html = _.map(this.collection.models, this.renderPageView);
        this.$el.append(html.join(''));
        return PageViewView.__super__.render.apply(this, arguments);
      };

      PageViewView.prototype.renderPageView = function(pageView) {
        return pageViewTemplate(pageView.toJSON());
      };

      return PageViewView;

    })(PaginatedView);
  });

}).call(this);
