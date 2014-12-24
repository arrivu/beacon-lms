(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'compiled/collections/PaginatedCollection'], function(_, PaginatedCollection) {
    var CalendarEventCollection, _ref;

    return CalendarEventCollection = (function(_super) {
      __extends(CalendarEventCollection, _super);

      function CalendarEventCollection() {
        _ref = CalendarEventCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CalendarEventCollection.prototype.url = '/api/v1/calendar_events';

      return CalendarEventCollection;

    })(PaginatedCollection);
  });

}).call(this);
