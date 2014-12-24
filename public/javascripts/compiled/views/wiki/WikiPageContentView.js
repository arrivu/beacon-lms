(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'jst/wiki/WikiPageContent'], function($, Backbone, template) {
    var WikiPageContentView, _ref;

    return WikiPageContentView = (function(_super) {
      __extends(WikiPageContentView, _super);

      function WikiPageContentView() {
        _ref = WikiPageContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageContentView.prototype.tagName = 'article';

      WikiPageContentView.prototype.className = 'show-content user_content';

      WikiPageContentView.prototype.template = template;

      WikiPageContentView.optionProperty('modules_path');

      WikiPageContentView.optionProperty('wiki_pages_path');

      WikiPageContentView.optionProperty('wiki_page_edit_path');

      WikiPageContentView.optionProperty('wiki_page_history_path');

      WikiPageContentView.optionProperty('WIKI_RIGHTS');

      WikiPageContentView.optionProperty('PAGE_RIGHTS');

      WikiPageContentView.optionProperty('course_id');

      WikiPageContentView.optionProperty('course_home');

      WikiPageContentView.optionProperty('course_title');

      WikiPageContentView.prototype.initialize = function() {
        WikiPageContentView.__super__.initialize.apply(this, arguments);
        this.WIKI_RIGHTS || (this.WIKI_RIGHTS = {});
        this.PAGE_RIGHTS || (this.PAGE_RIGHTS = {});
        return this.setModel(this.model);
      };

      WikiPageContentView.prototype.afterRender = function() {
        WikiPageContentView.__super__.afterRender.apply(this, arguments);
        $.publish('userContent/change');
        return this.trigger('render');
      };

      WikiPageContentView.prototype.setModel = function(model) {
        var _ref1, _ref2, _ref3,
          _this = this;

        if ((_ref1 = this.model) != null) {
          _ref1.off(null, null, this);
        }
        this.model = model;
        if ((_ref2 = this.model) != null) {
          _ref2.on('change:title', (function() {
            return _this.render();
          }), this);
        }
        if ((_ref3 = this.model) != null) {
          _ref3.on('change:body', (function() {
            return _this.render();
          }), this);
        }
        return this.render();
      };

      WikiPageContentView.prototype.toJSON = function() {
        var json, _ref1;

        json = WikiPageContentView.__super__.toJSON.apply(this, arguments);
        json.modules_path = this.modules_path;
        json.wiki_pages_path = this.wiki_pages_path;
        json.wiki_page_edit_path = this.wiki_page_edit_path;
        json.wiki_page_history_path = this.wiki_page_history_path;
        json.course_home = this.course_home;
        json.course_title = this.course_title;
        json.CAN = {
          VIEW_PAGES: !!this.WIKI_RIGHTS.read,
          PUBLISH: !!this.WIKI_RIGHTS.manage && json.contextName === 'courses',
          UPDATE_CONTENT: !!this.PAGE_RIGHTS.update || !!this.PAGE_RIGHTS.update_content,
          DELETE: !!this.PAGE_RIGHTS["delete"] && !this.course_home,
          READ_REVISIONS: !!this.PAGE_RIGHTS.read_revisions
        };
        json.CAN.ACCESS_GEAR_MENU = json.CAN.DELETE || json.CAN.READ_REVISIONS;
        json.CAN.VIEW_TOOLBAR = json.CAN.VIEW_PAGES || json.CAN.PUBLISH || json.CAN.UPDATE_CONTENT || json.CAN.ACCESS_GEAR_MENU;
        if (json.lock_info) {
          json.lock_info = _.clone(json.lock_info);
        }
        if ((_ref1 = json.lock_info) != null ? _ref1.unlock_at : void 0) {
          json.lock_info.unlock_at = Date.parse(json.lock_info.unlock_at) < Date.now() ? null : $.datetimeString(json.lock_info.unlock_at);
        }
        return json;
      };

      return WikiPageContentView;

    })(Backbone.View);
  });

}).call(this);
