(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!gradebook2', 'jquery', 'underscore', 'Backbone', 'vendor/slickgrid', 'compiled/gradebook2/OutcomeGradebookGrid', 'compiled/views/gradebook/CheckboxView', 'compiled/views/gradebook/SectionMenuView', 'jst/gradebook2/outcome_gradebook', 'vendor/jquery.ba-tinypubsub', 'jquery.instructure_misc_plugins'], function(I18n, $, _, _arg, Slick, Grid, CheckboxView, SectionMenuView, template, cellTemplate) {
    var Dictionary, OutcomeGradebookView, View;

    View = _arg.View;
    Dictionary = {
      mastery: {
        color: '#8bab58',
        label: I18n.t('mastery', 'mastery')
      },
      nearMastery: {
        color: '#e0d679',
        label: I18n.t('near_mastery', 'near mastery')
      },
      remedial: {
        color: '#dd5c5c',
        label: I18n.t('remedial', 'remedial')
      }
    };
    return OutcomeGradebookView = (function(_super) {
      __extends(OutcomeGradebookView, _super);

      OutcomeGradebookView.prototype.tagName = 'div';

      OutcomeGradebookView.prototype.className = 'outcome-gradebook-container';

      OutcomeGradebookView.prototype.template = template;

      OutcomeGradebookView.optionProperty('gradebook');

      OutcomeGradebookView.prototype.hasOutcomes = $.Deferred();

      OutcomeGradebookView.prototype.checkboxes = {
        mastery: new CheckboxView(Dictionary.mastery),
        'near-mastery': new CheckboxView(Dictionary.nearMastery),
        remedial: new CheckboxView(Dictionary.remedial)
      };

      OutcomeGradebookView.prototype.events = {
        'click .sidebar-toggle': 'onSidebarToggle'
      };

      function OutcomeGradebookView(options) {
        this.updateExportLink = __bind(this.updateExportLink, this);
        this._drawSectionMenu = __bind(this._drawSectionMenu, this);
        this._loadOutcomes = __bind(this._loadOutcomes, this);
        this.renderGrid = __bind(this.renderGrid, this);        OutcomeGradebookView.__super__.constructor.apply(this, arguments);
        this._validateOptions(options);
      }

      OutcomeGradebookView.prototype.onSidebarToggle = function(e) {
        var isCollapsed;

        e.preventDefault();
        isCollapsed = this._toggleSidebarCollapse();
        this._toggleSidebarArrow();
        return this._toggleSidebarTooltips(isCollapsed);
      };

      OutcomeGradebookView.prototype._toggleSidebarCollapse = function() {
        return this.$('.outcome-gradebook-sidebar').toggleClass('collapsed').hasClass('collapsed');
      };

      OutcomeGradebookView.prototype._toggleSidebarArrow = function() {
        return this.$('.sidebar-toggle').toggleClass('icon-arrow-open-right').toggleClass('icon-arrow-open-left');
      };

      OutcomeGradebookView.prototype._toggleSidebarTooltips = function(shouldShow) {
        if (shouldShow) {
          return this.$('.checkbox-view').each(function() {
            return $(this).find('.checkbox').attr('data-tooltip', 'left').attr('title', $(this).find('.checkbox-label').text());
          });
        } else {
          return this.$('.checkbox').removeAttr('data-tooltip').removeAttr('title');
        }
      };

      OutcomeGradebookView.prototype._validateOptions = function(_arg1) {
        var gradebook;

        gradebook = _arg1.gradebook;
        if (!gradebook) {
          throw new Error('Missing required option: "gradebook"');
        }
      };

      OutcomeGradebookView.prototype._attachEvents = function() {
        var name, view, _ref;

        _ref = this.checkboxes;
        for (name in _ref) {
          view = _ref[name];
          view.on('togglestate', this._createFilter(name));
        }
        $.subscribe('currentSection/change', Grid.Events.sectionChangeFunction(this.grid));
        $.subscribe('currentSection/change', this.updateExportLink);
        return this.updateExportLink(this.gradebook.sectionToShow);
      };

      OutcomeGradebookView.prototype._attachGridEvents = function() {
        this.grid.onHeaderRowCellRendered.subscribe(Grid.Events.headerRowCellRendered);
        this.grid.onHeaderCellRendered.subscribe(Grid.Events.headerCellRendered);
        return this.grid.onSort.subscribe(Grid.Events.sort);
      };

      OutcomeGradebookView.prototype.toJSON = function() {
        return _.extend({}, this.checkboxes);
      };

      OutcomeGradebookView.prototype.render = function() {
        var _this = this;

        $.when(this.gradebook.hasSections).then(function() {
          return OutcomeGradebookView.__super__.render.apply(_this, arguments);
        }).then(this._drawSectionMenu);
        $.when(this.hasOutcomes).then(this.renderGrid);
        return this;
      };

      OutcomeGradebookView.prototype.renderGrid = function(response) {
        var columns, rows, _ref;

        Grid.Util.saveOutcomes(response.linked.outcomes);
        Grid.Util.saveStudents(response.linked.users);
        Grid.Util.saveOutcomePaths(response.linked.outcome_paths);
        Grid.Util.saveSections(this.gradebook.sections);
        _ref = Grid.Util.toGrid(response, {
          column: {
            formatter: Grid.View.cell
          },
          row: {
            section: this.menu.currentSection
          }
        }), columns = _ref[0], rows = _ref[1];
        this.grid = new Slick.Grid('.outcome-gradebook-wrapper', rows, columns, Grid.options);
        this._attachGridEvents();
        this.grid.init();
        Grid.Events.init(this.grid);
        return this._attachEvents();
      };

      OutcomeGradebookView.prototype.isLoaded = false;

      OutcomeGradebookView.prototype.onShow = function() {
        var _this = this;

        if (!this.isLoaded) {
          this.loadOutcomes();
        }
        this.isLoaded = true;
        return this.$el.fillWindowWithMe({
          onResize: function() {
            if (_this.grid) {
              return _this.grid.resizeCanvas();
            }
          }
        });
      };

      OutcomeGradebookView.prototype.loadOutcomes = function() {
        return $.when(this.gradebook.hasSections).then(this._loadOutcomes);
      };

      OutcomeGradebookView.prototype._loadOutcomes = function() {
        var course;

        course = ENV.context_asset_string.split('_')[1];
        this.$('.outcome-gradebook-wrapper').disableWhileLoading(this.hasOutcomes);
        return this._loadPage("/api/v1/courses/" + course + "/outcome_rollups?per_page=100&include[]=outcomes&include[]=users&include[]=outcome_paths");
      };

      OutcomeGradebookView.prototype._loadPage = function(url, outcomes) {
        var dfd,
          _this = this;

        dfd = $.getJSON(url);
        return dfd.then(function(response, status, xhr) {
          outcomes = _this._mergeResponses(outcomes, response);
          if (response.meta.pagination.next) {
            return _this._loadPage(response.meta.pagination.next, outcomes);
          } else {
            return _this.hasOutcomes.resolve(outcomes);
          }
        });
      };

      OutcomeGradebookView.prototype._mergeResponses = function(a, b) {
        var response;

        if (!a) {
          return b;
        }
        response = {};
        response.meta = _.extend({}, a.meta, b.meta);
        response.linked = {
          outcomes: a.linked.outcomes,
          outcome_paths: a.linked.outcome_paths,
          users: a.linked.users.concat(b.linked.users)
        };
        response.rollups = a.rollups.concat(b.rollups);
        return response;
      };

      OutcomeGradebookView.prototype._drawSectionMenu = function() {
        this.menu = new SectionMenuView({
          sections: this.gradebook.sectionList(),
          currentSection: this.gradebook.sectionToShow,
          el: $('.section-button-placeholder')
        });
        return this.menu.render();
      };

      OutcomeGradebookView.prototype._createFilter = function(name) {
        var filterFunction,
          _this = this;

        return filterFunction = function(isChecked) {
          Grid.filter = isChecked ? _.uniq(Grid.filter.concat([name])) : _.reject(Grid.filter, function(o) {
            return o === name;
          });
          return _this.grid.invalidate();
        };
      };

      OutcomeGradebookView.prototype.updateExportLink = function(section) {
        var url;

        url = "" + ENV.GRADEBOOK_OPTIONS.context_url + "/outcome_rollups.csv";
        if (section) {
          url += "?section_id=" + section;
        }
        return $('.export-content').attr('href', url);
      };

      return OutcomeGradebookView;

    })(View);
  });

}).call(this);
