(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!gradebook2', 'jquery', 'underscore', 'Backbone', 'jst/gradebook2/section_to_show_menu', 'compiled/jquery.kylemenu', 'vendor/jquery.ba-tinypubsub'], function(I18n, $, _, _arg, template) {
    var SectionMenuView, View;

    View = _arg.View;
    return SectionMenuView = (function(_super) {
      __extends(SectionMenuView, _super);

      SectionMenuView.optionProperty('sections');

      SectionMenuView.optionProperty('currentSection');

      SectionMenuView.prototype.template = template;

      SectionMenuView.prototype.defaultSection = I18n.t('all_sections', 'All Sections');

      function SectionMenuView(options) {
        this.onSectionChange = __bind(this.onSectionChange, this);        SectionMenuView.__super__.constructor.apply(this, arguments);
        this.sections.unshift({
          name: this.defaultSection,
          checked: !options.currentSection
        });
      }

      SectionMenuView.prototype.render = function() {
        this.detachEvents();
        SectionMenuView.__super__.render.apply(this, arguments);
        this.$('button').kyleMenu();
        return this.attachEvents();
      };

      SectionMenuView.prototype.detachEvents = function() {
        $.unsubscribe('currentSection/change', this.onSectionChange);
        return this.$('.section-select-menu').off('menuselect');
      };

      SectionMenuView.prototype.attachEvents = function() {
        var _this = this;

        $.subscribe('currentSection/change', this.onSectionChange);
        this.$('.section-select-menu').on('click', function(e) {
          return e.preventDefault();
        });
        return this.$('.section-select-menu').on('menuselect', function(event, ui) {
          var section;

          section = _this.$('[aria-checked=true] input[name=section_to_show_radio]').val() || void 0;
          $.publish('currentSection/change', [section, _this.cid]);
          return _this.trigger('menuselect', event, ui, _this.currentSection);
        });
      };

      SectionMenuView.prototype.onSectionChange = function(section, author) {
        this.currentSection = section;
        this.updateSections();
        return this.render();
      };

      SectionMenuView.prototype.updateSections = function() {
        var _this = this;

        return _.map(this.sections, function(section) {
          section.checked = section.id === _this.currentSection;
          return section;
        });
      };

      SectionMenuView.prototype.toJSON = function() {
        var _ref;

        return {
          sections: this.sections,
          currentSection: ((_ref = _.findWhere(this.sections, {
            id: this.currentSection
          })) != null ? _ref.name : void 0) || this.defaultSection
        };
      };

      return SectionMenuView;

    })(View);
  });

}).call(this);
