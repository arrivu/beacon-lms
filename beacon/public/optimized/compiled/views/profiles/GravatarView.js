(function(){var r={}.hasOwnProperty,t=function(t,e){function a(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return a.prototype=e.prototype,t.prototype=new a,t.__super__=e.prototype,t};define(["jquery","compiled/views/profiles/AvatarUploadBaseView","jst/profiles/gravatarView","jquery.ajaxJSON","vendor/md5"],function(r,e,a){var o,n;return o=function(e){function o(){return n=o.__super__.constructor.apply(this,arguments)}return t(o,e),o.optionProperty("avatarSize"),o.prototype.template=a,o.prototype.events={"click .gravatar-preview-btn":"onPreview","keydown .gravatar-preview-input":"onInputKeyDown"},o.prototype.els={".gravatar-preview-image":"$gravatarPreviewImage",".gravatar-preview-input":"$gravatarPreviewInput"},o.prototype.onPreview=function(r){return r.preventDefault(),this._updatePreviewFromInput()},o.prototype.onInputKeyDown=function(r){return 13===r.keyCode?(r.preventDefault(),this._updatePreviewFromInput()):void 0},o.prototype.setup=function(){var r,t;return r=null!=(t=ENV.PROFILE)?t.primary_email:void 0,r?(this.$gravatarPreviewInput.val(r),this._updatePreviewFromInput()):void 0},o.prototype.updateAvatar=function(){var t,e;return e="/api/v1/users/self",t={"user[avatar][url]":this._gravatarUrl(this._gravatarHashFromInput(),this.avatarSize.w)},r.ajaxJSON(e,"PUT",t)},o.prototype.getImage=function(){throw"GravatarView does not support getImage()"},o.prototype._updatePreviewFromInput=function(){var r;return r=this._gravatarHashFromInput(),this._setGravatarPreview(this._gravatarUrl(r))},o.prototype._gravatarHashFromInput=function(){var r;return r=this._prepareEmail(this.$gravatarPreviewInput.val()),CryptoJS.MD5(r)},o.prototype._gravatarUrl=function(r,t,e){return null==t&&(t=200),null==e&&(e="identicon"),"https://secure.gravatar.com/avatar/"+r+"?s="+t+"&d="+e},o.prototype._setGravatarPreview=function(r){return this.$gravatarPreviewImage.attr("src",r),this.trigger("ready")},o.prototype._prepareEmail=function(r){return r.trim().toLowerCase()},o}(e)})}).call(this);