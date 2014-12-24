(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'compiled/views/KeyboardNavDialog', 'jst/KeyboardNavDialog', 'jquery', 'underscore', 'Backbone', 'jst/publish_grades/IndexView', 'jst/publish_grades/NoAssignmentsSearch', 'compiled/views/publish_grades/AssignmentKeyBindingsMixin'], function(I18n, KeyboardNavDialog, keyboardNavTemplate, $, _, Backbone, template, NoAssignments, AssignmentKeyBindingsMixin) {
    var PublishGradesIndexView, _ref;

    return PublishGradesIndexView = (function(_super) {
      __extends(PublishGradesIndexView, _super);

      function PublishGradesIndexView() {
        this.filterKeyBindings = __bind(this.filterKeyBindings, this);
        this.focusOnAssignments = __bind(this.focusOnAssignments, this);
        this.filterResults = __bind(this.filterResults, this);        _ref = PublishGradesIndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PublishGradesIndexView.mixin(AssignmentKeyBindingsMixin);

      PublishGradesIndexView.prototype.template = template;

      PublishGradesIndexView.prototype.el = '.publish-gradebook-container';

      PublishGradesIndexView.child('assignmentGroupsView', '[data-view=assignmentGroups]');

      PublishGradesIndexView.child('createGroupView', '[data-view=createGroup]');

      PublishGradesIndexView.child('assignmentSettingsView', '[data-view=assignmentSettings]');

      PublishGradesIndexView.child('showByView', '[data-view=showBy]');

      PublishGradesIndexView.prototype.events = {
        'keyup #search_term': 'search'
      };

      PublishGradesIndexView.prototype.els = {
        '#addGroup': '$addGroupButton',
        '#assignmentSettingsCog': '$assignmentSettingsButton'
      };

      PublishGradesIndexView.prototype.initialize = function() {
        return PublishGradesIndexView.__super__.initialize.apply(this, arguments);
      };

      PublishGradesIndexView.prototype.afterRender = function() {
        if (this.userIsStudent()) {
          this.filterKeyBindings();
        }
        this.kbDialog = new KeyboardNavDialog().render(keyboardNavTemplate({
          keyBindings: this.keyBindings
        }));
        return window.onkeydown = this.focusOnAssignments;
      };

      PublishGradesIndexView.prototype.enableSearch = function() {
        return this.$('#search_term').prop('disabled', false);
      };

      PublishGradesIndexView.prototype.clearSearch = function() {
        this.$('#search_term').val('');
        return this.filterResults();
      };

      PublishGradesIndexView.prototype.search = _.debounce(function() {
        return this.filterResults();
      }, 200);

      PublishGradesIndexView.prototype.filterResults = function() {
        var atleastoneGroup, regex, term, ul,
          _this = this;

        term = $('#search_term').val();
        if (term === "") {
          this.collection.each(function(group) {
            return group.groupView.endSearch();
          });
          if (this.noAssignments != null) {
            this.noAssignments.remove();
            return this.noAssignments = null;
          }
        } else {
          regex = new RegExp(this.cleanSearchTerm(term), 'ig');
          atleastoneGroup = false;
          this.collection.each(function(group) {
            if (group.groupView.search(regex)) {
              return atleastoneGroup = true;
            }
          });
          if (!atleastoneGroup) {
            if (!this.noAssignments) {
              this.noAssignments = new Backbone.View({
                template: NoAssignments,
                tagName: "li",
                className: "item-group-condensed"
              });
              ul = this.assignmentGroupsView.$el.children(".collectionViewItems");
              return ul.append(this.noAssignments.render().el);
            }
          } else {
            if (this.noAssignments != null) {
              this.noAssignments.remove();
              return this.noAssignments = null;
            }
          }
        }
      };

      PublishGradesIndexView.prototype.cleanSearchTerm = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      };

      PublishGradesIndexView.prototype.focusOnAssignments = function(e) {
        if (74 === e.keyCode) {
          if (!($(e.target).is("input"))) {
            return $(".assignment_group").filter(":visible").first().attr("tabindex", -1).focus();
          }
        }
      };

      PublishGradesIndexView.prototype.userIsStudent = function() {
        return _.include(ENV.current_user_roles, "student");
      };

      PublishGradesIndexView.prototype.filterKeyBindings = function() {
        return this.keyBindings = this.keyBindings.filter(function(binding) {
          return !_.contains([69, 68, 65], binding.keyCode);
        });
      };

      return PublishGradesIndexView;

    })(Backbone.View);
  });

}).call(this);
