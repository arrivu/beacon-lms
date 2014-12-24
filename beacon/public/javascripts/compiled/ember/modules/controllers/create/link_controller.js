(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item'], function(Base, I18n, Item) {
    var CreateLinkController;

    return CreateLinkController = Base.extend({
      text: {
        title: I18n.t('link_title', 'Link Title'),
        url: I18n.t('url', 'URL')
      },
      createItem: function() {
        var item, link;

        link = this.get('model');
        item = Item.createRecord({
          module_id: this.get('moduleController.model.id'),
          type: 'ExternalUrl',
          title: link.title,
          external_url: link.url
        });
        item.save();
        return item;
      }
    });
  });

}).call(this);
