(function() {
  define(['ember', 'i18n!modules_item_controller', '../lib/store'], function(Ember, I18n, store) {
    var ItemController;

    return ItemController = Ember.ObjectController.extend({
      isDeleting: false,
      modalId: (function() {
        return "item-modal-" + (this.get('model.id'));
      }).property('model.id'),
      actionsId: (function() {
        return "item-actions-" + (this.get('model.id'));
      }).property('model.id'),
      actions: {
        increaseIndent: function() {
          this.incrementProperty('model.indent');
          return store.syncItemById(this.get('model.id'));
        },
        decreaseIndent: function() {
          this.decrementProperty('model.indent');
          return store.syncItemById(this.get('model.id'));
        },
        edit: function() {
          var _this = this;

          this.set('copy', this.get('model').serialize());
          this.set('modalIsOpen', true);
          return Ember.run.schedule('afterRender', function() {
            return Ember.View.views[_this.get('modalId')].open();
          });
        },
        saveEdits: function() {
          var model;

          model = this.get('model');
          model.setProperties(this.get('copy'));
          return model.save();
        },
        remove: function() {
          var _this = this;

          this.set('isDeleting', true);
          return Ember.run.later(function() {
            return store.removeItemById(_this.get('model.id'));
          }, 351);
        }
      },
      indentClassName: (function() {
        return "indent-" + (this.get('indent'));
      }).property('indent'),
      showIncreaseIndent: (function() {
        return this.get('indent') < 5;
      }).property('indent'),
      showDecreaseIndent: (function() {
        return this.get('indent') > 0;
      }).property('indent'),
      completionRequirement: (function() {
        var message, status, type;

        if (!this.get('completion_requirement')) {
          return '';
        }
        type = this.get('completion_requirement.type');
        status = this.get('completion_requirement.completed') ? 'complete' : 'incomplete';
        message = this.get('requirementMessages')[type][status];
        if ('function' === typeof message) {
          return message.call(this);
        } else {
          return message;
        }
      }).property('completion_requirement'),
      requirementMessages: {
        min_score: {
          incomplete: function() {
            return I18n.t('min_score_incomplete', "must score at least a *score*", {
              score: 'TODO'
            });
          },
          complete: function() {
            return I18n.t('min_score_complete', "scored at least a *score*", {
              score: 'TODO'
            });
          }
        },
        max_score: {
          incomplete: function() {
            return I18n.t('max_score_incomplete', "must score no more than a *score*", {
              score: 'TODO'
            });
          },
          complete: function() {
            return I18n.t('max_score_complete', "scored no more than a *score*", {
              score: 'TODO'
            });
          }
        },
        must_view: {
          incomplete: I18n.t('must_view_incomplete', 'must view the page'),
          complete: I18n.t('must_view_complete', 'viewed the page')
        },
        must_contribute: {
          incomplete: I18n.t('must_contribute_incomplete', 'must contribute to the content of the page'),
          complete: I18n.t('must_contribute_complete', 'contributed to the content of the page')
        },
        must_submit: {
          incomplete: I18n.t('must_submit_incomplete', 'must submit the assignment'),
          complete: I18n.t('must_submit_complete', 'submitted the assignment')
        }
      }
    });
  });

}).call(this);
