(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/modules/item_types/SelectFileView'], function(Backbone, template) {
    var SelectFileView, _ref;

    return SelectFileView = (function(_super) {
      __extends(SelectFileView, _super);

      function SelectFileView() {
        _ref = SelectFileView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectFileView.prototype.template = template;

      return SelectFileView;

    })(Backbone.View);
  });

}).call(this);
