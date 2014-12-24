(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'wikiSidebar', 'jst/wiki/WikiPageEdit', 'compiled/views/ValidatedFormView', 'compiled/views/wiki/WikiPageDeleteDialog', 'compiled/views/wiki/WikiPageReloadView', 'i18n!pages', 'compiled/tinymce', 'tinymce.editor_box'], function($, _, Backbone, wikiSidebar, template, ValidatedFormView, WikiPageDeleteDialog, WikiPageReloadView, I18n) {
    var WikiPageEditView, _ref;

    return WikiPageEditView = (function(_super) {
      __extends(WikiPageEditView, _super);

      function WikiPageEditView() {
        this.onUnload = __bind(this.onUnload, this);        _ref = WikiPageEditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      WikiPageEditView.mixin({
        els: {
          '[name="body"]': '$wikiPageBody',
          '.header-bar-outer-container': '$headerBarOuterContainer',
          '.page-changed-alert': '$pageChangedAlert'
        },
        events: {
          'click a.switch_views': 'switchViews',
          'click .delete_page': 'deleteWikiPage',
          'click .form-actions .cancel': 'cancel'
        }
      });

      WikiPageEditView.prototype.template = template;

      WikiPageEditView.prototype.className = "form-horizontal edit-form validated-form-view";

      WikiPageEditView.prototype.dontRenableAfterSaveSuccess = true;

      WikiPageEditView.optionProperty('wiki_pages_path');

      WikiPageEditView.optionProperty('WIKI_RIGHTS');

      WikiPageEditView.optionProperty('PAGE_RIGHTS');

      WikiPageEditView.prototype.initialize = function() {
        var _this = this;

        WikiPageEditView.__super__.initialize.apply(this, arguments);
        this.WIKI_RIGHTS || (this.WIKI_RIGHTS = {});
        this.PAGE_RIGHTS || (this.PAGE_RIGHTS = {});
        return this.on('success', function(args) {
          return window.location.href = _this.model.get('html_url');
        });
      };

      WikiPageEditView.prototype.toJSON = function() {
        var IS, editing_roles, json;

        json = WikiPageEditView.__super__.toJSON.apply(this, arguments);
        json.IS = IS = {
          TEACHER_ROLE: false,
          STUDENT_ROLE: false,
          MEMBER_ROLE: false,
          ANYONE_ROLE: false
        };
        editing_roles = json.editing_roles || '';
        editing_roles = _.map(editing_roles.split(','), function(s) {
          return s.trim();
        });
        if (_.contains(editing_roles, 'public')) {
          IS.ANYONE_ROLE = true;
        } else if (_.contains(editing_roles, 'members')) {
          IS.MEMBER_ROLE = true;
        } else if (_.contains(editing_roles, 'students')) {
          IS.STUDENT_ROLE = true;
        } else {
          IS.TEACHER_ROLE = true;
        }
        json.CAN = {
          PUBLISH: !!this.WIKI_RIGHTS.manage && json.contextName === "courses",
          DELETE: !!this.PAGE_RIGHTS["delete"],
          EDIT_TITLE: !!this.PAGE_RIGHTS.update || json.new_record,
          EDIT_ROLES: !!this.WIKI_RIGHTS.manage
        };
        json.SHOW = {
          COURSE_ROLES: json.contextName === "courses"
        };
        return json;
      };

      WikiPageEditView.prototype.onUnload = function(ev) {
        var warning;

        if (this && this.checkUnsavedOnLeave && this.hasUnsavedChanges()) {
          warning = this.unsavedWarning();
          (ev || window.event).returnValue = warning;
          return warning;
        }
      };

      WikiPageEditView.prototype.afterRender = function() {
        var view,
          _this = this;

        WikiPageEditView.__super__.afterRender.apply(this, arguments);
        this.$wikiPageBody.editorBox();
        this.initWikiSidebar();
        this.checkUnsavedOnLeave = true;
        view = this;
        window.addEventListener('beforeunload', this.onUnload);
        if (!this.firstRender) {
          this.firstRender = true;
          $(function() {
            return $('[autofocus]:not(:focus)').eq(0).focus();
          });
        }
        this.reloadPending = false;
        this.reloadView = new WikiPageReloadView({
          el: this.$pageChangedAlert,
          model: this.model,
          reloadMessage: I18n.t('reload_editing_page', 'This page has changed since you started editing it. *Reloading* will lose all of your changes.', {
            wrapper: '<a class="reload" href="#">$1</a>'
          }),
          warning: true
        });
        this.reloadView.on('changed', function() {
          _this.$headerBarOuterContainer.addClass('page-changed');
          return _this.reloadPending = true;
        });
        this.reloadView.on('reload', function() {
          return _this.render();
        });
        return this.reloadView.pollForChanges();
      };

      WikiPageEditView.prototype.initWikiSidebar = function() {
        var $wikiPageBody;

        if (!wikiSidebar.inited) {
          $wikiPageBody = this.$wikiPageBody;
          $(function() {
            wikiSidebar.init();
            $.scrollSidebar();
            return wikiSidebar.attachToEditor($wikiPageBody).show();
          });
        }
        return $(function() {
          return wikiSidebar.show();
        });
      };

      WikiPageEditView.prototype.switchViews = function(event) {
        if (event != null) {
          event.preventDefault();
        }
        this.$wikiPageBody.editorBox('toggle');
        return $(event.currentTarget).siblings('a').andSelf().toggle();
      };

      WikiPageEditView.prototype.validateFormData = function(data) {
        var errors;

        errors = {};
        if (data.title === '') {
          errors["title"] = [
            {
              type: 'required',
              message: I18n.t("errors.require_title", 'You must enter a title')
            }
          ];
        }
        return errors;
      };

      WikiPageEditView.prototype.hasUnsavedChanges = function() {
        var dirty;

        dirty = this.$wikiPageBody.editorBox('exists?') && this.$wikiPageBody.editorBox('is_dirty');
        if (!dirty && this.toJSON().CAN.EDIT_TITLE) {
          dirty = (this.model.get('title') || '') !== (this.getFormData().title || '');
        }
        return dirty;
      };

      WikiPageEditView.prototype.unsavedWarning = function() {
        return I18n.t("warnings.unsaved_changes", "You have unsaved changes. Do you want to continue without saving these changes?");
      };

      WikiPageEditView.prototype.submit = function(event) {
        var _ref1;

        this.checkUnsavedOnLeave = false;
        if (this.reloadPending) {
          if (!confirm(I18n.t('warnings.overwrite_changes', 'You are about to overwrite other changes that have been made since you started editing.\n\nOverwrite these changes?'))) {
            if (event != null) {
              event.preventDefault();
            }
            return;
          }
        }
        if ((_ref1 = this.reloadView) != null) {
          _ref1.stopPolling();
        }
        return WikiPageEditView.__super__.submit.apply(this, arguments);
      };

      WikiPageEditView.prototype.cancel = function(event) {
        if (event != null) {
          event.preventDefault();
        }
        if (!this.hasUnsavedChanges() || confirm(this.unsavedWarning())) {
          this.checkUnsavedOnLeave = false;
          return this.trigger('cancel');
        }
      };

      WikiPageEditView.prototype.deleteWikiPage = function(event) {
        var deleteDialog;

        if (event != null) {
          event.preventDefault();
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

      return WikiPageEditView;

    })(ValidatedFormView);
  });

}).call(this);
