(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/content_migrations/ContentCheckbox'], function(Backbone, CheckboxModel) {
    var ContentCheckboxCollection, _ref;

    return ContentCheckboxCollection = (function(_super) {
      __extends(ContentCheckboxCollection, _super);

      function ContentCheckboxCollection() {
        _ref = ContentCheckboxCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContentCheckboxCollection.optionProperty('courseID');

      ContentCheckboxCollection.optionProperty('migrationID');

      ContentCheckboxCollection.optionProperty('isTopLevel');

      ContentCheckboxCollection.optionProperty('ariaLevel');

      ContentCheckboxCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.courseID + "/content_migrations/" + this.migrationID + "/selective_data";
      };

      ContentCheckboxCollection.prototype.model = CheckboxModel;

      return ContentCheckboxCollection;

    })(Backbone.Collection);
  });

}).call(this);
