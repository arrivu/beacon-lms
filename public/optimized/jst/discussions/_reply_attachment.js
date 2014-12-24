define('jst/discussions/_reply_attachment', ["compiled/handlebars_helpers","i18n!discussions.reply_attachment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_reply_attachment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li>\n  <label class=\"screenreader-only\" for=\"attachment_";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_attachment")
  },data:data},helper ? helper.call(depth0, "attachment_label", "Attachment", options) : helperMissing.call(depth0, "t", "attachment_label", "Attachment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  <input name=\"attachment\" type=\"file\" id=\"attachment_";
  if (helper = helpers.uniqid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <a href=\"#\" class='discussion-reply-action' data-event=\"removeReplyAttachment\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_attachment")
  },data:data},helper ? helper.call(depth0, "remove_attachment", "remove", options) : helperMissing.call(depth0, "t", "remove_attachment", "remove", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n</li>\n";
  return buffer;
  });
  
Handlebars.registerPartial('discussions/reply_attachment', templates['discussions/_reply_attachment']);

      
  return templates['discussions/_reply_attachment'];
});
