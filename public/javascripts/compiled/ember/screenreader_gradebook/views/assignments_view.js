(function() {
  define(['ember', 'compiled/gradebook2/GradebookHeaderMenu', 'compiled/gradebook2/AssignmentGroupWeightsDialog', 'compiled/gradebook2/UploadDialog', 'compiled/SubmissionDetailsDialog'], function(Ember, GradebookHeaderMenu, AssignmentGroupWeightsDialog, UploadDialog, SubmissionDetailsDialog) {
    var AssignmentsView;

    return AssignmentsView = Ember.View.extend({
      templateName: 'assignments',
      setupDialog: (function() {
        return this.agDialog = new AssignmentGroupWeightsDialog({
          context: ENV.GRADEBOOK_OPTIONS,
          assignmentGroups: [],
          mergeFunction: this.mergeObjects
        });
      }).on('didInsertElement'),
      removeDialog: (function() {
        return this.agDialog.$dialog.dialog('destroy');
      }).on('willDestroyElement'),
      mergeObjects: function(old_ag, new_ag) {
        return Ember.setProperties(old_ag, new_ag);
      },
      actions: {
        openDialog: function(dialogType) {
          var con, dialogs, options, _ref, _ref1, _ref2;

          con = this.controller;
          options = {
            assignment: con.get('selectedAssignment'),
            students: con.studentsHash(),
            selected_section: (_ref = con.get('selectedSection')) != null ? _ref.id : void 0,
            context_id: ENV.GRADEBOOK_OPTIONS.context_id,
            context_url: ENV.GRADEBOOK_OPTIONS.context_url,
            speed_grader_enabled: ENV.GRADEBOOK_OPTIONS.speed_grader_enabled,
            change_grade_url: ENV.GRADEBOOK_OPTIONS.change_grade_url
          };
          dialogs = {
            'upload': UploadDialog.prototype.init,
            'assignment_details': GradebookHeaderMenu.prototype.showAssignmentDetails,
            'message_students': GradebookHeaderMenu.prototype.messageStudentsWho,
            'set_default_grade': GradebookHeaderMenu.prototype.setDefaultGrade,
            'curve_grades': GradebookHeaderMenu.prototype.curveGrades,
            'submission': SubmissionDetailsDialog.open
          };
          switch (dialogType) {
            case 'ag_weights':
              options = {
                context: ENV.GRADEBOOK_OPTIONS,
                assignmentGroups: con.get('assignment_groups').toArray()
              };
              this.agDialog.update(options);
              return this.agDialog.$dialog.dialog('open');
            case 'submission':
              return (_ref1 = dialogs[dialogType]) != null ? _ref1.call(this, con.get('selectedAssignment'), con.get('selectedStudent'), options) : void 0;
            default:
              return (_ref2 = dialogs[dialogType]) != null ? _ref2.call(this, options) : void 0;
          }
        }
      }
    });
  });

}).call(this);
