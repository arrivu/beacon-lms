(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/InputView'], function(InputView) {
    var SelectView, _ref;

    return SelectView = (function(_super) {
      __extends(SelectView, _super);

      function SelectView() {
        _ref = SelectView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectView.prototype.tagName = 'select';

      SelectView.prototype.className = 'select-view';

      SelectView.prototype.events = {
        'change': 'updateModel'
      };

      return SelectView;

    })(InputView);
  });

}).call(this);
