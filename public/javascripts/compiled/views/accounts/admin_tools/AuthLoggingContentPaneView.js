(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'compiled/views/PaginatedCollectionView', 'compiled/views/InputFilterView', 'compiled/views/accounts/UserView', 'compiled/views/accounts/admin_tools/UserDateRangeSearchFormView', 'compiled/collections/AuthLoggingCollection', 'compiled/views/accounts/admin_tools/AuthLoggingItemView', 'jst/accounts/admin_tools/authLoggingSearchResults', 'jst/accounts/usersList', 'jst/accounts/admin_tools/authLoggingContentPane'], function(Backbone, $, PaginatedCollectionView, InputFilterView, UserView, UserDateRangeSearchFormView, AuthLoggingCollection, AuthLoggingItemView, authLoggingResultsTemplate, usersTemplate, template) {
    var AuthLoggingContentPaneView;

    return AuthLoggingContentPaneView = (function(_super) {
      __extends(AuthLoggingContentPaneView, _super);

      AuthLoggingContentPaneView.child('searchForm', '#authLoggingSearchForm');

      AuthLoggingContentPaneView.child('resultsView', '#authLoggingSearchResults');

      AuthLoggingContentPaneView.prototype.template = template;

      function AuthLoggingContentPaneView(options) {
        this.options = options;
        this.onFail = __bind(this.onFail, this);
        this.fetch = __bind(this.fetch, this);
        this.collection = new AuthLoggingCollection(null);
        AuthLoggingContentPaneView.__super__.constructor.apply(this, arguments);
        this.searchForm = new UserDateRangeSearchFormView({
          formName: 'logging',
          inputFilterView: new InputFilterView({
            collection: this.options.users
          }),
          usersView: new PaginatedCollectionView({
            collection: this.options.users,
            itemView: UserView,
            buffer: 1000,
            template: usersTemplate
          }),
          collection: this.collection
        });
        this.resultsView = new PaginatedCollectionView({
          template: authLoggingResultsTemplate,
          itemView: AuthLoggingItemView,
          collection: this.collection
        });
      }

      AuthLoggingContentPaneView.prototype.attach = function() {
        return this.collection.on('setParams', this.fetch);
      };

      AuthLoggingContentPaneView.prototype.fetch = function() {
        return this.collection.fetch().fail(this.onFail);
      };

      AuthLoggingContentPaneView.prototype.onFail = function() {
        this.collection.reset();
        return this.resultsView.detachScroll();
      };

      return AuthLoggingContentPaneView;

    })(Backbone.View);
  });

}).call(this);
