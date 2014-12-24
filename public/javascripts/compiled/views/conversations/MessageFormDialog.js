(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['i18n!conversation_dialog', 'jquery', 'underscore', 'Backbone', 'compiled/views/DialogBaseView', 'jst/conversations/MessageFormDialog', 'compiled/fn/preventDefault', 'jst/conversations/composeTitleBar', 'jst/conversations/composeButtonBar', 'jst/conversations/addAttachment', 'compiled/models/Message', 'compiled/views/conversations/AutocompleteView', 'compiled/views/conversations/CourseSelectionView', 'compiled/views/conversations/ContextMessagesView', 'vendor/jquery.elastic'], function(I18n, $, _, _arg, DialogBaseView, template, preventDefault, composeTitleBarTemplate, composeButtonBarTemplate, addAttachmentTemplate, Message, AutocompleteView, CourseSelectionView, ContextMessagesView) {
    var Collection, MessageFormDialog, _ref;

    Collection = _arg.Collection;
    return MessageFormDialog = (function(_super) {
      __extends(MessageFormDialog, _super);

      function MessageFormDialog() {
        this.focusNextAttachment = __bind(this.focusNextAttachment, this);
        this.focusPrevAttachment = __bind(this.focusPrevAttachment, this);
        this.removeAttachment = __bind(this.removeAttachment, this);
        this.handleAttachmentKeyDown = __bind(this.handleAttachmentKeyDown, this);
        this.handleAttachment = __bind(this.handleAttachment, this);
        this.handleAttachmentDblClick = __bind(this.handleAttachmentDblClick, this);
        this.handleAttachmentClick = __bind(this.handleAttachmentClick, this);
        this.handleBodyClick = __bind(this.handleBodyClick, this);
        this.resizeBody = __bind(this.resizeBody, this);
        this.canAddNotesFor = __bind(this.canAddNotesFor, this);
        this.recipientIdsChanged = __bind(this.recipientIdsChanged, this);
        this.onCourse = __bind(this.onCourse, this);        _ref = MessageFormDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MessageFormDialog.prototype.template = template;

      MessageFormDialog.prototype.els = {
        '.message_course': '$messageCourse',
        '.message_course_ro': '$messageCourseRO',
        'input[name=context_code]': '$contextCode',
        '.message_subject': '$messageSubject',
        '.message_subject_ro': '$messageSubjectRO',
        '.context_messages': '$contextMessages',
        '.media_comment': '$mediaComment',
        'input[name=media_comment_id]': '$mediaCommentId',
        'input[name=media_comment_type]': '$mediaCommentType',
        '.ac': '$recipients',
        '.attachment_list': '$attachments',
        '.attachments-pane': '$attachmentsPane',
        '.message-body': '$messageBody',
        '.conversation_body': '$conversationBody',
        '.compose_form': '$form',
        '.user_note': '$userNote',
        '.user_note_info': '$userNoteInfo'
      };

      MessageFormDialog.prototype.messages = {
        flashSuccess: I18n.t('message_sent', 'Message sent!')
      };

      MessageFormDialog.prototype.dialogOptions = function() {
        var _this = this;

        return {
          id: 'compose-new-message',
          autoOpen: false,
          minWidth: 550,
          width: 700,
          minHeight: 500,
          height: 550,
          resizable: true,
          close: function() {
            return _this.afterClose();
          },
          resize: function() {
            _this.resizeBody();
            return _this._limitContentSize();
          },
          buttons: [
            {
              text: I18n.t('#buttons.cancel', 'Cancel'),
              click: this.cancel
            }, {
              text: I18n.t('#buttons.send', 'Send'),
              'class': 'btn-primary send-message',
              'data-track-category': "Compose Message",
              'data-track-action': "Edit",
              'data-track-label': "Send",
              click: function(e) {
                return _this.sendMessage(e);
              }
            }
          ]
        };
      };

      MessageFormDialog.prototype.show = function(model, options) {
        if (this.model = model) {
          this.message = (options != null ? options.message : void 0) || this.model.messageCollection.at(0);
        }
        this.to = options != null ? options.to : void 0;
        if (options.trigger) {
          this.returnFocusTo = options.trigger;
        }
        if (options.remoteLaunch) {
          this.launchParams = _.pick(options, 'context', 'user');
        }
        this.render();
        this.appendAddAttachmentTemplate();
        MessageFormDialog.__super__.show.apply(this, arguments);
        this.initializeForm();
        return this.resizeBody();
      };

      MessageFormDialog.prototype._limitContentSize = function() {
        if (this.$el.width() > this.$fullDialog.width()) {
          return this.$el.width('100%');
        }
      };

      MessageFormDialog.prototype.afterClose = function() {
        this.$fullDialog.off('click', '.message-body');
        this.$fullDialog.off('click', '.attach-file');
        this.$fullDialog.off('click', '.attachment .remove_link');
        this.$fullDialog.off('keydown', '.attachment');
        this.$fullDialog.off('click', '.attachment');
        this.$fullDialog.off('dblclick', '.attachment');
        this.$fullDialog.off('change', '.file_input');
        this.$fullDialog.off('click', '.attach-media');
        this.$fullDialog.off('click', '.media-comment .remove_link');
        this.launchParams = null;
        this.trigger('close');
        if (this.returnFocusTo) {
          this.returnFocusTo.focus();
          return delete this.returnFocusTo;
        }
      };

      MessageFormDialog.prototype.sendMessage = function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.removeEmptyAttachments();
        return this.$form.submit();
      };

      MessageFormDialog.prototype.initialize = function() {
        var $closeBtn, $titlebar;

        MessageFormDialog.__super__.initialize.apply(this, arguments);
        this.$fullDialog = this.$el.closest('.ui-dialog');
        $titlebar = this.$fullDialog.find('.ui-dialog-titlebar');
        $closeBtn = $titlebar.find('.ui-dialog-titlebar-close');
        $closeBtn.html(composeTitleBarTemplate());
        this.$fullDialog.addClass('compose-message-dialog');
        this.$fullDialog.find('.ui-dialog-buttonpane').prepend(composeButtonBarTemplate());
        return this.$addMediaComment = this.$fullDialog.find('.attach-media');
      };

      MessageFormDialog.prototype.prepareTextarea = function($scope) {
        var $textArea;

        $textArea = $scope.find('textarea');
        return $textArea.elastic();
      };

      MessageFormDialog.prototype.onCourse = function(course) {
        this.recipientView.setContext(course, true);
        if (course != null ? course.id : void 0) {
          this.$contextCode.val(course.id);
          this.recipientView.disable(false);
        } else {
          this.$contextCode.val('');
        }
        return this.$messageCourseRO.text(course ? course.name : I18n.t('no_course', 'No course'));
      };

      MessageFormDialog.prototype.defaultCourse = null;

      MessageFormDialog.prototype.setDefaultCourse = function(course) {
        return this.defaultCourse = course;
      };

      MessageFormDialog.prototype.initializeForm = function() {
        var contextView, date, includedMessages, messages, participants, query, tokens, _ref1, _ref2, _ref3,
          _this = this;

        this.prepareTextarea(this.$el);
        this.recipientView = new AutocompleteView({
          el: this.$recipients,
          disabled: (_ref1 = this.model) != null ? _ref1.get('private') : void 0
        }).render();
        this.recipientView.on('changeToken', this.recipientIdsChanged);
        if (!_.include(ENV.current_user_roles, 'admin')) {
          this.recipientView.disable(true);
        }
        this.$messageCourse.prop('disabled', !!this.model);
        this.courseView = new CourseSelectionView({
          el: this.$messageCourse,
          courses: this.options.courses,
          defaultOption: I18n.t('select_course', 'Select course')
        });
        this.courseView.on('course', this.onCourse);
        if (this.model) {
          if (this.model.get('context_code')) {
            this.courseView.setValue(this.model.get('context_code'));
          } else {
            this.courseView.setValue("course_" + _.keys(this.model.get('audience_contexts').courses)[0]);
          }
          this.recipientView.disable(false);
        } else if (this.launchParams) {
          if (this.launchParams.context) {
            this.courseView.setValue(this.launchParams.context);
          }
          this.recipientView.disable(false);
        } else {
          this.courseView.setValue(this.defaultCourse);
        }
        if (this.model) {
          this.courseView.$picker.css('display', 'none');
          this.recipientView.$input.focus();
        } else {
          this.$messageCourseRO.css('display', 'none');
          this.courseView.focus();
        }
        if (this.tokenInput = this.$el.find('.recipients').data('token_input')) {
          this.tokenInput.$fakeInput.css('width', '100%');
          if (this.options.user_id) {
            query = {
              user_id: this.options.user_id,
              from_conversation_id: this.options.from_conversation_id
            };
            $.ajaxJSON(this.tokenInput.selector.url, 'GET', query, function(data) {
              if (data.length) {
                return _this.tokenInput.addToken({
                  value: data[0].id,
                  text: data[0].name,
                  data: data[0]
                });
              }
            });
          }
        }
        if (this.to && this.to !== 'forward' && this.message) {
          tokens = [];
          tokens.push(this.message.get('author'));
          if (this.to === 'replyAll' || ENV.current_user_id === this.message.get('author').id) {
            tokens = tokens.concat(this.message.get('participants'));
            if (tokens.length > 1) {
              tokens = _.filter(tokens, function(t) {
                return t.id !== ENV.current_user_id;
              });
            }
          }
          this.recipientView.setTokens(tokens);
        }
        if (this.launchParams) {
          this.recipientView.setTokens([this.launchParams.user]);
        }
        if (this.model) {
          this.$messageSubject.css('display', 'none');
          this.$messageSubject.prop('disabled', true);
        } else {
          this.$messageSubjectRO.css('display', 'none');
        }
        if ((_ref2 = this.model) != null ? _ref2.get('subject') : void 0) {
          this.$messageSubject.val(this.model.get('subject'));
          this.$messageSubjectRO.text(this.model.get('subject'));
        }
        if (messages = (_ref3 = this.model) != null ? _ref3.messageCollection : void 0) {
          date = new Date(this.message.get('created_at'));
          participants = this.message.get('participating_user_ids');
          includedMessages = new Collection(messages.filter(function(m) {
            return new Date(m.get('created_at')) <= date && !_.find(participants, function(p) {
              return !_.contains(m.get('participating_user_ids'), p);
            });
          }));
          contextView = new ContextMessagesView({
            el: this.$contextMessages,
            collection: includedMessages
          });
          contextView.render();
        }
        this.$fullDialog.on('click', '.message-body', this.handleBodyClick);
        this.$fullDialog.on('click', '.attach-file', function() {
          return _this.addAttachment();
        });
        this.$fullDialog.on('click', '.attachment .remove_link', preventDefault(function(e) {
          return _this.removeAttachment($(e.currentTarget));
        }));
        this.$fullDialog.on('keydown', '.attachment', this.handleAttachmentKeyDown);
        this.$fullDialog.on('click', '.attachment', this.handleAttachmentClick);
        this.$fullDialog.on('dblclick', '.attachment', this.handleAttachmentDblClick);
        this.$fullDialog.on('change', '.file_input', this.handleAttachment);
        this.$fullDialog.on('click', '.attach-media', preventDefault(function() {
          return _this.addMediaComment();
        }));
        this.$fullDialog.on('click', '.media_comment .remove_link', preventDefault(function(e) {
          return _this.removeMediaComment($(e.currentTarget));
        }));
        this.$addMediaComment[!!INST.kalturaSettings ? 'show' : 'hide']();
        return this.$form.formSubmit({
          fileUpload: function() {
            return _this.$fullDialog.find(".attachment_list").length > 0;
          },
          files: function() {
            return _this.$fullDialog.find(".file_input");
          },
          preparedFileUpload: true,
          context_code: "user_" + ENV.current_user_id,
          folder_id: this.options.folderId,
          intent: 'message',
          formDataTarget: 'url',
          disableWhileLoading: true,
          required: ['body'],
          property_validations: {
            token_capture: function() {
              if (_this.recipientView && !_this.recipientView.tokens.length) {
                return I18n.t('errors.field_is_required', "This field is required");
              }
            }
          },
          handle_files: function(attachments, data) {
            var a;

            data.attachment_ids = (function() {
              var _i, _len, _results;

              _results = [];
              for (_i = 0, _len = attachments.length; _i < _len; _i++) {
                a = attachments[_i];
                _results.push(a.attachment.id);
              }
              return _results;
            })();
            return data;
          },
          processData: function(formData) {
            if (!formData.context_code) {
              formData.context_code = _this.options.account_context_code;
            }
            return formData;
          },
          onSubmit: function(request, submitData) {
            var dfd, localTo;

            _this.request = request;
            dfd = $.Deferred();
            _this.trigger('submitting', dfd);
            _this.close();
            localTo = _this.to;
            _this.to = null;
            $.when(_this.request).then(function(response) {
              var message;

              dfd.resolve();
              $.flashMessage(_this.messages.flashSuccess);
              if (localTo) {
                message = response.messages[0];
                message.author = {
                  name: ENV.current_user.display_name,
                  avatar_url: ENV.current_user.avatar_image_url
                };
                message = new Message(response, {
                  parse: true
                });
                return _this.trigger('addMessage', message.toJSON().conversation.messages[0], response);
              } else {
                return _this.trigger('newConversations', response);
              }
            });
            return $.when(_this.request).fail(function() {
              return dfd.reject();
            });
          }
        });
      };

      MessageFormDialog.prototype.recipientIdsChanged = function(recipientIds) {
        var canAddNotes,
          _this = this;

        if (_.isEmpty(recipientIds) || _.contains(recipientIds, /(teachers|tas|observers)$/)) {
          return this.toggleUserNote(false);
        } else {
          canAddNotes = _.map(this.recipientView.tokenModels(), function(tokenModel) {
            return _this.canAddNotesFor(tokenModel);
          });
          return this.toggleUserNote(_.every(canAddNotes));
        }
      };

      MessageFormDialog.prototype.canAddNotesFor = function(user) {
        var id, roles, _ref1;

        if (!ENV.CONVERSATIONS.NOTES_ENABLED) {
          return false;
        }
        if (user == null) {
          return false;
        }
        if (user.id.match(/students$/) || user.id.match(/^group/)) {
          return true;
        }
        _ref1 = user.get('common_courses');
        for (id in _ref1) {
          roles = _ref1[id];
          if (__indexOf.call(roles, 'StudentEnrollment') >= 0 && (ENV.CONVERSATIONS.CAN_ADD_NOTES_FOR_ACCOUNT || ENV.CONVERSATIONS.CAN_ADD_NOTES_FOR_COURSES[id])) {
            return true;
          }
        }
        return false;
      };

      MessageFormDialog.prototype.toggleUserNote = function(state) {
        this.$userNoteInfo.toggle(state);
        if (state === false) {
          this.$userNote.prop('checked', false);
        }
        return this.resizeBody();
      };

      MessageFormDialog.prototype.resizeBody = function() {
        this.updateAttachmentOverflow();
        return this.$messageBody.height((this.$el.offset().top + this.$el.height()) - this.$messageBody.offset().top - this.$attachmentsPane.height());
      };

      MessageFormDialog.prototype.attachmentsShouldOverflow = function() {
        var $attachments;

        $attachments = this.$attachments.children();
        return ($attachments.length * $attachments.outerWidth()) > this.$attachmentsPane.width();
      };

      MessageFormDialog.prototype.addAttachment = function() {
        $('#file_input').attr('id', _.uniqueId('file_input'));
        this.appendAddAttachmentTemplate();
        this.updateAttachmentOverflow();
        return this.focusAddAttachment();
      };

      MessageFormDialog.prototype.appendAddAttachmentTemplate = function() {
        var $attachment;

        $attachment = $(addAttachmentTemplate());
        this.$attachments.append($attachment);
        return $attachment.hide();
      };

      MessageFormDialog.prototype.setAttachmentClip = function($attachment) {
        var $clip, $name;

        $name = $attachment.find($('.attachment-name'));
        $clip = $attachment.find($('.attachment-name-clip'));
        $clip.height($name.height());
        if ($name.height() < 35) {
          return $clip.addClass('hidden');
        }
      };

      MessageFormDialog.prototype.imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];

      MessageFormDialog.prototype.handleBodyClick = function(e) {
        if (e.target === e.currentTarget) {
          return this.$conversationBody.focus();
        }
      };

      MessageFormDialog.prototype.handleAttachmentClick = function(e) {
        return $(e.currentTarget).focus();
      };

      MessageFormDialog.prototype.handleAttachmentDblClick = function(e) {
        return $(e.currentTarget).find('input').click();
      };

      MessageFormDialog.prototype.handleAttachment = function(e) {
        var $attachment, $icon, extension, file, icon, input, name, picReader, remove;

        input = e.currentTarget;
        $attachment = $(input).closest('.attachment');
        this.updateAttachmentPane();
        if (!input.value) {
          $attachment.hide();
          return;
        }
        $attachment.slideDown("fast");
        $icon = $attachment.find('.attachment-icon i');
        $icon.empty();
        file = input.files[0];
        name = file.name;
        $attachment.find('.attachment-name').text(name);
        this.setAttachmentClip($attachment);
        remove = $attachment.find('.remove_link');
        remove.attr('aria-label', remove.attr('title') + ': ' + name);
        extension = name.split('.').pop().toLowerCase();
        if (__indexOf.call(this.imageTypes, extension) >= 0 && window.FileReader) {
          picReader = new FileReader();
          picReader.addEventListener("load", function(e) {
            var picFile;

            picFile = e.target;
            $icon.attr('class', '');
            return $icon.append($('<img />').attr('src', picFile.result));
          });
          picReader.readAsDataURL(file);
          return;
        }
        icon = 'paperclip';
        if (__indexOf.call(this.imageTypes, extension) >= 0) {
          icon = 'image';
        } else if (extension === 'pdf') {
          icon = 'pdf';
        } else if (extension === 'doc' || extension === 'docx') {
          icon = 'ms-word';
        } else if (extension === 'xls' || extension === 'xlsx') {
          icon = 'ms-excel';
        }
        return $icon.attr('class', "icon-" + icon);
      };

      MessageFormDialog.prototype.handleAttachmentKeyDown = function(e) {
        if (e.keyCode === 37) {
          return this.focusPrevAttachment($(e.currentTarget));
        }
        if (e.keyCode === 39) {
          return this.focusNextAttachment($(e.currentTarget));
        }
        if ((e.keyCode === 13 || e.keyCode === 32) && !$(e.target).hasClass('remove_link')) {
          this.handleAttachmentDblClick(e);
          return false;
        }
        if (e.keyCode !== 46 && e.keyCode !== 68 && e.keyCode !== 13 && e.keyCode !== 32) {
          return;
        }
        this.removeAttachment(e.currentTarget);
        return false;
      };

      MessageFormDialog.prototype.removeEmptyAttachments = function() {
        return _.each(this.$attachments.find('input[value=]'), this.removeAttachment);
      };

      MessageFormDialog.prototype.removeAttachment = function(node) {
        var $attachment,
          _this = this;

        $attachment = $(node).closest(".attachment");
        if (!this.focusNextAttachment($attachment)) {
          if (!this.focusPrevAttachment($attachment)) {
            this.focusAddAttachment();
          }
        }
        return $attachment.slideUp("fast", function() {
          $attachment.remove();
          return _this.updateAttachmentPane();
        });
      };

      MessageFormDialog.prototype.focusPrevAttachment = function($attachment) {
        var $newTarget;

        $newTarget = $attachment.prevAll(':visible').first();
        if (!$newTarget.length) {
          return false;
        }
        return $newTarget.focus();
      };

      MessageFormDialog.prototype.focusNextAttachment = function($attachment) {
        var $newTarget;

        $newTarget = $attachment.nextAll(':visible').first();
        if (!$newTarget.length) {
          return false;
        }
        return $newTarget.focus();
      };

      MessageFormDialog.prototype.focusAddAttachment = function() {
        return this.$fullDialog.find('.attach-file').focus();
      };

      MessageFormDialog.prototype.addMediaComment = function() {
        var _this = this;

        return this.$mediaComment.mediaComment('create', 'any', function(id, type) {
          _this.$mediaCommentId.val(id);
          _this.$mediaCommentType.val(type);
          _this.$mediaComment.show();
          return _this.$addMediaComment.hide();
        });
      };

      MessageFormDialog.prototype.removeMediaComment = function() {
        this.$mediaCommentId.val('');
        this.$mediaCommentType.val('');
        this.$mediaComment.hide();
        return this.$addMediaComment.show();
      };

      MessageFormDialog.prototype.updateAttachmentOverflow = function() {
        return this.$attachmentsPane.toggleClass('overflowed', this.attachmentsShouldOverflow());
      };

      MessageFormDialog.prototype.updateAttachmentPane = function() {
        this.$attachmentsPane[this.$attachmentsPane.find('input:not([value=])').length ? 'addClass' : 'removeClass']('has-items');
        return this.resizeBody();
      };

      return MessageFormDialog;

    })(DialogBaseView);
  });

}).call(this);
