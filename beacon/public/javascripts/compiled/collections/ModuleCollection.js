(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/Module'], function(PaginatedCollection, Module) {
    var ModuleCollection, _ref;

    return ModuleCollection = (function(_super) {
      __extends(ModuleCollection, _super);

      function ModuleCollection() {
        _ref = ModuleCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModuleCollection.prototype.model = Module;

      ModuleCollection.optionProperty('course_id');

      ModuleCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/modules";
      };

      return ModuleCollection;

    })(PaginatedCollection);
  });

}).call(this);
