(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'jquery', 'underscore', 'Backbone', 'compiled/views/CollectionView', 'compiled/views/groups/manage/GroupCategoryView', 'compiled/views/groups/manage/GroupCategoryCreateView', 'compiled/models/GroupCategory', 'jst/groups/manage/groupCategories', 'jst/groups/manage/groupCategoryTab', 'jqueryui/tabs'], function(I18n, $, _, _arg, CollectionView, GroupCategoryView, GroupCategoryCreateView, GroupCategory, groupCategoriesTemplate, tabTemplate) {
    var GroupCategoriesView, View, _ref;

    View = _arg.View;
    return GroupCategoriesView = (function(_super) {
      __extends(GroupCategoriesView, _super);

      function GroupCategoriesView() {
        _ref = GroupCategoriesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategoriesView.prototype.template = groupCategoriesTemplate;

      GroupCategoriesView.prototype.className = 'group_categories_area';

      GroupCategoriesView.prototype.els = _.extend({}, CollectionView.prototype.els, {
        '#group_categories_tabs': '$tabs',
        'li.static': '$static',
        '#add-group-set': '$addGroupSetButton',
        '.empty-groupset-instructions': '$emptyInstructions'
      });

      GroupCategoriesView.prototype.events = {
        'click #add-group-set': 'addGroupSet',
        'tabsactivate #group_categories_tabs': 'activatedTab'
      };

      GroupCategoriesView.prototype.itemView = View.extend({
        tagName: 'li',
        template: function() {
          var _ref1;

          return tabTemplate(_.extend(this.model.present(), {
            id: (_ref1 = this.model.id) != null ? _ref1 : this.model.cid
          }));
        }
      });

      GroupCategoriesView.prototype.render = function() {
        GroupCategoriesView.__super__.render.apply(this, arguments);
        if (this.collection.length > 1) {
          this.reorder();
        }
        this.refreshTabs();
        return this.loadTabFromUrl();
      };

      GroupCategoriesView.prototype.refreshTabs = function() {
        if (this.collection.length > 0) {
          this.$tabs.find('ul.ui-tabs-nav li.static').remove();
          this.$tabs.find('ul.ui-tabs-nav').prepend(this.$static);
        }
        if (this.$tabs.data("tabs")) {
          this.$tabs.tabs("refresh").show();
        } else {
          this.$tabs.tabs({
            cookie: {}
          }).show();
        }
        this.$tabs.tabs({
          beforeActivate: function(event, ui) {
            return !ui.newTab.hasClass('static');
          }
        });
        if (this.collection.length > 0) {
          this.$emptyInstructions.hide();
        } else {
          this.$emptyInstructions.show();
          this.$tabs.hide();
        }
        this.$tabs.find('li.static a').unbind();
        return this.$tabs.on('keydown', 'li.static', function(event) {
          event.stopPropagation();
          if (event.keyCode === 13 || event.keyCode === 32) {
            return window.location.href = $(this).find('a').attr('href');
          }
        });
      };

      GroupCategoriesView.prototype.loadTabFromUrl = function() {
        var id, model;

        if (location.hash === "#new") {
          return this.addGroupSet();
        } else {
          id = location.hash.split('-')[1];
          if (id != null) {
            model = this.collection.get(id);
            if (model) {
              return this.$tabs.tabs({
                active: this.tabOffsetOfModel(model)
              });
            }
          }
        }
      };

      GroupCategoriesView.prototype.tabOffsetOfModel = function(model) {
        var index, numStatic;

        index = this.collection.indexOf(model);
        numStatic = this.$static.length;
        return index + numStatic;
      };

      GroupCategoriesView.prototype.createItemView = function(model) {
        var $panel, panelId, view, _ref1,
          _this = this;

        panelId = "tab-" + ((_ref1 = model.id) != null ? _ref1 : model.cid);
        $panel = $('<div/>').addClass('tab-panel').attr('id', panelId).data('loaded', false).data('model', model);
        this.$tabs.append($panel);
        if (this.$tabs.find('.tab-panel').length === 1) {
          this.loadPanelView($panel, model);
        }
        view = GroupCategoriesView.__super__.createItemView.apply(this, arguments);
        view.listenTo(model, 'change', function() {
          view.render();
          _this.reorder();
          return _this.refreshTabs();
        });
        return view;
      };

      GroupCategoriesView.prototype.renderItem = function() {
        GroupCategoriesView.__super__.renderItem.apply(this, arguments);
        return this.refreshTabs();
      };

      GroupCategoriesView.prototype.removeItem = function(model) {
        var _ref1;

        GroupCategoriesView.__super__.removeItem.apply(this, arguments);
        model.itemView.remove();
        if ((_ref1 = model.panelView) != null) {
          _ref1.remove();
        }
        return this.refreshTabs();
      };

      GroupCategoriesView.prototype.addGroupSet = function(e) {
        var cat, _ref1,
          _this = this;

        if (e != null) {
          e.preventDefault();
        }
        if ((_ref1 = this.createView) == null) {
          this.createView = new GroupCategoryCreateView({
            collection: this.collection,
            trigger: this.$addGroupSetButton
          });
        }
        cat = new GroupCategory;
        cat.once('sync', function() {
          window.location.hash = "tab-" + cat.id;
          _this.collection.add(cat);
          _this.reorder();
          _this.refreshTabs();
          _this.$tabs.tabs({
            active: _this.tabOffsetOfModel(cat)
          });
          return cat.set("create_group_count", null);
        });
        this.createView.model = cat;
        return this.createView.open();
      };

      GroupCategoriesView.prototype.activatedTab = function(event, ui) {
        var $panel;

        $panel = ui.newPanel;
        return this.loadPanelView($panel);
      };

      GroupCategoriesView.prototype.loadPanelView = function($panel) {
        var categoryView, model;

        if (!$panel.data('loaded')) {
          model = $panel.data('model');
          categoryView = new GroupCategoryView({
            model: model
          });
          categoryView.setElement($panel);
          categoryView.render();
          model.panelView = $panel;
          $panel.data('loaded', true);
        }
        return $panel;
      };

      GroupCategoriesView.prototype.toJSON = function() {
        var context, json;

        json = GroupCategoriesView.__super__.toJSON.apply(this, arguments);
        json.ENV = ENV;
        context = ENV.context_asset_string.split('_');
        json.context = context[0];
        json.isCourse = json.context === "course";
        json.context_id = context[1];
        return json;
      };

      return GroupCategoriesView;

    })(CollectionView);
  });

}).call(this);
