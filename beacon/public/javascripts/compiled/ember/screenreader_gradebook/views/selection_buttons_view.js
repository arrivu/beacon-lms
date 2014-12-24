(function() {
  define(['ember', 'i18n!sr_gradebook'], function(Ember, I18n) {
    var SelectionButtonsView;

    return SelectionButtonsView = Ember.View.extend({
      templateName: 'content_selection/selection_buttons',
      list: null,
      type: null,
      selected: null,
      classPath: (function() {
        return this.get('type') + "_navigation";
      }).property('type'),
      previousLabel: (function() {
        var type;

        type = this.get('type').capitalize();
        return I18n.t("previous_object", "Previous %{type}", {
          type: type
        });
      }).property('type'),
      nextLabel: (function() {
        var type;

        type = this.get('type').capitalize();
        return I18n.t("next_object", "Next %{type}", {
          type: type
        });
      }).property('type'),
      disablePreviousButton: Ember.computed.lte('currentIndex', 0),
      disableNextButton: (function() {
        var next;

        next = this.get('list').objectAt(this.get('currentIndex') + 1);
        return !(this.get('list.length') && next);
      }).property('currentIndex', 'list.@each'),
      currentIndex: (function() {
        return this.get('list').indexOf(this.get('selected'));
      }).property('selected', 'list.@each'),
      actions: {
        selectItem: function(goTo) {
          var index, item, list;

          index = this.get('currentIndex');
          list = this.get('list');
          item = null;
          if (goTo === 'previous') {
            item = list.objectAt(index - 1);
            if (!list.objectAt(index - 2)) {
              this.$(".next_object").focus();
            }
          }
          if (goTo === 'next') {
            item = list.objectAt(index + 1);
            if (!list.objectAt(index + 2)) {
              this.$(".previous_object").focus();
            }
          }
          if (item) {
            this.set('selected', item);
            return this.get('controller').send('selectItem', this.get('type'), item);
          }
        }
      }
    });
  });

}).call(this);
