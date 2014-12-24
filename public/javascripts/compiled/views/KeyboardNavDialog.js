(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!instructure', 'Backbone', 'jquery', 'jqueryui/dialog'], function(I18n, _arg, $) {
    var KeyboardNavDialog, View, _ref;

    View = _arg.View;
    return KeyboardNavDialog = (function(_super) {
      __extends(KeyboardNavDialog, _super);

      function KeyboardNavDialog() {
        _ref = KeyboardNavDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      KeyboardNavDialog.prototype.el = '#keyboard_navigation';

      KeyboardNavDialog.prototype.initialize = function() {
        KeyboardNavDialog.__super__.initialize.apply(this, arguments);
        this.bindOpenKeys;
        return this;
      };

      KeyboardNavDialog.prototype.render = function(content) {
        this.$el.html(content);
        return this;
      };

      KeyboardNavDialog.prototype.bindOpenKeys = function() {
        var activeElement,
          _this = this;

        activeElement = null;
        return $(document).keydown(function(e) {
          var commaOrQuestionMark;

          commaOrQuestionMark = e.keyCode === 188 || e.keyCode === 191;
          if (commaOrQuestionMark && !$(e.target).is(":input")) {
            e.preventDefault();
            if (_this.$el.is(":visible")) {
              _this.$el.dialog("close");
              if (activeElement) {
                return $(activeElement).focus();
              }
            } else {
              activeElement = document.activeElement;
              return _this.$el.dialog({
                title: I18n.t('titles.keyboard_shortcuts', "Keyboard Shortcuts"),
                width: 400,
                height: "auto",
                open: function() {
                  return $(".navigation_list:first", this).focus();
                },
                close: function() {
                  $("li", this).attr("tabindex", "");
                  if (activeElement) {
                    return $(activeElement).focus();
                  }
                }
              });
            }
          }
        });
      };

      return KeyboardNavDialog;

    })(View);
  });

}).call(this);
