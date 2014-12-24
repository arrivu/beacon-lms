(function() {
  define(['i18n!publish_icon_component', 'ember', '../register', '../templates/components/ic-publish-icon'], function(I18n, Ember, register) {
    return register('component', 'ic-publish-icon', Ember.Component.extend({
      'is-published': false,
      'icon-only': false,
      role: 'button',
      attributeBindings: ['data-tooltip', 'aria-label', 'title', 'tabindex', 'aria-disabled'],
      classNameBindings: ['buttonClass', 'wrapperClass', 'disabled'],
      buttonClassStates: {
        'button': 'btn',
        'span': 'publish-icon'
      },
      iconClassStates: {
        'published': 'icon-publish',
        'unpublished': 'icon-unpublished',
        'hoverPublished': 'icon-unpublish',
        'hoverUnpublished': 'icon-unpublished',
        'publishing': 'icon-publish',
        'unpublishing': 'icon-unpublished',
        'hoverJustUnpublished': 'icon-unpublished',
        'hoverJustPublished': 'icon-publish'
      },
      iconStates: {
        'published': 'publish-icon-published',
        'unpublished': 'publish-icon-unpublished',
        'hoverPublished': 'publish-icon-unpublish',
        'hoverUnpublished': 'publish-icon-publish',
        'publishing': 'publish-icon-publish',
        'unpublishing': 'publish-icon-unpublish',
        'hoverJustUnpublished': 'publish-icon-publish',
        'hoverJustPublished': 'publish-icon-published'
      },
      buttonStates: {
        'published': 'btn-published',
        'unpublished': 'btn-publish',
        'hoverPublished': 'btn-unpublish',
        'hoverUnpublished': 'btn-publish',
        'publishing': 'btn-publish',
        'unpublishing': 'btn-unpublish',
        'hoverJustUnpublished': 'btn-publish',
        'hoverJustPublished': 'btn-published'
      },
      textStates: {
        'published': I18n.t('published', 'Published'),
        'unpublished': I18n.t('publish', 'Publish'),
        'hoverPublished': I18n.t('unpublish', 'Unpublish'),
        'hoverUnpublished': I18n.t('publish', 'Publish'),
        'publishing': I18n.t('publishing', 'Publishing...'),
        'unpublishing': I18n.t('unpublishing', 'Unpublishing...'),
        'hoverJustUnpublished': I18n.t('publish', 'Publish'),
        'hoverJustPublished': I18n.t('published', 'Published')
      },
      'data-tooltip': 'top',
      publishState: null,
      mouseIsHovered: false,
      tagName: (function() {
        if (this.get('icon-only')) {
          return 'span';
        } else {
          return 'button';
        }
      }).property('icon-only'),
      iconClass: (function() {
        return this.iconClassStates[this.get('publishState')];
      }).property('publishState'),
      buttonClass: (function() {
        return this.buttonClassStates[this.get('tagName')];
      }).property('tagName'),
      wrapperClass: (function() {
        var states;

        states = this.get("tagName") === "span" ? this.iconStates : this.buttonStates;
        return states[this.get('publishState')];
      }).property('publishState'),
      mouseEnter: function() {
        var _ref;

        if (this.get('disabled')) {
          return;
        }
        this.set('mouseIsHovered', true);
        if ((_ref = this.get('publishState')) === 'publishing' || _ref === 'unpublishing') {
          return;
        }
        if (this.get('is-published')) {
          return this.set('publishState', 'hoverPublished');
        } else {
          return this.set('publishState', 'hoverUnpublished');
        }
      },
      mouseLeave: (function() {
        var _ref;

        if (this.get('disabled') && this.get('state') === 'inDOM') {
          return;
        }
        this.set('mouseIsHovered', false);
        if ((_ref = this.get('publishState')) === 'publishing' || _ref === 'unpublishing') {
          return;
        }
        if (this.get('is-published')) {
          return this.set('publishState', 'published');
        } else {
          return this.set('publishState', 'unpublished');
        }
      }).on('init'),
      setPublishStateOnIsPublished: (function() {
        if (this.get('is-published') === null) {
          return;
        }
        if (this.get('is-published') && this.get('mouseIsHovered')) {
          return this.set('publishState', 'hoverJustPublished');
        } else if (!this.get('is-published') && this.get('mouseIsHovered')) {
          return this.set('publishState', 'hoverJustUnpublished');
        } else if (this.get('is-published')) {
          return this.set('publishState', 'published');
        } else {
          return this.set('publishState', 'unpublished');
        }
      }).observes('is-published'),
      title: (function() {
        if (this.get('disabled')) {
          return this.get('disabled-message');
        } else if (this.get('is-published')) {
          return I18n.t('unpublish', 'Unpublish');
        } else {
          return I18n.t('publish', 'Publish');
        }
      }).property('is-published'),
      text: (function() {
        return this.textStates[this.get('publishState')];
      }).property('publishState'),
      'aria-disabled': (function() {
        return this.get('disabled') + '';
      }).property('disabled'),
      'aria-label': (function() {
        if (this.get('disabled')) {
          return this.get('disabled-message');
        } else if (this.get('is-published')) {
          return I18n.t('unpublish_click', 'unpublished, click to publish');
        } else {
          return I18n.t('publish_click', 'published, click to unpublish');
        }
      }).property('disabled', 'is-published'),
      click: function() {
        if (this.get('disabled')) {
          return;
        }
        if (this.get('is-published')) {
          this.set('publishState', 'unpublishing');
          this.sendAction('on-unpublish');
        } else {
          this.set('publishState', 'publishing');
          this.sendAction('on-publish');
        }
        return this.set('is-published', null);
      }
    }));
  });

}).call(this);
