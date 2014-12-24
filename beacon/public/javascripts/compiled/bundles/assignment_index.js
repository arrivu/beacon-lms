(function() {
  require(['compiled/collections/AssignmentGroupCollection', 'compiled/models/Course', 'compiled/views/assignments/AssignmentGroupListView', 'compiled/views/assignments/CreateGroupView', 'compiled/views/assignments/IndexView', 'compiled/views/assignments/AssignmentSettingsView', 'compiled/views/assignments/AssignmentGroupWeightsView', 'compiled/views/assignments/ToggleShowByView', 'underscore'], function(AssignmentGroupCollection, Course, AssignmentGroupListView, CreateGroupView, IndexView, AssignmentSettingsView, AssignmentGroupWeightsView, ToggleShowByView, _) {
    var app, assignmentGroups, assignmentGroupsView, assignmentSettingsView, course, createGroupView, includes, indexEl, showByView;

    course = new Course;
    course.url = ENV.URLS.course_url;
    course.fetch();
    includes = ["assignments"];
    if (ENV.PERMISSIONS.manage) {
      includes.push("all_dates");
      includes.push("module_ids");
    } else if (!_.include(ENV.current_user_roles, "student")) {
      includes.push("all_dates");
    }
    assignmentGroups = new AssignmentGroupCollection([], {
      course: course,
      params: {
        include: includes,
        override_assignment_dates: !ENV.PERMISSIONS.manage
      },
      courseSubmissionsURL: ENV.URLS.course_student_submissions_url
    });
    assignmentGroupsView = new AssignmentGroupListView({
      collection: assignmentGroups,
      sortURL: ENV.URLS.sort_url,
      assignment_sort_base_url: ENV.URLS.assignment_sort_base_url,
      course: course
    });
    assignmentSettingsView = false;
    createGroupView = false;
    showByView = false;
    indexEl = window.location.href.indexOf('assignments') === -1 ? '#course_home_content' : "#content";
    if (ENV.PERMISSIONS.manage) {
      assignmentSettingsView = new AssignmentSettingsView({
        model: course,
        assignmentGroups: assignmentGroups,
        weightsView: AssignmentGroupWeightsView
      });
      createGroupView = new CreateGroupView({
        assignmentGroups: assignmentGroups,
        course: course
      });
    } else {
      showByView = new ToggleShowByView({
        course: course,
        assignmentGroups: assignmentGroups
      });
    }
    app = new IndexView({
      el: indexEl,
      assignmentGroupsView: assignmentGroupsView,
      assignmentSettingsView: assignmentSettingsView,
      createGroupView: createGroupView,
      showByView: showByView,
      collection: assignmentGroups
    });
    app.render();
    return assignmentGroups.fetch({
      reset: true
    }).then(function() {
      if (ENV.PERMISSIONS.manage) {
        return assignmentGroups.loadModuleNames();
      } else {
        return assignmentGroups.getGrades();
      }
    });
  });

}).call(this);
