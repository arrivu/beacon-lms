(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/views/QuickStartBar/MessageView'], function($, BaseMessageView) {
    var MessageView, _ref;

    return MessageView = (function(_super) {
      __extends(MessageView, _super);

      function MessageView() {
        _ref = MessageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageView.prototype.render = function(opts) {
        if (opts == null) {
          opts = {};
        }
        MessageView.__super__.render.call(this, opts);
        this.$('.recipient_finder').html("&nbsp;");
        $("<input>", {
          type: "hidden",
          name: "recipients[]",
          value: "group_" + ENV.GROUP_ID
        }).appendTo(this.$('.course_finder'));
        return this;
      };

      return MessageView;

    })(BaseMessageView);
  });

}).call(this);
