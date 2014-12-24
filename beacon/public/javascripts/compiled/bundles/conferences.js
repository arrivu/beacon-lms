(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['INST', 'i18n!conferences', 'jquery', 'underscore', 'Backbone', 'compiled/views/CollectionView', 'compiled/collections/ConferenceCollection', 'compiled/models/Conference', 'compiled/views/conferences/ConferenceView', 'compiled/views/conferences/ConcludedConferenceView', 'compiled/views/conferences/EditConferenceView', 'jquery.ajaxJSON', 'jquery.instructure_forms', 'jqueryui/dialog', 'jquery.instructure_misc_helpers', 'jquery.keycodes', 'jquery.loadingImg', 'compiled/jquery.rails_flash_notifications', 'jquery.templateData', 'jquery.instructure_date_and_time'], function(INST, I18n, $, _, Backbone, CollectionView, ConferenceCollection, Conference, ConferenceView, ConcludedConferenceView, EditConferenceView) {
    var ConferencesRouter, _ref;

    ConferencesRouter = (function(_super) {
      __extends(ConferencesRouter, _super);

      function ConferencesRouter() {
        this.close = __bind(this.close, this);
        this.edit = __bind(this.edit, this);        _ref = ConferencesRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ConferencesRouter.prototype.routes = {
        '': 'index',
        'conference_:id': 'edit'
      };

      ConferencesRouter.prototype.editView = null;

      ConferencesRouter.prototype.currentConferences = null;

      ConferencesRouter.prototype.concludedConferences = null;

      ConferencesRouter.prototype.initialize = function() {
        var course_id, view,
          _this = this;

        course_id = ENV.context_asset_string.split('_')[1];
        this.editView = new EditConferenceView();
        this.currentConferences = new ConferenceCollection(ENV.current_conferences, {
          course_id: course_id
        });
        view = this.currentView = new CollectionView({
          el: $("#new-conference-list"),
          itemView: ConferenceView,
          collection: this.currentConferences,
          emptyMessage: I18n.t('no_new_conferences', 'There are no new conferences'),
          listClassName: 'ig-list'
        });
        view.render();
        this.concludedConferences = new ConferenceCollection(ENV.concluded_conferences, {
          course_id: course_id
        });
        view = this.concludedView = new CollectionView({
          el: $("#concluded-conference-list"),
          itemView: ConcludedConferenceView,
          collection: this.concludedConferences,
          emptyMessage: I18n.t('no_concluded_conferences', 'There are no concluded conferences'),
          listClassName: 'ig-list'
        });
        view.render();
        $.screenReaderFlashMessage(I18n.t('notifications.inaccessible', 'Warning: This page contains third-party content which is not accessible ' + 'to screen readers.'), 20000);
        return $('.new-conference-btn').on('click', function(event) {
          var conference;

          conference = new Conference(_.clone(ENV.default_conference), {
            course_id: course_id
          });
          conference.once('startSync', function() {
            return _this.currentConferences.unshift(conference);
          });
          return _this.edit(conference);
        });
      };

      ConferencesRouter.prototype.index = function() {
        return this.editView.close();
      };

      ConferencesRouter.prototype.edit = function(conference) {
        if (typeof conference === 'string') {
          conference = this.currentConferences.get(conference);
        }
        if (!conference) {
          return;
        }
        return this.editView.show(conference);
      };

      ConferencesRouter.prototype.close = function(conference) {
        this.currentConferences.remove(conference);
        return this.concludedConferences.unshift(conference);
      };

      return ConferencesRouter;

    })(Backbone.Router);
    this.router = new ConferencesRouter;
    return Backbone.history.start();
  });

}).call(this);
