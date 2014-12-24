(function() {
  define(['./base_controller', 'i18n!add_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var AddPageController, request;

    request = _arg.request;
    AddPageController = Base.extend({
      pages: (function() {
        var _base;

        return (_base = this.constructor).pages || (_base.pages = fetch("/api/v1/courses/" + ENV.course_id + "/pages"));
      }).property(),
      title: (function() {
        return I18n.t('add_page_to', "Add a pages to %{module}", {
          module: this.get('moduleController.name')
        });
      }).property('moduleController.name'),
      actions: {
        toggleSelected: function(page) {
          var pages;

          pages = this.get('model.selected');
          if (pages.contains(page)) {
            return pages.removeObject(page);
          } else {
            return pages.addObject(page);
          }
        }
      }
    });
    return AddPageController.reopenClass({
      pages: null
    });
  });

}).call(this);
