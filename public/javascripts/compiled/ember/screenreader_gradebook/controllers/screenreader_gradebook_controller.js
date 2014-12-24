(function() {
  var __slice = [].slice;

  define(['ic-ajax', 'compiled/util/round', 'compiled/userSettings', '../../shared/xhr/fetch_all_pages', '../../shared/xhr/parse_link_header', 'i18n!sr_gradebook', 'ember', 'underscore', 'timezone', 'compiled/AssignmentDetailsDialog', 'compiled/AssignmentMuter', 'compiled/grade_calculator', 'compiled/gradebook2/OutcomeGradebookGrid', '../../shared/components/ic_submission_download_dialog_component'], function(ajax, round, userSettings, fetchAllPages, parseLinkHeader, I18n, Ember, _, tz, AssignmentDetailsDialog, AssignmentMuter, GradeCalculator, outcomeGrid, ic_submission_download_dialog) {
    var ScreenreaderGradebookController, contextUrl, get, set, setProperties, studentsUniqByEnrollments;

    get = Ember.get, set = Ember.set, setProperties = Ember.setProperties;
    studentsUniqByEnrollments = function() {
      var args, hiddenNameCounter, options;

      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      hiddenNameCounter = 1;
      options = {
        initialize: function(array, changeMeta, instanceMeta) {
          return instanceMeta.students = {};
        },
        addedItem: function(array, enrollment, changeMeta, iMeta) {
          var student;

          student = iMeta.students[enrollment.user_id] || enrollment.user;
          if (student.hiddenName == null) {
            student.hiddenName = I18n.t("student_hidden_name", "Student %{position}", {
              position: hiddenNameCounter
            });
            hiddenNameCounter += 1;
          }
          student.sections || (student.sections = []);
          student.sections.push(enrollment.course_section_id);
          student.role || (student.role = enrollment.role);
          if (iMeta.students[student.id]) {
            return array;
          }
          iMeta.students[student.id] = student;
          array.pushObject(student);
          return array;
        },
        removedItem: function(array, enrollment, _, instanceMeta) {
          var student;

          student = array.findBy('id', enrollment.user_id);
          student.sections.removeObject(enrollment.course_section_id);
          if (student.sections.length === 0) {
            delete instanceMeta.students[student.id];
            array.removeObject(student);
            hiddenNameCounter -= 1;
          }
          return array;
        }
      };
      args.push(options);
      return Ember.arrayComputed.apply(null, args);
    };
    contextUrl = get(window, 'ENV.GRADEBOOK_OPTIONS.context_url');
    return ScreenreaderGradebookController = Ember.ObjectController.extend({
      errors: (function() {
        var close, message, node;

        if (Ember.$('#flash_message_holder li').size() > 0) {
          close = Ember.$('#flash_message_holder li a').text().trim();
          message = Ember.$('#flash_message_holder li').text().replace(close, '').trim();
          node = Ember.$("<span role='alert'>" + message + "</span>");
          return Ember.$(node).appendTo(Ember.$('#flash_screenreader_holder'));
        }
      }).on('init'),
      contextUrl: contextUrl,
      downloadCsvUrl: "" + contextUrl + "/gradebook.csv",
      downloadOutcomeCsvUrl: "" + contextUrl + "/outcome_rollups.csv",
      gradingHistoryUrl: "" + contextUrl + "/gradebook/history",
      speedGraderUrl: (function() {
        return "" + contextUrl + "/gradebook/speed_grader?assignment_id=" + (this.get('selectedAssignment.id'));
      }).property('selectedAssignment'),
      studentUrl: (function() {
        return "" + contextUrl + "/grades/" + (this.get('selectedStudent.id'));
      }).property('selectedStudent'),
      showTotalAsPoints: (function() {
        return ENV.GRADEBOOK_OPTIONS.show_total_grade_as_points;
      }).property(),
      isDraftState: function() {
        return ENV.GRADEBOOK_OPTIONS.draft_state_enabled;
      },
      publishToSisEnabled: (function() {
        return ENV.GRADEBOOK_OPTIONS.publish_to_sis_enabled;
      }).property(),
      publishToSisURL: (function() {
        return ENV.GRADEBOOK_OPTIONS.publish_to_sis_url;
      }).property(),
      teacherNotes: (function() {
        return ENV.GRADEBOOK_OPTIONS.teacher_notes;
      }).property().volatile(),
      changeGradebookVersionUrl: (function() {
        return "" + (get(window, 'ENV.GRADEBOOK_OPTIONS.change_gradebook_version_url'));
      }).property(),
      hideOutcomes: (function() {
        return !get(window, 'ENV.GRADEBOOK_OPTIONS.outcome_gradebook_enabled');
      }).property(),
      showDownloadSubmissionsButton: (function() {
        return this.get('selectedAssignment.has_submitted_submissions') && _.intersection(this.get('selectedAssignment.submission_types'), ['online_upload', 'online_text_entry', 'online_url', 'online_quiz']) !== [] && !this.get('selectedAssignment.hide_download_submissions_button');
      }).property('selectedAssignment'),
      hideStudentNames: false,
      showConcludedEnrollments: (function() {
        return userSettings.contextGet('show_concluded_enrollments') || false;
      }).property().volatile(),
      updateshowConcludedEnrollmentsSetting: (function() {
        var isChecked;

        isChecked = this.get('showConcludedEnrollments');
        if (isChecked != null) {
          return userSettings.contextSet('show_concluded_enrollments', isChecked);
        }
      }).observes('showConcludedEnrollments'),
      selectedStudent: null,
      selectedSection: null,
      selectedAssignment: null,
      weightingScheme: null,
      ariaAnnounced: null,
      actions: {
        columnUpdated: function(columnData, columnID) {
          return this.updateColumnData(columnData, columnID);
        },
        gradeUpdated: function(submissions) {
          return this.updateSubmissionsFromExternal(submissions);
        },
        selectItem: function(property, item) {
          return this.announce(property, item);
        }
      },
      announce: function(prop, item) {
        var _this = this;

        return Ember.run.next(function() {
          var text_to_announce;

          if (prop === 'student' && _this.get('hideStudentNames')) {
            text_to_announce = get(item, 'hiddenName');
          } else if (prop === 'outcome') {
            text_to_announce = get(item, 'title');
          } else {
            text_to_announce = get(item, 'name');
          }
          return _this.set('ariaAnnounced', text_to_announce);
        });
      },
      hideStudentNamesChanged: (function() {
        return this.set('ariaAnnounced', null);
      }).observes('hideStudentNames'),
      setupSubmissionCallback: (function() {
        return Ember.$.subscribe('submissions_updated', _.bind(this.updateSubmissionsFromExternal, this));
      }).on('init'),
      setupAssignmentGroupsChange: (function() {
        Ember.$.subscribe('assignment_group_weights_changed', _.bind(this.checkWeightingScheme, this));
        return this.set('weightingScheme', ENV.GRADEBOOK_OPTIONS.group_weighting_scheme);
      }).on('init'),
      willDestroy: function() {
        Ember.$.unsubscribe('submissions_updated');
        Ember.$.unsubscribe('assignment_group_weights_changed');
        return this._super();
      },
      checkWeightingScheme: function(_arg) {
        var ags, assignmentGroups;

        assignmentGroups = _arg.assignmentGroups;
        ags = this.get('assignment_groups');
        ags.clear();
        ags.pushObjects(assignmentGroups);
        return this.set('weightingScheme', ENV.GRADEBOOK_OPTIONS.group_weighting_scheme);
      },
      updateSubmissionsFromExternal: function(submissions) {
        var selected, students, subs_proxy,
          _this = this;

        students = this.get('students');
        subs_proxy = this.get('submissions');
        selected = this.get('selectedSubmission');
        return submissions.forEach(function(submission) {
          var oldSubmission, student, submissionsForStudent;

          submissionsForStudent = subs_proxy.findBy('user_id', submission.user_id);
          oldSubmission = submissionsForStudent.submissions.findBy('assignment_id', submission.assignment_id);
          submissionsForStudent.submissions.removeObject(oldSubmission);
          submissionsForStudent.submissions.addObject(submission);
          student = students.findBy('id', submission.user_id);
          _this.updateSubmission(submission, student);
          _this.calculateStudentGrade(student);
          if (selected && selected.assignment_id === submission.assignment_id && selected.user_id === submission.user_id) {
            return set(_this, 'selectedSubmission', submission);
          }
        });
      },
      calculate: function(submissionsArray) {
        return GradeCalculator.calculate(submissionsArray, this.assignmentGroupsHash(), this.get('weightingScheme'));
      },
      calculateStudentGrade: function(student) {
        var finalOrCurrent, group, key, percent, result, submissionData, submissionsAsArray, value, _i, _j, _len, _len1, _ref, _ref1;

        if (student.isLoaded) {
          finalOrCurrent = this.get('includeUngradedAssignments') ? 'final' : 'current';
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
          result = this.calculate(submissionsAsArray);
          _ref = result.group_sums;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            group = _ref[_i];
            set(student, "assignment_group_" + group.group.id, group[finalOrCurrent]);
            _ref1 = group[finalOrCurrent].submissions;
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              submissionData = _ref1[_j];
              set(submissionData.submission, 'drop', submissionData.drop);
            }
          }
          result = result[finalOrCurrent];
          percent = round(result.score / result.possible * 100, 1);
          if (isNaN(percent)) {
            percent = 0;
          }
          return setProperties(student, {
            total_grade: result,
            total_percent: percent
          });
        }
      },
      calculateAllGrades: (function() {
        var _this = this;

        return this.get('students').forEach(function(student) {
          return _this.calculateStudentGrade(student);
        });
      }).observes('includeUngradedAssignments', 'groupsAreWeighted', 'assignment_groups.@each.group_weight'),
      sectionSelectDefaultLabel: I18n.t("all_sections", "All Sections"),
      studentSelectDefaultLabel: I18n.t("no_student", "No Student Selected"),
      assignmentSelectDefaultLabel: I18n.t("no_assignment", "No Assignment Selected"),
      outcomeSelectDefaultLabel: I18n.t("no_outcome", "No Outcome Selected"),
      students: studentsUniqByEnrollments('enrollments'),
      studentsHash: function() {
        var students;

        students = {};
        this.get('students').forEach(function(s) {
          if (s.role !== "StudentViewEnrollment") {
            return students[s.id] = s;
          }
        });
        return students;
      },
      fetchStudentSubmissions: (function() {
        var _this = this;

        return Ember.run.once(function() {
          var notYetLoaded, student_ids;

          notYetLoaded = _this.get('students').filter(function(student) {
            if (get(student, 'isLoaded') || get(student, 'isLoading')) {
              return false;
            }
            set(student, 'isLoading', true);
            return student;
          });
          if (!notYetLoaded.length) {
            return;
          }
          student_ids = notYetLoaded.mapBy('id');
          return fetchAllPages(ENV.GRADEBOOK_OPTIONS.submissions_url, {
            records: _this.get('submissions'),
            data: {
              student_ids: student_ids
            }
          });
        });
      }).observes('students.@each').on('init'),
      showNotesColumn: (function() {
        var notes;

        notes = this.get('teacherNotes');
        if (notes) {
          return !notes.hidden;
        } else {
          return false;
        }
      }).property().volatile(),
      shouldCreateNotes: (function() {
        return !this.get('teacherNotes') && this.get('showNotesColumn');
      }).property('teacherNotes', 'showNotesColumn', 'custom_columns.@each'),
      notesURL: (function() {
        var notesID, _ref;

        if (this.get('shouldCreateNotes')) {
          return ENV.GRADEBOOK_OPTIONS.custom_columns_url;
        } else {
          notesID = (_ref = this.get('teacherNotes')) != null ? _ref.id : void 0;
          return ENV.GRADEBOOK_OPTIONS.custom_column_url.replace(/:id/, notesID);
        }
      }).property('shouldCreateNotes', 'custom_columns.@each'),
      notesParams: (function() {
        if (this.get('shouldCreateNotes')) {
          return {
            "column[title]": I18n.t("notes", "Notes"),
            "column[position]": 1,
            "column[teacher_notes]": true
          };
        } else {
          return {
            "column[hidden]": !this.get('showNotesColumn')
          };
        }
      }).property('shouldCreateNotes', 'showNotesColumn'),
      notesVerb: (function() {
        if (this.get('shouldCreateNotes')) {
          return "POST";
        } else {
          return "PUT";
        }
      }).property('shouldCreateNotes'),
      updateOrCreateNotesColumn: (function() {
        return ajax.request({
          dataType: "json",
          type: this.get('notesVerb'),
          url: this.get('notesURL'),
          data: this.get('notesParams')
        }).then(this.boundNotesSuccess);
      }).observes('showNotesColumn'),
      bindNotesSuccess: (function() {
        return this.boundNotesSuccess = _.bind(this.onNotesUpdateSuccess, this);
      }).on('init'),
      onNotesUpdateSuccess: function(col) {
        var column, customColumns, method;

        customColumns = this.get('custom_columns');
        method = col.hidden ? 'removeObject' : 'unshiftObject';
        column = customColumns.findBy('id', col.id) || col;
        customColumns[method](column);
        if (col.teacher_notes) {
          this.set('teacherNotes', col);
        }
        if (!col.hidden) {
          return ajax.request({
            url: ENV.GRADEBOOK_OPTIONS.reorder_custom_columns_url,
            type: "POST",
            data: {
              order: customColumns.mapBy('id')
            }
          });
        }
      },
      displayPointTotals: (function() {
        if (this.get("groupsAreWeighted")) {
          return false;
        } else {
          return this.get("showTotalAsPoints");
        }
      }).property('groupsAreWeighted', 'showTotalAsPoints'),
      groupsAreWeighted: (function() {
        return this.get("weightingScheme") === "percent";
      }).property("weightingScheme"),
      updateShowTotalAs: (function() {
        this.set("showTotalAsPoints", this.get("displayPointTotals"));
        return ajax.request({
          dataType: "json",
          type: "PUT",
          url: ENV.GRADEBOOK_OPTIONS.setting_update_url,
          data: {
            show_total_grade_as_points: this.get("displayPointTotals")
          }
        });
      }).observes('showTotalAsPoints', 'groupsAreWeighted'),
      studentColumnData: {},
      updateColumnData: function(columnDatum, columnID) {
        var columnForStudent, dataForStudent, studentData;

        studentData = this.get('studentColumnData');
        dataForStudent = studentData[columnDatum.user_id] || Ember.A();
        columnForStudent = dataForStudent.findBy('column_id', columnID);
        if (columnForStudent) {
          columnForStudent.set('content', columnDatum.content);
        } else {
          dataForStudent.push(Ember.Object.create({
            column_id: columnID,
            content: columnDatum.content
          }));
        }
        return studentData[columnDatum.user_id] = dataForStudent;
      },
      fetchColumnData: function(col, url) {
        var _this = this;

        url || (url = ENV.GRADEBOOK_OPTIONS.custom_column_data_url.replace(/:id/, col.id));
        return ajax.raw(url, {
          dataType: "json"
        }).then(function(result) {
          var datum, meta, _i, _len, _ref;

          _ref = result.response;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            datum = _ref[_i];
            _this.updateColumnData(datum, col.id);
          }
          meta = parseLinkHeader(result.jqXHR);
          if (meta.next) {
            return _this.fetchColumnData(col, meta.next);
          } else {
            return setProperties(col, {
              'isLoading': false,
              'isLoaded': true
            });
          }
        });
      },
      dataForStudent: (function() {
        var selectedStudent;

        selectedStudent = this.get('selectedStudent');
        if (selectedStudent == null) {
          return;
        }
        return this.get('studentColumnData')[selectedStudent.id];
      }).property('selectedStudent', 'custom_columns.@each.isLoaded'),
      loadCustomColumnData: (function() {
        var _this = this;

        if (!(this.get('enrollments.isLoaded'))) {
          return;
        }
        return this.get('custom_columns').filter(function(col) {
          if (get(col, 'isLoaded') || get(col, 'isLoading')) {
            return false;
          }
          set(col, 'isLoading', true);
          return col;
        }).forEach(function(col) {
          return _this.fetchColumnData(col);
        });
      }).observes('enrollments.isLoaded', 'custom_columns.@each'),
      studentsInSelectedSection: (function() {
        var currentSection, students;

        students = this.get('students');
        currentSection = this.get('selectedSection');
        if (!currentSection) {
          return students;
        }
        return students.filter(function(s) {
          return s.sections.contains(currentSection.id);
        });
      }).property('students.@each', 'selectedSection'),
      submissionsLoaded: (function() {
        var submissions;

        submissions = this.get('submissions');
        return submissions.forEach((function(submission) {
          var student;

          student = this.get('students').findBy('id', submission.user_id);
          if (student != null) {
            submission.submissions.forEach((function(s) {
              return this.updateSubmission(s, student);
            }), this);
            setProperties(student, {
              'isLoading': false,
              'isLoaded': true
            });
            return this.calculateStudentGrade(student);
          }
        }), this);
      }).observes('submissions.@each'),
      updateSubmission: function(submission, student) {
        submission.submitted_at = tz.parse(submission.submitted_at);
        return set(student, "assignment_" + submission.assignment_id, submission);
      },
      assignments: Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
        content: [],
        sortProperties: ['ag_position', 'position']
      }),
      processAssignment: function(as, assignmentGroups) {
        var assignmentGroup, due_at;

        assignmentGroup = assignmentGroups.findBy('id', as.assignment_group_id);
        set(as, 'sortable_name', as.name.toLowerCase());
        set(as, 'ag_position', assignmentGroup.position);
        set(as, 'noPointsPossibleWarning', assignmentGroup.invalid);
        if (as.due_at) {
          due_at = tz.parse(as.due_at);
          set(as, 'due_at', due_at);
          return set(as, 'sortable_date', +due_at / 1000);
        } else {
          return set(as, 'sortable_date', Number.MAX_VALUE);
        }
      },
      differentiatedAssignmentVisibleToStudent: function(assignment, student_id) {
        if (!assignment.only_visible_to_overrides) {
          return true;
        }
        return _.include(assignment.assignment_visibility, +student_id);
      },
      checkForNoPointsWarning: function(ag) {
        var pointsPossible;

        pointsPossible = _.inject(ag.assignments, (function(sum, a) {
          return sum + (a.points_possible || 0);
        }), 0);
        return pointsPossible === 0;
      },
      checkForInvalidGroups: (function() {
        var _this = this;

        return this.get('assignment_groups').forEach(function(ag) {
          return set(ag, "invalid", _this.checkForNoPointsWarning(ag));
        });
      }).observes('assignment_groups.@each'),
      invalidAssignmentGroups: (function() {
        return this.get('assignment_groups').filterProperty('invalid', true);
      }).property('assignment_groups.@each.invalid'),
      showInvalidGroupWarning: (function() {
        return this.get("invalidAssignmentGroups").length > 0 && this.get('weightingScheme') === "percent";
      }).property("invalidAssignmentGroups", "weightingScheme"),
      invalidGroupNames: (function() {
        var names;

        return names = this.get("invalidAssignmentGroups").map(function(group) {
          return group.name;
        });
      }).property("invalidAssignmentGroups").readOnly(),
      invalidGroupsWarningPhrases: (function() {
        return I18n.t("invalid_group_warning", {
          one: "Note: Score does not include assignments from the group %{list_of_group_names} because it has no points possible.",
          other: "Note: Score does not include assignments from the groups %{list_of_group_names} because they have no points possible."
        }, {
          count: this.get('invalidGroupNames').length,
          list_of_group_names: this.get('invalidGroupNames').join(" or ")
        });
      }).property('invalidGroupNames'),
      populateAssignments: (function() {
        var assignmentGroups, assignments, assignmentsProxy,
          _this = this;

        assignmentGroups = this.get('assignment_groups');
        assignments = _.flatten(assignmentGroups.mapBy('assignments'));
        assignmentsProxy = this.get('assignments');
        return assignments.forEach(function(as) {
          var shouldRemoveAssignment;

          if (assignmentsProxy.findBy('id', as.id)) {
            return;
          }
          _this.processAssignment(as, assignmentGroups);
          shouldRemoveAssignment = (_this.isDraftState() && as.published === false) || as.submission_types.contains('not_graded' || as.submission_types.contains('attendance' && !_this.get('showAttendance')));
          if (shouldRemoveAssignment) {
            return assignmentGroups.findBy('id', as.assignment_group_id).assignments.removeObject(as);
          } else {
            return assignmentsProxy.addObject(as);
          }
        });
      }).observes('assignment_groups', 'assignment_groups.@each'),
      includeUngradedAssignments: (function() {
        return userSettings.contextGet('include_ungraded_assignments') || false;
      }).property().volatile(),
      showAttendance: (function() {
        return userSettings.contextGet('show_attendance');
      }).property().volatile(),
      updateUngradedAssignmentUserSetting: (function() {
        var isChecked;

        isChecked = this.get('includeUngradedAssignments');
        if (isChecked != null) {
          return userSettings.contextSet('include_ungraded_assignments', isChecked);
        }
      }).observes('includeUngradedAssignments'),
      assignmentGroupsHash: function() {
        var ags;

        ags = {};
        this.get('assignment_groups').forEach(function(ag) {
          return ags[ag.id] = ag;
        });
        return ags;
      },
      assignmentSortOptions: [
        {
          label: I18n.t("assignment_order_assignment_groups", "By Assignment Group and Position"),
          value: "assignment_group"
        }, {
          label: I18n.t("assignment_order_alpha", "Alphabetically"),
          value: "alpha"
        }, {
          label: I18n.t("assignment_order_due_date", "By Due Date"),
          value: "due_date"
        }
      ],
      assignmentSort: (function(key, value) {
        var savedSortOption, savedSortType;

        savedSortType = userSettings.contextGet('sort_grade_columns_by');
        savedSortOption = this.get('assignmentSortOptions').findBy('value', savedSortType != null ? savedSortType.sortType : void 0);
        if (value) {
          userSettings.contextSet('sort_grade_columns_by', {
            sortType: value.value
          });
          return value;
        } else if (savedSortOption != null) {
          return savedSortOption;
        } else {
          return this.get('assignmentSortOptions').findBy('value', 'assignment_group');
        }
      }).property(),
      sortAssignments: (function() {
        var sort, sort_props;

        sort = this.get('assignmentSort');
        if (!sort) {
          return;
        }
        sort_props = (function() {
          switch (sort.value) {
            case 'assignment_group':
            case 'custom':
              return ['ag_position', 'position'];
            case 'alpha':
              return ['sortable_name'];
            case 'due_date':
              return ['sortable_date', 'sortable_name'];
            default:
              return ['ag_position', 'position'];
          }
        })();
        return this.get('assignments').set('sortProperties', sort_props);
      }).observes('assignmentSort').on('init'),
      selectedSubmission: (function(key, selectedSubmission) {
        var assignment, student, sub;

        if (arguments.length > 1) {
          this.set('selectedStudent', this.get('students').findBy('id', selectedSubmission.user_id));
          this.set('selectedAssignment', this.get('assignments').findBy('id', selectedSubmission.assignment_id));
          return selectedSubmission;
        } else {
          if (!((this.get('selectedStudent') != null) && (this.get('selectedAssignment') != null))) {
            return null;
          }
          student = this.get('selectedStudent');
          assignment = this.get('selectedAssignment');
          sub = get(student, "assignment_" + assignment.id);
          return sub || {
            user_id: student.id,
            assignment_id: assignment.id
          };
        }
      }).property('selectedStudent', 'selectedAssignment'),
      selectedSubmissionHidden: (function() {
        var assignment, student;

        assignment = this.get('selectedAssignment');
        student = this.get('selectedStudent');
        if (assignment != null ? assignment.only_visible_to_overrides : void 0) {
          return !this.differentiatedAssignmentVisibleToStudent(assignment, student.id);
        } else {
          return false;
        }
      }).property('selectedStudent', 'selectedAssignment'),
      selectedOutcomeResult: (function() {
        var outcome, result, student;

        if (!((this.get('selectedStudent') != null) && (this.get('selectedOutcome') != null))) {
          return null;
        }
        student = this.get('selectedStudent');
        outcome = this.get('selectedOutcome');
        result = this.get('outcome_rollups').find(function(x) {
          return x.user_id === student.id && x.outcome_id === outcome.id;
        });
        return result || {
          user_id: student.id,
          outcome_id: outcome.id
        };
      }).property('selectedStudent', 'selectedOutcome'),
      outcomeResultIsDefined: (function() {
        return this.get('selectedOutcomeResult').score != null;
      }).property('selectedOutcomeResult'),
      showAssignmentPointsWarning: (function() {
        return this.get("selectedAssignment.noPointsPossibleWarning") && this.get('groupsAreWeighted');
      }).property('selectedAssignment', 'groupsAreWeighted'),
      selectedStudentSections: (function() {
        var sectionNames, sections, student;

        student = this.get('selectedStudent');
        sections = this.get('sections');
        if (!(sections.isLoaded && (student != null))) {
          return null;
        }
        sectionNames = student.sections.map(function(id) {
          return sections.findBy('id', id).name;
        });
        return sectionNames.join(', ');
      }).property('selectedStudent', 'sections.isLoaded'),
      assignmentDetails: (function() {
        var locals;

        if (this.get('selectedAssignment') == null) {
          return null;
        }
        locals = AssignmentDetailsDialog.prototype.compute.call(AssignmentDetailsDialog.prototype, {
          students: this.studentsHash(),
          assignment: this.get('selectedAssignment')
        }).locals;
        return locals;
      }).property('selectedAssignment', 'students.@each.total_grade'),
      outcomeDetails: (function() {
        var details, rollups, scores;

        if (this.get('selectedOutcome') == null) {
          return null;
        }
        rollups = this.get('outcome_rollups').filterBy('outcome_id', this.get('selectedOutcome').id);
        scores = _.filter(_.pluck(rollups, 'score'), _.isNumber);
        return details = {
          average: outcomeGrid.Math.mean(scores),
          max: outcomeGrid.Math.max(scores),
          min: outcomeGrid.Math.min(scores),
          cnt: outcomeGrid.Math.cnt(scores)
        };
      }).property('selectedOutcome', 'outcome_rollups'),
      assignmentSubmissionTypes: (function() {
        var result, submissionTypes, types;

        types = this.get('selectedAssignment.submission_types');
        submissionTypes = this.get('submissionTypes');
        if (types === void 0 || types.length === 0) {
          return submissionTypes['none'];
        } else if (types.length === 1) {
          return submissionTypes[types[0]];
        } else {
          result = [];
          types.forEach(function(type) {
            return result.push(submissionTypes[type]);
          });
          return result.join(', ');
        }
      }).property('selectedAssignment'),
      submissionTypes: {
        'discussion_topic': I18n.t('discussion_topic', 'Discussion topic'),
        'online_quiz': I18n.t('online_quiz', 'Online quiz'),
        'on_paper': I18n.t('on_paper', 'On paper'),
        'none': I18n.t('none', 'None'),
        'external_tool': I18n.t('external_tool', 'External tool'),
        'online_text_entry': I18n.t('online_text_entry', 'Online text entry'),
        'online_url': I18n.t('online_url', 'Online URL'),
        'online_upload': I18n.t('online_upload', 'Online upload'),
        'media_recording': I18n.t('media_recordin', 'Media recording')
      },
      assignmentIndex: (function() {
        var selected;

        selected = this.get('selectedAssignment');
        if (selected) {
          return this.get('assignments').indexOf(selected);
        } else {
          return -1;
        }
      }).property('selectedAssignment', 'assignmentSort'),
      studentIndex: (function() {
        var selected;

        selected = this.get('selectedStudent');
        if (selected) {
          return this.get('studentsInSelectedSection').indexOf(selected);
        } else {
          return -1;
        }
      }).property('selectedStudent', 'selectedSection'),
      outcomeIndex: (function() {
        var selected;

        selected = this.get('selectedOutcome');
        if (selected) {
          return this.get('outcomes').indexOf(selected);
        } else {
          return -1;
        }
      }).property('selectedOutcome'),
      displayName: (function() {
        if (this.get('hideStudentNames')) {
          return "hiddenName";
        } else {
          return "name";
        }
      }).property('hideStudentNames'),
      fetchCorrectEnrollments: (function() {
        var enrollments, url;

        if (this.get('showConcludedEnrollments')) {
          url = ENV.GRADEBOOK_OPTIONS.students_url_with_concluded_enrollments;
        } else {
          url = ENV.GRADEBOOK_OPTIONS.students_url;
        }
        enrollments = this.get('enrollments');
        enrollments.clear();
        return fetchAllPages(url, {
          records: enrollments
        });
      }).observes('showConcludedEnrollments')
    });
  });

}).call(this);
