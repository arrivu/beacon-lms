(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection', 'compiled/models/Message'], function(_, PaginatedCollection, Message) {
    var MessageCollection, _ref;

    return MessageCollection = (function(_super) {
      __extends(MessageCollection, _super);

      function MessageCollection() {
        _ref = MessageCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageCollection.prototype.model = Message;

      MessageCollection.prototype.url = '/api/v1/conversations';

      MessageCollection.prototype.params = {
        scope: 'inbox'
      };

      MessageCollection.prototype.comparator = function(a, b) {
        var dates;

        dates = _.map([a, b], function(message) {
          return message.timestamp().getTime();
        });
        if (dates[0] > dates[1]) {
          return -1;
        }
        if (dates[1] > dates[0]) {
          return 1;
        }
        return 0;
      };

      MessageCollection.prototype.selectRange = function(model) {
        var lastPos, lastSelected, newPos, range;

        newPos = this.indexOf(model);
        lastSelected = _.last(this.view.selectedMessages);
        this.each(function(x) {
          return x.set('selected', false);
        });
        lastPos = this.indexOf(lastSelected);
        range = this.slice(Math.min(newPos, lastPos), Math.max(newPos, lastPos) + 1);
        if (newPos > lastPos) {
          range.reverse();
        }
        return _.each(range, function(x) {
          return x.set('selected', true);
        });
      };

      return MessageCollection;

    })(PaginatedCollection);
  });

}).call(this);
