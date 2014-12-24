(function() {
  define(['./base_controller', 'i18n!add_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var AddFileController, request;

    request = _arg.request;
    AddFileController = Base.extend({
      files: (function() {
        var _base;

        return (_base = this.constructor).files || (_base.files = fetch("/api/v1/courses/" + ENV.course_id + "/files"));
      }).property(),
      title: (function() {
        return I18n.t('add_file_to', "Add a files to %{module}", {
          module: this.get('moduleController.name')
        });
      }).property('moduleController.name'),
      actions: {
        toggleSelected: function(file) {
          var files;

          files = this.get('model.selected');
          if (files.contains(file)) {
            return files.removeObject(file);
          } else {
            return files.addObject(file);
          }
        }
      }
    });
    return AddFileController.reopenClass({
      files: null
    });
  });

}).call(this);
