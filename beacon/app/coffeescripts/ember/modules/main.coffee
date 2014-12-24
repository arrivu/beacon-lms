# this is auto-generated
define ["ember", "compiled/ember/modules/config/app", "compiled/ember/modules/config/routes", "compiled/ember/modules/views/add_item_view", "compiled/ember/modules/views/module_view", "compiled/ember/modules/views/item_view", "compiled/ember/modules/views/create/base_view", "compiled/ember/modules/views/create/page_view", "compiled/ember/modules/views/create/file_view", "compiled/ember/modules/views/create/link_view", "compiled/ember/modules/views/create/assignment_view", "compiled/ember/modules/views/create/quiz_view", "compiled/ember/modules/views/create/tool_view", "compiled/ember/modules/views/create/header_view", "compiled/ember/modules/views/create/discussion_view", "compiled/ember/modules/controllers/item_controller", "compiled/ember/modules/controllers/module_edit_controller", "compiled/ember/modules/controllers/modules_controller", "compiled/ember/modules/controllers/module_controller", "compiled/ember/modules/controllers/create/header_controller", "compiled/ember/modules/controllers/create/quiz_controller", "compiled/ember/modules/controllers/create/assignment_controller", "compiled/ember/modules/controllers/create/file_controller", "compiled/ember/modules/controllers/create/discussion_controller", "compiled/ember/modules/controllers/create/page_controller", "compiled/ember/modules/controllers/create/tool_controller", "compiled/ember/modules/controllers/create/base_controller", "compiled/ember/modules/controllers/create/link_controller", "compiled/ember/modules/controllers/add_item_controller", "compiled/ember/modules/controllers/add/header_controller", "compiled/ember/modules/controllers/add/quiz_controller", "compiled/ember/modules/controllers/add/assignment_controller", "compiled/ember/modules/controllers/add/file_controller", "compiled/ember/modules/controllers/add/discussion_controller", "compiled/ember/modules/controllers/add/page_controller", "compiled/ember/modules/controllers/add/tool_controller", "compiled/ember/modules/controllers/add/base_controller", "compiled/ember/modules/controllers/add/link_controller", "compiled/ember/modules/models/item", "compiled/ember/modules/models/module", "compiled/ember/modules/components/modules_item_icon_component", "compiled/ember/modules/components/mm_sortable_module_item_component", "compiled/ember/modules/components/module_list_component", "compiled/ember/modules/components/mm_sortable_module_component", "compiled/ember/modules/components/module_item_list_component", "compiled/ember/modules/routes/modules_route", "compiled/ember/modules/templates/item", "compiled/ember/modules/templates/module_edit", "compiled/ember/modules/templates/modules", "compiled/ember/modules/templates/module", "compiled/ember/modules/templates/module/header", "compiled/ember/modules/templates/module/content", "compiled/ember/modules/templates/module/footer", "compiled/ember/modules/templates/create/quiz", "compiled/ember/modules/templates/create/assignment", "compiled/ember/modules/templates/create/link", "compiled/ember/modules/templates/create/header", "compiled/ember/modules/templates/create/file", "compiled/ember/modules/templates/create/discussion", "compiled/ember/modules/templates/create/tool", "compiled/ember/modules/templates/create/page", "compiled/ember/modules/templates/add_item", "compiled/ember/modules/templates/add/quiz", "compiled/ember/modules/templates/add/assignment", "compiled/ember/modules/templates/add/link", "compiled/ember/modules/templates/add/header", "compiled/ember/modules/templates/add/file", "compiled/ember/modules/templates/add/discussion", "compiled/ember/modules/templates/add/tool", "compiled/ember/modules/templates/add/page", "compiled/ember/modules/templates/components/mm-sortable-module"], (Ember, App, routes, AddItemView, ModuleView, ItemView, CreateBaseView, CreatePageView, CreateFileView, CreateLinkView, CreateAssignmentView, CreateQuizView, CreateToolView, CreateHeaderView, CreateDiscussionView, ItemController, ModuleEditController, ModulesController, ModuleController, CreateHeaderController, CreateQuizController, CreateAssignmentController, CreateFileController, CreateDiscussionController, CreatePageController, CreateToolController, CreateBaseController, CreateLinkController, AddItemController, AddHeaderController, AddQuizController, AddAssignmentController, AddFileController, AddDiscussionController, AddPageController, AddToolController, AddBaseController, AddLinkController, Item, Module, ModulesItemIconComponent, MmSortableModuleItemComponent, ModuleListComponent, MmSortableModuleComponent, ModuleItemListComponent, ModulesRoute) ->

  App.initializer
    name: 'routes'
    initialize: (container, application) ->
      application.Router.map(routes)

  App.reopen({
    AddItemView: AddItemView
    ModuleView: ModuleView
    ItemView: ItemView
    CreateBaseView: CreateBaseView
    CreatePageView: CreatePageView
    CreateFileView: CreateFileView
    CreateLinkView: CreateLinkView
    CreateAssignmentView: CreateAssignmentView
    CreateQuizView: CreateQuizView
    CreateToolView: CreateToolView
    CreateHeaderView: CreateHeaderView
    CreateDiscussionView: CreateDiscussionView
    ItemController: ItemController
    ModuleEditController: ModuleEditController
    ModulesController: ModulesController
    ModuleController: ModuleController
    CreateHeaderController: CreateHeaderController
    CreateQuizController: CreateQuizController
    CreateAssignmentController: CreateAssignmentController
    CreateFileController: CreateFileController
    CreateDiscussionController: CreateDiscussionController
    CreatePageController: CreatePageController
    CreateToolController: CreateToolController
    CreateBaseController: CreateBaseController
    CreateLinkController: CreateLinkController
    AddItemController: AddItemController
    AddHeaderController: AddHeaderController
    AddQuizController: AddQuizController
    AddAssignmentController: AddAssignmentController
    AddFileController: AddFileController
    AddDiscussionController: AddDiscussionController
    AddPageController: AddPageController
    AddToolController: AddToolController
    AddBaseController: AddBaseController
    AddLinkController: AddLinkController
    Item: Item
    Module: Module
    ModulesItemIconComponent: ModulesItemIconComponent
    MmSortableModuleItemComponent: MmSortableModuleItemComponent
    ModuleListComponent: ModuleListComponent
    MmSortableModuleComponent: MmSortableModuleComponent
    ModuleItemListComponent: ModuleItemListComponent
    ModulesRoute: ModulesRoute
  })
