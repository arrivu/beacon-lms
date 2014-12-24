(function() {
  define(['ember', 'i18n!create_item_base'], function(Ember, I18n) {
    var AddBaseController, alias;

    alias = Ember.computed.alias;
    return AddBaseController = Ember.Controller.extend({
      setSelected: (function() {
        return this.set('model.selected', []);
      }).on('init')
    });
  });

}).call(this);
