define('jst/conversations/addAttachment', ["compiled/handlebars_helpers","i18n!conversations.add_attachment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/addAttachment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<li class=\"attachment clearfix\" tabindex=\"0\"\n    title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.add_attachment")
  },data:data},helper ? helper.call(depth0, "titles.attachment", "File to attach", options) : helperMissing.call(depth0, "t", "titles.attachment", "File to attach", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <a href=\"#\"\n         class=\"remove_link icon-end black pull-right\"\n         title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.add_attachment")
  },data:data},helper ? helper.call(depth0, "titles.remove_attachment", "Remove attachment", options) : helperMissing.call(depth0, "t", "titles.remove_attachment", "Remove attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <span class=\"screenreader-only\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.add_attachment")
  },data:data},helper ? helper.call(depth0, "titles.remove_attachment", "Remove attachment", options) : helperMissing.call(depth0, "t", "titles.remove_attachment", "Remove attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n      </a>\n      <div class=\"attachment-icon\" aria-hidden=\"true\">\n        <i class=\"icon-paperclip\"></i>\n      </div>\n      <div class=\"attachment-name-clip\"></div>\n      <div class=\"attachment-name\"></div>\n      <input id=\"file_input\" type=\"file\"\n             class=\"file_input\"\n             name=\"attachments[]\">\n  </div>\n</li>\n";
  return buffer;
  });
  
      
  return templates['conversations/addAttachment'];
});
