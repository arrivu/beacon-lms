(function(){var e=function(e,i){return function(){return e.apply(i,arguments)}};define(["jquery","i18n!media_comments","jqueryui/progressbar","jquery.instructure_misc_helpers"],function(i,r){var t;return t=function(){function t(){this.showConfigError=e(this.showConfigError,this),this.onFileTypeError=e(this.onFileTypeError,this)}return t.prototype.monitorUpload=function(e,i,r){return this.uploader&&this.uploader!==e&&this.resetListeners(),this.uploader=e,this.allowedMedia=i,this.showProgBar(),this.showFileDetails(r),this.uploader.addEventListener("K5.uiconfError",this.showConfigError),this.uploader.addEventListener("K5.error",this.showConfigError),this.uploader.addEventListener("K5.fileError",this.onFileTypeError),this.uploader.addEventListener("K5.progress",this.updateProgBar)},t.prototype.resetListeners=function(){return this.uploader.removeEventListener("K5.uiconfError",this.showConfigError),this.uploader.removeEventListener("K5.error",this.showConfigError),this.uploader.removeEventListener("K5.fileError",this.onFileTypeError),this.uploader.removeEventListener("K5.progress",this.updateProgBar)},t.prototype.onFileTypeError=function(e){var i;return i=e.maxFileSize>e.file.size?r.t("file_size_error","Size of %{file} is greater than the maximum %{max} allowed file size.",{file:e.file.name,max:e.maxFileSize}):r.t("file_type_error","%{file} is not an acceptable %{type} file.",{file:e.file.name,type:e.allowedMediaTypes[0]}),this.resetFileDetails(),this.showErrorMessage(i)},t.prototype.showConfigError=function(){var e;return e=r.t("errors.media_comment_installation_broken","Media comment uploading has not been set up properly. Please contact your administrator."),this.showErrorMessage(e),i("#media_upload_feedback").css("visibility","visible"),i("#audio_upload_holder").css("visibility","hidden"),i("#video_upload_holder").css("visibility","hidden"),i("#media_upload_settings").css("visibility","hidden")},t.prototype.resetFileDetails=function(){return i("#media_upload_settings").css("visibility","hidden"),i("#media_upload_title").val(""),i("#media_upload_display_title").text(""),i("#media_upload_file_size").text(i.fileSize(0)),i("#media_upload_settings .icon").attr("src","/images/file.png")},t.prototype.showFileDetails=function(e){return e?(i("#media_upload_feedback").css("visibility","hidden"),i("#media_upload_settings").css("visibility","visible"),i("#media_upload_title").val(e.name),i("#media_upload_display_title").text(e.name),i("#media_upload_file_size").text(i.fileSize(e.size)),i("#media_upload_settings .icon").attr("src","/images/file-"+this.allowedMedia[0]+".png"),i("#media_upload_submit").attr("disabled",!0).text(r.t("messages.submitting","Submitting Media File..."))):void this.resetFileDetails()},t.prototype.showErrorMessage=function(e){return this.hideProgBar(),i("#media_upload_feedback").css("visibility","visible"),i("#media_upload_feedback_text").html(e)},t.prototype.showProgBar=function(){return i("#media_upload_progress").css("visibility","visible").progressbar()},t.prototype.hideProgBar=function(){return i("#media_upload_progress").css("visibility","hidden")},t.prototype.updateProgBar=function(e){var r;return r=e.loaded/e.total*100,i("#media_upload_progress").progressbar("option","value",r)},t}()})}).call(this);