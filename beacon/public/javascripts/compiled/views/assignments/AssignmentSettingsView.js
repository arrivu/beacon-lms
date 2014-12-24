(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/util/round', 'underscore', 'compiled/views/DialogFormView', 'jst/EmptyDialogFormWrapper', 'jst/assignments/AssignmentSettings'], function(round, _, DialogFormView, wrapper, assignmentSettingsTemplate) {
    var AssignmentSettingsView, _ref;

    return AssignmentSettingsView = (function(_super) {
      __extends(AssignmentSettingsView, _super);

      function AssignmentSettingsView() {
        _ref = AssignmentSettingsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentSettingsView.prototype.template = assignmentSettingsTemplate;

      AssignmentSettingsView.prototype.wrapperTemplate = wrapper;

      AssignmentSettingsView.prototype.defaults = {
        width: 450,
        height: 500,
        collapsedHeight: 175
      };

      AssignmentSettingsView.prototype.events = _.extend({}, AssignmentSettingsView.prototype.events, {
        'click .dialog_closer': 'close',
        'change #apply_assignment_group_weights': 'toggleTableByClick',
        'keyup .group_weight_value': 'updateTotalWeight'
      });

      AssignmentSettingsView.optionProperty('assignmentGroups');

      AssignmentSettingsView.optionProperty('weightsView');

      AssignmentSettingsView.prototype.initialize = function() {
        AssignmentSettingsView.__super__.initialize.apply(this, arguments);
        return this.weights = [];
      };

      AssignmentSettingsView.prototype.openAgain = function() {
        AssignmentSettingsView.__super__.openAgain.apply(this, arguments);
        this.toggleTableByModel();
        return this.addAssignmentGroups();
      };

      AssignmentSettingsView.prototype.saveFormData = function(data) {
        var new_weight, v, _i, _len, _ref1;

        if (data == null) {
          data = null;
        }
        _ref1 = this.weights;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          v = _ref1[_i];
          new_weight = v.findWeight();
          v.model.set('group_weight', new_weight);
          v.model.save();
        }
        return AssignmentSettingsView.__super__.saveFormData.call(this, data);
      };

      AssignmentSettingsView.prototype.onSaveSuccess = function() {
        AssignmentSettingsView.__super__.onSaveSuccess.apply(this, arguments);
        return this.assignmentGroups.trigger('change:groupWeights');
      };

      AssignmentSettingsView.prototype.toggleTableByModel = function() {
        var checked;

        checked = this.model.get('apply_assignment_group_weights');
        return this.toggleWeightsTable(checked);
      };

      AssignmentSettingsView.prototype.toggleTableByClick = function(e) {
        var checked;

        checked = $(e.currentTarget).is(':checked');
        return this.toggleWeightsTable(checked);
      };

      AssignmentSettingsView.prototype.toggleWeightsTable = function(show) {
        if (show) {
          this.$('#ag_weights_wrapper').show();
          this.$('#apply_assignment_group_weights').prop('checked', true);
          return this.setDimensions(null, this.defaults.height);
        } else {
          this.$('#ag_weights_wrapper').hide();
          this.$('#apply_assignment_group_weights').prop('checked', false);
          return this.setDimensions(null, this.defaults.collapsedHeight);
        }
      };

      AssignmentSettingsView.prototype.addAssignmentGroups = function() {
        var g, total_weight, v, _i, _len, _ref1;

        this.clearWeights();
        total_weight = 0;
        _ref1 = this.assignmentGroups.models;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          g = _ref1[_i];
          v = new this.weightsView({
            model: g
          });
          v.render();
          this.$el.find('#assignment_groups_weights tbody').append(v.el);
          this.weights.push(v);
          total_weight += v.findWeight() || 0;
        }
        total_weight = round(total_weight, 2);
        return this.$el.find('#percent_total').html(total_weight + "%");
      };

      AssignmentSettingsView.prototype.clearWeights = function() {
        this.weights = [];
        return this.$el.find('#assignment_groups_weights tbody').empty();
      };

      AssignmentSettingsView.prototype.updateTotalWeight = function() {
        var total_weight, v, _i, _len, _ref1;

        total_weight = 0;
        _ref1 = this.weights;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          v = _ref1[_i];
          total_weight += v.findWeight() || 0;
        }
        total_weight = round(total_weight, 2);
        return this.$el.find('#percent_total').html(total_weight + "%");
      };

      AssignmentSettingsView.prototype.toJSON = function() {
        var data;

        data = AssignmentSettingsView.__super__.toJSON.apply(this, arguments);
        return data.course;
      };

      return AssignmentSettingsView;

    })(DialogFormView);
  });

}).call(this);
