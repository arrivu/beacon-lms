(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'compiled/views/profiles/AvatarUploadBaseView', 'jst/profiles/gravatarView', 'jquery.ajaxJSON', 'vendor/md5'], function($, AvatarUploadBaseView, template) {
    var GravatarView, _ref;

    return GravatarView = (function(_super) {
      __extends(GravatarView, _super);

      function GravatarView() {
        _ref = GravatarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GravatarView.optionProperty('avatarSize');

      GravatarView.prototype.template = template;

      GravatarView.prototype.events = {
        'click .gravatar-preview-btn': 'onPreview',
        'keydown .gravatar-preview-input': 'onInputKeyDown'
      };

      GravatarView.prototype.els = {
        '.gravatar-preview-image': '$gravatarPreviewImage',
        '.gravatar-preview-input': '$gravatarPreviewInput'
      };

      GravatarView.prototype.onPreview = function(e) {
        e.preventDefault();
        return this._updatePreviewFromInput();
      };

      GravatarView.prototype.onInputKeyDown = function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          return this._updatePreviewFromInput();
        }
      };

      GravatarView.prototype.setup = function() {
        var primaryEmail, _ref1;

        primaryEmail = (_ref1 = ENV.PROFILE) != null ? _ref1.primary_email : void 0;
        if (primaryEmail) {
          this.$gravatarPreviewInput.val(primaryEmail);
          return this._updatePreviewFromInput();
        }
      };

      GravatarView.prototype.updateAvatar = function() {
        var updateParams, url;

        url = '/api/v1/users/self';
        updateParams = {
          'user[avatar][url]': this._gravatarUrl(this._gravatarHashFromInput(), this.avatarSize.w)
        };
        return $.ajaxJSON(url, 'PUT', updateParams);
      };

      GravatarView.prototype.getImage = function() {
        throw "GravatarView does not support getImage()";
      };

      GravatarView.prototype._updatePreviewFromInput = function() {
        var hash;

        hash = this._gravatarHashFromInput();
        return this._setGravatarPreview(this._gravatarUrl(hash));
      };

      GravatarView.prototype._gravatarHashFromInput = function() {
        var email;

        email = this._prepareEmail(this.$gravatarPreviewInput.val());
        return CryptoJS.MD5(email);
      };

      GravatarView.prototype._gravatarUrl = function(hash, size, fallback) {
        if (size == null) {
          size = 200;
        }
        if (fallback == null) {
          fallback = "identicon";
        }
        return "https://secure.gravatar.com/avatar/" + hash + "?s=" + size + "&d=" + fallback;
      };

      GravatarView.prototype._setGravatarPreview = function(url) {
        this.$gravatarPreviewImage.attr("src", url);
        return this.trigger('ready');
      };

      GravatarView.prototype._prepareEmail = function(email) {
        return email.trim().toLowerCase();
      };

      return GravatarView;

    })(AvatarUploadBaseView);
  });

}).call(this);
