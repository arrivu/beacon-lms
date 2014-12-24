(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!quizzes', 'jquery', 'compiled/views/DialogFormView', 'jst/messageStudentsDialog', 'jst/EmptyDialogFormWrapper', 'compiled/models/Conversation', 'jst/_messageStudentsWhoRecipientList', 'underscore', 'compiled/jquery/serializeForm'], function(I18n, $, DialogFormView, template, wrapperTemplate, Conversation, recipientList, _) {
    var MessageStudentsDialog, _ref;

    return MessageStudentsDialog = (function(_super) {
      __extends(MessageStudentsDialog, _super);

      function MessageStudentsDialog() {
        this.updateListOfRecipients = __bind(this.updateListOfRecipients, this);
        this.getFormData = __bind(this.getFormData, this);
        this._findRecipientGroupByName = __bind(this._findRecipientGroupByName, this);
        this.validateBeforeSave = __bind(this.validateBeforeSave, this);
        this.toJSON = __bind(this.toJSON, this);        _ref = MessageStudentsDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageStudentsDialog.optionProperty('recipientGroups');

      MessageStudentsDialog.optionProperty('context');

      MessageStudentsDialog.prototype.template = template;

      MessageStudentsDialog.prototype.wrapperTemplate = wrapperTemplate;

      MessageStudentsDialog.prototype.className = 'validated-form-view form-dialog';

      MessageStudentsDialog.prototype.defaults = {
        height: 500,
        width: 500
      };

      MessageStudentsDialog.prototype.els = {
        '[name=recipientGroupName]': '$recipientGroupName',
        '#message-recipients': '$messageRecipients',
        '[name=body]': '$messageBody'
      };

      MessageStudentsDialog.prototype.events = _.extend({}, DialogFormView.prototype.events, {
        'change [name=recipientGroupName]': 'updateListOfRecipients',
        'click .dialog_closer': 'close',
        'dialogclose': 'close'
      });

      MessageStudentsDialog.prototype.initialize = function(opts) {
        MessageStudentsDialog.__super__.initialize.apply(this, arguments);
        this.options.title = this.context ? I18n.t('message_students_for_context', 'Message students for %{context}', {
          context: this.context
        }) : I18n.t('message_students', 'Message students');
        this.recipients = this.recipientGroups[0].recipients;
        return this.model || (this.model = new Conversation);
      };

      MessageStudentsDialog.prototype.toJSON = function() {
        var json, key, _i, _len, _ref1;

        json = {};
        _ref1 = ['title', 'recipients', 'recipientGroups'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          key = _ref1[_i];
          json[key] = this[key];
        }
        return json;
      };

      MessageStudentsDialog.prototype.validateBeforeSave = function(data, errors) {
        var errs;

        errs = this.model.validate(data);
        if (errs) {
          if (errs.body) {
            errors.body = errs.body;
          }
          if (errs.recipients) {
            errors.recipientGroupName = errs.recipients;
          }
        }
        return errors;
      };

      MessageStudentsDialog.prototype._findRecipientGroupByName = function(name) {
        return _.detect(this.recipientGroups, function(grp) {
          return grp.name === name;
        });
      };

      MessageStudentsDialog.prototype.getFormData = function() {
        var body, recipientGroupName, recipients, _ref1;

        _ref1 = this.$el.toJSON(), recipientGroupName = _ref1.recipientGroupName, body = _ref1.body;
        recipients = this._findRecipientGroupByName(recipientGroupName).recipients;
        return {
          body: body,
          recipients: _.pluck(recipients, 'id')
        };
      };

      MessageStudentsDialog.prototype.updateListOfRecipients = function() {
        var groupName, recipients;

        groupName = this.$recipientGroupName.val();
        recipients = this._findRecipientGroupByName(groupName).recipients;
        return this.$messageRecipients.html(recipientList({
          recipients: recipients
        }));
      };

      MessageStudentsDialog.prototype.onSaveSuccess = function() {
        this.close();
        return $.flashMessage(I18n.t('notices.message_sent', "Message Sent!"));
      };

      MessageStudentsDialog.prototype.close = function() {
        MessageStudentsDialog.__super__.close.apply(this, arguments);
        this.hideErrors();
        return this.remove();
      };

      return MessageStudentsDialog;

    })(DialogFormView);
  });

}).call(this);
