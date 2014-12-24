(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'underscore', 'i18n!content_migrations', 'jst/content_migrations/SelectContent', 'jst/EmptyDialogFormWrapper', 'jst/content_migrations/ContentCheckboxCollection', 'compiled/views/DialogFormView', 'compiled/views/CollectionView', 'compiled/collections/content_migrations/ContentCheckboxCollection', 'compiled/views/content_migrations/ContentCheckboxView', 'compiled/views/content_migrations/NavigationForTree', 'compiled/views/content_migrations/ExpandCollapseContentSelectTreeItems', 'compiled/views/content_migrations/CheckingCheckboxesForTree', 'compiled/views/content_migrations/ScrollPositionForTree'], function(Backbone, $, _, I18n, template, wrapperTemplate, checkboxCollectionTemplate, DialogFormView, CollectionView, CheckboxCollection, CheckboxView, NavigationForTree, ExpandCollapseContentSelectTreeItems, CheckingCheckboxesForTree, ScrollPositionForTree) {
    var SelectContentView, _ref;

    return SelectContentView = (function(_super) {
      __extends(SelectContentView, _super);

      function SelectContentView() {
        this.maintainTheTree = __bind(this.maintainTheTree, this);
        this.selectContentDialogEvents = __bind(this.selectContentDialogEvents, this);
        this.setSubmitButtonState = __bind(this.setSubmitButtonState, this);
        this.firstOpen = __bind(this.firstOpen, this);
        this.submit = __bind(this.submit, this);        _ref = SelectContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectContentView.prototype.els = {
        '.form-dialog-content': '$formDialogContent',
        '#selectContentBtn': '$selectContentBtn'
      };

      SelectContentView.prototype.template = template;

      SelectContentView.prototype.wrapperTemplate = wrapperTemplate;

      SelectContentView.prototype.submit = function(event) {
        var attr, dfd,
          _this = this;

        attr = _.pick(this.model.attributes, "id", "workflow_state", "user_id");
        this.model.clear({
          silent: true
        });
        this.model.set(attr);
        if (_.isEmpty(this.getFormData())) {
          event.preventDefault();
          alert(I18n.t('no_content_selected', 'You have not selected any content to import.'));
          return false;
        } else {
          dfd = SelectContentView.__super__.submit.apply(this, arguments);
          return dfd != null ? dfd.done(function() {
            return _this.model.trigger('continue');
          }) : void 0;
        }
      };

      SelectContentView.prototype.firstOpen = function() {
        var dfd, _ref1, _ref2,
          _this = this;

        SelectContentView.__super__.firstOpen.apply(this, arguments);
        this.checkboxCollection || (this.checkboxCollection = new CheckboxCollection(null, {
          courseID: (_ref1 = this.model) != null ? _ref1.course_id : void 0,
          migrationID: (_ref2 = this.model) != null ? _ref2.get('id') : void 0,
          isTopLevel: true,
          ariaLevel: 1
        }));
        this.checkboxCollectionView || (this.checkboxCollectionView = new CollectionView({
          collection: this.checkboxCollection,
          itemView: CheckboxView,
          el: this.$formDialogContent,
          template: checkboxCollectionTemplate
        }));
        dfd = this.checkboxCollection.fetch();
        this.$el.disableWhileLoading(dfd);
        dfd.done(function() {
          _this.maintainTheTree(_this.$el.find('ul[role=tree]'));
          return _this.selectContentDialogEvents();
        });
        return this.checkboxCollectionView.render();
      };

      SelectContentView.prototype.setSubmitButtonState = function() {
        var buttonState;

        buttonState = true;
        this.$el.find('input[type=checkbox]').each(function() {
          if (this.checked) {
            return buttonState = false;
          }
        });
        return this.$selectContentBtn.prop('disabled', buttonState);
      };

      SelectContentView.prototype.selectContentDialogEvents = function() {
        var _this = this;

        this.$el.on('click', "#cancelSelect", function() {
          return _this.close();
        });
        return this.$el.on("change", "input[type=checkbox]", this.setSubmitButtonState);
      };

      SelectContentView.prototype.maintainTheTree = function($tree) {
        new NavigationForTree($tree);
        new ExpandCollapseContentSelectTreeItems($tree);
        new CheckingCheckboxesForTree($tree);
        return new ScrollPositionForTree($tree, this.$formDialogContent);
      };

      return SelectContentView;

    })(DialogFormView);
  });

}).call(this);
