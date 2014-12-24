(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,a=function(t,a){function r(){this.constructor=t}for(var i in a)e.call(a,i)&&(t[i]=a[i]);return r.prototype=a.prototype,t.prototype=new r,t.__super__=a.prototype,t};define(["i18n!profile","jquery","underscore","compiled/views/DialogBaseView","compiled/views/profiles/UploadFileView","compiled/views/profiles/TakePictureView","compiled/views/profiles/GravatarView","jst/profiles/avatarDialog","jst/profiles/avatar"],function(e,r,i,s,n,o,p,u){var c,l;return c=function(s){function c(){return this.updateDomAvatar=t(this.updateDomAvatar,this),this.saveUserAvatar=t(this.saveUserAvatar,this),this.waitAndSaveUserAvatar=t(this.waitAndSaveUserAvatar,this),this.onS3Success=t(this.onS3Success,this),this.s3Success=t(this.s3Success,this),this.onPostAvatar=t(this.onPostAvatar,this),this.postAvatar=t(this.postAvatar,this),this.onPreflight=t(this.onPreflight,this),this.updateAvatar=t(this.updateAvatar,this),l=c.__super__.constructor.apply(this,arguments)}return a(c,s),c.prototype.template=u,c.prototype.AVATAR_SIZE={h:128,w:128},c.child("uploadFileView","#upload-picture"),c.child("takePictureView","#take-picture"),c.child("gravatarView","#from-gravatar"),c.prototype.dialogOptions=function(){return{title:this.messages.selectAvatar,buttons:[{text:this.messages.cancel,click:this.cancel},{text:this.messages.selectImage,"class":"btn-primary select_button",click:this.updateAvatar}],height:500,width:600}},c.prototype.messages={selectAvatar:e.t("buttons.select_profile_picture","Select Profile Picture"),cancel:e.t("#buttons.cancel","Cancel"),selectImage:e.t("buttons.save","Save"),selectingImage:e.t("buttons.selecting_image","Selecting Image...")},c.prototype.events={"click .nav-pills a":"onNav","click .select-photo-link":"onUploadClick","change #selected-photo":"onSelectAvatar"},c.prototype.initialize=function(){return this.uploadFileView=new n({avatarSize:this.AVATAR_SIZE}),this.takePictureView=new o({avatarSize:this.AVATAR_SIZE}),this.gravatarView=new p({avatarSize:this.AVATAR_SIZE}),c.__super__.initialize.apply(this,arguments)},c.prototype.show=function(){var t=this;return this.render(),i.each(this.children,function(e){return t.listenTo(e,"ready",t.onReady)}),this.togglePane(this.$(".nav-pills a")[0]),c.__super__.show.apply(this,arguments)},c.prototype.cancel=function(){return this.teardown(),c.__super__.cancel.apply(this,arguments)},c.prototype.close=function(){return this.teardown(),r(".select_button").prop("disabled",!1).removeClass("ui-state-hover").text(this.messages.selectImage),c.__super__.close.apply(this,arguments)},c.prototype.getImage=function(){return(this.currentView||this.$(".avatar-content > div:first-child").data("view")).getImage()},c.prototype.updateAvatar=function(){var t;return this.disableSelectButton(),(null!=(t=this.currentView)?t.updateAvatar:void 0)?this.viewUpdateAvatar():this.imageUpdateAvatar()},c.prototype.disableSelectButton=function(){return r(".select_button").prop("disabled",!0).text(this.messages.selectingImage)},c.prototype.viewUpdateAvatar=function(){var t=this;return this.currentView.updateAvatar().then(function(e){return t.updateDomAvatar(e.avatar_url)})},c.prototype.imageUpdateAvatar=function(){return r.when(this.getImage(),this.preflightRequest()).then(this.onPreflight)},c.prototype.preflightRequest=function(){return r.post("/files/pending",{name:"profile.jpg",format:"text",no_redirect:!0,"attachment[duplicate_handling]":"overwrite","attachment[folder_id]":ENV.folder_id,"attachment[filename]":"profile.jpg","attachment[context_code]":"user_"+ENV.current_user_id})},c.prototype.onPreflight=function(t,e){var a;return this.image=t,a=e[0],this.postAvatar(a).then(i.partial(this.onPostAvatar,a))},c.prototype.postAvatar=function(t){var e,a,i,s,n,o;a=this.image,s=new FormData,delete this.image,o=t.upload_params;for(i in o)n=o[i],s.append(i,n);return s.append(t.file_param,a,"profile.jpg"),e=t.success_url?"xml":"json",r.ajax(t.upload_url,{contentType:!1,data:s,dataType:e,processData:!1,type:"POST"})},c.prototype.onPostAvatar=function(t,e){return t.success_url?this.s3Success(t,e).then(this.onS3Success):this.waitAndSaveUserAvatar(e.avatar.token,e.avatar.url)},c.prototype.s3Success=function(t,e){var a;return a=r(e),r.getJSON(t.success_url,{bucket:a.find("Bucket").text(),key:a.find("Key").text(),etag:a.find("ETag").text()})},c.prototype.onS3Success=function(t){return this.waitAndSaveUserAvatar(t.avatar.token,t.avatar.url)},c.prototype.waitAndSaveUserAvatar=function(t,e){var a=this;return r.getJSON("/api/v1/users/self/avatars").then(function(r){var s;return s=i.find(r,function(e){return e.token===t}),s?a.saveUserAvatar(t,e):window.setTimeout(function(){return a.waitAndSaveUserAvatar(t,e)},100)})},c.prototype.saveUserAvatar=function(t,e){return r.ajax("/api/v1/users/self",{data:{"user[avatar][token]":t},dataType:"json",type:"PUT"}).then(i.partial(this.updateDomAvatar,e))},c.prototype.updateDomAvatar=function(t){return r(".profile_pic_link, .profile-link").css("background-image","url('"+t+"')"),this.close()},c.prototype.onNav=function(t){return t.preventDefault(),this.togglePane(t.target)},c.prototype.togglePane=function(t){var e,a,i;return a=this.$(t).parent(),e=this.$(t.getAttribute("href")),a.siblings().removeClass("active"),a.addClass("active"),this.teardown(),r(".select_button").prop("disabled",!0),this.$(".avatar-content div").removeClass("active"),null!=(i=e.addClass("active").data("view"))&&i.setup(),this.currentView=e.data("view")},c.prototype.onReady=function(t){return null==t&&(t=!0),r(".select_button").prop("disabled",!t)},c.prototype.teardown=function(){return i.each(this.children,function(t){return t.teardown()})},c.prototype.toJSON=function(){var t,e;return t=!!window.FileReader,e=!!(navigator.getUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.webkitGetUserMedia),{hasFileReader:t,hasGetUserMedia:e}},c}(s)})}).call(this);