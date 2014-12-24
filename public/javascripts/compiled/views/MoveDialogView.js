(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/DialogFormView', 'compiled/views/MoveDialogSelect', 'jst/MoveDialog', 'jst/EmptyDialogFormWrapper'], function($, _, DialogFormView, MoveDialogSelect, template, wrapper) {
    var MoveDialogView, _ref;

    return MoveDialogView = (function(_super) {
      __extends(MoveDialogView, _super);

      function MoveDialogView() {
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);
        this.cleanup = __bind(this.cleanup, this);        _ref = MoveDialogView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MoveDialogView.prototype.setViewProperties = false;

      MoveDialogView.prototype.className = 'form-dialog';

      MoveDialogView.prototype.defaults = {
        width: 450,
        height: 340
      };

      MoveDialogView.optionProperty('nested');

      MoveDialogView.optionProperty('parentCollection');

      MoveDialogView.optionProperty('parentLabelText');

      MoveDialogView.optionProperty('parentKey');

      MoveDialogView.optionProperty('childKey');

      MoveDialogView.optionProperty('closeTarget');

      MoveDialogView.optionProperty('saveURL');

      MoveDialogView.prototype.events = _.extend({}, MoveDialogView.prototype.events, {
        'click .dialog_closer': 'close',
        'change .move_select_parent_collection': 'updateListView'
      });

      MoveDialogView.prototype.els = {
        '.child_container': '$childContainer',
        '.form-dialog-content': '$content'
      };

      MoveDialogView.prototype.template = template;

      MoveDialogView.prototype.wrapperTemplate = wrapper;

      MoveDialogView.prototype.openAgain = function() {
        MoveDialogView.__super__.openAgain.apply(this, arguments);
        this.initChildViews();
        return this.dialog.option("close", this.cleanup);
      };

      MoveDialogView.prototype.initChildViews = function() {
        this.listView = this.parentListView = null;
        if (this.nested && this.parentCollection) {
          this.listView = new MoveDialogSelect({
            model: this.model,
            excludeModel: true,
            lastList: true
          });
          this.parentListView = new MoveDialogSelect({
            collection: this.parentCollection,
            model: this.model,
            labelText: this.parentLabelText
          });
        } else {
          this.listView = new MoveDialogSelect({
            model: this.model,
            excludeModel: true,
            lastList: true
          });
        }
        return this.attachChildViews();
      };

      MoveDialogView.prototype.attachChildViews = function() {
        var container;

        container = this.$childContainer.detach();
        if (this.parentListView) {
          container.append(this.parentListView.render().el);
        }
        container.append(this.listView.render().el);
        return this.$content.append(container);
      };

      MoveDialogView.prototype.cleanup = function() {
        var _ref1, _ref2, _ref3;

        if ((_ref1 = this.parentListView) != null) {
          _ref1.remove();
        }
        if ((_ref2 = this.listView) != null) {
          _ref2.remove();
        }
        this.parentListView = this.listView = null;
        this.dialog.option("close", null);
        return (_ref3 = this.closeTarget) != null ? _ref3.focus() : void 0;
      };

      MoveDialogView.prototype.updateListView = function(e) {
        var children, group, groupId;

        if (!this.nested) {
          return;
        }
        groupId = $(e.currentTarget).val();
        group = this.parentCollection.get(groupId);
        children = group.get(this.childKey);
        return this.listView.setCollection(children);
      };

      MoveDialogView.prototype.toJSON = function() {
        var data, _base;

        return data = (typeof (_base = this.model).toView === "function" ? _base.toView() : void 0) || MoveDialogView.__super__.toJSON.apply(this, arguments);
      };

      MoveDialogView.prototype.getFormData = function() {
        var $select, selected, vals;

        $select = this.listView.$('select');
        selected = $select.val();
        vals = [];
        _.each($select.find('option'), function(ele, i) {
          var value;

          value = ele.value;
          if (value !== 'last') {
            return vals.push(value);
          }
        });
        if (selected === 'last') {
          vals.push(this.model.id);
        } else {
          vals.splice(_.indexOf(vals, selected), 0, this.model.id);
        }
        return vals;
      };

      MoveDialogView.prototype.saveFormData = function(data) {
        var url;

        url = typeof this.saveURL === 'function' ? this.saveURL.call(this) : this.saveURL;
        return $.post(url, {
          order: data.join(',')
        });
      };

      MoveDialogView.prototype.onSaveSuccess = function(data) {
        var collID, newCollection, positions, _i, _ref1, _ref2, _ref3, _results;

        collID = (_ref1 = this.parentListView) != null ? _ref1.value() : void 0;
        newCollection = (_ref2 = this.parentCollection) != null ? _ref2.get(collID).get(this.childKey) : void 0;
        if (newCollection && newCollection !== this.model.collection) {
          this.model.collection.remove(this.model);
          newCollection.add(this.model);
          if (this.parentKey) {
            this.model.set(this.parentKey, collID);
          }
        } else {
          newCollection = this.model.collection;
        }
        positions = (function() {
          _results = [];
          for (var _i = 1, _ref3 = newCollection.length; 1 <= _ref3 ? _i <= _ref3 : _i >= _ref3; 1 <= _ref3 ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
        _.each(data.order, function(id, index) {
          var _ref4;

          return (_ref4 = newCollection.get(id)) != null ? _ref4.set('position', positions[index]) : void 0;
        });
        newCollection.sort();
        newCollection.reset(newCollection.models);
        return MoveDialogView.__super__.onSaveSuccess.apply(this, arguments);
      };

      return MoveDialogView;

    })(DialogFormView);
  });

}).call(this);
