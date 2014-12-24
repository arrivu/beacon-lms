(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!assignment_details', 'jquery', 'jst/AssignmentDetailsDialog', 'jqueryui/dialog', 'compiled/jquery/fixDialogButtons'], function(I18n, $, assignmentDetailsDialogTemplate) {
    var AssignmentDetailsDialog;

    return AssignmentDetailsDialog = (function() {
      function AssignmentDetailsDialog(_arg) {
        var locals, scores, tally, totalWidth, width, _ref;

        this.assignment = _arg.assignment, this.students = _arg.students;
        this.nonNumericGuard = __bind(this.nonNumericGuard, this);
        this.compute = __bind(this.compute, this);
        _ref = this.compute(), scores = _ref.scores, locals = _ref.locals;
        tally = 0;
        width = 0;
        totalWidth = 100;
        $.extend(locals, {
          showDistribution: locals.average && this.assignment.points_possible,
          noneLeftWidth: width = totalWidth * (locals.min / this.assignment.points_possible),
          noneLeftLeft: (tally += width) - width,
          someLeftWidth: width = totalWidth * ((locals.average - locals.min) / this.assignment.points_possible),
          someLeftLeft: (tally += width) - width,
          someRightWidth: width = totalWidth * ((locals.max - locals.average) / this.assignment.points_possible),
          someRightLeft: (tally += width) - width,
          noneRightWidth: width = totalWidth * ((this.assignment.points_possible - locals.max) / this.assignment.points_possible),
          noneRightLeft: (tally += width) - width
        });
        $(assignmentDetailsDialogTemplate(locals)).dialog({
          width: 500,
          close: function() {
            return $(this).remove();
          }
        });
      }

      AssignmentDetailsDialog.prototype.compute = function(opts) {
        var assignment, idx, locals, scores, student, students,
          _this = this;

        if (opts == null) {
          opts = {
            students: this.students,
            assignment: this.assignment
          };
        }
        students = opts.students, assignment = opts.assignment;
        scores = (function() {
          var _ref, _results;

          _results = [];
          for (idx in students) {
            student = students[idx];
            if (((_ref = student["assignment_" + assignment.id]) != null ? _ref.score : void 0) != null) {
              _results.push(student["assignment_" + assignment.id].score);
            }
          }
          return _results;
        })();
        locals = {
          assignment: assignment,
          cnt: scores.length,
          max: this.nonNumericGuard(Math.max.apply(Math, scores)),
          min: this.nonNumericGuard(Math.min.apply(Math, scores)),
          average: (function(scores) {
            var score, total, _i, _len;

            total = 0;
            for (_i = 0, _len = scores.length; _i < _len; _i++) {
              score = scores[_i];
              total += score;
            }
            return _this.nonNumericGuard(Math.round(total / scores.length));
          })(scores)
        };
        return {
          scores: scores,
          locals: locals
        };
      };

      AssignmentDetailsDialog.prototype.nonNumericGuard = function(number) {
        if (isFinite(number) && !isNaN(number)) {
          return number;
        } else {
          return I18n.t('no_graded_submissions', "No graded submissions");
        }
      };

      return AssignmentDetailsDialog;

    })();
  });

}).call(this);
