(function() {
  define(['i18n!gradebook2', 'jquery', 'underscore', 'compiled/views/gradebook/HeaderFilterView', 'compiled/views/gradebook/OutcomeColumnView', 'compiled/util/NumberCompare', 'jst/gradebook2/outcome_gradebook_cell', 'jst/gradebook2/outcome_gradebook_student_cell'], function(I18n, $, _, HeaderFilterView, OutcomeColumnView, numberCompare, cellTemplate, studentCellTemplate) {
    var Grid;

    return Grid = {
      filter: ['mastery', 'near-mastery', 'remedial'],
      averageFn: 'mean',
      dataSource: {},
      outcomes: [],
      options: {
        headerRowHeight: 42,
        rowHeight: 38,
        syncColumnCellResize: true,
        showHeaderRow: true,
        explicitInitialization: true,
        fullWidthRows: true,
        numberOfColumnsToFreeze: 1
      },
      Events: {
        headerRowCellRendered: function(e, options) {
          return Grid.View.headerRowCell(options);
        },
        headerCellRendered: function(e, options) {
          return Grid.View.headerCell(options);
        },
        init: function(grid) {
          var headerRows, headers;

          headers = $('.outcome-gradebook-wrapper .slick-header');
          headerRows = $('.outcome-gradebook-wrapper .slick-headerrow');
          return _.each(_.zip(headers, headerRows), function(_arg) {
            var header, headerRow;

            header = _arg[0], headerRow = _arg[1];
            return $(headerRow).insertBefore($(header));
          });
        },
        sectionChangeFunction: function(grid) {
          return function(currentSection) {
            var rows;

            rows = Grid.Util.toRows(Grid.dataSource.rollups, {
              section: currentSection
            });
            grid.setData(rows, false);
            Grid.View.redrawHeader(grid);
            return grid.invalidate();
          };
        },
        sort: function(e, _arg) {
          var grid, rows, sortAsc, sortCol, sortFn;

          grid = _arg.grid, sortAsc = _arg.sortAsc, sortCol = _arg.sortCol;
          sortFn = sortCol.field === 'student' ? '_sortStudents' : '_sortResults';
          rows = grid.getData().sort(function(a, b) {
            return Grid.Events[sortFn].call(null, a, b, sortAsc, sortCol.field);
          });
          grid.setData(rows);
          return grid.invalidate();
        },
        _sortStudents: function(a, b, sortAsc) {
          var f, n, nameA, nameB;

          if (''.localeCompare) {
            nameA = a.student.sortable_name;
            nameB = b.student.sortable_name;
            n = sortAsc ? 1 : -1;
            return nameA.localeCompare(nameB, window.I18n.locale || 'en', {
              sensitivity: 'accent',
              ignorePunctuation: true,
              numeric: true
            }) * n;
          } else {
            nameA = a.student.sortable_name.toLowerCase();
            nameB = b.student.sortable_name.toLowerCase();
            f = sortAsc ? 1 : -1;
            if (nameA < nameB) {
              return -1 * f;
            } else if (nameB < nameA) {
              return 1 * f;
            } else {
              return 0;
            }
          }
        },
        _sortResults: function(a, b, sortAsc, field) {
          var scoreA, scoreB, val;

          scoreA = a[field];
          scoreB = b[field];
          val = numberCompare(scoreA, scoreB, {
            descending: !sortAsc
          });
          if (val === 0) {
            return Grid.Events._sortStudents(a, b, sortAsc);
          } else {
            return val;
          }
        }
      },
      Util: {
        COLUMN_OPTIONS: {
          width: 121,
          minWidth: 50,
          sortable: true
        },
        toGrid: function(response, options) {
          if (options == null) {
            options = {
              column: {},
              row: {}
            };
          }
          Grid.dataSource = response;
          return [Grid.Util.toColumns(response.linked.outcomes, options.column), Grid.Util.toRows(response.rollups, options.row)];
        },
        toColumns: function(outcomes, options) {
          var columns;

          if (options == null) {
            options = {};
          }
          options = _.extend({}, Grid.Util.COLUMN_OPTIONS, options);
          columns = _.map(outcomes, function(outcome) {
            return _.extend({
              id: "outcome_" + outcome.id
            }, {
              name: _.escape(outcome.title),
              field: "outcome_" + outcome.id,
              cssClass: 'outcome-result-cell',
              outcome: outcome
            }, options);
          });
          return [Grid.Util._studentColumn()].concat(columns);
        },
        _studentColumn: function() {
          var studentOptions;

          studentOptions = {
            width: 228
          };
          return _.extend({
            id: 'student',
            name: I18n.t('learning_outcome', 'Learning Outcome'),
            field: 'student',
            cssClass: 'outcome-student-cell',
            headerCssClass: 'outcome-student-header-cell',
            formatter: Grid.View.studentCell
          }, _.extend(Grid.Util.COLUMN_OPTIONS, studentOptions));
        },
        toRows: function(rollups, options) {
          var rows;

          if (options == null) {
            options = {};
          }
          rows = _.reject(_.map(rollups, Grid.Util._toRowFn(options.section)), function(v) {
            return v === null;
          });
          return rows.sort(function(a, b) {
            return Grid.Events._sortStudents(a, b, true);
          });
        },
        _toRowFn: function(section) {
          return function(rollup) {
            return Grid.Util._toRow(rollup, section);
          };
        },
        _toRow: function(rollup, section) {
          var row, student;

          if (!Grid.Util.sectionFilter(section, rollup)) {
            return null;
          }
          student = Grid.Util.lookupStudent(rollup.links.user);
          section = Grid.Util.lookupSection(rollup.links.section);
          row = {
            student: _.extend({
              grades_html_url: "/courses/" + section.course_id + "/grades/" + student.id + "#tab-outcomes",
              section: _.keys(Grid.sections).length > 1 ? section : null
            }, student),
            section: rollup.links.section
          };
          _.each(rollup.scores, function(score) {
            return row["outcome_" + score.links.outcome] = score.score;
          });
          return row;
        },
        sectionFilter: function(section, row) {
          if (!section) {
            return true;
          }
          return _.isEqual(section.toString(), row.links.section.toString());
        },
        saveOutcomes: function(outcomes) {
          var id, type, url, _ref;

          _ref = ENV.context_asset_string.split('_'), type = _ref[0], id = _ref[1];
          url = "/" + type + "s/" + id + "/outcomes";
          return Grid.outcomes = _.reduce(outcomes, function(result, outcome) {
            outcome.url = url;
            result["outcome_" + outcome.id] = outcome;
            return result;
          }, {});
        },
        saveOutcomePaths: function(outcomePaths) {
          return outcomePaths.forEach(function(path) {
            var pathString;

            pathString = _.pluck(path.parts, 'name').join(' > ');
            return Grid.outcomes["outcome_" + path.id].path = pathString;
          });
        },
        lookupOutcome: function(name) {
          return Grid.outcomes[name];
        },
        saveStudents: function(students) {
          return Grid.students = _.reduce(students, function(result, student) {
            result[student.id] = student;
            return result;
          }, {});
        },
        lookupStudent: function(id) {
          return Grid.students[id];
        },
        saveSections: function(sections) {
          return Grid.sections = _.reduce(sections, function(result, section) {
            result[section.id] = section;
            return result;
          }, {});
        },
        lookupSection: function(id) {
          return Grid.sections[id];
        }
      },
      Math: {
        mean: function(values, round) {
          var total;

          if (round == null) {
            round = false;
          }
          total = _.reduce(values, (function(a, b) {
            return a + b;
          }), 0);
          if (round) {
            return Math.round(total / values.length);
          } else {
            return parseFloat((total / values.length).toString().slice(0, 4));
          }
        },
        median: function(values) {
          var i, sortedValues;

          sortedValues = _.sortBy(values, _.identity);
          if (values.length % 2 === 0) {
            i = values.length / 2;
            return Grid.Math.mean(sortedValues.slice(i - 1, i + 1));
          } else {
            return sortedValues[Math.floor(values.length / 2)];
          }
        },
        mode: function(values) {
          var counts, max, mode;

          counts = _.chain(values).countBy(_.identity).reduce(function(t, v, k) {
            t.push([v, parseInt(k)]);
            return t;
          }, []).sortBy(_.first).reverse().value();
          max = counts[0][0];
          mode = _.reject(counts, function(n) {
            return n[0] < max;
          });
          return mode = Grid.Math.mean(_.map(mode, _.last), true);
        },
        max: function(values) {
          return Math.max.apply(Math, values);
        },
        min: function(values) {
          return Math.min.apply(Math, values);
        },
        cnt: function(values) {
          return values.length;
        }
      },
      View: {
        cell: function(row, cell, value, columnDef, dataContext) {
          return Grid.View.cellHtml(value, columnDef, true);
        },
        cellHtml: function(value, columnDef, shouldFilter) {
          var className, outcome;

          outcome = Grid.Util.lookupOutcome(columnDef.field);
          if (!(outcome && _.isNumber(value))) {
            return;
          }
          className = Grid.View.masteryClassName(value, outcome);
          if (shouldFilter && !_.include(Grid.filter, className)) {
            return '';
          }
          return cellTemplate({
            score: Math.round(value * 100.0) / 100.0,
            className: className,
            masteryScore: outcome.mastery_points
          });
        },
        studentCell: function(row, cell, value, columnDef, dataContext) {
          return studentCellTemplate(value);
        },
        masteryClassName: function(score, outcome) {
          var mastery, nearMastery;

          mastery = outcome.mastery_points;
          nearMastery = mastery / 2;
          if (score >= mastery) {
            return 'mastery';
          }
          if (score >= nearMastery) {
            return 'near-mastery';
          }
          return 'remedial';
        },
        getColumnResults: function(data, column) {
          return _.chain(data).pluck(column.field).filter(_.isNumber).value();
        },
        headerRowCell: function(_arg, fn) {
          var column, grid, node, results, value;

          node = _arg.node, column = _arg.column, grid = _arg.grid;
          if (fn == null) {
            fn = Grid.averageFn;
          }
          if (column.field === 'student') {
            return Grid.View.studentHeaderRowCell(node, column, grid);
          }
          results = Grid.View.getColumnResults(grid.getData(), column);
          if (!results.length) {
            return $(node).empty();
          }
          value = Grid.Math[fn].call(this, results);
          return $(node).empty().append(Grid.View.cellHtml(value, column, false));
        },
        redrawHeader: function(grid, fn) {
          var cols;

          if (fn == null) {
            fn = Grid.averageFn;
          }
          Grid.averageFn = fn;
          cols = grid.getColumns();
          return _.each(cols, function(col) {
            var header;

            header = grid.getHeaderRowColumn(col.id);
            return Grid.View.headerRowCell({
              node: header,
              column: col,
              grid: grid
            }, fn);
          });
        },
        studentHeaderRowCell: function(node, column, grid) {
          var view;

          $(node).addClass('average-filter');
          view = new HeaderFilterView({
            grid: grid,
            redrawFn: Grid.View.redrawHeader
          });
          view.render();
          return $(node).append(view.$el);
        },
        headerCell: function(_arg, fn) {
          var column, grid, node, totalsFn, view;

          node = _arg.node, column = _arg.column, grid = _arg.grid;
          if (fn == null) {
            fn = Grid.averageFn;
          }
          if (column.field === 'student') {
            return;
          }
          totalsFn = _.partial(Grid.View.calculateRatingsTotals, grid, column);
          view = new OutcomeColumnView({
            el: node,
            attributes: column.outcome,
            totalsFn: totalsFn
          });
          return view.render();
        },
        calculateRatingsTotals: function(grid, column) {
          var counts, points, ratings, results;

          results = Grid.View.getColumnResults(grid.getData(), column);
          ratings = column.outcome.ratings;
          ratings.result_count = results.length;
          points = _.pluck(ratings, 'points');
          counts = _.countBy(results, function(result) {
            return _.find(points, function(x) {
              return x <= result;
            });
          });
          return _.each(ratings, function(rating) {
            return rating.percent = Math.round((counts[rating.points] || 0) / results.length * 100);
          });
        }
      }
    };
  });

}).call(this);
