(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var RecipientModel, _ref;

    return RecipientModel = (function(_super) {
      __extends(RecipientModel, _super);

      function RecipientModel() {
        _ref = RecipientModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RecipientModel.prototype.resourceName = 'recipient';

      return RecipientModel;

    })(Backbone.Model);
  });

}).call(this);
