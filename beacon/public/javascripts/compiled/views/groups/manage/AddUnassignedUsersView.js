(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/views/CollectionView', 'jst/groups/manage/addUnassignedUsers', 'jst/groups/manage/addUnassignedUser'], function(_arg, _, CollectionView, template, itemTemplate) {
    var AddUnassignedUsersView, View, _ref;

    View = _arg.View;
    return AddUnassignedUsersView = (function(_super) {
      __extends(AddUnassignedUsersView, _super);

      function AddUnassignedUsersView() {
        this.checkParam = __bind(this.checkParam, this);        _ref = AddUnassignedUsersView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AddUnassignedUsersView.prototype.initialize = function(options) {
        return AddUnassignedUsersView.__super__.initialize.call(this, _.extend({}, options, {
          itemView: View.extend({
            tagName: 'li'
          }),
          itemViewOptions: {
            template: itemTemplate
          }
        }));
      };

      AddUnassignedUsersView.prototype.template = template;

      AddUnassignedUsersView.prototype.attach = function() {
        this.collection.on('add remove change reset', this.render);
        return this.collection.on('setParam deleteParam', this.checkParam);
      };

      AddUnassignedUsersView.prototype.checkParam = function(param, value) {
        var _ref1;

        if ((_ref1 = this.lastRequest) != null) {
          _ref1.abort();
        }
        this.collection.termError = value === false;
        if (value) {
          return this.lastRequest = this.collection.fetch();
        } else {
          return this.render();
        }
      };

      AddUnassignedUsersView.prototype.toJSON = function() {
        var _ref1;

        return {
          users: this.collection.toJSON(),
          term: (_ref1 = this.collection.options.params) != null ? _ref1.search_term : void 0,
          termError: this.collection.termError
        };
      };

      return AddUnassignedUsersView;

    })(CollectionView);
  });

}).call(this);
