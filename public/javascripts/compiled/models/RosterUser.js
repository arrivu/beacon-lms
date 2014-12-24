(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/models/User', 'compiled/ember/quizzes/shared/seconds_to_time'], function(User, formatSeconds) {
    var RosterUser, _ref;

    return RosterUser = (function(_super) {
      __extends(RosterUser, _super);

      function RosterUser() {
        _ref = RosterUser.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RosterUser.prototype.defaults = {
        avatar_url: '/images/messages/avatar-50.png'
      };

      RosterUser.prototype.computedAttributes = [
        'sections', 'total_activity_string', {
          name: 'html_url',
          deps: ['enrollments']
        }
      ];

      RosterUser.prototype.html_url = function() {
        return this.get('enrollments')[0].html_url;
      };

      RosterUser.prototype.sections = function() {
        var course_section_id, sections, user_section, user_sections, _i, _len, _ref1, _ref2;

        if (((_ref1 = this.collection) != null ? _ref1.sections : void 0) == null) {
          return [];
        }
        sections = this.collection.sections;
        user_sections = [];
        _ref2 = this.get('enrollments');
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          course_section_id = _ref2[_i].course_section_id;
          user_section = sections.get(course_section_id);
          if (user_section) {
            user_sections.push(user_section.attributes);
          }
        }
        return user_sections;
      };

      RosterUser.prototype.total_activity_string = function() {
        var time;

        if (time = this.get('enrollments')[0].total_activity_time) {
          return formatSeconds(time);
        } else {
          return '';
        }
      };

      return RosterUser;

    })(User);
  });

}).call(this);
