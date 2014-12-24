define('jst/widget/UploadMediaTrackForm', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!widget.upload_media_track_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['widget/UploadMediaTrackForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p class=\"alert alert-info\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "upload_media_track_info", "*Instructions:* Follow these three steps to create a subtitle file for your video, then upload it here. If you already have an SRT subtitle file you can skip to step 3.", options) : helperMissing.call(depth0, "t", "upload_media_track_info", "*Instructions:* Follow these three steps to create a subtitle file for your video, then upload it here. If you already have an SRT subtitle file you can skip to step 3.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div>\n        <p class=\"uploadMediaTrackFormDescription\">\n        <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_step1_label", "Step 1:", options) : helperMissing.call(depth0, "t", "upload_media_track_form_step1_label", "Step 1:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_description_1", "Copy this video url:", options) : helperMissing.call(depth0, "t", "upload_media_track_form_description_1", "Copy this video url:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </p>\n        <div class=\"content-callout media-track-video-url\">";
  if (helper = helpers.video_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.video_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n      </div>\n\n      <div>\n        <p class=\"uploadMediaTrackFormDescription\">\n        <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_step2_label", "Step 2:", options) : helperMissing.call(depth0, "t", "upload_media_track_form_step2_label", "Step 2:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_description_2", "Create a subtitle file by clicking this link and following the instructions.", options) : helperMissing.call(depth0, "t", "upload_media_track_form_description_2", "Create a subtitle file by clicking this link and following the instructions.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </p>\n\n        <div class=\"content-box media-track-content-box\">\n          <form action=\"http://www.amara.org/en/videos/create/\" method=\"POST\" target=\"_blank\" >\n            <input type=\"hidden\" name=\"video_url\" value=\"";
  if (helper = helpers.video_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.video_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <button class=\"btn btn-small media-track-form-button\" type=\"submit\" value=\"Begin\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "media_track_form_button", "Go to subtitle creation tool", options) : helperMissing.call(depth0, "t", "media_track_form_button", "Go to subtitle creation tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          </form>\n        </div>\n      </div>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_step3_label", "Step 3:", options) : helperMissing.call(depth0, "t", "upload_media_track_form_step3_label", "Step 3:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form"),
    'w0': ("<a target=\"_blank\" href=\"http://dev.w3.org/html5/webvtt/\">$1</a>")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_description", "Once you have a subtitle track in either the SRT or *WebVTT* format, you can upload it here.", options) : helperMissing.call(depth0, "t", "upload_media_track_form_description", "Once you have a subtitle track in either the SRT or *WebVTT* format, you can upload it here.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form"),
    'w0': ("<a target=\"_blank\" href=\"http://dev.w3.org/html5/webvtt/\">$1</a>")
  },data:data},helper ? helper.call(depth0, "upload_media_track_form_description_3", "Upload a subtitle track in either the SRT or *WebVTT* format.", options) : helperMissing.call(depth0, "t", "upload_media_track_form_description_3", "Upload a subtitle track in either the SRT or *WebVTT* format.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <option value=\"";
  if (helper = helpers.code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

  buffer += "<div title=\"Create/Add Subtitles\" class=\"uploadMediaTrackForm bootstrap-form form-horizontal\">\n  \n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_amazon_url), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"content-box border border-trbl border-round pad-box\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_amazon_url), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div>\n\n      <p class=\"uploadMediaTrackFormDescription\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_amazon_url), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n\n      <div class=\"content-box media-track-content-box\">\n        <div class=\"invalidInputMsg alert alert-error\" style=\"display:none;\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "error_message", "*Error:* You must choose a language and a valid track file.", options) : helperMissing.call(depth0, "t", "error_message", "*Error:* You must choose a language and a valid track file.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"umtf_locale\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "language", "Language", options) : helperMissing.call(depth0, "t", "language", "Language", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <select name=\"locale\" id=\"umtf_locale\">\n              <option value=''>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "choose_a_language", "--Choose a Language--", options) : helperMissing.call(depth0, "t", "choose_a_language", "--Choose a Language--", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.languages), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n          </div>\n        </div><!-- control group end -->\n\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"umtf_content\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("widget.upload_media_track_form")
  },data:data},helper ? helper.call(depth0, "file", "File", options) : helperMissing.call(depth0, "t", "file", "File", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n          <div class=\"controls\">\n            <input class=\"input-file\" id=\"umtf_content\" name=\"content\" type=\"file\">\n          </div>\n        </div><!-- control group end -->\n      </div><!-- content-box end -->\n    </div><!-- media track step -->\n   </div><!-- end border border-tbl -->\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('widget/UploadMediaTrackForm', ".uploadMediaTrackForm .media-track-video-url{background-color:#F4F3EE;display:block;text-align:center;padding:10px;margin-bottom:10px;}.uploadMediaTrackForm .media-track-content-box{padding:10px;margin:0 auto;display:block;margin-bottom:10px;}.uploadMediaTrackForm .media-track-content-box form{padding:0px;}.uploadMediaTrackForm .media-track-form-button{padding:10px;display:block;margin:0 auto;width:100%;}");

  return templates['widget/UploadMediaTrackForm'];
});
