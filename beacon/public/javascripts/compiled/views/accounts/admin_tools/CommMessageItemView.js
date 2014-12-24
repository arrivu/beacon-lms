(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/accounts/admin_tools/commMessageItem'], function(Backbone, template) {
    var CommMessageItemView, _ref;

    return CommMessageItemView = (function(_super) {
      __extends(CommMessageItemView, _super);

      function CommMessageItemView() {
        _ref = CommMessageItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommMessageItemView.prototype.tagName = 'li';

      CommMessageItemView.prototype.className = 'message';

      CommMessageItemView.prototype.template = template;

      return CommMessageItemView;

    })(Backbone.View);
  });

}).call(this);
