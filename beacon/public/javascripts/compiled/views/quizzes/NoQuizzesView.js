(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'jst/quizzes/NoQuizzesView'], function($, _, template) {
    var ItemGroupView, _ref;

    return ItemGroupView = (function(_super) {
      __extends(ItemGroupView, _super);

      function ItemGroupView() {
        _ref = ItemGroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ItemGroupView.prototype.template = template;

      ItemGroupView.prototype.tagName = 'div';

      ItemGroupView.prototype.className = 'item-group-condensed';

      return ItemGroupView;

    })(Backbone.View);
  });

}).call(this);
