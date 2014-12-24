(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item', 'ic-ajax'], function(Base, I18n, Item, _arg) {
    var CreateFileController, request;

    request = _arg.request;
    return CreateFileController = Base.extend({
      text: {
        file: I18n.t('file_to_upload', 'File to upload')
      },
      createItem: function() {
        var file, fileData, item,
          _this = this;

        file = this.get('files')[0];
        item = Item.createRecord({
          title: file.name,
          type: 'File'
        });
        fileData = {
          name: file.name,
          size: file.size,
          content_type: file.type
        };
        request({
          url: "/api/v1/courses/" + ENV.course_id + "/files",
          type: 'post',
          data: fileData
        }).then((function(_arg1) {
          var formData, key, upload_params, upload_url, val, xhr;

          upload_params = _arg1.upload_params, upload_url = _arg1.upload_url;
          formData = new FormData;
          xhr = new XMLHttpRequest;
          for (key in upload_params) {
            val = upload_params[key];
            formData.append(key, val);
          }
          formData.append('file', file);
          xhr.open('POST', upload_url, true);
          xhr.onload = function(event) {
            var response;

            if (event.target.status !== 200) {
              return _this.handleContentError(item);
            }
            response = $.parseJSON(event.target.response);
            item.set('content_id', response.id);
            return item.save();
          };
          return xhr.send(formData);
        }), (function() {
          return _this.handleContentError(item);
        }));
        return item;
      }
    });
  });

}).call(this);
