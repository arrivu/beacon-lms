(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'i18n!overrides'], function(_arg, I18n) {
    var Model, Section, _ref;

    Model = _arg.Model;
    return Section = (function(_super) {
      __extends(Section, _super);

      function Section() {
        this.isDefaultDueDateSection = __bind(this.isDefaultDueDateSection, this);        _ref = Section.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Section.defaultDueDateSection = function() {
        return new Section({
          id: Section.defaultDueDateSectionID,
          name: I18n.t('overrides.everyone', 'Everyone')
        });
      };

      Section.defaultDueDateSectionID = '0';

      Section.prototype.isDefaultDueDateSection = function() {
        return this.id === Section.defaultDueDateSectionID;
      };

      return Section;

    })(Model);
  });

}).call(this);
