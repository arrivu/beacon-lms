(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/views/SortableCollectionView', 'compiled/views/assignments/AssignmentGroupListItemView', 'jst/assignments/AssignmentGroupList', 'jst/assignments/NoAssignmentsListItem'], function($, _, Backbone, SortableCollectionView, AssignmentGroupListItemView, template, NoAssignmentsListItem) {
    var AssignmentGroupListView, _ref;

    return AssignmentGroupListView = (function(_super) {
      __extends(AssignmentGroupListView, _super);

      function AssignmentGroupListView() {
        this.expand = __bind(this.expand, this);
        this.collapse = __bind(this.collapse, this);
        this.handleExtraClick = __bind(this.handleExtraClick, this);
        this.renderOnReset = __bind(this.renderOnReset, this);
        this.renderItem = __bind(this.renderItem, this);
        this.render = __bind(this.render, this);        _ref = AssignmentGroupListView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AssignmentGroupListView.optionProperty('course');

      AssignmentGroupListView.prototype.template = template;

      AssignmentGroupListView.prototype.itemView = AssignmentGroupListItemView;

      AssignmentGroupListView.optionProperty('assignment_sort_base_url');

      AssignmentGroupListView.prototype.render = function() {
        return AssignmentGroupListView.__super__.render.call(this, ENV.PERMISSIONS.manage);
      };

      AssignmentGroupListView.prototype.renderItem = function(model) {
        var view;

        view = AssignmentGroupListView.__super__.renderItem.apply(this, arguments);
        model.groupView.collapseIfNeeded();
        return view;
      };

      AssignmentGroupListView.prototype.createItemView = function(model) {
        var options;

        options = {
          parentCollection: this.collection,
          childKey: 'assignments',
          groupKey: 'assignment_group_id',
          groupId: model.id,
          reorderURL: this.createReorderURL(model.id),
          noItemTemplate: NoAssignmentsListItem
        };
        return new this.itemView($.extend({}, this.itemViewOptions || {}, {
          model: model
        }, options));
      };

      AssignmentGroupListView.prototype.createReorderURL = function(id) {
        return this.assignment_sort_base_url + "/" + id + "/reorder";
      };

      AssignmentGroupListView.prototype.attachCollection = function() {
        AssignmentGroupListView.__super__.attachCollection.apply(this, arguments);
        this.itemViewOptions = {
          course: this.course
        };
        this.collection.on('render', this.render);
        this.collection.on('add', this.render);
        this.collection.on('remove', this.render);
        return this.collection.on('change:groupWeights', this.render);
      };

      AssignmentGroupListView.prototype.renderOnReset = function() {
        this.firstResetLanded = true;
        return AssignmentGroupListView.__super__.renderOnReset.apply(this, arguments);
      };

      AssignmentGroupListView.prototype.toJSON = function() {
        var data;

        data = AssignmentGroupListView.__super__.toJSON.apply(this, arguments);
        return _.extend({}, data, {
          firstResetLanded: this.firstResetLanded
        });
      };

      AssignmentGroupListView.prototype._initSort = function() {
        AssignmentGroupListView.__super__._initSort.apply(this, arguments);
        this.$list.on('sortstart', this.collapse);
        return this.$list.on('sortstop', this.expand);
      };

      AssignmentGroupListView.prototype.handleExtraClick = function(e) {
        e.stopImmediatePropagation();
        return $(e.target).off('click', this.handleExtraClick);
      };

      AssignmentGroupListView.prototype.collapse = function(e, ui) {
        var arrow, id, item;

        item = ui.item;
        id = item.children(":first").attr('data-id');
        item.find("#assignment_group_" + id + "_assignments").slideUp(100);
        ui.item.css("height", "auto");
        arrow = item.find('i').first();
        return arrow.removeClass('icon-mini-arrow-down').addClass('icon-mini-arrow-right');
      };

      AssignmentGroupListView.prototype.expand = function(e, ui) {
        var $toggler, ag, arrow, id, item,
          _this = this;

        item = ui.item;
        $toggler = item.find('.element_toggler').first();
        $toggler.on('click', this.handleExtraClick);
        setTimeout(function() {
          return $toggler.off('click', _this.handleExtraClick);
        }, 50);
        id = item.children(":first").attr('data-id');
        ag = this.collection.findWhere({
          id: id
        });
        if (ag && ag.groupView.shouldBeExpanded()) {
          item.find("#assignment_group_" + id + "_assignments").slideDown(100);
          arrow = item.find('i').first();
          return arrow.addClass('icon-mini-arrow-down').removeClass('icon-mini-arrow-right');
        }
      };

      return AssignmentGroupListView;

    })(SortableCollectionView);
  });

}).call(this);
