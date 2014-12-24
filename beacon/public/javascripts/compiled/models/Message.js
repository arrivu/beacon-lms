(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/str/TextHelper'], function(_, _arg, TextHelper) {
    var Collection, Message, Model, _ref;

    Model = _arg.Model, Collection = _arg.Collection;
    return Message = (function(_super) {
      __extends(Message, _super);

      function Message() {
        _ref = Message.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Message.prototype.initialize = function() {
        this.messageCollection = new Collection();
        return this.on('change:messages', this.handleMessages);
      };

      Message.prototype.parse = function(data) {
        var findParticipant;

        if (data.messages) {
          findParticipant = function(id) {
            return _.find(data.participants, {
              id: id
            });
          };
        }
        _.each(data.messages, function(message) {
          var id, participant, _i, _len, _ref1;

          message.author = findParticipant(message.author_id);
          message.participants = [];
          message.participantNames = [];
          _ref1 = message.participating_user_ids;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            id = _ref1[_i];
            if (id !== message.author_id) {
              if (participant = findParticipant(id)) {
                message.participants.push(participant);
                message.participantNames.push(participant.name);
              }
            }
          }
          if (message.participants.length > 2) {
            message.summarizedParticipantNames = message.participantNames.slice(0, 2);
            message.hiddenParticipantCount = message.participants.length - 2;
          }
          message.context_name = data.context_name;
          message.has_attachments = message.media_comment || message.attachments.length;
          return message.bodyHTML = TextHelper.formatMessage(message.body);
        });
        return data;
      };

      Message.prototype.handleMessages = function() {
        this.messageCollection.reset(this.get('messages') || []);
        return this.listenTo(this.messageCollection, 'change:selected', this.handleSelection);
      };

      Message.prototype.handleSelection = function(model, value) {
        if (!value) {
          return;
        }
        return this.messageCollection.each(function(m) {
          if (m !== model) {
            return m.set({
              selected: false
            });
          }
        });
      };

      Message.prototype.unread = function() {
        return this.get('workflow_state') === 'unread';
      };

      Message.prototype.starred = function() {
        return this.get('starred');
      };

      Message.prototype.toggleReadState = function(set_read) {
        if (set_read == null) {
          set_read = this.unread();
        }
        return this.set('workflow_state', set_read ? 'read' : 'unread');
      };

      Message.prototype.toggleStarred = function(setStarred) {
        if (setStarred == null) {
          setStarred = !this.starred();
        }
        return this.set('starred', setStarred);
      };

      Message.prototype.timestamp = function() {
        var lastAuthored, lastMessage;

        lastMessage = new Date(this.get('last_message_at')).getTime();
        lastAuthored = new Date(this.get('last_authored_message_at')).getTime();
        return new Date(_.max([lastMessage, lastAuthored]));
      };

      Message.prototype.toJSON = function() {
        return {
          conversation: _.extend(Message.__super__.toJSON.apply(this, arguments), {
            unread: this.unread(),
            starred: this.starred(),
            timestamp: this.timestamp()
          })
        };
      };

      return Message;

    })(Model);
  });

}).call(this);
