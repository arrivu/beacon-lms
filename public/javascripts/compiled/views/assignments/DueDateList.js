(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/views/assignments/DueDateView', 'compiled/views/assignments/SectionDropdownView'], function(Backbone, _, DueDateView, SectionDropdownView) {
    var DueDateList, _ref;

    return DueDateList = (function(_super) {
      __extends(DueDateList, _super);

      function DueDateList() {
        this.addDueDateView = __bind(this.addDueDateView, this);
        this.getOverrides = __bind(this.getOverrides, this);
        this.hideOrShowRemoveButtons = __bind(this.hideOrShowRemoveButtons, this);
        this.afterRender = __bind(this.afterRender, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this.updateOverrides = __bind(this.updateOverrides, this);
        this.reRenderSections = __bind(this.reRenderSections, this);
        this._removeDueDateView = __bind(this._removeDueDateView, this);        _ref = DueDateList.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DueDateList.prototype.initialize = function(options) {
        var _this = this;

        DueDateList.__super__.initialize.apply(this, arguments);
        this.dueDateList = this.model;
        this.dueDateViews = [];
        this.dueDateList.overrides.forEach(function(override) {
          return _this.addDueDateView(override, false);
        });
        this.dueDateList.overrides.on('add', this.addDueDateView);
        return this.dueDateList.overrides.on('change:course_section_id', this.reRenderSections);
      };

      DueDateList.prototype._removeDueDateView = function(override) {
        this.dueDateViews = _.reject(this.dueDateViews, function(dueDateView) {
          return dueDateView.model === override;
        });
        this.dueDateList.overrides.remove(override);
        override.off();
        this.reRenderSections();
        this.hideOrShowRemoveButtons();
        return this.trigger('remove:override');
      };

      DueDateList.prototype.reRenderSections = function() {
        var _this = this;

        return _.each(this.dueDateViews, function(dueDateView) {
          return dueDateView.reRenderSections(_this.dueDateList.availableSectionsPlusOverride(dueDateView.model));
        });
      };

      DueDateList.prototype.updateOverrides = function() {
        return _.each(this.dueDateViews, function(dueDateView) {
          return dueDateView.updateOverride();
        });
      };

      DueDateList.prototype.validateBeforeSave = function(data, errors) {
        var override, _i, _len, _ref1;

        _ref1 = data.assignment_overrides || [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          override = _ref1[_i];
          this.dueDateViews[0].validateBeforeSave(override, errors);
        }
        return errors;
      };

      DueDateList.prototype.afterRender = function() {
        var _this = this;

        _.each(this.dueDateViews, function(view) {
          return _this.$el.append(view.render().el);
        });
        return this.hideOrShowRemoveButtons();
      };

      DueDateList.prototype.hideOrShowRemoveButtons = function() {
        var firstDueDateView;

        firstDueDateView = this.dueDateViews[0];
        if (firstDueDateView != null) {
          if (this.dueDateViews.length > 1) {
            return firstDueDateView.showRemoveButton();
          } else {
            return firstDueDateView.hideRemoveButton();
          }
        }
      };

      DueDateList.prototype._generateDueDateView = function(assignmentOverride) {
        return new DueDateView({
          model: assignmentOverride,
          views: {
            'section-list': new SectionDropdownView({
              sections: this.dueDateList.availableSectionsPlusOverride(assignmentOverride),
              override: assignmentOverride
            })
          }
        });
      };

      DueDateList.prototype.getOverrides = function() {
        return this.overrides.toJSON();
      };

      DueDateList.prototype.addDueDateView = function(assignmentOverride, render) {
        var dueDateView, row;

        if (render == null) {
          render = true;
        }
        dueDateView = this._generateDueDateView(assignmentOverride);
        dueDateView.on('remove', this._removeDueDateView);
        this.dueDateViews.push(dueDateView);
        this.hideOrShowRemoveButtons();
        if (render) {
          row = dueDateView.render().$el;
          this.$el.append(row);
          this.reRenderSections();
          return row.find(".section-list").focus();
        }
      };

      return DueDateList;

    })(Backbone.View);
  });

}).call(this);
