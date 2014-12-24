(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone'], function(_, _arg) {
    var Conference, Model, _ref;

    Model = _arg.Model;
    return Conference = (function(_super) {
      __extends(Conference, _super);

      function Conference() {
        _ref = Conference.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Conference.prototype.course = function() {
        var _ref1;

        return this.options.course_id || ((_ref1 = this.collection) != null ? _ref1.course_id : void 0);
      };

      Conference.prototype.urlRoot = function() {
        return "/courses/" + (this.course()) + "/conferences";
      };

      Conference.prototype.special_urls = function() {
        return {
          edit_url: "" + (this.urlRoot()) + "#conference_" + this.id,
          join_url: this.get('url') + '/join',
          close_url: this.get('url') + '/close'
        };
      };

      Conference.prototype.recordings_data = function() {
        return {
          recording: this.get('recordings')[0],
          recordingCount: this.get('recordings').length,
          multipleRecordings: this.get('recordings').length > 1
        };
      };

      Conference.prototype.permissions_data = function() {
        return {
          has_actions: this.get('permissions')['edit'] || this.get('permissions')['delete'],
          show_end: this.get('permissions')['initiate'] && this.get('started_at') && this.get('long_running')
        };
      };

      Conference.prototype.schedule_data = function() {
        return {
          scheduled: 'scheduled_date' in this.get('user_settings'),
          scheduled_at: this.get('user_settings').scheduled_date
        };
      };

      Conference.prototype.toJSON = function() {
        var attr, json, _i, _len, _ref1;

        json = Conference.__super__.toJSON.apply(this, arguments);
        _ref1 = ['special_urls', 'recordings_data', 'schedule_data', 'permissions_data'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          attr = _ref1[_i];
          _.extend(json, this[attr]());
        }
        return json;
      };

      return Conference;

    })(Model);
  });

}).call(this);
