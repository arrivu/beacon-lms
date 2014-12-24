(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'jquery', 'underscore', 'compiled/models/AssignmentGroup', 'compiled/views/DialogFormView', 'jst/assignments/DeleteGroup', 'jst/EmptyDialogFormWrapper', 'jquery.disableWhileLoading'], function(I18n, $, _, AssignmentGroup, DialogFormView, template, wrapper) {
    var DeleteGroupView, _ref;

    return DeleteGroupView = (function(_super) {
      __extends(DeleteGroupView, _super);

      function DeleteGroupView() {
        this.removeFromGroupOptions = __bind(this.removeFromGroupOptions, this);
        this.addToGroupOptions = __bind(this.addToGroupOptions, this);
        this.updateAssignmentCount = __bind(this.updateAssignmentCount, this);        _ref = DeleteGroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DeleteGroupView.prototype.defaults = {
        width: 500,
        height: 275
      };

      DeleteGroupView.prototype.els = {
        '.assignment_count': '$assignmentCount',
        '.group_select': '$groupSelect'
      };

      DeleteGroupView.prototype.events = _.extend({}, DeleteGroupView.prototype.events, {
        'click .dialog_closer': 'close',
        'click .delete_group': 'destroy',
        'change .group_select': 'selectMove'
      });

      DeleteGroupView.prototype.template = template;

      DeleteGroupView.prototype.wrapperTemplate = wrapper;

      DeleteGroupView.prototype.initialize = function() {
        DeleteGroupView.__super__.initialize.apply(this, arguments);
        this.model.get('assignments').on('add remove', this.updateAssignmentCount);
        this.model.collection.on('add', this.addToGroupOptions);
        return this.model.collection.on('remove', this.removeFromGroupOptions);
      };

      DeleteGroupView.prototype.toJSON = function() {
        var data, groups, groups_json,
          _this = this;

        data = DeleteGroupView.__super__.toJSON.apply(this, arguments);
        groups = this.model.collection.reject(function(model) {
          return model.get('id') === _this.model.get('id');
        });
        groups_json = groups.map(function(model) {
          return model.toJSON();
        });
        return _.extend(data, {
          assignment_count: this.model.get('assignments').length,
          groups: groups_json,
          label_id: data.id
        });
      };

      DeleteGroupView.prototype.updateAssignmentCount = function() {
        return this.$assignmentCount.text(this.model.get('assignments').length);
      };

      DeleteGroupView.prototype.addToGroupOptions = function(model) {
        var $opt, id;

        id = model.get('id');
        $opt = $('<option>');
        $opt.val(id);
        $opt.addClass("ag_" + id);
        $opt.text(model.get('name'));
        return this.$groupSelect.append($opt);
      };

      DeleteGroupView.prototype.removeFromGroupOptions = function(model) {
        var id;

        id = model.get('id');
        return this.$groupSelect.find("move_to_ag_" + id).remove();
      };

      DeleteGroupView.prototype.destroy = function() {
        var data,
          _this = this;

        data = this.getFormData();
        if (data.action === "move" && data.move_assignments_to) {
          this.destroyModel(data.move_assignments_to).then(function() {
            return _this.close();
          });
        }
        if (data.action === "delete") {
          return this.destroyModel().then(function() {
            return _this.close();
          });
        }
      };

      DeleteGroupView.prototype.destroyModel = function(moveTo) {
        var data, destroyDfd,
          _this = this;

        if (moveTo == null) {
          moveTo = null;
        }
        this.collection = this.model.collection;
        data = moveTo ? "move_assignments_to=" + moveTo : '';
        destroyDfd = this.model.destroy({
          data: data,
          wait: true
        });
        destroyDfd.then(function() {
          if (moveTo) {
            return _this.collection.fetch({
              reset: true
            });
          }
        });
        this.$el.disableWhileLoading(destroyDfd);
        return destroyDfd;
      };

      DeleteGroupView.prototype.selectMove = function() {
        if (!this.$el.find(".group_select :selected").hasClass("blank")) {
          return this.$el.find('.assignment_group_move').prop('checked', true);
        }
      };

      DeleteGroupView.prototype.openAgain = function() {
        if (this.model.collection.models.length > 1) {
          if (this.model.get('assignments').length > 0) {
            return DeleteGroupView.__super__.openAgain.apply(this, arguments);
          } else {
            if (confirm(I18n.t('confirm_delete_group', "Are you sure you want to delete this Assignment Group?"))) {
              return this.destroyModel();
            }
          }
        } else {
          return alert(I18n.t('cannot_delete_group', "You must have at least one Assignment Group"));
        }
      };

      return DeleteGroupView;

    })(DialogFormView);
  });

}).call(this);
