(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'timezone', 'underscore', 'Backbone', 'compiled/str/splitAssetString', 'jst/wiki/WikiPage', 'compiled/views/StickyHeaderMixin', 'compiled/views/wiki/WikiPageDeleteDialog', 'compiled/views/wiki/WikiPageReloadView', 'compiled/views/PublishButtonView', 'i18n!pages'], function($, tz, _, Backbone, splitAssetString, template, StickyHeaderMixin, WikiPageDeleteDialog, WikiPageReloadView, PublishButtonView, I18n) {
    var WikiPageView, _ref;

    return WikiPageView = (function(_super) {
      __extends(WikiPageView, _super);

      function WikiPageView() {
        _ref = WikiPageView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageView.mixin(StickyHeaderMixin);

      WikiPageView.prototype.template = template;

      WikiPageView.prototype.els = {
        '.publish-button': '$publishButton',
        '.header-bar-outer-container': '$headerBarOuterContainer',
        '.page-changed-alert': '$pageChangedAlert'
      };

      WikiPageView.prototype.events = {
        'click .delete_page': 'deleteWikiPage'
      };

      WikiPageView.optionProperty('modules_path');

      WikiPageView.optionProperty('wiki_pages_path');

      WikiPageView.optionProperty('wiki_page_edit_path');

      WikiPageView.optionProperty('wiki_page_history_path');

      WikiPageView.optionProperty('WIKI_RIGHTS');

      WikiPageView.optionProperty('PAGE_RIGHTS');

      WikiPageView.optionProperty('course_id');

      WikiPageView.optionProperty('course_home');

      WikiPageView.optionProperty('course_title');

      WikiPageView.prototype.initialize = function() {
        var _this = this;

        this.model.on('change', function() {
          return _this.render();
        });
        WikiPageView.__super__.initialize.apply(this, arguments);
        this.WIKI_RIGHTS || (this.WIKI_RIGHTS = {});
        return this.PAGE_RIGHTS || (this.PAGE_RIGHTS = {});
      };

      WikiPageView.prototype.render = function() {
        var _ref1, _ref2, _ref3;

        if ((_ref1 = this.publishButtonView) != null) {
          _ref1.$el.detach();
        }
        if ((_ref2 = this.$sequenceFooter) != null) {
          _ref2.detach();
        }
        WikiPageView.__super__.render.apply(this, arguments);
        if (!this.publishButtonView) {
          this.publishButtonView = new PublishButtonView({
            model: this.model
          });
          this.model.view = this;
        }
        this.publishButtonView.$el.appendTo(this.$publishButton);
        this.publishButtonView.render();
        if (!(this.$sequenceFooter || this.course_home || !this.course_id)) {
          this.$sequenceFooter || (this.$sequenceFooter = $('<div></div>').hide());
          this.$sequenceFooter.moduleSequenceFooter({
            courseID: this.course_id,
            assetType: 'Page',
            assetID: this.model.get('url'),
            location: location
          });
        } else {
          if ((_ref3 = this.$sequenceFooter) != null) {
            _ref3.msfAnimation(false);
          }
        }
        if (this.$sequenceFooter) {
          return this.$sequenceFooter.appendTo(this.$el);
        }
      };

      WikiPageView.prototype.afterRender = function() {
        var _this = this;

        WikiPageView.__super__.afterRender.apply(this, arguments);
        this.reloadView = new WikiPageReloadView({
          el: this.$pageChangedAlert,
          model: this.model,
          reloadMessage: I18n.t('reload_viewing_page', 'This page has changed since you started viewing it. *Reload*', {
            wrapper: '<a class="reload" href="#">$1</a>'
          })
        });
        this.reloadView.on('changed', function() {
          return _this.$headerBarOuterContainer.addClass('page-changed');
        });
        this.reloadView.on('reload', function() {
          return _this.render();
        });
        this.reloadView.pollForChanges();
        return $.publish('userContent/change');
      };

      WikiPageView.prototype.deleteWikiPage = function(ev) {
        var deleteDialog;

        if (ev != null) {
          ev.preventDefault();
        }
        if (!this.model.get('deletable')) {
          return;
        }
        deleteDialog = new WikiPageDeleteDialog({
          model: this.model,
          wiki_pages_path: this.wiki_pages_path
        });
        return deleteDialog.open();
      };

      WikiPageView.prototype.toJSON = function() {
        var json, _ref1,
          _this = this;

        json = WikiPageView.__super__.toJSON.apply(this, arguments);
        json.modules_path = this.modules_path;
        json.wiki_pages_path = this.wiki_pages_path;
        json.wiki_page_edit_path = this.wiki_page_edit_path;
        json.wiki_page_history_path = this.wiki_page_history_path;
        json.course_home = this.course_home;
        json.course_title = this.course_title;
        json.CAN = {
          VIEW_PAGES: !!this.WIKI_RIGHTS.read,
          PUBLISH: !!this.WIKI_RIGHTS.manage && json.contextName === 'courses',
          VIEW_UNPUBLISHED: !!this.WIKI_RIGHTS.manage || !!this.WIKI_RIGHTS.view_unpublished_items,
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
          json.lock_info.unlock_at = tz.parse(json.lock_info.unlock_at) < new Date() ? null : $.datetimeString(json.lock_info.unlock_at);
        }
        json.wiki_page_menu_tools = ENV.wiki_page_menu_tools;
        _.each(json.wiki_page_menu_tools, function(tool) {
          return tool.url = tool.base_url + ("&pages[]=" + (_this.model.get("page_id")));
        });
        json;
        return json;
      };

      return WikiPageView;

    })(Backbone.View);
  });

}).call(this);
