(function() {
  define(['./base_controller', 'i18n!add_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var AddAssignmentController, request;

    request = _arg.request;
    AddAssignmentController = Base.extend({
      assignmentGroups: (function() {
        var _base;

        return (_base = this.constructor).groups || (_base.groups = fetch("/api/v1/courses/" + ENV.course_id + "/assignment_groups?include[]=assignments"));
      }).property(),
      title: (function() {
        return I18n.t('add_assignment_to', "Add an assignment to %{module}", {
          module: this.get('moduleController.name')
        });
      }).property('moduleController.name'),
      actions: {
        toggleSelected: function(assignment) {
          var assignments;

          assignments = this.get('model.selected');
          if (assignments.contains(assignment)) {
            return assignments.removeObject(assignment);
          } else {
            return assignments.addObject(assignment);
          }
        }
      }
    });
    return AddAssignmentController.reopenClass({
      groups: null
    });
  });

}).call(this);
