(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/fn/preventDefault', 'jst/CommentsView', 'jst/_avatar'], function(Backbone, _, preventDefault, template) {
    var CommentsView, _ref;

    return CommentsView = (function(_super) {
      __extends(CommentsView, _super);

      function CommentsView() {
        _ref = CommentsView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommentsView.prototype.template = template;

      CommentsView.prototype.events = {
        'submit form': 'addNewComment',
        'click [data-delete-comment]': 'deleteComment'
      };

      CommentsView.prototype.initialize = function() {
        CommentsView.__super__.initialize.apply(this, arguments);
        this.render();
        return this.model.entries.on('all', this.render);
      };

      CommentsView.prototype.toJSON = function() {
        return {
          entries: this.model.entries.map(function(entry) {
            var _ref1, _ref2;

            return _.extend(entry.toJSON(), {
              author: entry.author(),
              editor: entry.editor(),
              canDelete: ((_ref1 = entry.author()) != null ? _ref1.id : void 0) === ((_ref2 = ENV.current_user) != null ? _ref2.id : void 0)
            });
          }),
          currentUser: ENV.current_user
        };
      };

      CommentsView.prototype.deleteComment = preventDefault(function(_arg) {
        var id, target;

        target = _arg.target;
        id = this.$(target).data('deleteComment');
        return this.model.entries.get(id).destroy();
      });

      CommentsView.prototype.addNewComment = preventDefault(function() {
        var entry, message;

        if (!(message = this.$('[name="message"]').val())) {
          return;
        }
        entry = this.model.entries.create({
          message: message.replace(/\n/g, "<br />")
        });
        return entry.set('user_id', ENV.current_user_id);
      });

      return CommentsView;

    })(Backbone.View);
  });

}).call(this);
