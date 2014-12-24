(function() {
  require(['compiled/views/UserObserveesView', 'compiled/collections/UserObserveesCollection'], function(UserObserveesView, UserObserveesCollection) {
    var collection, userObservees;

    collection = new UserObserveesCollection;
    collection.user_id = ENV['current_user_id'];
    userObservees = new UserObserveesView({
      collection: collection
    });
    userObservees.render();
    userObservees.$el.appendTo('#content');
    return collection.fetch();
  });

}).call(this);
