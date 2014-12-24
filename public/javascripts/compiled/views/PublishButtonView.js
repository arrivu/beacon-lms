(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!publish_btn_module', 'jquery', 'compiled/fn/preventDefault', 'Backbone', 'jquery.instructure_forms'], function(I18n, $, preventDefault, Backbone) {
    var PublishButton, _ref;

    return PublishButton = (function(_super) {
      __extends(PublishButton, _super);

      function PublishButton() {
        _ref = PublishButton.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PublishButton.prototype.disabledClass = 'disabled';

      PublishButton.prototype.publishClass = 'btn-publish';

      PublishButton.prototype.publishedClass = 'btn-published';

      PublishButton.prototype.unpublishClass = 'btn-unpublish';

      PublishButton.prototype.tagName = 'button';

      PublishButton.prototype.className = 'btn';

      PublishButton.prototype.events = {
        'click': 'click',
        'hover': 'hover'
      };

      PublishButton.prototype.els = {
        'i': '$icon',
        '.publish-text': '$text'
      };

      PublishButton.prototype.initialize = function() {
        var _ref1,
          _this = this;

        PublishButton.__super__.initialize.apply(this, arguments);
        return (_ref1 = this.model) != null ? _ref1.on('change:unpublishable', function() {
          if (!_this.model.get('unpublishable')) {
            return _this.disable();
          }
        }) : void 0;
      };

      PublishButton.prototype.setElement = function() {
        PublishButton.__super__.setElement.apply(this, arguments);
        this.$el.attr('data-tooltip', '');
        if (!this.model.get('unpublishable')) {
          return this.disable();
        }
      };

      PublishButton.prototype.hover = function(_arg) {
        var type;

        type = _arg.type;
        if (type === 'mouseenter') {
          if (this.keepState || this.isPublish() || this.isDisabled()) {
            return;
          }
          this.renderUnpublish();
          return this.keepState = true;
        } else {
          this.keepState = false;
          if (!(this.isPublish() || this.isDisabled())) {
            return this.renderPublished();
          }
        }
      };

      PublishButton.prototype.click = function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isDisabled()) {
          return;
        }
        this.keepState = true;
        if (this.isPublish()) {
          return this.publish();
        } else if (this.isUnpublish() || this.isPublished()) {
          return this.unpublish();
        }
      };

      PublishButton.prototype.addAriaLabel = function(label) {
        var $label;

        $label = this.$el.find('span.screenreader-only.accessible_label');
        if (!$label.length) {
          $('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el);
        }
        $label.text(label);
        return this.$el.attr('aria-label', label);
      };

      PublishButton.prototype.publish = function(event) {
        var _this = this;

        this.renderPublishing();
        return this.model.publish().always(function() {
          _this.trigger("publish");
          _this.enable();
          return _this.render();
        });
      };

      PublishButton.prototype.unpublish = function(event) {
        var _this = this;

        this.renderUnpublishing();
        return this.model.unpublish().done(function() {
          _this.trigger("unpublish");
          _this.disable();
          return _this.render();
        }).fail(function(error) {
          var errors;

          errors = JSON.parse(error.responseText)['errors'];
          $.flashError(errors.published[0].message);
          _this.model.set('unpublishable', true);
          _this.disable();
          return _this.renderPublished();
        });
      };

      PublishButton.prototype.isPublish = function() {
        return this.$el.hasClass(this.publishClass);
      };

      PublishButton.prototype.isPublished = function() {
        return this.$el.hasClass(this.publishedClass);
      };

      PublishButton.prototype.isUnpublish = function() {
        return this.$el.hasClass(this.unpublishClass);
      };

      PublishButton.prototype.isDisabled = function() {
        return this.$el.hasClass(this.disabledClass);
      };

      PublishButton.prototype.disable = function() {
        return this.$el.addClass(this.disabledClass);
      };

      PublishButton.prototype.enable = function() {
        return this.$el.removeClass(this.disabledClass);
      };

      PublishButton.prototype.reset = function() {
        this.$el.removeClass("" + this.publishClass + " " + this.publishedClass + " " + this.unpublishClass);
        this.$icon.removeClass('icon-publish icon-unpublish icon-unpublished');
        return this.$el.removeAttr('aria-label');
      };

      PublishButton.prototype.render = function() {
        this.$el.attr('role', 'button');
        this.$el.attr('tabindex', '0');
        this.$el.html('<i></i><span class="publish-text"></span>');
        this.cacheEls();
        this.$text.attr('tabindex', '-1');
        if (this.model.get('published')) {
          this.renderPublished();
        } else {
          this.renderPublish();
        }
        return this;
      };

      PublishButton.prototype.renderPublish = function() {
        return this.renderState({
          text: I18n.t('buttons.publish', 'Publish'),
          label: I18n.t('buttons.publish_desc', 'Unpublished. Click to publish.'),
          buttonClass: this.publishClass,
          iconClass: 'icon-unpublished'
        });
      };

      PublishButton.prototype.renderPublished = function() {
        return this.renderState({
          text: I18n.t('buttons.published', 'Published'),
          label: I18n.t('buttons.published_desc', 'Published. Click to unpublish.'),
          buttonClass: this.publishedClass,
          iconClass: 'icon-publish'
        });
      };

      PublishButton.prototype.renderUnpublish = function() {
        var text;

        text = I18n.t('buttons.unpublish', 'Unpublish');
        return this.renderState({
          text: text,
          buttonClass: this.unpublishClass,
          iconClass: 'icon-unpublish'
        });
      };

      PublishButton.prototype.renderPublishing = function() {
        var text;

        this.disable();
        text = I18n.t('buttons.publishing', 'Publishing...');
        return this.renderState({
          text: text,
          buttonClass: this.publishClass,
          iconClass: 'icon-publish'
        });
      };

      PublishButton.prototype.renderUnpublishing = function() {
        var text;

        this.disable();
        text = I18n.t('buttons.unpublishing', 'Unpublishing...');
        return this.renderState({
          text: text,
          buttonClass: this.unpublishClass,
          iconClass: 'icon-unpublished'
        });
      };

      PublishButton.prototype.renderState = function(options) {
        this.reset();
        this.$el.addClass(options.buttonClass);
        this.$el.attr('aria-pressed', options.buttonClass === this.publishedClass);
        this.$icon.addClass(options.iconClass);
        this.$text.html("&nbsp;" + options.text);
        if ((this.model.get('unpublishable') == null) || this.model.get('unpublishable')) {
          this.enable();
          this.$el.attr('title', options.text);
          if (options.label) {
            return this.addAriaLabel(options.label);
          }
        } else {
          this.disable();
          this.$el.attr('aria-disabled', true);
          this.$el.attr('title', this.model.disabledMessage());
          return this.addAriaLabel(this.model.disabledMessage());
        }
      };

      return PublishButton;

    })(Backbone.View);
  });

}).call(this);
