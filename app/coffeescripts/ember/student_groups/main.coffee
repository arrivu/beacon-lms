# this is auto-generated
define ["ember", "compiled/ember/student_groups/config/app", "compiled/ember/student_groups/config/routes", "compiled/ember/student_groups/serializers/application_serializer", "compiled/ember/student_groups/adapters/membership_adapter", "compiled/ember/student_groups/adapters/group_adapter", "compiled/ember/student_groups/controllers/new_group_controller", "compiled/ember/student_groups/controllers/student_groups_controller", "compiled/ember/student_groups/controllers/group_controller", "compiled/ember/student_groups/controllers/users_controller", "compiled/ember/student_groups/controllers/user_controller", "compiled/ember/student_groups/models/group", "compiled/ember/student_groups/models/membership", "compiled/ember/student_groups/routes/student_groups_route", "compiled/ember/student_groups/templates/student_groups", "compiled/ember/student_groups/templates/application", "compiled/ember/student_groups/templates/new_group"], (Ember, App, routes, ApplicationSerializer, MembershipAdapter, GroupAdapter, NewGroupController, StudentGroupsController, GroupController, UsersController, UserController, Group, Membership, StudentGroupsRoute) ->

  App.initializer
    name: 'routes'
    initialize: (container, application) ->
      application.Router.map(routes)

  App.reopen({
    ApplicationSerializer: ApplicationSerializer
    MembershipAdapter: MembershipAdapter
    GroupAdapter: GroupAdapter
    NewGroupController: NewGroupController
    StudentGroupsController: StudentGroupsController
    GroupController: GroupController
    UsersController: UsersController
    UserController: UserController
    Group: Group
    Membership: Membership
    StudentGroupsRoute: StudentGroupsRoute
  })
