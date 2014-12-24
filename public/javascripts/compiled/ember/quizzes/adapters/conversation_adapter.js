(function() {
  define(['./application_adapter'], function(AppAdapter) {
    var ConversationAdapter;

    return ConversationAdapter = AppAdapter.extend({
      namespace: 'api/v1'
    });
  });

}).call(this);
