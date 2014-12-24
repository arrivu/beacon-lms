(function() {
  require(['jquery', 'compiled/views/collaborations/CollaborationsPage', 'collaborations'], function($, CollaborationsPage) {
    var page;

    page = new CollaborationsPage({
      el: $('body')
    });
    return page.initPageState();
  });

}).call(this);
