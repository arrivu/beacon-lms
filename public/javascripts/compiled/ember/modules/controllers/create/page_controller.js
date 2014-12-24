(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item', 'ic-ajax'], function(Base, I18n, Item, _arg) {
    var CreatePageController, request;

    request = _arg.request;
    return CreatePageController = Base.extend({
      text: {
        pageName: I18n.t('page_name', 'Page Name')
      },
      createItem: function() {
        var item, page,
          _this = this;

        page = this.get('model');
        item = Item.createRecord({
          title: page.title,
          type: 'Page'
        });
        request({
          url: "/api/v1/courses/" + ENV.course_id + "/pages",
          type: 'post',
          data: {
            wiki_page: page
          }
        }).then((function(savedPage) {
          item.set('content_id', savedPage.id);
          item.set('page_url', savedPage.url);
          return item.save();
        }), (function() {
          return item.set('error', true);
        }));
        return item;
      }
    });
  });

}).call(this);
