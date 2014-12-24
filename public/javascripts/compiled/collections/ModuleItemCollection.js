(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'compiled/models/ModuleItem'], function(PaginatedCollection, ModuleItem) {
    var ModuleItemCollection, _ref;

    return ModuleItemCollection = (function(_super) {
      __extends(ModuleItemCollection, _super);

      function ModuleItemCollection() {
        _ref = ModuleItemCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModuleItemCollection.prototype.model = ModuleItem;

      ModuleItemCollection.optionProperty('course_id');

      ModuleItemCollection.optionProperty('module_id');

      ModuleItemCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/modules/" + this.module_id + "/items";
      };

      return ModuleItemCollection;

    })(PaginatedCollection);
  });

}).call(this);
