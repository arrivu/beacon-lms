(function() {
  define(['./base_controller', 'i18n!add_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var AddTopicController, request;

    request = _arg.request;
    AddTopicController = Base.extend({
      topics: (function() {
        var _base;

        return (_base = this.constructor).topics || (_base.topics = fetch("/api/v1/courses/" + ENV.course_id + "/discussion_topics"));
      }).property(),
      title: (function() {
        return I18n.t('add_topic_to', "Add discussion topics to %{module}", {
          module: this.get('moduleController.name')
        });
      }).property('moduleController.name'),
      actions: {
        toggleSelected: function(topic) {
          var topics;

          topics = this.get('model.selected');
          if (topics.contains(topic)) {
            return topics.removeObject(topic);
          } else {
            return topics.addObject(topic);
          }
        }
      }
    });
    return AddTopicController.reopenClass({
      topics: null
    });
  });

}).call(this);
