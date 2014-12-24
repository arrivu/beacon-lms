(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var ContentCheckbox, _ref;

    return ContentCheckbox = (function(_super) {
      __extends(ContentCheckbox, _super);

      function ContentCheckbox() {
        _ref = ContentCheckbox.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return ContentCheckbox;

    })(Backbone.Model);
  });

}).call(this);
