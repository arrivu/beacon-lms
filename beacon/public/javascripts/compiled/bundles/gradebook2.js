(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['jquery', 'Backbone', 'compiled/userSettings', 'compiled/gradebook2/Gradebook', 'compiled/views/gradebook/NavigationPillView', 'compiled/views/gradebook/OutcomeGradebookView'], function($, Backbone, userSettings, Gradebook, NavigationPillView, OutcomeGradebookView) {
    var GradebookRouter, _ref;

    GradebookRouter = (function(_super) {
      __extends(GradebookRouter, _super);

      function GradebookRouter() {
        this.handlePillChange = __bind(this.handlePillChange, this);        _ref = GradebookRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GradebookRouter.prototype.routes = {
        '': 'tab',
        'tab-:viewName': 'tab'
      };

      GradebookRouter.prototype.initialize = function() {
        this.isLoaded = false;
        this.views = {};
        this.views.assignment = new Gradebook(ENV.GRADEBOOK_OPTIONS);
        if (ENV.GRADEBOOK_OPTIONS.outcome_gradebook_enabled) {
          return this.views.outcome = this.initOutcomes();
        }
      };

      GradebookRouter.prototype.initOutcomes = function() {
        var book;

        book = new OutcomeGradebookView({
          el: $('.outcome-gradebook-container'),
          gradebook: this.views.assignment
        });
        book.render();
        this.navigation = new NavigationPillView({
          el: $('.gradebook-navigation')
        });
        this.navigation.on('pillchange', this.handlePillChange);
        return book;
      };

      GradebookRouter.prototype.handlePillChange = function(viewname) {
        if (viewname) {
          return this.navigate('tab-' + viewname, {
            trigger: true
          });
        }
      };

      GradebookRouter.prototype.tab = function(viewName) {
        viewName || (viewName = userSettings.contextGet('gradebook_tab'));
        window.tab = viewName;
        if (viewName !== 'outcome' || !this.views.outcome) {
          viewName = 'assignment';
        }
        if (this.navigation) {
          this.navigation.setActiveView(viewName);
        }
        $('.assignment-gradebook-container, .outcome-gradebook-container').addClass('hidden');
        $("." + viewName + "-gradebook-container").removeClass('hidden');
        this.views[viewName].onShow();
        return userSettings.contextSet('gradebook_tab', viewName);
      };

      return GradebookRouter;

    })(Backbone.Router);
    this.router = new GradebookRouter;
    return Backbone.history.start();
  });

}).call(this);
