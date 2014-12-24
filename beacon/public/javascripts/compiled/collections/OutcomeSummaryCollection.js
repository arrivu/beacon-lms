(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/models/grade_summary/Section', 'compiled/models/grade_summary/Group', 'compiled/models/grade_summary/Outcome', 'compiled/collections/PaginatedCollection', 'compiled/collections/WrappedCollection', 'compiled/util/natcompare'], function($, _, _arg, Section, Group, Outcome, PaginatedCollection, WrappedCollection, natcompare) {
    var Collection, GroupCollection, LinkCollection, OutcomeSummaryCollection, ResultCollection, _ref, _ref1, _ref2, _ref3;

    Collection = _arg.Collection;
    GroupCollection = (function(_super) {
      __extends(GroupCollection, _super);

      function GroupCollection() {
        _ref = GroupCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCollection.optionProperty('course_id');

      GroupCollection.prototype.model = Group;

      GroupCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/outcome_groups";
      };

      return GroupCollection;

    })(PaginatedCollection);
    LinkCollection = (function(_super) {
      __extends(LinkCollection, _super);

      function LinkCollection() {
        _ref1 = LinkCollection.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      LinkCollection.optionProperty('course_id');

      LinkCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/outcome_group_links?outcome_style=full";
      };

      return LinkCollection;

    })(PaginatedCollection);
    ResultCollection = (function(_super) {
      __extends(ResultCollection, _super);

      function ResultCollection() {
        _ref2 = ResultCollection.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      ResultCollection.optionProperty('course_id');

      ResultCollection.optionProperty('user_id');

      ResultCollection.prototype.key = 'rollups';

      ResultCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/outcome_rollups?user_ids[]=" + this.user_id;
      };

      return ResultCollection;

    })(WrappedCollection);
    return OutcomeSummaryCollection = (function(_super) {
      __extends(OutcomeSummaryCollection, _super);

      function OutcomeSummaryCollection() {
        this.processCollections = __bind(this.processCollections, this);        _ref3 = OutcomeSummaryCollection.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      OutcomeSummaryCollection.optionProperty('course_id');

      OutcomeSummaryCollection.optionProperty('user_id');

      OutcomeSummaryCollection.prototype.comparator = natcompare.byGet('path');

      OutcomeSummaryCollection.prototype.initialize = function() {
        OutcomeSummaryCollection.__super__.initialize.apply(this, arguments);
        this.rawCollections = {
          groups: new GroupCollection([], {
            course_id: this.course_id
          }),
          links: new LinkCollection([], {
            course_id: this.course_id
          }),
          results: new ResultCollection([], {
            course_id: this.course_id,
            user_id: this.user_id
          })
        };
        return this.outcomeCache = new Collection();
      };

      OutcomeSummaryCollection.prototype.fetch = function() {
        var dfd, requests,
          _this = this;

        dfd = $.Deferred();
        requests = _.values(this.rawCollections).map(function(collection) {
          collection.loadAll = true;
          return collection.fetch();
        });
        $.when.apply($, requests).done(function() {
          return _this.processCollections(dfd);
        });
        return dfd;
      };

      OutcomeSummaryCollection.prototype.rollups = function() {
        var pairs, studentResults;

        studentResults = this.rawCollections.results.at(0).get('scores');
        pairs = studentResults.map(function(x) {
          return [x.links.outcome, x];
        });
        return _.object(pairs);
      };

      OutcomeSummaryCollection.prototype.populateGroupOutcomes = function() {
        var rollups,
          _this = this;

        rollups = this.rollups();
        this.outcomeCache.reset();
        return this.rawCollections.links.each(function(link) {
          var outcome, parent, rollup;

          outcome = new Outcome(link.get('outcome'));
          parent = _this.rawCollections.groups.get(link.get('outcome_group').id);
          rollup = rollups[outcome.id];
          outcome.set('score', rollup != null ? rollup.score : void 0);
          outcome.set('count', (rollup != null ? rollup.count : void 0) || 0);
          outcome.group = parent;
          parent.get('outcomes').add(outcome);
          return _this.outcomeCache.add(outcome);
        });
      };

      OutcomeSummaryCollection.prototype.populateSectionGroups = function() {
        var tmp,
          _this = this;

        tmp = new Collection();
        this.rawCollections.groups.each(function(group) {
          var parent, parentId, parentObj;

          if (!group.get('outcomes').length) {
            return;
          }
          parentObj = group.get('parent_outcome_group');
          parentId = parentObj ? parentObj.id : group.id;
          if (!(parent = tmp.get(parentId))) {
            parent = tmp.add(new Section({
              id: parentId,
              path: _this.getPath(parentId)
            }));
          }
          return parent.get('groups').add(group);
        });
        return this.reset(tmp.models);
      };

      OutcomeSummaryCollection.prototype.processCollections = function(dfd) {
        this.populateGroupOutcomes();
        this.populateSectionGroups();
        return dfd.resolve(this.models);
      };

      OutcomeSummaryCollection.prototype.getPath = function(id) {
        var group, parent, parentPath;

        group = this.rawCollections.groups.get(id);
        parent = group.get('parent_outcome_group');
        if (!parent) {
          return '';
        }
        parentPath = this.getPath(parent.id);
        return (parentPath ? parentPath + ': ' : '') + group.get('title');
      };

      return OutcomeSummaryCollection;

    })(Collection);
  });

}).call(this);
