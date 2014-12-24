(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'underscore', 'compiled/views/CollectionView'], function(Backbone, $, _, CollectionView) {
    var DraggableCollectionView, _ref;

    return DraggableCollectionView = (function(_super) {
      __extends(DraggableCollectionView, _super);

      function DraggableCollectionView() {
        this.updateModels = __bind(this.updateModels, this);
        this._updateSort = __bind(this._updateSort, this);
        this._onReceive = __bind(this._onReceive, this);
        this._noItemsViewIfEmpty = __bind(this._noItemsViewIfEmpty, this);
        this.modifyPlaceholder = __bind(this.modifyPlaceholder, this);        _ref = DraggableCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DraggableCollectionView.optionProperty('parentCollection');

      DraggableCollectionView.optionProperty('childKey');

      DraggableCollectionView.optionProperty('groupId');

      DraggableCollectionView.optionProperty('groupKey');

      DraggableCollectionView.optionProperty('reorderURL');

      DraggableCollectionView.optionProperty('noItemTemplate');

      DraggableCollectionView.prototype.sortOptions = {
        tolerance: 'pointer',
        opacity: 0.9,
        zIndex: 100,
        connectWith: '.draggable.collectionViewItems',
        placeholder: 'draggable-dropzone',
        forcePlaceholderSize: true
      };

      DraggableCollectionView.prototype.render = function(drag) {
        if (drag == null) {
          drag = true;
        }
        DraggableCollectionView.__super__.render.apply(this, arguments);
        if (drag) {
          this.initSort();
        }
        return this;
      };

      DraggableCollectionView.prototype.attachCollection = function() {
        DraggableCollectionView.__super__.attachCollection.apply(this, arguments);
        return this.collection.on('add', this._noItemsViewIfEmpty);
      };

      DraggableCollectionView.prototype.initSort = function() {
        this.$list.sortable(_.extend({}, this.sortOptions, {
          scope: this.cid
        })).on('sortstart', this.modifyPlaceholder).on('sortreceive', this._onReceive).on('sortupdate', this._updateSort).on('sortremove', this._noItemsViewIfEmpty);
        this.$list.disableSelection();
        return this._noItemsViewIfEmpty();
      };

      DraggableCollectionView.prototype.modifyPlaceholder = function(e, ui) {
        return $(ui.placeholder).data("group", this.groupId);
      };

      DraggableCollectionView.prototype._noItemsViewIfEmpty = function() {
        var list;

        list = this.$list.children();
        if (list.length === 0) {
          return this.insertNoItemView();
        } else {
          return this.removeNoItemView();
        }
      };

      DraggableCollectionView.prototype.insertNoItemView = function() {
        this.noItems = new Backbone.View({
          template: this.noItemTemplate,
          tagName: "li",
          className: "no-items"
        });
        return this.$list.append(this.noItems.render().el);
      };

      DraggableCollectionView.prototype.removeNoItemView = function() {
        if (this.noItems) {
          return this.noItems.remove();
        }
      };

      DraggableCollectionView.prototype.searchItem = function(itemId) {
        var chosen,
          _this = this;

        chosen = null;
        this.parentCollection.find(function(group) {
          var assignments, result;

          assignments = group.get(_this.childKey);
          result = assignments.findWhere({
            id: itemId
          });
          if (result != null) {
            return chosen = result;
          }
        });
        return chosen;
      };

      DraggableCollectionView.prototype._getItemId = function(item) {
        var id;

        id = item.children(":first").data('item-id');
        return id && String(id);
      };

      DraggableCollectionView.prototype._onReceive = function(e, ui) {
        var item_id, model;

        item_id = this._getItemId(ui.item);
        model = this.searchItem(item_id);
        this._removeFromGroup(model);
        return this._addToGroup(model);
      };

      DraggableCollectionView.prototype._removeFromGroup = function(model) {
        var old_children, old_group, old_group_id;

        old_group_id = model.get(this.groupKey);
        old_group = this.parentCollection.findWhere({
          id: old_group_id
        });
        old_children = old_group.get(this.childKey);
        return old_children.remove(model, {
          silent: true
        });
      };

      DraggableCollectionView.prototype._addToGroup = function(model) {
        var new_children, new_group;

        model.set(this.groupKey, this.groupId);
        new_group = this.parentCollection.findWhere({
          id: this.groupId
        });
        new_children = new_group.get(this.childKey);
        return new_children.add(model, {
          silent: true
        });
      };

      DraggableCollectionView.prototype._updateSort = function(e, ui) {
        var id, model, models, new_index, shouldSave;

        e.stopImmediatePropagation();
        shouldSave = this.$(ui.item).length;
        id = this._getItemId(ui.item);
        model = this.collection.get(id);
        new_index = ui.item.index();
        models = this.updateModels(model, new_index, shouldSave);
        if (shouldSave) {
          model.set('position', new_index + 1);
          this.collection.sort();
          return this._sendPositions(this.collection.pluck('id'));
        } else {
          return this.collection.sort();
        }
      };

      DraggableCollectionView.prototype.updateModels = function(model, new_index, inView) {
        var models_to_update, movedDown, old_index, old_pos, slice_args;

        old_pos = model.get('position');
        if (old_pos) {
          old_index = old_pos - 1;
        }
        movedDown = old_index < new_index;
        slice_args = !inView ? (model.unset('position'), [old_index]) : !old_pos ? [new_index] : movedDown ? [old_index, new_index + 1] : [new_index, old_index + 1];
        models_to_update = this.collection.slice.apply(this.collection, slice_args);
        return _.each(models_to_update, function(m) {
          var neue, old;

          if (m.id !== model.id) {
            old = m.get('position');
            neue = !inView || movedDown ? old - 1 : old + 1;
            return m.set('position', neue);
          }
        });
      };

      DraggableCollectionView.prototype._sendPositions = function(ids) {
        return $.post(this.reorderURL, {
          order: ids.join(",")
        });
      };

      return DraggableCollectionView;

    })(CollectionView);
  });

}).call(this);
