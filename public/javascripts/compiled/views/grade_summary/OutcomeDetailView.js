(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/models/grade_summary/Outcome', 'compiled/collections/WrappedCollection', 'compiled/views/DialogBaseView', 'compiled/views/CollectionView', 'compiled/views/grade_summary/AlignmentView', 'compiled/views/grade_summary/ProgressBarView', 'jst/grade_summary/outcome_detail'], function($, _, Backbone, Outcome, WrappedCollection, DialogBaseView, CollectionView, AlignmentView, ProgressBarView, template) {
    var OutcomeDetailView, OutcomeResultCollection, _ref, _ref1;

    OutcomeResultCollection = (function(_super) {
      __extends(OutcomeResultCollection, _super);

      function OutcomeResultCollection() {
        this.handleAdd = __bind(this.handleAdd, this);
        this.handleReset = __bind(this.handleReset, this);        _ref = OutcomeResultCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeResultCollection.prototype.key = 'outcome_results';

      OutcomeResultCollection.prototype.model = Outcome;

      OutcomeResultCollection.optionProperty('outcome');

      OutcomeResultCollection.optionProperty('user_id');

      OutcomeResultCollection.optionProperty('course_id');

      OutcomeResultCollection.prototype.url = function() {
        return "/api/v1/courses/" + this.course_id + "/outcome_results?user_ids[]=" + this.user_id + "&outcome_ids[]=" + this.outcome.id + "&include[]=alignments";
      };

      OutcomeResultCollection.prototype.loadAll = true;

      OutcomeResultCollection.prototype.initialize = function() {
        OutcomeResultCollection.__super__.initialize.apply(this, arguments);
        this.on('reset', this.handleReset);
        return this.on('add', this.handleAdd);
      };

      OutcomeResultCollection.prototype.handleReset = function() {
        this.alignments = new Backbone.Collection(this.linked.alignments);
        return this.each(this.handleAdd);
      };

      OutcomeResultCollection.prototype.handleAdd = function(model) {
        var alignment_id;

        alignment_id = model.get('links').alignment;
        model.set('name', this.alignments.get(alignment_id).get('name'));
        model.set('mastery_points', this.outcome.get('mastery_points'));
        return model.set('points_possible', this.outcome.get('points_possible'));
      };

      return OutcomeResultCollection;

    })(WrappedCollection);
    return OutcomeDetailView = (function(_super) {
      __extends(OutcomeDetailView, _super);

      function OutcomeDetailView() {
        _ref1 = OutcomeDetailView.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      OutcomeDetailView.prototype.template = template;

      OutcomeDetailView.optionProperty('user_id');

      OutcomeDetailView.optionProperty('course_id');

      OutcomeDetailView.prototype.dialogOptions = function() {
        return {
          containerId: "outcome_detail",
          close: this.onClose,
          buttons: [],
          width: 640
        };
      };

      OutcomeDetailView.prototype.show = function(model) {
        this.model = model;
        this.$el.dialog('option', 'title', this.model.group.get('title'));
        this.progress = new ProgressBarView({
          model: this.model
        });
        this.render();
        return OutcomeDetailView.__super__.show.apply(this, arguments);
      };

      OutcomeDetailView.prototype.render = function() {
        OutcomeDetailView.__super__.render.apply(this, arguments);
        this.alignments = new OutcomeResultCollection([], {
          user_id: this.user_id,
          course_id: this.course_id,
          outcome: this.model
        });
        this.alignments.fetch();
        return this.alignmentsView = new CollectionView({
          el: this.$('.alignments'),
          collection: this.alignments,
          itemView: AlignmentView
        });
      };

      OutcomeDetailView.prototype.onClose = function() {
        return window.location.hash = 'tab-outcomes';
      };

      OutcomeDetailView.prototype.toJSON = function() {
        var json;

        json = OutcomeDetailView.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          progress: this.progress
        });
      };

      return OutcomeDetailView;

    })(DialogBaseView);
  });

}).call(this);
