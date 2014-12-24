(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/Assignment'], function(Backbone, Assignment) {
    var AssignmentCollection, _ref;

    return AssignmentCollection = (function(_super) {
      __extends(AssignmentCollection, _super);

      function AssignmentCollection() {
        _ref = AssignmentCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentCollection.prototype.model = Assignment;

      AssignmentCollection.prototype.comparator = 'position';

      return AssignmentCollection;

    })(Backbone.Collection);
  });

}).call(this);
