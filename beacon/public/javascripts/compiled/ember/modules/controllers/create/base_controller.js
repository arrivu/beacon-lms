(function() {
  define(['ember', 'i18n!create_item_base'], function(Ember, I18n) {
    var CreateBaseController, alias;

    alias = Ember.computed.alias;
    return CreateBaseController = Ember.Controller.extend({
      item: null,
      moduleController: alias('parentController.parentController'),
      addItemController: alias('parentController'),
      removeOnError: (function() {
        var error, item;

        item = this.get('item');
        error = item.get('error');
        if (!error) {
          return;
        }
        alert(I18n.t("there_was_an_error", 'There was an error saving "%{title}", please try again.', {
          title: item.get('title')
        }));
        return this.get('moduleController.items').removeObject(item);
      }).observes('item.error'),
      actions: {
        create: function() {
          var item;

          item = this.createItem();
          item.set('module_id', this.get('moduleController.model.id'));
          this.get('moduleController.items').addObject(item);
          this.get('addItemController').send('quitEditing');
          return this.set('item', item);
        },
        cancel: function() {
          return this.get('parentController').send('quitEditing');
        }
      }
    });
  });

}).call(this);
