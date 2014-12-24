(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!discussion_topics', 'Backbone', 'jquery', 'underscore', 'compiled/collections/ParticipantCollection', 'compiled/collections/DiscussionEntriesCollection', 'compiled/models/Assignment', 'compiled/models/DateGroup'], function(I18n, Backbone, $, _, ParticipantCollection, DiscussionEntriesCollection, Assignment, DateGroup) {
    var DiscussionTopic, _ref;

    return DiscussionTopic = (function(_super) {
      __extends(DiscussionTopic, _super);

      function DiscussionTopic() {
        this.groupCategoryId = __bind(this.groupCategoryId, this);
        this.present = __bind(this.present, this);        _ref = DiscussionTopic.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DiscussionTopic.prototype.resourceName = 'discussion_topics';

      DiscussionTopic.prototype.defaults = {
        discussion_type: 'side_comment',
        podcast_enabled: false,
        podcast_has_student_posts: false,
        require_initial_post: false,
        is_announcement: false,
        subscribed: false,
        user_can_see_posts: true,
        subscription_hold: null,
        publishable: true,
        unpublishable: true
      };

      DiscussionTopic.prototype.dateAttributes = ['last_reply_at', 'posted_at', 'delayed_post_at'];

      DiscussionTopic.prototype.initialize = function() {
        var _this = this;

        this.participants = new ParticipantCollection;
        this.entries = new DiscussionEntriesCollection;
        this.entries.url = function() {
          return "" + (_.result(_this, 'url')) + "/entries";
        };
        return this.entries.participants = this.participants;
      };

      DiscussionTopic.prototype.parse = function(json) {
        var assign_attributes;

        json.set_assignment = json.assignment != null;
        assign_attributes = json.assignment || {};
        assign_attributes.assignment_overrides || (assign_attributes.assignment_overrides = []);
        assign_attributes.turnitin_settings || (assign_attributes.turnitin_settings = {});
        json.assignment = this.createAssignment(assign_attributes);
        json.publishable = json.can_publish;
        json.unpublishable = !json.published || json.can_unpublish;
        return json;
      };

      DiscussionTopic.prototype.createAssignment = function(attributes) {
        var assign;

        assign = new Assignment(attributes);
        assign.alreadyScoped = true;
        return assign;
      };

      DiscussionTopic.prototype.present = function() {
        return Backbone.Model.prototype.toJSON.call(this);
      };

      DiscussionTopic.prototype.publish = function() {
        return this.updateOneAttribute('published', true);
      };

      DiscussionTopic.prototype.unpublish = function() {
        return this.updateOneAttribute('published', false);
      };

      DiscussionTopic.prototype.disabledMessage = function() {
        return I18n.t('cannot_unpublish_with_replies', "Can't unpublish if there are replies");
      };

      DiscussionTopic.prototype.topicSubscribe = function() {
        var baseUrl;

        baseUrl = _.result(this, 'url');
        this.set('subscribed', true);
        return $.ajaxJSON("" + baseUrl + "/subscribed", 'PUT');
      };

      DiscussionTopic.prototype.topicUnsubscribe = function() {
        var baseUrl;

        baseUrl = _.result(this, 'url');
        this.set('subscribed', false);
        return $.ajaxJSON("" + baseUrl + "/subscribed", 'DELETE');
      };

      DiscussionTopic.prototype.toJSON = function() {
        var json, _ref1;

        json = DiscussionTopic.__super__.toJSON.apply(this, arguments);
        if (!json.set_assignment) {
          delete json.assignment;
        }
        return _.extend(json, {
          summary: this.summary(),
          unread_count_tooltip: this.unreadTooltip(),
          reply_count_tooltip: this.replyTooltip(),
          assignment: (_ref1 = json.assignment) != null ? _ref1.toJSON() : void 0,
          defaultDates: this.defaultDates().toJSON()
        });
      };

      DiscussionTopic.prototype.toView = function() {
        return _.extend(this.toJSON(), {
          name: this.get('title')
        });
      };

      DiscussionTopic.prototype.unreadTooltip = function() {
        return I18n.t('unread_count_tooltip', {
          zero: 'No unread replies.',
          one: '1 unread reply.',
          other: '%{count} unread replies.'
        }, {
          count: this.get('unread_count')
        });
      };

      DiscussionTopic.prototype.replyTooltip = function() {
        return I18n.t('reply_count_tooltip', {
          zero: 'No replies.',
          one: '1 reply.',
          other: '%{count} replies.'
        }, {
          count: this.get('discussion_subentry_count')
        });
      };

      DiscussionTopic.prototype.fetchEntries = function() {
        var baseUrl,
          _this = this;

        baseUrl = _.result(this, 'url');
        return $.get("" + baseUrl + "/view", function(_arg) {
          var entries, forced_entries, participants, unread_entries;

          unread_entries = _arg.unread_entries, forced_entries = _arg.forced_entries, participants = _arg.participants, entries = _arg.view;
          _this.unreadEntries = unread_entries;
          _this.forcedEntries = forced_entries;
          _this.participants.reset(participants);
          return _this.entries.reset(entries);
        });
      };

      DiscussionTopic.prototype.summary = function() {
        return $('<div/>').html(this.get('message')).text() || '';
      };

      DiscussionTopic.prototype.updateOneAttribute = function(key, value, options) {
        var data;

        if (options == null) {
          options = {};
        }
        data = {};
        data[key] = value;
        return this.updatePartial(data, options);
      };

      DiscussionTopic.prototype.updatePartial = function(data, options) {
        if (options == null) {
          options = {};
        }
        if (!options.wait) {
          this.set(data);
        }
        options = _.defaults(options, {
          data: JSON.stringify(data),
          contentType: 'application/json'
        });
        return this.save({}, options);
      };

      DiscussionTopic.prototype.positionAfter = function(otherId) {
        var collection, otherIndex;

        this.updateOneAttribute('position_after', otherId, {
          wait: true
        });
        collection = this.collection;
        otherIndex = collection.indexOf(collection.get(otherId));
        collection.remove(this, {
          silent: true
        });
        collection.models.splice(otherIndex, 0, this);
        return collection.reset(collection.models);
      };

      DiscussionTopic.prototype.defaultDates = function() {
        var group;

        group = new DateGroup({
          due_at: this.dueAt(),
          unlock_at: this.unlockAt(),
          lock_at: this.lockAt()
        });
        return group;
      };

      DiscussionTopic.prototype.dueAt = function() {
        var _ref1;

        return (_ref1 = this.get('assignment')) != null ? _ref1.get('due_at') : void 0;
      };

      DiscussionTopic.prototype.unlockAt = function() {
        var unlock_at, _ref1;

        if (unlock_at = (_ref1 = this.get('assignment')) != null ? _ref1.get('unlock_at') : void 0) {
          return unlock_at;
        }
        return this.get('delayed_post_at');
      };

      DiscussionTopic.prototype.lockAt = function() {
        var lock_at, _ref1;

        if (lock_at = (_ref1 = this.get('assignment')) != null ? _ref1.get('lock_at') : void 0) {
          return lock_at;
        }
        return this.get('lock_at');
      };

      DiscussionTopic.prototype.updateBucket = function(data) {
        _.defaults(data, {
          pinned: this.get('pinned'),
          locked: this.get('locked')
        });
        this.set('position', null);
        return this.updatePartial(data);
      };

      DiscussionTopic.prototype.groupCategoryId = function(id) {
        if (!(arguments.length > 0)) {
          return this.get('group_category_id');
        }
        return this.set('group_category_id', id);
      };

      DiscussionTopic.prototype.canGroup = function() {
        return this.get('can_group');
      };

      DiscussionTopic.prototype.differentiatedAssignmentsEnabled = function() {
        return (typeof ENV !== "undefined" && ENV !== null ? ENV.DIFFERENTIATED_ASSIGNMENTS_ENABLED : void 0) || false;
      };

      return DiscussionTopic;

    })(Backbone.Model);
  });

}).call(this);
