(function() {
  define(['./base_controller', 'i18n!create_module_item', '../../../shared/xhr/fetch_all_pages', 'ic-ajax', '../../models/item'], function(Base, I18n, fetch, _arg, Item) {
    var CreateAssignmentController, request;

    request = _arg.request;
    CreateAssignmentController = Base.extend({
      text: {
        assignmentName: I18n.t('assignment_name', 'Assignment Name')
      },
      assignmentGroups: (function() {
        var _base;

        return (_base = this.constructor).groups || (_base.groups = fetch("/api/v1/courses/" + ENV.course_id + "/assignment_groups"));
      }).property(),
      createItem: function() {
        var assignment, item,
          _this = this;

        assignment = this.get('model');
        item = Item.createRecord({
          title: assignment.name,
          type: 'Assignment'
        });
        request({
          url: "/api/v1/courses/" + ENV.course_id + "/assignments",
          type: 'post',
          data: {
            assignment: assignment
          }
        }).then((function(savedAssignment) {
          item.set('content_id', savedAssignment.id);
          return item.save();
        }), (function() {
          return item.set('error', true);
        }));
        return item;
      }
    });
    return CreateAssignmentController.reopenClass({
      groups: null
    });
  });

}).call(this);
