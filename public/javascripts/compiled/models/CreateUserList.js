(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['Backbone', 'underscore'], function(_arg, _) {
    var CreateUserList, Model, _ref;

    Model = _arg.Model;
    return CreateUserList = (function(_super) {
      __extends(CreateUserList, _super);

      function CreateUserList() {
        _ref = CreateUserList.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CreateUserList.prototype.defaults = {
        roles: null,
        sections: null,
        course_section_id: null,
        enrollment_type: null,
        user_list: null,
        readURL: null,
        updateURL: null,
        step: 1,
        enrolledUsers: null
      };

      CreateUserList.prototype.present = function() {
        return this.attributes;
      };

      CreateUserList.prototype.toJSON = function() {
        var attrs, json;

        attrs = ['course_section_id', 'enrollment_type', 'user_list', 'limit_privileges_to_course_section'];
        return json = _.pick.apply(_, [this.attributes].concat(__slice.call(attrs)));
      };

      CreateUserList.prototype.url = function() {
        if (this.get('step') === 1) {
          return this.get('readURL');
        } else {
          return this.get('updateURL');
        }
      };

      CreateUserList.prototype.incrementStep = function() {
        return this.set('step', this.get('step') + 1);
      };

      CreateUserList.prototype.startOver = function() {
        this.set('users', null);
        return this.set('step', 1);
      };

      CreateUserList.prototype.parse = function(data) {
        if (_.isArray(data)) {
          return {
            enrolledUsers: data
          };
        } else {
          return data;
        }
      };

      return CreateUserList;

    })(Model);
  });

}).call(this);
