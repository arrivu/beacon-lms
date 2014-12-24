(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var AvatarUploadBaseView, _ref;

    return AvatarUploadBaseView = (function(_super) {
      __extends(AvatarUploadBaseView, _super);

      function AvatarUploadBaseView() {
        _ref = AvatarUploadBaseView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AvatarUploadBaseView.prototype.setup = $.noop;

      AvatarUploadBaseView.prototype.teardown = $.noop;

      AvatarUploadBaseView.prototype.render = function() {
        AvatarUploadBaseView.__super__.render.apply(this, arguments);
        this.$el.data('view', this);
        return this;
      };

      return AvatarUploadBaseView;

    })(Backbone.View);
  });

}).call(this);
