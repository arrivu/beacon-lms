(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/util/round', 'Backbone', 'jst/assignments/AssignmentGroupWeights'], function($, round, Backbone, AssignmentGroupWeightsTemplate) {
    var AssignmentGroupWeightsView, _ref;

    return AssignmentGroupWeightsView = (function(_super) {
      __extends(AssignmentGroupWeightsView, _super);

      function AssignmentGroupWeightsView() {
        _ref = AssignmentGroupWeightsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupWeightsView.prototype.template = AssignmentGroupWeightsTemplate;

      AssignmentGroupWeightsView.prototype.tagName = 'tr';

      AssignmentGroupWeightsView.prototype.className = 'ag-weights-tr';

      AssignmentGroupWeightsView.prototype.events = {
        'blur .group_weight_value': 'roundWeight'
      };

      AssignmentGroupWeightsView.prototype.roundWeight = function(e) {
        var rounded_value, value;

        value = $(e.target).val();
        rounded_value = round(parseFloat(value), 2);
        return $(e.target).val(rounded_value);
      };

      AssignmentGroupWeightsView.prototype.findWeight = function() {
        return round(parseFloat(this.$el.find('.group_weight_value').val()), 2);
      };

      return AssignmentGroupWeightsView;

    })(Backbone.View);
  });

}).call(this);
