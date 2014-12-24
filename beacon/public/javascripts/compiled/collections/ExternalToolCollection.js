(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/ExternalTool'], function(PaginatedCollection, ExternalTool) {
    var ExternalToolCollection, _ref;

    return ExternalToolCollection = (function(_super) {
      __extends(ExternalToolCollection, _super);

      function ExternalToolCollection() {
        _ref = ExternalToolCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalToolCollection.prototype.model = ExternalTool;

      return ExternalToolCollection;

    })(PaginatedCollection);
  });

}).call(this);
