define('jst/discussions/_reply_form', ["compiled/handlebars_helpers","i18n!discussions.reply_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_reply_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"discussion-entry-reply-area reply-box-container hide-if-collapsed hide-if-replying\">\n    <div class=\"notification\" data-bind=\"notification\"></div>\n    <a class=\"discussion-reply-action discussion-reply-box\" data-event=\"addReply\" href=\"#\">\n      <i class=\"icon-replied\"></i>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "write_a_reply", "Reply", options) : helperMissing.call(depth0, "t", "write_a_reply", "Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "root_";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a href=\"#\" class=\"discussion-reply-add-attachment discussion-reply-action icon-paperclip\"\n             data-event=\"addReplyAttachment\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "attach_file", "Attach", options) : helperMissing.call(depth0, "t", "attach_file", "Attach", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showBoxReplyLink), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class='discussion-entry-reply-area hide-if-collapsed show-if-replying'>\n  <form class=\"discussion-reply-form\">\n    <div class=\"toggle-wrapper\">\n      <a href=\"#\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_html", "HTML Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_html", "HTML Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n      <a href=\"#\" style=\"display:none;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_rich_text", "Rich Content Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_rich_text", "Rich Content Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n\n    <textarea class=\"reply-textarea\"\n              id=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.root), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "reply_message_for_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></textarea>\n\n    <div class=\"clearfix\">\n      <div class=\"discussion-reply-buttons\">\n        <a href=\"javascript:\" class=\"cancel_button btn btn-small\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        <button class=\"btn btn-primary btn-small\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.reply_form")
  },data:data},helper ? helper.call(depth0, "post_reply", "Post Reply", options) : helperMissing.call(depth0, "t", "post_reply", "Post Reply", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n\n      <div class=\"discussion-reply-attachments-container\">\n        <ul class=\"discussion-reply-attachments\"></ul>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canAttach), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </form>\n</div>\n";
  return buffer;
  });
  
Handlebars.registerPartial('discussions/reply_form', templates['discussions/_reply_form']);

      
  return templates['discussions/_reply_form'];
});
