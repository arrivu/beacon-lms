(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/Conference'], function(_arg, Conference) {
    var Collection, ConferenceCollection, _ref;

    Collection = _arg.Collection;
    return ConferenceCollection = (function(_super) {
      __extends(ConferenceCollection, _super);

      function ConferenceCollection() {
        _ref = ConferenceCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ConferenceCollection.prototype.model = Conference;

      ConferenceCollection.optionProperty('course_id');

      return ConferenceCollection;

    })(Collection);
  });

}).call(this);
