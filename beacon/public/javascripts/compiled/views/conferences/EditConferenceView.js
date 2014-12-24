(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/DialogBaseView', 'compiled/util/deparam', 'jst/conferences/editConferenceForm', 'jst/conferences/userSettingOptions', 'compiled/behaviors/authenticity_token'], function($, _, DialogBaseView, deparam, template, userSettingOptionsTemplate, authenticity_token) {
    var EditConferenceView, _ref;

    return EditConferenceView = (function(_super) {
      __extends(EditConferenceView, _super);

      function EditConferenceView() {
        this.onClose = __bind(this.onClose, this);
        this.update = __bind(this.update, this);        _ref = EditConferenceView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditConferenceView.prototype.template = template;

      EditConferenceView.prototype.dialogOptions = function() {
        return {
          width: 'auto',
          close: this.onClose
        };
      };

      EditConferenceView.prototype.events = {
        'click .all_users_checkbox': 'toggleAllUsers',
        'change #web_conference_long_running': 'changeLongRunning',
        'change #web_conference_conference_type': 'renderConferenceFormUserSettings'
      };

      EditConferenceView.prototype.render = function() {
        var _this = this;

        EditConferenceView.__super__.render.apply(this, arguments);
        this.delegateEvents();
        this.toggleAllUsers();
        this.markInvitedUsers();
        this.renderConferenceFormUserSettings();
        return this.$('form').formSubmit({
          object_name: 'web_conference',
          beforeSubmit: function(data) {
            data = deparam($.param(data)).web_conference;
            _this.model.set(data);
            return _this.model.trigger('startSync');
          },
          success: function(data) {
            _this.model.set(data);
            return _this.model.trigger('sync');
          },
          error: function() {
            _this.show(_this.model);
            return alert('Save failed.');
          }
        });
      };

      EditConferenceView.prototype.show = function(model) {
        this.model = model;
        this.render();
        return EditConferenceView.__super__.show.apply(this, arguments);
      };

      EditConferenceView.prototype.update = function() {
        this.$('form').submit();
        return this.close();
      };

      EditConferenceView.prototype.onClose = function() {
        return window.router.navigate('');
      };

      EditConferenceView.prototype.toJSON = function() {
        var conferenceData, invite_all, is_adding, is_editing, json;

        conferenceData = EditConferenceView.__super__.toJSON.apply(this, arguments);
        is_editing = !this.model.isNew();
        is_adding = !is_editing;
        invite_all = is_adding;
        this.updateConferenceUserSettingDetailsForConference(conferenceData);
        conferenceData['http_method'] = is_adding ? 'POST' : 'PUT';
        if (conferenceData.duration === null) {
          conferenceData.restore_duration = ENV.default_conference.duration;
        } else {
          conferenceData.restore_duration = conferenceData.duration;
        }
        return json = {
          settings: {
            is_editing: is_editing,
            is_adding: is_adding,
            disable_duration_changes: (conferenceData['long_running'] || is_editing) && conferenceData['started_at'],
            auth_token: authenticity_token()
          },
          conferenceData: conferenceData,
          users: ENV.users,
          conferenceTypes: ENV.conference_type_details.map(function(type) {
            return {
              name: type.name,
              type: type.type,
              selected: conferenceData.conference_type === type.type
            };
          }),
          inviteAll: invite_all
        };
      };

      EditConferenceView.prototype.updateConferenceUserSettingDetailsForConference = function(conferenceData) {
        return _.each(ENV.conference_type_details, function(conferenceInfo) {
          return _.each(conferenceInfo.settings, function(optionObj) {
            var currentVal;

            currentVal = conferenceData.user_settings[optionObj.field];
            if (currentVal === void 0) {
              currentVal = optionObj['default'];
            }
            switch (optionObj['type']) {
              case 'boolean':
                optionObj['isBoolean'] = true;
                optionObj['checked'] = currentVal;
                break;
              case 'text':
                optionObj['isText'] = true;
                optionObj['value'] = currentVal;
                break;
              case 'date_picker':
                optionObj['isDatePicker'] = true;
                if (currentVal) {
                  optionObj['value'] = tz.format(currentVal, "%b %-d, %Y %l:%M%P");
                } else {
                  optionObj['value'] = currentVal;
                }
                break;
              case 'select':
                optionObj['isSelect'] = true;
                break;
            }
          });
        });
      };

      EditConferenceView.prototype.renderConferenceFormUserSettings = function() {
        var conferenceData, members, selected, selectedConferenceType, userSettings;

        conferenceData = this.toJSON();
        selectedConferenceType = $('#web_conference_conference_type').val();
        selected = _.select(ENV.conference_type_details, function(conference_settings) {
          return conference_settings.type === selectedConferenceType;
        });
        if (selected.length > 0) {
          selected = selected[0];
        }
        members = [];
        userSettings = [];
        if (selected.settings !== void 0) {
          $.each(selected.settings, function(i, val) {
            if (val['location'] === 'members') {
              return members.push(val);
            } else {
              return userSettings.push(val);
            }
          });
        }
        this.$('.web_conference_user_settings').html(userSettingOptionsTemplate({
          settings: userSettings,
          conference: conferenceData,
          conference_started: !!conferenceData['started_at']
        }));
        this.$('.web_conference_member_user_settings').html(userSettingOptionsTemplate({
          settings: members,
          conference: conferenceData,
          conference_started: !!conferenceData['started_at']
        }));
        return this.$('.date_entry').each(function() {
          if (!this.disabled) {
            return $(this).datetime_field({
              alwaysShowTime: true
            });
          }
        });
      };

      EditConferenceView.prototype.toggleAllUsers = function() {
        if (this.$('.all_users_checkbox').is(':checked')) {
          return $("#members_list").hide();
        } else {
          return $("#members_list").slideDown();
        }
      };

      EditConferenceView.prototype.markInvitedUsers = function() {
        return _.each(this.model.get('user_ids'), function(id) {
          return this.$("#members_list .member.user_" + id).find(":checkbox").attr('checked', true);
        });
      };

      EditConferenceView.prototype.changeLongRunning = function(e) {
        if ($(e.currentTarget).is(':checked')) {
          return $('#web_conference_duration').prop('disabled', true).val('');
        } else {
          return $('#web_conference_duration').prop('disabled', false).val($('#web_conference_duration').data('restore-value'));
        }
      };

      return EditConferenceView;

    })(DialogBaseView);
  });

}).call(this);
