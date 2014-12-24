(function() {
  require(["i18n!assignments.assignments_list_content", "jquery", "jquery.instructure_misc_plugins", "jquery.templateData", "vendor/date"], function(I18n, $) {
    window.managedAssignments = null;
    return $(document).ready(function() {
      var $assignment, assignment, cnt, data, due, idx, now, submission;

      if (managedAssignments) {
        for (idx in managedAssignments) {
          assignment = managedAssignments[idx].assignment;
          $assignment = $(".assignment_" + assignment.id);
          $assignment.fillTemplateData({
            data: {
              submitted_count: assignment.submitted_count || "0",
              graded_count: assignment.graded_count || "0"
            }
          });
          if (assignment.submitted_count || assignment.graded_count) {
            $assignment.find(".submitted").showIf(!!assignment.submitted_count && !assignment.graded_count);
            $assignment.find(".graded").showIf(!!assignment.graded_count && !assignment.submitted_count);
            $assignment.find(".submitted_and_graded").showIf(assignment.submitted_count && assignment.graded_count);
            $assignment.find(".submitted_details").showIf(!!(assignment.submitted_count || assignment.graded_count));
          }
        }
      }
      if (ENV.submissions_hash) {
        for (idx in ENV.submissions_hash) {
          submission = ENV.submissions_hash[idx].submission;
          $assignment = $(".assignment_" + idx);
          if (submission && (submission.score || submission.score === 0)) {
            $assignment.addClass("group_assignment_graded");
            $assignment.find(".grade").show();
          } else {
            $assignment.removeClass("group_assignment_graded");
            $assignment.find(".grade").hide();
          }
          if (submission && submission.submission_type && !submission.score) {
            $assignment.addClass("group_assignment_ungraded");
            cnt = parseInt($assignment.find(".needs_grading_count").text(), 10) || 0;
            cnt++;
            $assignment.find(".needs_grading_count").text(cnt);
          }
          $assignment.fillTemplateData({
            data: submission,
            hrefValues: ["assignment_id", "user_id"]
          });
          $assignment.find(".submission_comment_link").showIf(submission && submission.submission_comments_count);
          $assignment.find(".rubric_assessment_link").showIf(submission && submission.has_rubric_assessment);
          data = $assignment.filter(":first").getTemplateData({
            textValues: ["due_date_string", "due_time_string"]
          });
          due = Date.parse(data.due_date_string + " " + data.due_time_string);
          now = new Date();
          if (submission && submission.submitted_at) {
            $assignment.addClass("group_assignment_submitted");
          }
          if (due && (!submission || !submission.submitted_at) && due < now) {
            $assignment.addClass("group_assignment_overdue");
          }
        }
      }
      $("#groups_for_student .assignment_group").find(".more_info").hide().end().find(".more_info_brief").showIf($("#group_weighting_scheme").text() === "percent").append(" of final grade");
      $(".show_groups_link,.hide_groups_link").click(function(event) {
        event.preventDefault();
        if ($(this).hasClass("show_groups_link") && !$("#groups_for_student").hasClass("populated")) {
          $("#assignments_for_student .group_assignment").each(function() {
            var $group, group_id;

            $assignment = $(this).clone(true);
            group_id = $assignment.find(".assignment_group_id").text();
            $group = $("#groups_for_student .group_" + group_id);
            return $group.find(".assignment_list").append($assignment);
          });
          $("#groups_for_student").addClass("populated");
        }
        $("#groups_for_student").showIf($(this).hasClass("show_groups_link"));
        $("#assignments_for_student").showIf($(this).hasClass("hide_groups_link"));
        $(".show_groups_link").showIf($(this).hasClass("hide_groups_link"));
        return $(".hide_groups_link").showIf($(this).hasClass("show_groups_link"));
      });
      return $(".group_assignment").hover((function() {
        var needs_grading_count;

        if ($(this).hasClass("group_assignment_overdue")) {
          return $(this).attr("title", I18n.t("assignments.overdue", "This assignment is overdue"));
        } else if ($(this).hasClass("group_assignment_ungraded")) {
          needs_grading_count = $(this).getTemplateData({
            textValues: ["needs_grading_count"]
          }).needs_grading_count;
          return $(this).attr("title", I18n.t("assignments.needs_grading_count", "%{needs_grading_count} submissions for this assignment still need grading", {
            needs_grading_count: needs_grading_count
          }));
        } else {
          if ($(this).hasClass("group_assignment_graded")) {
            return $(this).attr("title", I18n.t("assignments.graded", "This assignment has been graded"));
          }
        }
      }), function() {
        return $(this).attr("title", "");
      });
    });
  });

}).call(this);
