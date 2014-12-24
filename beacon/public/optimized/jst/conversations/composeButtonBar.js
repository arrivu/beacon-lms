define('jst/conversations/composeButtonBar', ["compiled/handlebars_helpers","i18n!conversations.compose_button_bar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/composeButtonBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"ui-dialog-buttonset attachments\">\n  <label for=\"file_input\" class=\"ui-button ui-widget ui-state-default ui-corner-all attach-file\"\n          type=\"button\" role=\"button\"\n          title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.compose_button_bar")
  },data:data},helper ? helper.call(depth0, "titles.add_attachment", "Add an attachment", options) : helperMissing.call(depth0, "t", "titles.add_attachment", "Add an attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"ui-button-text\">\n      <i class=\"icon-paperclip\"></i>\n      <span class=\"screenreader-only\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.compose_button_bar")
  },data:data},helper ? helper.call(depth0, "titles.add_attachment", "Add an attachment", options) : helperMissing.call(depth0, "t", "titles.add_attachment", "Add an attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </span>\n  </label>\n\n  <button class=\"ui-button ui-widget ui-state-default ui-corner-all attach-media\"\n          type=\"button\"\n          title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.compose_button_bar")
  },data:data},helper ? helper.call(depth0, "titles.record_media_comment", "Record an audio or video comment", options) : helperMissing.call(depth0, "t", "titles.record_media_comment", "Record an audio or video comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <span class=\"ui-button-text\">\n      <i class=\"icon-media\"></i>\n      <span class=\"screenreader-only\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.compose_button_bar")
  },data:data},helper ? helper.call(depth0, "titles.record_media_comment", "Record an audio or video comment", options) : helperMissing.call(depth0, "t", "titles.record_media_comment", "Record an audio or video comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    </span>\n  </button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['conversations/composeButtonBar'];
});
