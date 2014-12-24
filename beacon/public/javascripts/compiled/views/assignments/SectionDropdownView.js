(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'jst/assignments/SectionDropdownView'], function(Backbone, _, template) {
    var SectionDropdownView, _ref;

    return SectionDropdownView = (function(_super) {
      __extends(SectionDropdownView, _super);

      function SectionDropdownView() {
        this.updateCourseSectionID = __bind(this.updateCourseSectionID, this);
        this.toJSON = __bind(this.toJSON, this);        _ref = SectionDropdownView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SectionDropdownView.prototype.template = template;

      SectionDropdownView.prototype.tagName = 'select';

      SectionDropdownView.prototype.events = {
        'change': 'updateCourseSectionID'
      };

      SectionDropdownView.optionProperty('sections');

      SectionDropdownView.optionProperty('override');

      SectionDropdownView.prototype.toJSON = function() {
        return {
          override: this.override.toJSON().assignment_override,
          sections: _.map(this.sections, function(section) {
            return section.toJSON();
          })
        };
      };

      SectionDropdownView.prototype.updateCourseSectionID = function() {
        return this.override.set('course_section_id', this.$el.val());
      };

      return SectionDropdownView;

    })(Backbone.View);
  });

}).call(this);
