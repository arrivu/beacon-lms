(function() {
  define(['./base_controller', 'i18n!create_module_item_quiz', '../../models/item', 'ic-ajax'], function(Base, I18n, Item, _arg) {
    var CreateDiscussionController, request;

    request = _arg.request;
    return CreateDiscussionController = Base.extend({
      text: {
        discussionName: I18n.t('discussion_name', 'Discussion Name')
      },
      createItem: function() {
        var discussion, item,
          _this = this;

        discussion = this.get('model');
        item = Item.createRecord({
          title: discussion.title,
          type: 'Discussion'
        });
        request({
          url: "/api/v1/courses/" + ENV.course_id + "/discussion_topics",
          type: 'post',
          data: discussion
        }).then((function(savedDiscussion) {
          item.set('content_id', savedDiscussion.id);
          return item.save();
        }), (function() {
          return item.set('error', true);
        }));
        return item;
      }
    });
  });

}).call(this);
