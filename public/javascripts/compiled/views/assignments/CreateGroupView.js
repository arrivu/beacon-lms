(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/util/round', 'i18n!assignments', 'jquery', 'underscore', 'compiled/models/AssignmentGroup', 'compiled/collections/NeverDropCollection', 'compiled/views/assignments/NeverDropCollectionView', 'compiled/views/DialogFormView', 'jst/assignments/CreateGroup', 'jst/EmptyDialogFormWrapper'], function(round, I18n, $, _, AssignmentGroup, NeverDropCollection, NeverDropCollectionView, DialogFormView, template, wrapper) {
    var CreateGroupView, SHORT_HEIGHT, _ref;

    SHORT_HEIGHT = 250;
    return CreateGroupView = (function(_super) {
      __extends(CreateGroupView, _super);

      function CreateGroupView() {
        _ref = CreateGroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CreateGroupView.prototype.defaults = {
        width: 600,
        height: 500
      };

      CreateGroupView.prototype.events = _.extend({}, CreateGroupView.prototype.events, {
        'click .dialog_closer': 'close',
        'blur .group_weight': 'roundWeight'
      });

      CreateGroupView.prototype.els = {
        '.never_drop_rules_group': '$neverDropContainer'
      };

      CreateGroupView.prototype.template = template;

      CreateGroupView.prototype.wrapperTemplate = wrapper;

      CreateGroupView.optionProperty('assignmentGroups');

      CreateGroupView.optionProperty('assignmentGroup');

      CreateGroupView.optionProperty('course');

      CreateGroupView.prototype.messages = {
        non_number: I18n.t('non_number', 'You must use a number'),
        positive_number: I18n.t('positive_number', 'You must use a positive number'),
        max_number: I18n.t('higher_than_max', 'You cannot use a number greater than the number of assignments'),
        no_name_error: I18n.t('no_name_error', 'A name is required'),
        name_too_long_error: I18n.t('name_too_long_error', 'Name is too long')
      };

      CreateGroupView.prototype.initialize = function() {
        CreateGroupView.__super__.initialize.apply(this, arguments);
        return this.model = this.assignmentGroup || new AssignmentGroup({
          assignments: []
        });
      };

      CreateGroupView.prototype.onSaveSuccess = function() {
        CreateGroupView.__super__.onSaveSuccess.apply(this, arguments);
        if (this.assignmentGroup) {
          return this.model.collection.trigger('render', this.model.collection);
        } else {
          this.assignmentGroups.add(this.model);
          this.model = new AssignmentGroup({
            assignments: []
          });
          return this.render();
        }
      };

      CreateGroupView.prototype.getFormData = function() {
        var data, _ref1;

        data = CreateGroupView.__super__.getFormData.apply(this, arguments);
        if (data.rules) {
          if (_.contains(["", "0"], data.rules.drop_lowest)) {
            delete data.rules.drop_lowest;
          }
          if (_.contains(["", "0"], data.rules.drop_highest)) {
            delete data.rules.drop_highest;
          }
          if (((_ref1 = data.rules.never_drop) != null ? _ref1.length : void 0) === 0) {
            delete data.rules.never_drop;
          }
        }
        return data;
      };

      CreateGroupView.prototype.validateFormData = function(data) {
        var as, errors, max,
          _this = this;

        max = 0;
        if (this.assignmentGroup) {
          as = this.assignmentGroup.get('assignments');
          if (as != null) {
            max = as.size();
          }
        }
        errors = {};
        if (data.name.length > 255) {
          errors["name"] = [
            {
              type: 'name_too_long_error',
              message: this.messages.name_too_long_error
            }
          ];
        }
        if (data.name === "") {
          errors["name"] = [
            {
              type: 'no_name_error',
              message: this.messages.no_name_error
            }
          ];
        }
        _.each(data.rules, function(value, name) {
          var field, val;

          if (name === 'never_drop') {
            return;
          }
          val = parseInt(value);
          field = "rules[" + name + "]";
          if (isNaN(val)) {
            errors[field] = [
              {
                type: 'number',
                message: _this.messages.non_number
              }
            ];
          }
          if (val < 0) {
            errors[field] = [
              {
                type: 'positive_number',
                message: _this.messages.positive_number
              }
            ];
          }
          if (val > max) {
            return errors[field] = [
              {
                type: 'maximum',
                message: _this.messages.max_number
              }
            ];
          }
        });
        return errors;
      };

      CreateGroupView.prototype.showWeight = function() {
        var course, _ref1;

        course = this.course || ((_ref1 = this.model.collection) != null ? _ref1.course : void 0);
        return course != null ? course.get('apply_assignment_group_weights') : void 0;
      };

      CreateGroupView.prototype.checkGroupWeight = function() {
        if (this.showWeight()) {
          return this.$el.find('.group_weight').removeAttr("disabled");
        } else {
          return this.$el.find('.group_weight').attr("disabled", "disabled");
        }
      };

      CreateGroupView.prototype.getNeverDrops = function() {
        var rules;

        this.$neverDropContainer.empty();
        rules = this.model.rules();
        this.never_drops = new NeverDropCollection([], {
          assignments: this.model.get('assignments'),
          ag_id: this.model.get('id') || 'new'
        });
        this.ndCollectionView = new NeverDropCollectionView({
          collection: this.never_drops
        });
        this.$neverDropContainer.append(this.ndCollectionView.render().el);
        if (rules && rules.never_drop) {
          return this.never_drops.reset(rules.never_drop, {
            parse: true
          });
        }
      };

      CreateGroupView.prototype.roundWeight = function(e) {
        var rounded_value, value;

        value = $(e.target).val();
        rounded_value = round(parseFloat(value), 2);
        return $(e.target).val(rounded_value);
      };

      CreateGroupView.prototype.toJSON = function() {
        var data, _ref1, _ref2;

        data = this.model.toJSON();
        return _.extend(data, {
          disable_weight: !this.showWeight(),
          group_weight: this.showWeight() ? data.group_weight : null,
          label_id: this.model.get('id') || 'new',
          drop_lowest: ((_ref1 = this.model.rules()) != null ? _ref1.drop_lowest : void 0) || 0,
          drop_highest: ((_ref2 = this.model.rules()) != null ? _ref2.drop_highest : void 0) || 0,
          editable_drop: this.model.get('assignments').length > 0,
          number_input: !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? "text" : "number"
        });
      };

      CreateGroupView.prototype.openAgain = function() {
        if (this.model.get('assignments').length === 0) {
          this.setDimensions(this.defaults.width, SHORT_HEIGHT);
        }
        CreateGroupView.__super__.openAgain.apply(this, arguments);
        this.checkGroupWeight();
        return this.getNeverDrops();
      };

      return CreateGroupView;

    })(DialogFormView);
  });

}).call(this);
