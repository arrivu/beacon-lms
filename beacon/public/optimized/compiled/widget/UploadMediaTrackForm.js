(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define(["i18n!media_comments","underscore","jst/widget/UploadMediaTrackForm","vendor/mediaelement-and-player","jquery"],function(t,n,i,a,o){var r;return r=function(){function r(r,l){var d,u=this;this.mediaCommentId=r,this.video_url=l,this.onSubmit=e(this.onSubmit,this),d={languages:n.map(a.language.codes,function(e,t){return{name:e,code:t}}),video_url:this.video_url,is_amazon_url:-1!==this.video_url.search(/.mp4/)},this.$dialog=o(i(d)).appendTo("body").dialog({width:650,resizable:!1,buttons:[{"data-text-while-loading":t.t("cancel","Cancel"),text:t.t("cancel","Cancel"),click:function(){return u.$dialog.remove()}},{"class":"btn-primary","data-text-while-loading":t.t("uploading","Uploading..."),text:t.t("upload","Upload"),click:this.onSubmit}]})}return r.prototype.onSubmit=function(){var e,n=this;return e=new o.Deferred,e.fail(function(){return n.$dialog.find(".invalidInputMsg").show()}),this.$dialog.disableWhileLoading(e),this.getFileContent().fail(function(){return e.reject()}).done(function(i){var a;return a={content:i,locale:n.$dialog.find('[name="locale"]').val()},a.content&&a.locale?o.ajaxJSON("/media_objects/"+n.mediaCommentId+"/media_tracks","POST",a,function(){return e.resolve(),n.$dialog.dialog("close"),o.flashMessage(t.t("track_uploaded_successfully","Track uploaded successfully; please refresh your browser."))}):e.reject()})},r.prototype.getFileContent=function(){var e,t,n;return e=new o.Deferred,t=this.$dialog.find('input[name="content"]')[0].files[0],t?(n=new FileReader,n.onload=function(t){var n;return n=t.target.result,e.resolve(n)},n.readAsText(t)):e.reject(),e},r}()})}).call(this);