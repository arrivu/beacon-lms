(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item'], function(Base, I18n, Item) {
    var CreateHeaderController;

    return CreateHeaderController = Base.extend({
      text: {
        headerName: I18n.t('header_name', 'Header Name')
      },
      createItem: function() {
        var header, item;

        header = this.get('model');
        item = Item.createRecord({
          module_id: this.get('moduleController.model.id'),
          title: header.title,
          type: 'SubHeader'
        });
        item.save();
        return item;
      }
    });
  });

}).call(this);
