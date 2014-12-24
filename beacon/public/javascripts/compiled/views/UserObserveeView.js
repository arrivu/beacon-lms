(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jst/UserObservee', 'Backbone'], function(template, Backbone) {
    var UserObserveeView, _ref;

    return UserObserveeView = (function(_super) {
      __extends(UserObserveeView, _super);

      function UserObserveeView() {
        _ref = UserObserveeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UserObserveeView.prototype.template = template;

      UserObserveeView.prototype.tagName = 'li';

      return UserObserveeView;

    })(Backbone.View);
  });

}).call(this);
