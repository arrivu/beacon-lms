(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'compiled/views/quizzes/QuizItemGroupView', 'jst/quizzes/IndexView'], function($, _, Backbone, QuizItemGroupView, template) {
    var IndexView, _ref;

    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.filter = __bind(this.filter, this);
        this.filterResults = __bind(this.filterResults, this);
        this.keyUpSearch = __bind(this.keyUpSearch, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.prototype.template = template;

      IndexView.prototype.el = '#content';

      IndexView.child('assignmentView', '[data-view=assignment]');

      IndexView.child('openView', '[data-view=open]');

      IndexView.child('noQuizzesView', '[data-view=no_quizzes]');

      IndexView.child('surveyView', '[data-view=surveys]');

      IndexView.prototype.events = {
        'keyup #searchTerm': 'keyUpSearch',
        'mouseup #searchTerm': 'keyUpSearch'
      };

      IndexView.prototype.initialize = function() {
        IndexView.__super__.initialize.apply(this, arguments);
        this.options.hasNoQuizzes = this.assignmentView.collection.length + this.openView.collection.length === 0;
        this.options.hasAssignmentQuizzes = this.assignmentView.collection.length > 0;
        this.options.hasOpenQuizzes = this.openView.collection.length > 0;
        return this.options.hasSurveys = this.surveyView.collection.length > 0;
      };

      IndexView.prototype.collections = function() {
        return [this.options.assignmentView.collection, this.options.openView.collection, this.options.surveyView.collection];
      };

      IndexView.prototype.keyUpSearch = function() {
        clearTimeout(this.onInputTimer);
        return this.onInputTimer = setTimeout(this.filterResults, 200);
      };

      IndexView.prototype.filterResults = function() {
        var term,
          _this = this;

        term = $('#searchTerm').val();
        return _.each(this.collections(), function(collection) {
          return collection.each(function(model) {
            return model.set('hidden', !_this.filter(model, term));
          });
        });
      };

      IndexView.prototype.filter = function(model, term) {
        var keys, numMatches, part, title, _i, _len;

        if (!term) {
          return true;
        }
        title = model.get('title').toLowerCase();
        numMatches = 0;
        keys = term.toLowerCase().split(' ');
        for (_i = 0, _len = keys.length; _i < _len; _i++) {
          part = keys[_i];
          if (title.indexOf(part) !== -1) {
            numMatches++;
          }
        }
        return numMatches === keys.length;
      };

      return IndexView;

    })(Backbone.View);
  });

}).call(this);
