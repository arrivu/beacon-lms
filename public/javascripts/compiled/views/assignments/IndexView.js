(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'compiled/views/KeyboardNavDialog', 'jst/KeyboardNavDialog', 'jquery', 'underscore', 'Backbone', 'jst/assignments/IndexView', 'jst/assignments/NoAssignmentsSearch', 'compiled/views/assignments/AssignmentKeyBindingsMixin'], function(I18n, KeyboardNavDialog, keyboardNavTemplate, $, _, Backbone, template, NoAssignments, AssignmentKeyBindingsMixin) {
    var IndexView, _ref;

    return IndexView = (function(_super) {
      __extends(IndexView, _super);

      function IndexView() {
        this.filterKeyBindings = __bind(this.filterKeyBindings, this);
        this.focusOnAssignments = __bind(this.focusOnAssignments, this);
        this.filterResults = __bind(this.filterResults, this);        _ref = IndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IndexView.mixin(AssignmentKeyBindingsMixin);

      IndexView.prototype.template = template;

      IndexView.prototype.el = '#content';

      IndexView.child('assignmentGroupsView', '[data-view=assignmentGroups]');

      IndexView.child('createGroupView', '[data-view=createGroup]');

      IndexView.child('assignmentSettingsView', '[data-view=assignmentSettings]');

      IndexView.child('showByView', '[data-view=showBy]');

      IndexView.prototype.events = {
        'keyup #search_term': 'search'
      };

      IndexView.prototype.els = {
        '#addGroup': '$addGroupButton',
        '#assignmentSettingsCog': '$assignmentSettingsButton'
      };

      IndexView.prototype.initialize = function() {
        IndexView.__super__.initialize.apply(this, arguments);
        this.collection.once('reset', this.enableSearch, this);
        return this.collection.on('cancelSearch', this.clearSearch, this);
      };

      IndexView.prototype.toJSON = function() {
        var json;

        json = IndexView.__super__.toJSON.apply(this, arguments);
        json.course_home = ENV.COURSE_HOME;
        return json;
      };

      IndexView.prototype.afterRender = function() {
        if (this.createGroupView) {
          this.createGroupView.hide();
          this.createGroupView.setTrigger(this.$addGroupButton);
        }
        if (this.assignmentSettingsView) {
          this.assignmentSettingsView.hide();
          this.assignmentSettingsView.setTrigger(this.$assignmentSettingsButton);
        }
        if (this.userIsStudent()) {
          this.filterKeyBindings();
        }
        this.ensureContentStyle();
        this.kbDialog = new KeyboardNavDialog().render(keyboardNavTemplate({
          keyBindings: this.keyBindings
        }));
        return window.onkeydown = this.focusOnAssignments;
      };

      IndexView.prototype.enableSearch = function() {
        return this.$('#search_term').prop('disabled', false);
      };

      IndexView.prototype.clearSearch = function() {
        this.$('#search_term').val('');
        return this.filterResults();
      };

      IndexView.prototype.search = _.debounce(function() {
        return this.filterResults();
      }, 200);

      IndexView.prototype.filterResults = function() {
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

      IndexView.prototype.cleanSearchTerm = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      };

      IndexView.prototype.focusOnAssignments = function(e) {
        if (74 === e.keyCode) {
          if (!($(e.target).is("input"))) {
            return $(".assignment_group").filter(":visible").first().attr("tabindex", -1).focus();
          }
        }
      };

      IndexView.prototype.userIsStudent = function() {
        return _.include(ENV.current_user_roles, "student");
      };

      IndexView.prototype.ensureContentStyle = function() {
        if (window.location.href.indexOf('assignments') === -1) {
          return $("#content").css("padding", "0em");
        }
      };

      IndexView.prototype.filterKeyBindings = function() {
        return this.keyBindings = this.keyBindings.filter(function(binding) {
          return !_.contains([69, 68, 65], binding.keyCode);
        });
      };

      return IndexView;

    })(Backbone.View);
  });

}).call(this);
