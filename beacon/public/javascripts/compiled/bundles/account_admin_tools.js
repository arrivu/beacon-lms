(function() {
  require(['compiled/models/CourseRestore', 'compiled/views/accounts/admin_tools/AdminToolsView', 'compiled/views/accounts/admin_tools/RestoreContentPaneView', 'compiled/views/accounts/admin_tools/CourseSearchFormView', 'compiled/views/accounts/admin_tools/CourseSearchResultsView', 'compiled/views/accounts/admin_tools/LoggingContentPaneView', 'compiled/views/InputFilterView', 'compiled/views/accounts/UserView', 'compiled/views/PaginatedCollectionView', 'compiled/collections/CommMessageCollection', 'compiled/collections/AccountUserCollection', 'compiled/views/accounts/admin_tools/CommMessagesContentPaneView', 'compiled/views/accounts/admin_tools/UserDateRangeSearchFormView', 'compiled/views/accounts/admin_tools/CommMessageItemView', 'jst/accounts/admin_tools/commMessagesSearchResults', 'jst/accounts/usersList'], function(CourseRestoreModel, AdminToolsView, RestoreContentPaneView, CourseSearchFormView, CourseSearchResultsView, LoggingContentPaneView, InputFilterView, UserView, PaginatedCollectionView, CommMessageCollection, AccountUserCollection, CommMessagesContentPaneView, UserDateRangeSearchFormView, CommMessageItemView, messagesSearchResultsTemplate, usersTemplate) {
    var loggingUsers, messages, messagesContentView, messagesUsers, restoreModel;

    restoreModel = new CourseRestoreModel({
      account_id: ENV.ACCOUNT_ID
    });
    messages = new CommMessageCollection(null, {
      params: {
        perPage: 10
      }
    });
    messagesUsers = new AccountUserCollection(null, {
      account_id: ENV.ACCOUNT_ID
    });
    loggingUsers = new AccountUserCollection(null, {
      account_id: ENV.ACCOUNT_ID
    });
    messagesContentView = new CommMessagesContentPaneView({
      searchForm: new UserDateRangeSearchFormView({
        formName: 'messages',
        inputFilterView: new InputFilterView({
          collection: messagesUsers
        }),
        usersView: new PaginatedCollectionView({
          collection: messagesUsers,
          itemView: UserView,
          buffer: 1000,
          template: usersTemplate
        }),
        collection: messages
      }),
      resultsView: new PaginatedCollectionView({
        template: messagesSearchResultsTemplate,
        itemView: CommMessageItemView,
        collection: messages
      }),
      collection: messages
    });
    this.app = new AdminToolsView({
      el: "#admin-tools-app",
      tabs: {
        courseRestore: ENV.PERMISSIONS.restore_course,
        viewMessages: ENV.PERMISSIONS.view_messages,
        logging: !!ENV.PERMISSIONS.logging
      },
      restoreContentPaneView: new RestoreContentPaneView({
        courseSearchFormView: new CourseSearchFormView({
          model: restoreModel
        }),
        courseSearchResultsView: new CourseSearchResultsView({
          model: restoreModel
        })
      }),
      messageContentPaneView: messagesContentView,
      loggingContentPaneView: new LoggingContentPaneView({
        permissions: ENV.PERMISSIONS.logging,
        users: loggingUsers
      })
    });
    return this.app.render();
  });

}).call(this);
