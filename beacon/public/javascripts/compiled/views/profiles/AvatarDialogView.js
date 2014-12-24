(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!profile', 'jquery', 'underscore', 'compiled/views/DialogBaseView', 'compiled/views/profiles/UploadFileView', 'compiled/views/profiles/TakePictureView', 'compiled/views/profiles/GravatarView', 'jst/profiles/avatarDialog', 'jst/profiles/avatar'], function(I18n, $, _, DialogBaseView, UploadFileView, TakePictureView, GravatarView, template, avatarTemplate) {
    var AvatarDialogView, _ref;

    return AvatarDialogView = (function(_super) {
      __extends(AvatarDialogView, _super);

      function AvatarDialogView() {
        this.updateDomAvatar = __bind(this.updateDomAvatar, this);
        this.saveUserAvatar = __bind(this.saveUserAvatar, this);
        this.waitAndSaveUserAvatar = __bind(this.waitAndSaveUserAvatar, this);
        this.onS3Success = __bind(this.onS3Success, this);
        this.s3Success = __bind(this.s3Success, this);
        this.onPostAvatar = __bind(this.onPostAvatar, this);
        this.postAvatar = __bind(this.postAvatar, this);
        this.onPreflight = __bind(this.onPreflight, this);
        this.updateAvatar = __bind(this.updateAvatar, this);        _ref = AvatarDialogView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AvatarDialogView.prototype.template = template;

      AvatarDialogView.prototype.AVATAR_SIZE = {
        h: 128,
        w: 128
      };

      AvatarDialogView.child('uploadFileView', '#upload-picture');

      AvatarDialogView.child('takePictureView', '#take-picture');

      AvatarDialogView.child('gravatarView', '#from-gravatar');

      AvatarDialogView.prototype.dialogOptions = function() {
        return {
          title: this.messages.selectAvatar,
          buttons: [
            {
              text: this.messages.cancel,
              click: this.cancel
            }, {
              text: this.messages.selectImage,
              "class": 'btn-primary select_button',
              click: this.updateAvatar
            }
          ],
          height: 500,
          width: 600
        };
      };

      AvatarDialogView.prototype.messages = {
        selectAvatar: I18n.t('buttons.select_profile_picture', 'Select Profile Picture'),
        cancel: I18n.t('#buttons.cancel', 'Cancel'),
        selectImage: I18n.t('buttons.save', 'Save'),
        selectingImage: I18n.t('buttons.selecting_image', 'Selecting Image...')
      };

      AvatarDialogView.prototype.events = {
        'click .nav-pills a': 'onNav',
        'click .select-photo-link': 'onUploadClick',
        'change #selected-photo': 'onSelectAvatar'
      };

      AvatarDialogView.prototype.initialize = function() {
        this.uploadFileView = new UploadFileView({
          avatarSize: this.AVATAR_SIZE
        });
        this.takePictureView = new TakePictureView({
          avatarSize: this.AVATAR_SIZE
        });
        this.gravatarView = new GravatarView({
          avatarSize: this.AVATAR_SIZE
        });
        return AvatarDialogView.__super__.initialize.apply(this, arguments);
      };

      AvatarDialogView.prototype.show = function() {
        var _this = this;

        this.render();
        _.each(this.children, function(child) {
          return _this.listenTo(child, 'ready', _this.onReady);
        });
        this.togglePane(this.$('.nav-pills a')[0]);
        return AvatarDialogView.__super__.show.apply(this, arguments);
      };

      AvatarDialogView.prototype.cancel = function() {
        this.teardown();
        return AvatarDialogView.__super__.cancel.apply(this, arguments);
      };

      AvatarDialogView.prototype.close = function() {
        this.teardown();
        $('.select_button').prop('disabled', false).removeClass('ui-state-hover').text(this.messages.selectImage);
        return AvatarDialogView.__super__.close.apply(this, arguments);
      };

      AvatarDialogView.prototype.getImage = function() {
        return (this.currentView || this.$('.avatar-content > div:first-child').data('view')).getImage();
      };

      AvatarDialogView.prototype.updateAvatar = function() {
        var _ref1;

        this.disableSelectButton();
        if ((_ref1 = this.currentView) != null ? _ref1.updateAvatar : void 0) {
          return this.viewUpdateAvatar();
        } else {
          return this.imageUpdateAvatar();
        }
      };

      AvatarDialogView.prototype.disableSelectButton = function() {
        return $('.select_button').prop('disabled', true).text(this.messages.selectingImage);
      };

      AvatarDialogView.prototype.viewUpdateAvatar = function() {
        var _this = this;

        return this.currentView.updateAvatar().then(function(response) {
          return _this.updateDomAvatar(response.avatar_url);
        });
      };

      AvatarDialogView.prototype.imageUpdateAvatar = function() {
        return $.when(this.getImage(), this.preflightRequest()).then(this.onPreflight);
      };

      AvatarDialogView.prototype.preflightRequest = function() {
        return $.post('/files/pending', {
          name: 'profile.jpg',
          format: 'text',
          no_redirect: true,
          'attachment[duplicate_handling]': 'overwrite',
          'attachment[folder_id]': ENV.folder_id,
          'attachment[filename]': 'profile.jpg',
          'attachment[context_code]': 'user_' + ENV.current_user_id
        });
      };

      AvatarDialogView.prototype.onPreflight = function(image, response) {
        var preflightResponse;

        this.image = image;
        preflightResponse = response[0];
        return this.postAvatar(preflightResponse).then(_.partial(this.onPostAvatar, preflightResponse));
      };

      AvatarDialogView.prototype.postAvatar = function(preflightResponse) {
        var dataType, image, k, req, v, _ref1;

        image = this.image;
        req = new FormData;
        delete this.image;
        _ref1 = preflightResponse.upload_params;
        for (k in _ref1) {
          v = _ref1[k];
          req.append(k, v);
        }
        req.append(preflightResponse.file_param, image, 'profile.jpg');
        dataType = preflightResponse.success_url ? 'xml' : 'json';
        return $.ajax(preflightResponse.upload_url, {
          contentType: false,
          data: req,
          dataType: dataType,
          processData: false,
          type: 'POST'
        });
      };

      AvatarDialogView.prototype.onPostAvatar = function(preflightResponse, postAvatarResponse) {
        if (preflightResponse.success_url) {
          return this.s3Success(preflightResponse, postAvatarResponse).then(this.onS3Success);
        } else {
          return this.waitAndSaveUserAvatar(postAvatarResponse.avatar.token, postAvatarResponse.avatar.url);
        }
      };

      AvatarDialogView.prototype.s3Success = function(preflightResponse, s3Response) {
        var $s3;

        $s3 = $(s3Response);
        return $.getJSON(preflightResponse.success_url, {
          bucket: $s3.find('Bucket').text(),
          key: $s3.find('Key').text(),
          etag: $s3.find('ETag').text()
        });
      };

      AvatarDialogView.prototype.onS3Success = function(response) {
        return this.waitAndSaveUserAvatar(response.avatar.token, response.avatar.url);
      };

      AvatarDialogView.prototype.waitAndSaveUserAvatar = function(token, url) {
        var _this = this;

        return $.getJSON('/api/v1/users/self/avatars').then(function(avatarList) {
          var processedAvatar;

          processedAvatar = _.find(avatarList, function(avatar) {
            return avatar.token === token;
          });
          if (processedAvatar) {
            return _this.saveUserAvatar(token, url);
          } else {
            return window.setTimeout((function() {
              return _this.waitAndSaveUserAvatar(token, url);
            }), 100);
          }
        });
      };

      AvatarDialogView.prototype.saveUserAvatar = function(token, url) {
        return $.ajax('/api/v1/users/self', {
          data: {
            'user[avatar][token]': token
          },
          dataType: 'json',
          type: 'PUT'
        }).then(_.partial(this.updateDomAvatar, url));
      };

      AvatarDialogView.prototype.updateDomAvatar = function(url) {
        $('.profile_pic_link, .profile-link').css('background-image', "url('" + url + "')");
        return this.close();
      };

      AvatarDialogView.prototype.onNav = function(e) {
        e.preventDefault();
        return this.togglePane(e.target);
      };

      AvatarDialogView.prototype.togglePane = function(link) {
        var $content, $target, _ref1;

        $target = this.$(link).parent();
        $content = this.$(link.getAttribute('href'));
        $target.siblings().removeClass('active');
        $target.addClass('active');
        this.teardown();
        $('.select_button').prop('disabled', true);
        this.$('.avatar-content div').removeClass('active');
        if ((_ref1 = $content.addClass('active').data('view')) != null) {
          _ref1.setup();
        }
        return this.currentView = $content.data('view');
      };

      AvatarDialogView.prototype.onReady = function(ready) {
        if (ready == null) {
          ready = true;
        }
        return $('.select_button').prop('disabled', !ready);
      };

      AvatarDialogView.prototype.teardown = function() {
        return _.each(this.children, function(child) {
          return child.teardown();
        });
      };

      AvatarDialogView.prototype.toJSON = function() {
        var hasFileReader, hasUserMedia;

        hasFileReader = !!window.FileReader;
        hasUserMedia = !!(navigator.getUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.webkitGetUserMedia);
        return {
          hasFileReader: hasFileReader,
          hasGetUserMedia: hasUserMedia
        };
      };

      return AvatarDialogView;

    })(DialogBaseView);
  });

}).call(this);
