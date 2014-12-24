(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/views/conferences/ConferenceView', 'jst/conferences/concludedConference'], function(ConferenceView, template) {
    var ConcludedConferenceView, _ref;

    return ConcludedConferenceView = (function(_super) {
      __extends(ConcludedConferenceView, _super);

      function ConcludedConferenceView() {
        _ref = ConcludedConferenceView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ConcludedConferenceView.prototype.template = template;

      return ConcludedConferenceView;

    })(ConferenceView);
  });

}).call(this);
