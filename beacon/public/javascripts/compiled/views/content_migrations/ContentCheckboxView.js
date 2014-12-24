(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'jst/content_migrations/ContentCheckbox', 'jst/content_migrations/ContentCheckboxCollection', 'compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/CollectionView', 'compiled/str/TextHelper'], function($, Backbone, template, checkboxCollectionTemplate, CheckboxCollection, CollectionView, TextHelper) {
    var ContentCheckboxView, _ref;

    return ContentCheckboxView = (function(_super) {
      __extends(ContentCheckboxView, _super);

      function ContentCheckboxView() {
        this.fetchCheckboxes = __bind(this.fetchCheckboxes, this);        _ref = ContentCheckboxView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContentCheckboxView.prototype.template = template;

      ContentCheckboxView.prototype.tagName = 'li';

      ContentCheckboxView.prototype.attributes = function() {
        var attr, _ref1, _ref2;

        attr = {};
        attr.role = "treeitem";
        attr.id = "treeitem-" + this.cid;
        attr['data-type'] = this.model.get('type');
        attr['aria-checked'] = false;
        attr['aria-level'] = (_ref1 = this.model.collection) != null ? _ref1.options.ariaLevel : void 0;
        if ((_ref2 = this.model.collection) != null ? _ref2.isTopLevel : void 0) {
          attr["class"] = "top-level-treeitem";
        } else {
          attr["class"] = "normal-treeitem";
        }
        return attr;
      };

      ContentCheckboxView.prototype.els = {
        '[data-content=sublevelCheckboxes]': '$sublevelCheckboxes'
      };

      ContentCheckboxView.prototype.initialize = function() {
        ContentCheckboxView.__super__.initialize.apply(this, arguments);
        this.hasSubItemsUrl = !!this.model.get('sub_items_url');
        this.hasSubItems = !!this.model.get('sub_items');
        if (this.hasSubItemsUrl || this.hasSubItems) {
          return this.$el.on("fetchCheckboxes", this.fetchCheckboxes);
        }
      };

      ContentCheckboxView.prototype.toJSON = function() {
        var json, _ref1;

        json = ContentCheckboxView.__super__.toJSON.apply(this, arguments);
        json.hasSubCheckboxes = this.hasSubItems || this.hasSubItemsUrl;
        json.isTopLevel = (_ref1 = this.model.collection) != null ? _ref1.isTopLevel : void 0;
        json.iconClass = this.getIconClass();
        json.count = this.model.get('count');
        json.screenreaderType = {
          assignment_groups: 'group',
          folders: 'folders'
        }[this.model.get('type')];
        return json;
      };

      ContentCheckboxView.prototype.iconClasses = {
        course_settings: "icon-settings",
        syllabus_body: "icon-syllabus",
        context_modules: "icon-module",
        assignments: "icon-assignment",
        quizzes: "icon-quiz",
        assessment_question_banks: "icon-collection",
        discussion_topics: "icon-discussion",
        wiki_pages: "icon-note-light",
        context_external_tools: "icon-lti",
        announcements: "icon-announcement",
        calendar_events: "icon-calendar-days",
        rubrics: "icon-rubric",
        groups: "icon-group",
        learning_outcomes: "icon-standards",
        attachments: "icon-document",
        assignment_groups: "icon-folder",
        folders: "icon-folder"
      };

      ContentCheckboxView.prototype.getIconClass = function() {
        return this.iconClasses[this.model.get('type')];
      };

      ContentCheckboxView.prototype.afterRender = function() {
        var _ref1;

        if (this.hasSubItemsUrl || this.hasSubItems) {
          this.$el.attr('aria-expanded', false);
        }
        if (this.hasSubItems) {
          this.sublevelCheckboxes = new CheckboxCollection(this.model.get('sub_items'), {
            ariaLevel: ((_ref1 = this.model.collection) != null ? _ref1.ariaLevel : void 0) + 1
          });
          this.renderSublevelCheckboxes();
        }
        if (this.model.get('linked_resource')) {
          return this.attachLinkedResource();
        }
      };

      ContentCheckboxView.prototype.fetchCheckboxes = function(event, options) {
        var $target;

        if (options == null) {
          options = {};
        }
        event.preventDefault();
        event.stopPropagation();
        if (!this.hasSubItemsUrl) {
          return;
        }
        $target = $(event.currentTarget);
        if (!this.sublevelCheckboxes) {
          this.fetchSublevelCheckboxes(options.silent);
          return this.renderSublevelCheckboxes();
        }
      };

      ContentCheckboxView.prototype.fetchSublevelCheckboxes = function(silent) {
        var dfd, _ref1,
          _this = this;

        this.sublevelCheckboxes = new CheckboxCollection(null, {
          ariaLevel: ((_ref1 = this.model.collection) != null ? _ref1.ariaLevel : void 0) + 1
        });
        this.sublevelCheckboxes.url = this.model.get('sub_items_url');
        dfd = this.sublevelCheckboxes.fetch();
        dfd.done(function() {
          return _this.$el.trigger('doneFetchingCheckboxes', _this.$el.find("#checkbox-" + _this.cid));
        });
        if (!silent) {
          this.$el.disableWhileLoading(dfd);
        }
        return dfd;
      };

      ContentCheckboxView.prototype.renderSublevelCheckboxes = function() {
        var checkboxCollectionView;

        checkboxCollectionView = new CollectionView({
          collection: this.sublevelCheckboxes,
          itemView: ContentCheckboxView,
          el: this.$sublevelCheckboxes,
          template: checkboxCollectionTemplate
        });
        return checkboxCollectionView.render();
      };

      ContentCheckboxView.prototype.attachLinkedResource = function() {
        var linkedResource, property;

        linkedResource = this.model.get('linked_resource');
        property = "copy[" + linkedResource.type + "][id_" + linkedResource.migration_id + "]";
        return this.$el.find("#checkbox-" + this.cid).data('linkedResourceProperty', property);
      };

      return ContentCheckboxView;

    })(Backbone.View);
  });

}).call(this);
