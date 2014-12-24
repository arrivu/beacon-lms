(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['slickgrid.long_text_editor', 'compiled/views/KeyboardNavDialog', 'jst/KeyboardNavDialog', 'vendor/slickgrid', 'compiled/gradebook2/TotalColumnHeaderView', 'compiled/util/round', 'compiled/views/InputFilterView', 'i18n!gradebook2', 'compiled/gradebook2/GRADEBOOK_TRANSLATIONS', 'jquery', 'underscore', 'Backbone', 'timezone', 'compiled/grade_calculator', 'compiled/userSettings', 'vendor/spin', 'compiled/SubmissionDetailsDialog', 'compiled/gradebook2/AssignmentGroupWeightsDialog', 'compiled/gradebook2/GradeDisplayWarningDialog', 'compiled/gradebook2/SubmissionCell', 'compiled/gradebook2/GradebookHeaderMenu', 'compiled/util/NumberCompare', 'str/htmlEscape', 'compiled/gradebook2/UploadDialog', 'compiled/gradebook2/PostGradesDialog', 'compiled/gradebook2/PostGradesModel', 'jst/gradebook2/column_header', 'jst/gradebook2/group_total_cell', 'jst/gradebook2/row_student_name', 'compiled/views/gradebook/SectionMenuView', 'compiled/gradebook2/GradebookKeyboardNav', 'jst/_avatar', 'jquery.ajaxJSON', 'jquery.instructure_date_and_time', 'jqueryui/dialog', 'jquery.instructure_misc_helpers', 'jquery.instructure_misc_plugins', 'vendor/jquery.ba-tinypubsub', 'jqueryui/mouse', 'jqueryui/position', 'jqueryui/sortable', 'compiled/jquery.kylemenu', 'compiled/jquery/fixDialogButtons'], function(LongTextEditor, KeyboardNavDialog, keyboardNavTemplate, Slick, TotalColumnHeaderView, round, InputFilterView, I18n, GRADEBOOK_TRANSLATIONS, $, _, Backbone, tz, GradeCalculator, userSettings, Spinner, SubmissionDetailsDialog, AssignmentGroupWeightsDialog, GradeDisplayWarningDialog, SubmissionCell, GradebookHeaderMenu, numberCompare, htmlEscape, UploadDialog, PostGradesDialog, PostGradesModel, columnHeaderTemplate, groupTotalCellTemplate, rowStudentNameTemplate, SectionMenuView, GradebookKeyboardNav) {
    var Gradebook;

    return Gradebook = (function() {
      var DISPLAY_PRECISION, columnWidths;

      columnWidths = {
        assignment: {
          min: 10,
          default_max: 200,
          max: 400
        },
        assignmentGroup: {
          min: 35,
          default_max: 200,
          max: 400
        },
        total: {
          min: 85,
          max: 100
        }
      };

      DISPLAY_PRECISION = 2;

      Gradebook.prototype.hasSections = $.Deferred();

      Gradebook.prototype.allSubmissionsLoaded = $.Deferred();

      function Gradebook(options) {
        var enrollmentsUrl, gotAllStudents, gotCustomColumns,
          _this = this;

        this.options = options;
        this.setAssignmentWarnings = __bind(this.setAssignmentWarnings, this);
        this.gradeSort = __bind(this.gradeSort, this);
        this.localeSort = __bind(this.localeSort, this);
        this.onCellChange = __bind(this.onCellChange, this);
        this.onBeforeEditCell = __bind(this.onBeforeEditCell, this);
        this.initGrid = __bind(this.initGrid, this);
        this.onUserFilterInput = __bind(this.onUserFilterInput, this);
        this.togglePointsOrPercentTotals = __bind(this.togglePointsOrPercentTotals, this);
        this.switch_total_display_and_mark_user_as_warned = __bind(this.switch_total_display_and_mark_user_as_warned, this);
        this.switch_total_display = __bind(this.switch_total_display, this);
        this.displayPointTotals = __bind(this.displayPointTotals, this);
        this.weightedGroups = __bind(this.weightedGroups, this);
        this.studentNamesToggle = __bind(this.studentNamesToggle, this);
        this.initHeader = __bind(this.initHeader, this);
        this.displayPostGradesButton = __bind(this.displayPostGradesButton, this);
        this.updateCurrentSection = __bind(this.updateCurrentSection, this);
        this.onGridBlur = __bind(this.onGridBlur, this);
        this.hoverMinimizedCell = __bind(this.hoverMinimizedCell, this);
        this.unminimizeColumn = __bind(this.unminimizeColumn, this);
        this.minimizeColumn = __bind(this.minimizeColumn, this);
        this.fixColumnReordering = __bind(this.fixColumnReordering, this);
        this.unhighlightColumns = __bind(this.unhighlightColumns, this);
        this.highlightColumn = __bind(this.highlightColumn, this);
        this.calculateStudentGrade = __bind(this.calculateStudentGrade, this);
        this.htmlContentFormatter = __bind(this.htmlContentFormatter, this);
        this.groupTotalFormatter = __bind(this.groupTotalFormatter, this);
        this.uneditableCellFormatter = __bind(this.uneditableCellFormatter, this);
        this.staticCellFormatter = __bind(this.staticCellFormatter, this);
        this.cellFormatter = __bind(this.cellFormatter, this);
        this.updateSubmissionsFromExternal = __bind(this.updateSubmissionsFromExternal, this);
        this.updateSubmission = __bind(this.updateSubmission, this);
        this.withAllStudents = __bind(this.withAllStudents, this);
        this.student = __bind(this.student, this);
        this.gotSubmissionsChunk = __bind(this.gotSubmissionsChunk, this);
        this.getSubmissionsChunks = __bind(this.getSubmissionsChunks, this);
        this.buildRows = __bind(this.buildRows, this);
        this.assignmentGroupHtml = __bind(this.assignmentGroupHtml, this);
        this.moveTotalColumn = __bind(this.moveTotalColumn, this);
        this.renderTotalHeader = __bind(this.renderTotalHeader, this);
        this.handleAssignmentGroupWeightChange = __bind(this.handleAssignmentGroupWeightChange, this);
        this.handleAssignmentMutingChange = __bind(this.handleAssignmentMutingChange, this);
        this.rowFilter = __bind(this.rowFilter, this);
        this.wrapColumnSortFn = __bind(this.wrapColumnSortFn, this);
        this.makeCompareAssignmentCustomOrderFn = __bind(this.makeCompareAssignmentCustomOrderFn, this);
        this.compareAssignmentDueDates = __bind(this.compareAssignmentDueDates, this);
        this.compareAssignmentPositions = __bind(this.compareAssignmentPositions, this);
        this.makeColumnSortFn = __bind(this.makeColumnSortFn, this);
        this.arrangeColumnsBy = __bind(this.arrangeColumnsBy, this);
        this.setArrangementTogglersVisibility = __bind(this.setArrangementTogglersVisibility, this);
        this.storeCustomColumnOrder = __bind(this.storeCustomColumnOrder, this);
        this.onColumnsReordered = __bind(this.onColumnsReordered, this);
        this.setStoredSortOrder = __bind(this.setStoredSortOrder, this);
        this.getStoredSortOrder = __bind(this.getStoredSortOrder, this);
        this.studentsThatCanSeeAssignment = __bind(this.studentsThatCanSeeAssignment, this);
        this.gotChunkOfStudents = __bind(this.gotChunkOfStudents, this);
        this.gotSections = __bind(this.gotSections, this);
        this.gotAssignmentGroups = __bind(this.gotAssignmentGroups, this);
        this.doSlickgridStuff = __bind(this.doSlickgridStuff, this);
        this.chunk_start = 0;
        this.students = {};
        this.studentViewStudents = {};
        this.rows = [];
        this.assignmentsToHide = userSettings.contextGet('hidden_columns') || [];
        this.sectionToShow = userSettings.contextGet('grading_show_only_section');
        this.sectionToShow = this.sectionToShow && String(this.sectionToShow);
        this.show_attendance = userSettings.contextGet('show_attendance');
        this.include_ungraded_assignments = userSettings.contextGet('include_ungraded_assignments');
        this.userFilterRemovedRows = [];
        this.show_concluded_enrollments = userSettings.contextGet('show_concluded_enrollments');
        if (this.options.course_is_concluded) {
          this.show_concluded_enrollments = true;
        }
        this.totalColumnInFront = userSettings.contextGet('total_column_in_front');
        this.numberOfFrozenCols = this.totalColumnInFront ? 3 : 2;
        $.subscribe('assignment_group_weights_changed', this.handleAssignmentGroupWeightChange);
        $.subscribe('assignment_muting_toggled', this.handleAssignmentMutingChange);
        $.subscribe('submissions_updated', this.updateSubmissionsFromExternal);
        $.subscribe('currentSection/change', this.updateCurrentSection);
        enrollmentsUrl = this.show_concluded_enrollments ? 'students_url_with_concluded_enrollments' : 'students_url';
        gotAllStudents = $.Deferred().done(function() {
          return _this.gotAllStudents();
        });
        this.alignCoursePreferencesWithLocalStorage();
        $.when($.ajaxJSON(this.options[enrollmentsUrl], "GET"), $.ajaxJSON(this.options.assignment_groups_url, "GET", {}, this.gotAssignmentGroups), $.ajaxJSON(this.options.sections_url, "GET", {}, this.gotSections)).then(function(_arg) {
          var dfds, fetchEnrollments, lastLink, lastPage, page, paginationLinks, status, students, xhr;

          students = _arg[0], status = _arg[1], xhr = _arg[2];
          _this.gotChunkOfStudents(students);
          paginationLinks = xhr.getResponseHeader('Link');
          lastLink = paginationLinks.match(/<[^>]+>; *rel="last"/);
          if (lastLink == null) {
            gotAllStudents.resolve();
            return;
          }
          lastPage = lastLink[0].match(/page=(\d+)/)[1];
          lastPage = parseInt(lastPage, 10);
          if (lastPage === 1) {
            gotAllStudents.resolve();
            return;
          }
          fetchEnrollments = function(page) {
            return $.ajaxJSON(_this.options[enrollmentsUrl], "GET", {
              page: page
            });
          };
          dfds = (function() {
            var _i, _results;

            _results = [];
            for (page = _i = 2; 2 <= lastPage ? _i <= lastPage : _i >= lastPage; page = 2 <= lastPage ? ++_i : --_i) {
              _results.push(fetchEnrollments(page));
            }
            return _results;
          })();
          return $.when.apply($, dfds).then(function() {
            var responses, x, y, _i, _len, _ref;

            responses = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            if (dfds.length === 1) {
              _this.gotChunkOfStudents(responses[0]);
            } else {
              for (_i = 0, _len = responses.length; _i < _len; _i++) {
                _ref = responses[_i], students = _ref[0], x = _ref[1], y = _ref[2];
                _this.gotChunkOfStudents(students);
              }
            }
            return gotAllStudents.resolve();
          });
        });
        gotCustomColumns = this.getCustomColumns();
        this.gotAllData = $.when(gotCustomColumns, gotAllStudents);
        this.allSubmissionsLoaded.done(function() {
          var c, url, _i, _len, _ref;

          _ref = _this.customColumns;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            c = _ref[_i];
            url = _this.options.custom_column_data_url.replace(/:id/, c.id);
            _this.getCustomColumnData(c.id);
          }
          if (ENV.GRADEBOOK_OPTIONS.differentiated_assignments_enabled) {
            return _this.assignment_visibility();
          }
        });
        this.showCustomColumnDropdownOption();
      }

      Gradebook.prototype.assignment_visibility = function() {
        var a, all_students_ids, assignment_id, hidden_student_ids, student_id, _ref, _results;

        all_students_ids = _.keys(this.students);
        _ref = this.assignments;
        _results = [];
        for (assignment_id in _ref) {
          a = _ref[assignment_id];
          if (a.only_visible_to_overrides) {
            hidden_student_ids = this.hiddenStudentIdsForAssignment(all_students_ids, a);
            _results.push((function() {
              var _i, _len, _results1;

              _results1 = [];
              for (_i = 0, _len = hidden_student_ids.length; _i < _len; _i++) {
                student_id = hidden_student_ids[_i];
                _results1.push(this.updateSubmission({
                  assignment_id: assignment_id,
                  user_id: student_id,
                  hidden: true
                }));
              }
              return _results1;
            }).call(this));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Gradebook.prototype.hiddenStudentIdsForAssignment = function(student_ids, assignment) {
        return _.difference(student_ids, assignment.assignment_visibility.map(String));
      };

      Gradebook.prototype.onShow = function() {
        if (this.startedInitializing) {
          return;
        }
        this.startedInitializing = true;
        if (!this.spinner) {
          this.spinner = new Spinner();
        }
        $(this.spinner.spin().el).css({
          opacity: 0.5,
          top: '55px',
          left: '50%'
        }).addClass('use-css-transitions-for-show-hide').appendTo('#main');
        $('#gradebook-grid-wrapper').hide();
        return this.gotAllData.done(this.doSlickgridStuff);
      };

      Gradebook.prototype.getCustomColumns = function() {
        var _this = this;

        return $.getJSON(this.options.custom_columns_url).then(function(columns) {
          _this.numberOfFrozenCols += columns.length;
          return _this.customColumns = columns;
        });
      };

      Gradebook.prototype.getCustomColumnData = function(id, url) {
        var _this = this;

        url || (url = this.options.custom_column_data_url.replace(/:id/, id));
        return $.getJSON(url).done(function(columnData, __, xhr) {
          var datum, nextPg, student, _i, _len;

          nextPg = xhr.getResponseHeader("Link").match(/<([^>]+)>; *rel="next"/);
          if (nextPg) {
            _this.getCustomColumnData(id, nextPg[1]);
          }
          for (_i = 0, _len = columnData.length; _i < _len; _i++) {
            datum = columnData[_i];
            student = _this.student(datum.user_id);
            student["custom_col_" + id] = datum.content;
            _this.grid.invalidateRow(student.row);
          }
          return _this.grid.render();
        });
      };

      Gradebook.prototype.initPostGrades = function() {
        var _this = this;

        return $("#post-grades-button").click(function(event) {
          var open, pg, postGradesDialog, postGradesModel;

          event.preventDefault();
          pg = {
            assignments: _this.assignments,
            course_id: ENV.GRADEBOOK_OPTIONS.context_id
          };
          if (_this.sectionToShow) {
            pg.integration_section_id = _this.sections[_this.sectionToShow].integration_id;
          } else {
            pg.integration_course_id = ENV.GRADEBOOK_OPTIONS.context_integration_id;
          }
          postGradesModel = new PostGradesModel(pg);
          postGradesDialog = new PostGradesDialog(postGradesModel, ENV.GRADEBOOK_OPTIONS.sis_app_url, ENV.GRADEBOOK_OPTIONS.sis_app_token);
          postGradesModel.reset_ignored_assignments();
          postGradesDialog.render().show();
          return open = $('#post-grades-container').dialog('isOpen');
        });
      };

      Gradebook.prototype.doSlickgridStuff = function() {
        this.initGrid();
        this.buildRows();
        this.getSubmissionsChunks();
        return this.initHeader();
      };

      Gradebook.prototype.gotAssignmentGroups = function(assignmentGroups) {
        var assignment, group, _i, _len, _results;

        this.assignmentGroups = {};
        this.assignments = {};
        new AssignmentGroupWeightsDialog({
          context: this.options,
          assignmentGroups: assignmentGroups
        });
        _results = [];
        for (_i = 0, _len = assignmentGroups.length; _i < _len; _i++) {
          group = assignmentGroups[_i];
          this.assignmentGroups[group.id] = group;
          if (ENV.GRADEBOOK_OPTIONS.draft_state_enabled) {
            group.assignments = _.select(group.assignments, function(a) {
              return a.published;
            });
          }
          _results.push((function() {
            var _j, _len1, _ref, _results1;

            _ref = group.assignments;
            _results1 = [];
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              assignment = _ref[_j];
              htmlEscape(assignment);
              assignment.assignment_group = group;
              assignment.due_at = tz.parse(assignment.due_at);
              _results1.push(this.assignments[assignment.id] = assignment);
            }
            return _results1;
          }).call(this));
        }
        return _results;
      };

      Gradebook.prototype.gotSections = function(sections) {
        var section, _i, _len;

        this.sections = {};
        for (_i = 0, _len = sections.length; _i < _len; _i++) {
          section = sections[_i];
          htmlEscape(section);
          this.sections[section.id] = section;
        }
        this.displayPostGradesButton(this.sectionToShow);
        this.sections_enabled = sections.length > 1;
        return this.hasSections.resolve();
      };

      Gradebook.prototype.gotChunkOfStudents = function(studentEnrollments) {
        var student, studentEnrollment, _base, _base1, _base2, _i, _len, _name, _name1, _results;

        _results = [];
        for (_i = 0, _len = studentEnrollments.length; _i < _len; _i++) {
          studentEnrollment = studentEnrollments[_i];
          student = studentEnrollment.user;
          student.enrollment = studentEnrollment;
          if (student.enrollment.role === "StudentViewEnrollment") {
            (_base = this.studentViewStudents)[_name = student.id] || (_base[_name] = htmlEscape(student));
          } else {
            (_base1 = this.students)[_name1 = student.id] || (_base1[_name1] = htmlEscape(student));
          }
          (_base2 = this.student(student.id)).sections || (_base2.sections = []);
          _results.push(this.student(student.id).sections.push(studentEnrollment.course_section_id));
        }
        return _results;
      };

      Gradebook.prototype.gotAllStudents = function() {
        var _this = this;

        return this.withAllStudents(function(students) {
          var assignment, assignment_id, mySections, sectionId, sectionNames, student, student_id, _name, _ref, _results;

          _results = [];
          for (student_id in students) {
            student = students[student_id];
            student.computed_current_score || (student.computed_current_score = 0);
            student.computed_final_score || (student.computed_final_score = 0);
            student.secondary_identifier = student.sis_login_id || student.login_id;
            if (_this.sections_enabled) {
              mySections = (function() {
                var _i, _len, _ref, _results1;

                _ref = student.sections;
                _results1 = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  sectionId = _ref[_i];
                  if (this.sections[sectionId]) {
                    _results1.push(this.sections[sectionId].name);
                  }
                }
                return _results1;
              }).call(_this);
              sectionNames = $.toSentence(mySections.sort());
            }
            student.display_name = rowStudentNameTemplate({
              avatar_url: student.avatar_url,
              display_name: student.name,
              url: student.enrollment.grades.html_url + '#tab-assignments',
              sectionNames: sectionNames,
              alreadyEscaped: true
            });
            _ref = _this.assignments;
            for (assignment_id in _ref) {
              assignment = _ref[assignment_id];
              student[_name = "assignment_" + assignment_id] || (student[_name] = {
                assignment_id: assignment_id,
                user_id: student_id
              });
            }
            _results.push(_this.rows.push(student));
          }
          return _results;
        });
      };

      Gradebook.prototype.defaultSortType = 'assignment_group';

      Gradebook.prototype.studentsThatCanSeeAssignment = function(potential_students, assignment) {
        if (ENV.GRADEBOOK_OPTIONS.differentiated_assignments_enabled) {
          return _.pick.apply(_, [potential_students].concat(__slice.call(assignment.assignment_visibility)));
        } else {
          return potential_students;
        }
      };

      Gradebook.prototype.getStoredSortOrder = function() {
        return userSettings.contextGet('sort_grade_columns_by') || {
          sortType: this.defaultSortType
        };
      };

      Gradebook.prototype.setStoredSortOrder = function(newSortOrder) {
        if (newSortOrder.sortType === this.defaultSortType) {
          return userSettings.contextRemove('sort_grade_columns_by');
        } else {
          return userSettings.contextSet('sort_grade_columns_by', newSortOrder);
        }
      };

      Gradebook.prototype.onColumnsReordered = function() {
        var c, columns, currentIds, m, reorderedIds,
          _this = this;

        columns = this.grid.getColumns();
        currentIds = _(this.customColumns).map(function(c) {
          return c.id;
        });
        reorderedIds = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = columns.length; _i < _len; _i++) {
            c = columns[_i];
            if (m = c.id.match(/^custom_col_(\d+)/)) {
              _results.push(m[1]);
            }
          }
          return _results;
        })();
        if (!_.isEqual(reorderedIds, currentIds)) {
          return this.reorderCustomColumns(reorderedIds).then(function() {
            var colsById;

            colsById = _(_this.customColumns).indexBy(function(c) {
              return c.id;
            });
            return _this.customColumns = _(reorderedIds).map(function(id) {
              return colsById[id];
            });
          });
        } else {
          return this.storeCustomColumnOrder();
        }
      };

      Gradebook.prototype.reorderCustomColumns = function(ids) {
        return $.ajaxJSON(this.options.reorder_custom_columns_url, "POST", {
          order: ids
        });
      };

      Gradebook.prototype.storeCustomColumnOrder = function() {
        var assignment_columns, columns, newSortOrder;

        newSortOrder = {
          sortType: 'custom',
          customOrder: []
        };
        columns = this.grid.getColumns();
        assignment_columns = _.filter(columns, function(c) {
          return c.type === 'assignment';
        });
        newSortOrder.customOrder = _.map(assignment_columns, function(a) {
          return a.object.id;
        });
        return this.setStoredSortOrder(newSortOrder);
      };

      Gradebook.prototype.setArrangementTogglersVisibility = function(newSortOrder) {
        return this.$columnArrangementTogglers.each(function() {
          return $(this).closest('li').showIf($(this).data('arrangeColumnsBy') !== newSortOrder.sortType);
        });
      };

      Gradebook.prototype.arrangeColumnsBy = function(newSortOrder) {
        var columns, frozen;

        this.setArrangementTogglersVisibility(newSortOrder);
        this.setStoredSortOrder(newSortOrder);
        columns = this.grid.getColumns();
        frozen = columns.splice(0, this.numberOfFrozenCols);
        columns.sort(this.makeColumnSortFn(newSortOrder));
        columns.splice.apply(columns, [0, 0].concat(__slice.call(frozen)));
        this.grid.setColumns(columns);
        this.fixColumnReordering();
        return this.buildRows();
      };

      Gradebook.prototype.makeColumnSortFn = function(sortOrder) {
        var fn;

        fn = (function() {
          switch (sortOrder.sortType) {
            case 'assignment_group':
            case 'alpha':
              return this.compareAssignmentPositions;
            case 'due_date':
              return this.compareAssignmentDueDates;
            case 'custom':
              return this.makeCompareAssignmentCustomOrderFn(sortOrder);
            default:
              throw "unhandled column sort condition";
          }
        }).call(this);
        return this.wrapColumnSortFn(fn);
      };

      Gradebook.prototype.compareAssignmentPositions = function(a, b) {
        var diffOfAssignmentGroupPosition, diffOfAssignmentPosition;

        diffOfAssignmentGroupPosition = a.object.assignment_group.position - b.object.assignment_group.position;
        diffOfAssignmentPosition = a.object.position - b.object.position;
        return (diffOfAssignmentGroupPosition * 1000000) + diffOfAssignmentPosition;
      };

      Gradebook.prototype.compareAssignmentDueDates = function(a, b) {
        var aDate, bDate;

        aDate = a.object.due_at ? +a.object.due_at / 1000 : Number.MAX_VALUE;
        bDate = b.object.due_at ? +b.object.due_at / 1000 : Number.MAX_VALUE;
        if (aDate === bDate) {
          if (a.object.name === b.object.name) {
            return 0;
          }
          return (a.object.name > b.object.name ? 1 : -1);
        }
        return aDate - bDate;
      };

      Gradebook.prototype.makeCompareAssignmentCustomOrderFn = function(sortOrder) {
        var assignmentId, indexCounter, sortMap, _i, _len, _ref,
          _this = this;

        sortMap = {};
        indexCounter = 0;
        _ref = sortOrder.customOrder;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          assignmentId = _ref[_i];
          sortMap[String(assignmentId)] = indexCounter;
          indexCounter += 1;
        }
        return function(a, b) {
          var aIndex, bIndex;

          aIndex = sortMap[String(a.object.id)];
          bIndex = sortMap[String(b.object.id)];
          if ((aIndex != null) && (bIndex != null)) {
            return aIndex - bIndex;
          } else if ((aIndex != null) && (bIndex == null)) {
            return -1;
          } else if (bIndex != null) {
            return 1;
          } else {
            return _this.compareAssignmentPositions(a, b);
          }
        };
      };

      Gradebook.prototype.wrapColumnSortFn = function(wrappedFn) {
        var _this = this;

        return function(a, b) {
          if (b.type === 'total_grade') {
            return -1;
          }
          if (a.type === 'total_grade') {
            return 1;
          }
          if (b.type === 'assignment_group' && a.type !== 'assignment_group') {
            return -1;
          }
          if (a.type === 'assignment_group' && b.type !== 'assignment_group') {
            return 1;
          }
          if (a.type === 'assignment_group' && b.type === 'assignment_group') {
            return a.object.position - b.object.position;
          }
          return wrappedFn(a, b);
        };
      };

      Gradebook.prototype.rowFilter = function(student) {
        var _ref;

        return !this.sectionToShow || (_ref = this.sectionToShow, __indexOf.call(student.sections, _ref) >= 0);
      };

      Gradebook.prototype.handleAssignmentMutingChange = function(assignment) {
        var colDef, idx;

        idx = this.grid.getColumnIndex("assignment_" + assignment.id);
        colDef = this.grid.getColumns()[idx];
        colDef.name = this.assignmentHeaderHtml(assignment);
        this.grid.setColumns(this.grid.getColumns());
        this.fixColumnReordering();
        return this.buildRows();
      };

      Gradebook.prototype.handleAssignmentGroupWeightChange = function(assignment_group_options) {
        var assignment_group, column, columns, _i, _len, _ref;

        columns = this.grid.getColumns();
        _ref = assignment_group_options.assignmentGroups;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          assignment_group = _ref[_i];
          column = _.findWhere(columns, {
            id: "assignment_group_" + assignment_group.id
          });
          column.name = this.assignmentGroupHtml(column.object.name, column.object.group_weight);
        }
        this.setAssignmentWarnings();
        this.grid.setColumns(columns);
        this.renderTotalHeader();
        return this.buildRows();
      };

      Gradebook.prototype.renderTotalHeader = function() {
        this.totalHeader = new TotalColumnHeaderView({
          showingPoints: this.displayPointTotals,
          toggleShowingPoints: this.togglePointsOrPercentTotals.bind(this),
          weightedGroups: this.weightedGroups,
          totalColumnInFront: this.totalColumnInFront,
          moveTotalColumn: this.moveTotalColumn.bind(this)
        });
        return this.totalHeader.render();
      };

      Gradebook.prototype.moveTotalColumn = function() {
        this.totalColumnInFront = !this.totalColumnInFront;
        userSettings.contextSet('total_column_in_front', this.totalColumnInFront);
        return window.location.reload();
      };

      Gradebook.prototype.assignmentGroupHtml = function(group_name, group_weight) {
        var escaped_group_name, percentage;

        escaped_group_name = htmlEscape(group_name);
        if (this.weightedGroups()) {
          percentage = I18n.toPercentage(group_weight, {
            precision: 2
          });
          return "" + escaped_group_name + "<div class='assignment-points-possible'>\n  " + (I18n.t('percent_of_grade', "%{percentage} of grade", {
            percentage: percentage
          })) + "\n</div>";
        } else {
          return "" + escaped_group_name;
        }
      };

      Gradebook.prototype.buildRows = function() {
        var column, id, _ref, _ref1,
          _this = this;

        this.rows.length = 0;
        _ref = this.grid.getColumns();
        for (id in _ref) {
          column = _ref[id];
          if (!('' + ((_ref1 = column.object) != null ? _ref1.submission_types : void 0) === "attendance")) {
            continue;
          }
          column.unselectable = !this.show_attendance;
          column.cssClass = this.show_attendance ? '' : 'completely-hidden';
          this.$grid.find("#" + this.uid + column.id).showIf(this.show_attendance);
        }
        this.withAllStudents(function(students) {
          var student, _ref2, _results;

          _ref2 = _this.students;
          _results = [];
          for (id in _ref2) {
            student = _ref2[id];
            student.row = -1;
            if (_this.rowFilter(student)) {
              _this.rows.push(student);
              _results.push(_this.calculateStudentGrade(student));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        });
        return this.sortRowsBy(function(a, b) {
          return _this.localeSort(a.sortable_name, b.sortable_name);
        });
      };

      Gradebook.prototype.getSubmissionsChunks = function() {
        var _this = this;

        return this.withAllStudents(function(allStudentsObj) {
          var allStudents, k, params, s, student, students, _results;

          allStudents = (function() {
            var _results;

            _results = [];
            for (k in allStudentsObj) {
              s = allStudentsObj[k];
              _results.push(s);
            }
            return _results;
          })();
          _results = [];
          while (true) {
            students = allStudents.slice(_this.chunk_start, _this.chunk_start + _this.options.chunk_size);
            if (!students.length) {
              _this.allSubmissionsLoaded.resolve();
              break;
            }
            params = {
              student_ids: (function() {
                var _i, _len, _results1;

                _results1 = [];
                for (_i = 0, _len = students.length; _i < _len; _i++) {
                  student = students[_i];
                  _results1.push(student.id);
                }
                return _results1;
              })(),
              response_fields: ['id', 'user_id', 'url', 'score', 'grade', 'submission_type', 'submitted_at', 'assignment_id', 'grade_matches_current_submission', 'attachments', 'late', 'workflow_state']
            };
            $.ajaxJSON(_this.options.submissions_url, "GET", params, _this.gotSubmissionsChunk);
            _results.push(_this.chunk_start += _this.options.chunk_size);
          }
          return _results;
        });
      };

      Gradebook.prototype.gotSubmissionsChunk = function(student_submissions) {
        var current_submission, data, hidden, student, submission, _i, _j, _len, _len1, _ref;

        for (_i = 0, _len = student_submissions.length; _i < _len; _i++) {
          data = student_submissions[_i];
          student = this.student(data.user_id);
          _ref = data.submissions;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            submission = _ref[_j];
            current_submission = student["assignment_" + submission.assignment_id];
            if (current_submission != null) {
              hidden = current_submission["hidden"];
            }
            if (!hidden) {
              this.updateSubmission(submission);
            }
          }
          student.loaded = true;
          this.grid.invalidateRow(student.row);
          this.calculateStudentGrade(student);
        }
        return this.grid.render();
      };

      Gradebook.prototype.student = function(id) {
        return this.students[id] || this.studentViewStudents[id];
      };

      Gradebook.prototype.withAllStudents = function(f) {
        var id, s, _ref, _ref1, _results;

        _ref = this.studentViewStudents;
        for (id in _ref) {
          s = _ref[id];
          this.students[id] = s;
        }
        f(this.students);
        _ref1 = this.studentViewStudents;
        _results = [];
        for (id in _ref1) {
          s = _ref1[id];
          _results.push(delete this.students[id]);
        }
        return _results;
      };

      Gradebook.prototype.updateSubmission = function(submission) {
        var student;

        student = this.student(submission.user_id);
        submission.submitted_at = tz.parse(submission.submitted_at);
        return student["assignment_" + submission.assignment_id] = submission;
      };

      Gradebook.prototype.updateSubmissionsFromExternal = function(submissions, submissionCell) {
        var activeCell, cell, column, columns, editing, idToMatch, index, student, submission, thisCellIsActive, _i, _j, _len, _len1, _results;

        activeCell = this.grid.getActiveCell();
        editing = $(this.grid.getActiveCellNode()).hasClass('editable');
        columns = this.grid.getColumns();
        _results = [];
        for (_i = 0, _len = submissions.length; _i < _len; _i++) {
          submission = submissions[_i];
          student = this.student(submission.user_id);
          idToMatch = "assignment_" + submission.assignment_id;
          for (index = _j = 0, _len1 = columns.length; _j < _len1; index = ++_j) {
            column = columns[index];
            if (column.id === idToMatch) {
              cell = index;
            }
          }
          thisCellIsActive = (activeCell != null) && editing && activeCell.row === student.row && activeCell.cell === cell;
          this.updateSubmission(submission);
          this.calculateStudentGrade(student);
          if (!thisCellIsActive) {
            this.grid.updateCell(student.row, cell);
          }
          _results.push(this.updateRowTotals(student.row));
        }
        return _results;
      };

      Gradebook.prototype.updateRowTotals = function(rowIndex) {
        var column, columnIndex, columns, _i, _len, _results;

        columns = this.grid.getColumns();
        _results = [];
        for (columnIndex = _i = 0, _len = columns.length; _i < _len; columnIndex = ++_i) {
          column = columns[columnIndex];
          if (column.type !== 'assignment') {
            _results.push(this.grid.updateCell(rowIndex, columnIndex));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Gradebook.prototype.cellFormatter = function(row, col, submission) {
        var assignment;

        if (!this.rows[row].loaded) {
          return this.staticCellFormatter(row, col, '');
        } else if (submission.hidden) {
          return this.uneditableCellFormatter(row, col);
        } else if (submission == null) {
          return this.staticCellFormatter(row, col, '-');
        } else {
          assignment = this.assignments[submission.assignment_id];
          if (assignment == null) {
            return this.staticCellFormatter(row, col, '');
          } else {
            if (assignment.grading_type === 'points' && assignment.points_possible) {
              return SubmissionCell.out_of.formatter(row, col, submission, assignment);
            } else {
              return (SubmissionCell[assignment.grading_type] || SubmissionCell).formatter(row, col, submission, assignment);
            }
          }
        }
      };

      Gradebook.prototype.staticCellFormatter = function(row, col, val) {
        return "<div class='cell-content gradebook-cell'>" + val + "</div>";
      };

      Gradebook.prototype.uneditableCellFormatter = function(row, col) {
        return "<div class='cell-content gradebook-cell grayed-out'></div>";
      };

      Gradebook.prototype.groupTotalFormatter = function(row, col, val, columnDef, student) {
        var letterGrade, percentage, templateOpts;

        if (val == null) {
          return '';
        }
        percentage = Math.round((val.score / val.possible) * 1000) / 10;
        if (isNaN(percentage)) {
          percentage = 0;
        }
        if (val.possible && this.options.grading_standard && columnDef.type === 'total_grade') {
          letterGrade = GradeCalculator.letter_grade(this.options.grading_standard, percentage);
        }
        templateOpts = {
          score: round(val.score, DISPLAY_PRECISION),
          possible: round(val.possible, DISPLAY_PRECISION),
          letterGrade: letterGrade,
          percentage: percentage
        };
        if (columnDef.type === 'total_grade') {
          templateOpts.warning = this.totalGradeWarning;
          templateOpts.lastColumn = true;
          templateOpts.showPointsNotPercent = this.displayPointTotals();
          templateOpts.hideTooltip = this.weightedGroups() && !this.totalGradeWarning;
        }
        return groupTotalCellTemplate(templateOpts);
      };

      Gradebook.prototype.htmlContentFormatter = function(row, col, val, columnDef, student) {
        if (val == null) {
          return '';
        }
        return val;
      };

      Gradebook.prototype.calculateStudentGrade = function(student) {
        var finalOrCurrent, group, key, result, submissionData, submissionsAsArray, value, _i, _j, _len, _len1, _ref, _ref1;

        if (student.loaded) {
          finalOrCurrent = this.include_ungraded_assignments ? 'final' : 'current';
          submissionsAsArray = (function() {
            var _results;

            _results = [];
            for (key in student) {
              value = student[key];
              if (key.match(/^assignment_(?!group)/)) {
                _results.push(value);
              }
            }
            return _results;
          })();
          result = GradeCalculator.calculate(submissionsAsArray, this.assignmentGroups, this.options.group_weighting_scheme);
          _ref = result.group_sums;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            group = _ref[_i];
            student["assignment_group_" + group.group.id] = group[finalOrCurrent];
            _ref1 = group[finalOrCurrent].submissions;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              submissionData = _ref1[_j];
              submissionData.submission.drop = submissionData.drop;
            }
          }
          student["total_grade"] = result[finalOrCurrent];
          return this.addDroppedClass(student);
        }
      };

      Gradebook.prototype.addDroppedClass = function(student) {
        var a, assignment, droppedAssignments, drops, name, styleKey, _i, _len;

        droppedAssignments = (function() {
          var _results;

          _results = [];
          for (name in student) {
            assignment = student[name];
            if (name.match(/assignment_\d+/) && (assignment.drop != null)) {
              _results.push(name);
            }
          }
          return _results;
        })();
        drops = {};
        drops[student.row] = {};
        for (_i = 0, _len = droppedAssignments.length; _i < _len; _i++) {
          a = droppedAssignments[_i];
          drops[student.row][a] = 'dropped';
        }
        styleKey = "dropsForRow" + student.row;
        this.grid.removeCellCssStyles(styleKey);
        return this.grid.addCellCssStyles(styleKey, drops);
      };

      Gradebook.prototype.highlightColumn = function(event) {
        var $headers, cell, col;

        $headers = this.$grid.find('.slick-header-column');
        if ($headers.filter('.slick-sortable-placeholder').length) {
          return;
        }
        cell = this.grid.getCellFromEvent(event);
        col = this.grid.getColumns()[cell.cell];
        return $headers.filter("#" + this.uid + col.id).addClass('hovered-column');
      };

      Gradebook.prototype.unhighlightColumns = function() {
        return this.$grid.find('.hovered-column').removeClass('hovered-column');
      };

      Gradebook.prototype.fixColumnReordering = function() {
        var $headers, fixupStopCallback, initHeaderDropMenus, makeOnlyAssignmentsSortable, onlyAssignmentColsSelector, originalItemsSelector, originalStopFn,
          _this = this;

        $headers = $('#gradebook_grid .container_1').find('.slick-header-columns');
        originalItemsSelector = $headers.sortable('option', 'items');
        onlyAssignmentColsSelector = '> *:not([id*="assignment_group"]):not([id*="total_grade"])';
        (makeOnlyAssignmentsSortable = function() {
          var $notAssignments;

          $headers.sortable('option', 'items', onlyAssignmentColsSelector);
          $notAssignments = $(originalItemsSelector, $headers).not($(onlyAssignmentColsSelector, $headers));
          return $notAssignments.data('sortable-item', null);
        })();
        (initHeaderDropMenus = function() {
          return $headers.find('.assignment_header_drop').click(function(event) {
            var $link;

            $link = $(event.target);
            if (!$link.data('gradebookHeaderMenu')) {
              $link.data('gradebookHeaderMenu', new GradebookHeaderMenu(_this.assignments[$link.data('assignmentId')], $link, _this));
            }
            return false;
          });
        })();
        originalStopFn = $headers.sortable('option', 'stop');
        return (fixupStopCallback = function() {
          return $headers.sortable('option', 'stop', function(event, ui) {
            var returnVal;

            $headers.sortable('option', 'items', originalItemsSelector);
            returnVal = originalStopFn.apply(this, arguments);
            makeOnlyAssignmentsSortable();
            initHeaderDropMenus();
            fixupStopCallback();
            return returnVal;
          });
        })();
      };

      Gradebook.prototype.minimizeColumn = function($columnHeader) {
        var colIndex, columnDef;

        columnDef = $columnHeader.data('column');
        colIndex = this.grid.getColumnIndex(columnDef.id);
        columnDef.cssClass = (columnDef.cssClass || '').replace(' minimized', '') + ' minimized';
        columnDef.unselectable = true;
        columnDef.unminimizedName = columnDef.name;
        columnDef.name = '';
        columnDef.minimized = true;
        this.$grid.find(".l" + colIndex).add($columnHeader).addClass('minimized');
        this.assignmentsToHide.push(columnDef.id);
        return userSettings.contextSet('hidden_columns', _.uniq(this.assignmentsToHide));
      };

      Gradebook.prototype.unminimizeColumn = function($columnHeader) {
        var colIndex, columnDef;

        columnDef = $columnHeader.data('column');
        colIndex = this.grid.getColumnIndex(columnDef.id);
        columnDef.cssClass = (columnDef.cssClass || '').replace(' minimized', '');
        columnDef.unselectable = false;
        columnDef.name = columnDef.unminimizedName;
        columnDef.minimized = false;
        this.$grid.find(".l" + colIndex).add($columnHeader).removeClass('minimized');
        $columnHeader.find('.slick-column-name').html(columnDef.name);
        this.assignmentsToHide = $.grep(this.assignmentsToHide, function(el) {
          return el !== columnDef.id;
        });
        return userSettings.contextSet('hidden_columns', _.uniq(this.assignmentsToHide));
      };

      Gradebook.prototype.hoverMinimizedCell = function(event) {
        var $hoveredCell, assignment, cell, columnDef, htmlLines, offset, submission, _ref,
          _this = this;

        $hoveredCell = $(event.currentTarget).removeClass('hover');
        cell = this.grid.getCellFromEvent(event);
        if (!cell) {
          return;
        }
        columnDef = this.grid.getColumns()[cell.cell];
        assignment = columnDef.object;
        offset = $hoveredCell.offset();
        htmlLines = [assignment.name];
        if ($hoveredCell.hasClass('slick-cell')) {
          submission = this.rows[cell.row][columnDef.id];
          if (assignment.points_possible != null) {
            htmlLines.push("" + ((_ref = submission.score) != null ? _ref : '--') + " / " + assignment.points_possible);
          } else if (submission.score != null) {
            htmlLines.push(submission.score);
          }
          Array.prototype.push.apply(htmlLines, $.map(SubmissionCell.classesBasedOnSubmission(submission, assignment), function(c) {
            return GRADEBOOK_TRANSLATIONS["#submission_tooltip_" + c];
          }));
        } else if (assignment.points_possible != null) {
          htmlLines.push(I18n.t('points_out_of', "out of %{points_possible}", {
            points_possible: assignment.points_possible
          }));
        }
        return $hoveredCell.data('tooltip', $("<span />", {
          "class": 'gradebook-tooltip',
          css: {
            left: offset.left - 15,
            top: offset.top,
            zIndex: 10000,
            display: 'block'
          },
          html: htmlLines.join('<br />')
        }).appendTo('body').css('top', function(i, top) {
          return parseInt(top) - $(this).outerHeight();
        }));
      };

      Gradebook.prototype.unhoverMinimizedCell = function(event) {
        var $tooltip;

        if ($tooltip = $(this).data('tooltip')) {
          if (event.toElement === $tooltip[0]) {
            return $tooltip.mouseleave(function() {
              return $tooltip.remove();
            });
          } else {
            return $tooltip.remove();
          }
        }
      };

      Gradebook.prototype.fixMaxHeaderWidth = function() {
        return this.$grid.find('.slick-header-columns').width(1000000);
      };

      Gradebook.prototype.onGridBlur = function(e) {
        if (e.target.className.match(/cell|slick/) || !this.grid.getActiveCell) {
          return;
        }
        if (e.target.className === 'grade' && this.grid.getCellEditor() instanceof SubmissionCell.out_of) {
          return;
        }
        if ($(e.target).is(".dontblur,.dontblur *")) {
          return;
        }
        return this.grid.getEditorLock().commitCurrentEdit();
      };

      Gradebook.prototype.onGridInit = function() {
        var grid, keyBindings, tooltipTexts,
          _this = this;

        tooltipTexts = {};
        $(this.spinner.el).remove();
        $('#gradebook-grid-wrapper').show();
        this.uid = this.grid.getUID();
        $('#content').focus(function() {
          return $('#accessibility_warning').removeClass('screenreader-only');
        });
        $('#accessibility_warning').focus(function() {
          return $('#accessibility_warning').blur(function() {
            return $('#accessibility_warning').remove();
          });
        });
        this.$grid = grid = $('#gradebook_grid').fillWindowWithMe({
          onResize: function() {
            return _this.grid.resizeCanvas();
          }
        }).delegate('.slick-cell', {
          'mouseenter.gradebook focusin.gradebook': this.highlightColumn,
          'mouseleave.gradebook focusout.gradebook': this.unhighlightColumns,
          'mouseenter focusin': function(event) {
            grid.find('.hover, .focus').removeClass('hover focus');
            if ($(this).parent().css('top') === '0px') {
              $(this).find('div.gradebook-tooltip').addClass('first-row');
            }
            return $(this).addClass((event.type === 'mouseenter' ? 'hover' : 'focus'));
          },
          'mouseleave focusout': function(event) {
            $(this).removeClass('hover focus');
            return $(this).find('div.gradebook-tooltip').removeClass('first-row');
          }
        }).delegate('.gradebook-cell-comment', 'click.gradebook', function(event) {
          var data;

          event.preventDefault();
          data = $(event.currentTarget).data();
          $(_this.grid.getActiveCellNode()).removeClass('editable');
          return SubmissionDetailsDialog.open(_this.assignments[data.assignmentId], _this.student(data.userId.toString()), _this.options);
        }).delegate('.minimized', {
          'mouseenter': this.hoverMinimizedCell,
          'mouseleave': this.unhoverMinimizedCell
        });
        if (this.options.gradebook_is_editable) {
          this.$grid.addClass('editable');
        }
        this.fixMaxHeaderWidth();
        this.grid.onColumnsResized.subscribe(function(e, data) {
          return _this.$grid.find('.slick-header-column').each(function(i, elem) {
            var $columnHeader, columnDef;

            $columnHeader = $(elem);
            columnDef = $columnHeader.data('column');
            if (columnDef.type !== "assignment") {
              return;
            }
            if ($columnHeader.outerWidth() <= columnWidths.assignment.min) {
              if (!columnDef.minimized) {
                return _this.minimizeColumn($columnHeader);
              }
            } else if (columnDef.minimized) {
              return _this.unminimizeColumn($columnHeader);
            }
          });
        });
        this.keyboardNav = new GradebookKeyboardNav(this.grid, this.$grid);
        this.keyboardNav.init();
        keyBindings = this.keyboardNav.keyBindings;
        this.kbDialog = new KeyboardNavDialog().render(keyboardNavTemplate({
          keyBindings: keyBindings
        }));
        $(document).on('dialogclose', function(e) {
          return setTimeout((function() {
            return _this.grid.editActiveCell();
          }), 0);
        });
        return $(document).trigger('gridready');
      };

      Gradebook.prototype.sectionList = function() {
        var _this = this;

        return _.map(this.sections, function(section, id) {
          return {
            name: section.name,
            id: id,
            checked: _this.sectionToShow === id
          };
        });
      };

      Gradebook.prototype.drawSectionSelectButton = function() {
        this.sectionMenu = new SectionMenuView({
          el: $('.section-button-placeholder'),
          sections: this.sectionList(),
          currentSection: this.sectionToShow
        });
        return this.sectionMenu.render();
      };

      Gradebook.prototype.updateCurrentSection = function(section, author) {
        this.sectionToShow = section;
        this.displayPostGradesButton(section);
        userSettings[this.sectionToShow ? 'contextSet' : 'contextRemove']('grading_show_only_section', this.sectionToShow);
        if (this.grid) {
          return this.buildRows();
        }
      };

      Gradebook.prototype.displayPostGradesButton = function(section) {
        var is_integration_course, is_integration_section;

        if (section != null) {
          is_integration_section = this.sections[section] && this.sections[section].integration_id;
        } else {
          is_integration_course = ENV.GRADEBOOK_OPTIONS.context_integration_id;
        }
        if (is_integration_section || is_integration_course) {
          return this.showPostGradesButton();
        } else {
          return this.hidePostGradesButton();
        }
      };

      Gradebook.prototype.hidePostGradesButton = function() {
        return $('#post-grades-button').closest('.gradebook-navigation').addClass('hidden');
      };

      Gradebook.prototype.showPostGradesButton = function() {
        return $('#post-grades-button').closest('.gradebook-navigation').removeClass('hidden');
      };

      Gradebook.prototype.initHeader = function() {
        var $settingsMenu,
          _this = this;

        if (this.sections_enabled) {
          this.drawSectionSelectButton();
        }
        $settingsMenu = $('#gradebook_settings').next();
        $.each(['show_attendance', 'include_ungraded_assignments', 'show_concluded_enrollments'], function(i, setting) {
          return $settingsMenu.find("#" + setting).prop('checked', !!_this[setting]).change(function(event) {
            if (setting === 'show_concluded_enrollments' && _this.options.course_is_concluded && _this.show_concluded_enrollments) {
              $("#" + setting).prop('checked', true);
              $settingsMenu.menu("refresh");
              return alert(I18n.t('concluded_course_error_message', 'This is a concluded course, so only concluded enrollments are available.'));
            }
            _this[setting] = $(event.target).is(':checked');
            userSettings.contextSet(setting, _this[setting]);
            if (setting === 'show_concluded_enrollments') {
              window.location.reload();
            }
            if (setting === 'show_attendance') {
              _this.grid.setColumns(_this.getVisibleGradeGridColumns());
            }
            return _this.buildRows();
          });
        });
        if (!(_.detect(this.assignments, function(a) {
          return ('' + a.submission_types) === "attendance";
        }))) {
          $settingsMenu.find('#show_attendance').closest('li').hide();
        }
        this.$columnArrangementTogglers = $('#gradebook-toolbar [data-arrange-columns-by]').bind('click', function(event) {
          var newSortOrder;

          event.preventDefault();
          newSortOrder = {
            sortType: $(event.currentTarget).data('arrangeColumnsBy')
          };
          return _this.arrangeColumnsBy(newSortOrder);
        });
        this.arrangeColumnsBy(this.getStoredSortOrder());
        $('#gradebook_settings').show().kyleMenu();
        $settingsMenu.find('.gradebook_upload_link').click(function(event) {
          event.preventDefault();
          return new UploadDialog(_this.options.context_url);
        });
        $settingsMenu.find('.student_names_toggle').click(this.studentNamesToggle);
        this.userFilter = new InputFilterView({
          el: '.gradebook_filter input'
        });
        this.userFilter.on('input', this.onUserFilterInput);
        this.initPostGrades();
        this.setDownloadCsvUrl();
        return this.renderTotalHeader();
      };

      Gradebook.prototype.setDownloadCsvUrl = function() {
        if (this.show_concluded_enrollments) {
          return $("#download_csv")[0].href += "?include_priors=true";
        }
      };

      Gradebook.prototype.studentNamesToggle = function(e) {
        var $wrapper;

        e.preventDefault();
        $wrapper = this.$grid.find('.grid-canvas');
        $wrapper.toggleClass('hide-students');
        if ($wrapper.hasClass('hide-students')) {
          return $(e.currentTarget).text(I18n.t('show_student_names', 'Show Student Names'));
        } else {
          return $(e.currentTarget).text(I18n.t('hide_student_names', 'Hide Student Names'));
        }
      };

      Gradebook.prototype.weightedGroups = function() {
        return this.options.group_weighting_scheme === "percent";
      };

      Gradebook.prototype.displayPointTotals = function() {
        if (this.weightedGroups()) {
          return false;
        } else {
          return this.options.show_total_grade_as_points;
        }
      };

      Gradebook.prototype.switch_total_display = function() {
        this.options.show_total_grade_as_points = !this.options.show_total_grade_as_points;
        $.ajaxJSON(this.options.setting_update_url, "PUT", {
          show_total_grade_as_points: this.displayPointTotals()
        });
        this.grid.invalidate();
        return this.totalHeader.render();
      };

      Gradebook.prototype.switch_total_display_and_mark_user_as_warned = function() {
        userSettings.contextSet('warned_about_totals_display', true);
        return this.switch_total_display();
      };

      Gradebook.prototype.togglePointsOrPercentTotals = function() {
        var dialog_options;

        if (userSettings.contextGet('warned_about_totals_display')) {
          return this.switch_total_display();
        } else {
          dialog_options = {
            showing_points: this.options.show_total_grade_as_points,
            unchecked_save: this.switch_total_display,
            checked_save: this.switch_total_display_and_mark_user_as_warned
          };
          return new GradeDisplayWarningDialog(dialog_options);
        }
      };

      Gradebook.prototype.onUserFilterInput = function(term) {
        var data, index, item, matched, propertiesToMatch, student, _i, _len,
          _this = this;

        data = this.grid.getData();
        _.each(data, function(student) {
          if (student.beforeFilteredRow != null) {
            student.row = student.beforeFilteredRow;
            return delete student.beforeFilteredRow;
          }
        });
        _.each(this.userFilterRemovedRows.reverse(), function(removedStudentItem) {
          return data.splice(removedStudentItem.index, 0, removedStudentItem.data);
        });
        this.userFilterRemovedRows = [];
        if (term !== '') {
          propertiesToMatch = ['name', 'login_id', 'short_name', 'sortable_name'];
          index = data.length;
          while (index--) {
            student = data[index];
            matched = _.any(propertiesToMatch, function(prop) {
              var _ref;

              return (_ref = student[prop]) != null ? _ref.match(new RegExp(term, 'i')) : void 0;
            });
            if (!matched) {
              item = {
                index: index,
                data: data.splice(index, 1)[0]
              };
              this.userFilterRemovedRows.push(item);
            }
          }
        }
        for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
          student = data[index];
          student.beforeFilteredRow = student.row;
          student.row = index;
        }
        this.grid.setData(data);
        return this.grid.invalidate();
      };

      Gradebook.prototype.getVisibleGradeGridColumns = function() {
        var column, res, submissionType, _i, _len, _ref;

        res = [].concat(this.parentColumns, this.customColumnDefinitions());
        _ref = this.allAssignmentColumns;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          column = _ref[_i];
          submissionType = '' + column.object.submission_types;
          if (!(submissionType === "not_graded" || submissionType === "attendance" && !this.show_attendance)) {
            res.push(column);
          }
        }
        return res.concat(this.aggregateColumns);
      };

      Gradebook.prototype.assignmentHeaderHtml = function(assignment) {
        return columnHeaderTemplate({
          assignment: assignment,
          href: assignment.html_url,
          showPointsPossible: assignment.points_possible != null
        });
      };

      Gradebook.prototype.customColumnDefinitions = function() {
        var _this = this;

        return this.customColumns.map(function(c) {
          return {
            id: "custom_col_" + c.id,
            name: htmlEscape(c.title),
            field: "custom_col_" + c.id,
            width: 100,
            cssClass: "meta-cell custom_column",
            resizable: true,
            sortable: true,
            editor: LongTextEditor,
            autoEdit: false,
            maxLength: 255
          };
        });
      };

      Gradebook.prototype.initGrid = function() {
        var $widthTester, assignment, columnDef, fieldName, group, id, minWidth, options, outOfFormatter, testWidth, total, total_column,
          _this = this;

        $widthTester = $('<span style="padding:10px" />').appendTo('#content');
        testWidth = function(text, minWidth, maxWidth) {
          var width;

          width = Math.max($widthTester.text(text).outerWidth(), minWidth);
          return Math.min(width, maxWidth);
        };
        this.setAssignmentWarnings();
        this.parentColumns = [
          {
            id: 'student',
            name: I18n.t('student_name', 'Student Name'),
            field: 'display_name',
            width: 150,
            cssClass: "meta-cell",
            resizable: true,
            sortable: true,
            formatter: this.htmlContentFormatter
          }, {
            id: 'secondary_identifier',
            name: I18n.t('secondary_id', 'Secondary ID'),
            field: 'secondary_identifier',
            width: 100,
            cssClass: "meta-cell secondary_identifier_cell",
            resizable: true,
            sortable: true,
            formatter: this.htmlContentFormatter
          }
        ];
        this.allAssignmentColumns = (function() {
          var _ref, _results,
            _this = this;

          _ref = this.assignments;
          _results = [];
          for (id in _ref) {
            assignment = _ref[id];
            outOfFormatter = assignment && assignment.grading_type === 'points' && (assignment.points_possible != null) && SubmissionCell.out_of;
            minWidth = outOfFormatter ? 70 : 90;
            fieldName = "assignment_" + id;
            columnDef = {
              id: fieldName,
              field: fieldName,
              name: this.assignmentHeaderHtml(assignment),
              object: assignment,
              formatter: this.cellFormatter,
              editor: outOfFormatter || SubmissionCell[assignment.grading_type] || SubmissionCell,
              minWidth: columnWidths.assignment.min,
              maxWidth: columnWidths.assignment.max,
              width: testWidth(assignment.name, minWidth, columnWidths.assignment.default_max),
              sortable: true,
              toolTip: assignment.name,
              type: 'assignment'
            };
            if (__indexOf.call(this.assignmentsToHide, fieldName) >= 0) {
              columnDef.width = 10;
              (function(fieldName) {
                return $(document).bind('gridready', function() {
                  return _this.minimizeColumn(_this.$grid.find("#" + _this.uid + fieldName));
                }).unbind('gridready.render').bind('gridready.render', function() {
                  return _this.grid.invalidate();
                });
              })(fieldName);
            }
            _results.push(columnDef);
          }
          return _results;
        }).call(this);
        this.aggregateColumns = (function() {
          var _ref, _results;

          _ref = this.assignmentGroups;
          _results = [];
          for (id in _ref) {
            group = _ref[id];
            _results.push({
              id: "assignment_group_" + id,
              field: "assignment_group_" + id,
              formatter: this.groupTotalFormatter,
              name: this.assignmentGroupHtml(group.name, group.group_weight),
              toolTip: group.name,
              object: group,
              minWidth: columnWidths.assignmentGroup.min,
              maxWidth: columnWidths.assignmentGroup.max,
              width: testWidth(group.name, columnWidths.assignmentGroup.min, columnWidths.assignmentGroup.default_max),
              cssClass: "meta-cell assignment-group-cell",
              sortable: true,
              type: 'assignment_group'
            });
          }
          return _results;
        }).call(this);
        total = I18n.t("total", "Total");
        total_column = {
          id: "total_grade",
          field: "total_grade",
          formatter: this.groupTotalFormatter,
          name: "" + total + "\n<div id=total_column_header></div>",
          toolTip: total,
          minWidth: columnWidths.total.min,
          maxWidth: columnWidths.total.max,
          width: testWidth("Total", columnWidths.total.min, columnWidths.total.max),
          cssClass: this.totalColumnInFront ? 'meta-cell' : 'total-cell',
          sortable: true,
          type: 'total_grade'
        };
        (this.totalColumnInFront ? this.parentColumns : this.aggregateColumns).push(total_column);
        $widthTester.remove();
        options = $.extend({
          enableCellNavigation: true,
          enableColumnReorder: true,
          enableAsyncPostRender: true,
          asyncPostRenderDelay: 1,
          autoEdit: true,
          editable: this.options.gradebook_is_editable,
          syncColumnCellResize: true,
          rowHeight: 35,
          headerHeight: 38,
          numberOfColumnsToFreeze: this.numberOfFrozenCols
        }, this.options);
        this.grid = new Slick.Grid('#gradebook_grid', this.rows, this.getVisibleGradeGridColumns(), options);
        this.grid.setSortColumn("student");
        this.grid.onCellChange.subscribe(this.onCellChange);
        $('body').on('click', this.onGridBlur);
        this.grid.onSort.subscribe(function(event, data) {
          var sortProp;

          if (data.sortCol.field === "display_name" || data.sortCol.field === "secondary_identifier" || data.sortCol.field.match(/^custom_col/)) {
            sortProp = data.sortCol.field === "display_name" ? "sortable_name" : data.sortCol.field;
            return _this.sortRowsBy(function(a, b) {
              var _ref;

              if (!data.sortAsc) {
                _ref = [a, b], b = _ref[0], a = _ref[1];
              }
              return _this.localeSort(a[sortProp], b[sortProp]);
            });
          } else {
            return _this.sortRowsBy(function(a, b) {
              return _this.gradeSort(a, b, data.sortCol.field, data.sortAsc);
            });
          }
        });
        this.grid.onKeyDown.subscribe(function() {
          return false;
        });
        this.grid.onColumnsReordered.subscribe(this.onColumnsReordered);
        this.grid.onBeforeEditCell.subscribe(this.onBeforeEditCell);
        return this.onGridInit();
      };

      Gradebook.prototype.onBeforeEditCell = function(event, _arg) {
        var $cell, cell, row;

        row = _arg.row, cell = _arg.cell;
        $cell = this.grid.getCellNode(row, cell);
        if ($($cell).find(".gradebook-cell").hasClass("grayed-out")) {
          return false;
        }
      };

      Gradebook.prototype.onCellChange = function(event, _arg) {
        var col_id, column, item, url;

        item = _arg.item, column = _arg.column;
        if (col_id = column.field.match(/^custom_col_(\d+)/)) {
          url = this.options.custom_column_datum_url.replace(/:id/, col_id[1]).replace(/:user_id/, item.id);
          return $.ajaxJSON(url, "PUT", {
            "column_data[content]": item[column.field]
          });
        } else {
          this.calculateStudentGrade(item);
          return this.grid.invalidate();
        }
      };

      Gradebook.prototype.sortRowsBy = function(sortFn) {
        var i, respectorOfPersonsSort, student, _i, _len, _ref,
          _this = this;

        respectorOfPersonsSort = function() {
          if (_(_this.studentViewStudents).size()) {
            return function(a, b) {
              if (_this.studentViewStudents[a.id]) {
                return 1;
              } else if (_this.studentViewStudents[b.id]) {
                return -1;
              } else {
                return sortFn(a, b);
              }
            };
          } else {
            return sortFn;
          }
        };
        this.rows.sort(respectorOfPersonsSort());
        _ref = this.rows;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          student = _ref[i];
          student.row = i;
          this.addDroppedClass(student);
        }
        return this.grid.invalidate();
      };

      Gradebook.prototype.localeSort = function(a, b) {
        return (a || "").localeCompare(b || "", window.I18n.locale, {
          sensitivity: 'accent',
          numeric: true
        });
      };

      Gradebook.prototype.gradeSort = function(a, b, field, asc) {
        var scoreForSorting,
          _this = this;

        scoreForSorting = function(obj) {
          var percent;

          percent = function(obj) {
            if (obj[field].possible > 0) {
              return obj[field].score / obj[field].possible;
            } else {
              return null;
            }
          };
          switch (false) {
            case field !== "total_grade":
              if (_this.options.show_total_grade_as_points) {
                return obj[field].score;
              } else {
                return percent(obj);
              }
              break;
            case !field.match(/^assignment_group/):
              return percent(obj);
            default:
              return obj[field].score;
          }
        };
        return numberCompare(scoreForSorting(a), scoreForSorting(b), {
          descending: !asc
        });
      };

      Gradebook.prototype.setAssignmentWarnings = function() {
        var a, ag, groupNames, invalidAssignmentGroups, pointsPossible, _i, _j, _len, _len1, _ref;

        if (this.weightedGroups()) {
          invalidAssignmentGroups = _.filter(this.assignmentGroups, function(ag) {
            var pointsPossible;

            pointsPossible = _.inject(ag.assignments, (function(sum, a) {
              return sum + (a.points_possible || 0);
            }), 0);
            return pointsPossible === 0;
          });
          for (_i = 0, _len = invalidAssignmentGroups.length; _i < _len; _i++) {
            ag = invalidAssignmentGroups[_i];
            _ref = ag.assignments;
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              a = _ref[_j];
              a.invalid = true;
            }
          }
          if (invalidAssignmentGroups.length > 0) {
            groupNames = (function() {
              var _k, _len2, _results;

              _results = [];
              for (_k = 0, _len2 = invalidAssignmentGroups.length; _k < _len2; _k++) {
                ag = invalidAssignmentGroups[_k];
                _results.push(ag.name);
              }
              return _results;
            })();
            return this.totalGradeWarning = I18n.t('invalid_assignment_groups_warning', {
              one: "Score does not include %{groups} because it has                  no points possible",
              other: "Score does not include %{groups} because they have                    no points possible"
            }, {
              groups: $.toSentence(groupNames),
              count: groupNames.length
            });
          }
        } else {
          pointsPossible = _.inject(this.assignments, (function(sum, a) {
            return sum + (a.points_possible || 0);
          }), 0);
          if (pointsPossible === 0) {
            return this.totalGradeWarning = I18n.t('no_assignments_have_points_warning', "Can't compute score until an assignment has points possible");
          } else {
            return this.totalGradeWarning = null;
          }
        }
      };

      Gradebook.prototype.showCustomColumnDropdownOption = function() {
        var createLink, handleClick, hideLabel, hideLink, hideNotesColumn, linkContainer, notes, showLabel, showLink, showNotesColumn, teacherNotesDataLoaded, teacherNotesUrl, toggleNotesColumn,
          _this = this;

        linkContainer = $("<li>").appendTo(".gradebook_drop_down");
        showLabel = I18n.t("show_notes", "Show Notes Column");
        hideLabel = I18n.t("hide_notes", "Hide Notes Column");
        teacherNotesUrl = function() {
          return _this.options.custom_column_url.replace(/:id/, _this.options.teacher_notes.id);
        };
        createLink = $("<a>", {
          href: this.options.custom_columns_url,
          "class": "create",
          text: showLabel
        });
        showLink = function() {
          return $("<a>", {
            href: teacherNotesUrl(),
            "class": "show",
            text: showLabel
          });
        };
        hideLink = function() {
          return $("<a>", {
            href: teacherNotesUrl(),
            "class": "hide",
            text: hideLabel
          });
        };
        handleClick = function(e, method, params) {
          return $.ajaxJSON(e.target.href, method, params);
        };
        toggleNotesColumn = function(f) {
          var cols, columnsToReplace;

          columnsToReplace = _this.numberOfFrozenCols;
          f();
          cols = _this.grid.getColumns();
          cols.splice.apply(cols, [0, columnsToReplace].concat(__slice.call(_this.parentColumns), __slice.call(_this.customColumnDefinitions())));
          _this.grid.setColumns(cols);
          return _this.grid.invalidate();
        };
        teacherNotesDataLoaded = false;
        showNotesColumn = function() {
          if (!teacherNotesDataLoaded) {
            _this.getCustomColumnData(_this.options.teacher_notes.id);
          }
          toggleNotesColumn(function() {
            _this.customColumns.splice(0, 0, _this.options.teacher_notes);
            return _this.grid.setNumberOfColumnsToFreeze(++_this.numberOfFrozenCols);
          });
          return linkContainer.html(hideLink());
        };
        hideNotesColumn = function() {
          toggleNotesColumn(function() {
            var c, i, _i, _len, _ref;

            _ref = _this.customColumns;
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
              c = _ref[i];
              if (c.teacher_notes) {
                _this.customColumns.splice(i, 1);
                _this.numberOfFrozenCols -= 1;
                break;
              }
            }
            return _this.grid.setNumberOfColumnsToFreeze(_this.numberOfFrozenCols);
          });
          return linkContainer.html(showLink());
        };
        linkContainer.click(function(e) {
          var $target;

          e.preventDefault();
          $target = $(e.target);
          if ($target.hasClass("show")) {
            handleClick(e, "PUT", {
              "column[hidden]": false
            }).then(function() {
              showNotesColumn();
              return _this.reorderCustomColumns(_this.customColumns.map(function(c) {
                return c.id;
              }));
            });
          }
          if ($target.hasClass("hide")) {
            handleClick(e, "PUT", {
              "column[hidden]": true
            }).then(hideNotesColumn());
          }
          if ($target.hasClass("create")) {
            return handleClick(e, "POST", {
              "column[title]": I18n.t("notes", "Notes"),
              "column[position]": 1,
              "column[teacher_notes]": true
            }).then(function(data) {
              _this.options.teacher_notes = data;
              return showNotesColumn();
            });
          }
        });
        notes = this.options.teacher_notes;
        if (!notes) {
          return linkContainer.html(createLink);
        } else if (notes.hidden) {
          return linkContainer.html(showLink());
        } else {
          return linkContainer.html(hideLink());
        }
      };

      Gradebook.prototype.alignCoursePreferencesWithLocalStorage = function() {
        var local_storage_show_point_totals;

        local_storage_show_point_totals = userSettings.contextGet('show_point_totals');
        if (local_storage_show_point_totals && local_storage_show_point_totals !== this.options.show_total_grade_as_points) {
          this.options.show_total_grade_as_points = local_storage_show_point_totals;
          userSettings.contextRemove('show_point_totals');
          return $.ajaxJSON(this.options.setting_update_url, "PUT", {
            show_total_grade_as_points: this.options.show_total_grade_as_points
          });
        }
      };

      return Gradebook;

    })();
  });

}).call(this);
