define('jst/discussions/results_entry', ["compiled/handlebars_helpers","i18n!discussions.results_entry","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/results_entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-bypass";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "unknown";
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  return buffer;
  }

function program8(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program10(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.results_entry")
  },data:data},helper ? helper.call(depth0, "unknown_author", "Unknown Author", options) : helperMissing.call(depth0, "t", "unknown_author", "Unknown Author", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"discussion-fyi\">This comment was edited by <a ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.editor)),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.editor)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></div>\n      ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.editor)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"comment_attachments\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\""
    + escapeExpression((helper = helpers.mimeClass || (depth0 && depth0.mimeClass),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0['content-type']), options) : helperMissing.call(depth0, "mimeClass", (depth0 && depth0['content-type']), options)))
    + "\" title=\"";
  if (helper = helpers.filename) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.filename); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></div>\n          ";
  return buffer;
  }

  buffer += "<article class=\"discussion_entry\">\n  <a href=\"#\"\n     class=\"discussion-read-state-btn\"\n     role=\"button\"\n     title=\"\"\n     data-tooltip='{ \"position\": \"top\", \"collision\": \"none\" }'\n     data-event=\"toggleRead\">\n    <div class=\"discussion-read-state tooltip data-tooltip\"></div>\n  </a>\n  <div class=\"entry-content\">\n    <header class=\"entry-header discussion-section\">\n      ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div class=\"discussion-header-content right-of-avatar\">\n        <div class=\"discussion-header-right\">\n          <div class=\"discussion-title\">\n            <a ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.results_entry")
  },data:data},helper ? helper.call(depth0, "authors_name", "Author's name", options) : helperMissing.call(depth0, "t", "authors_name", "Author's name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"author\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          </div>\n          <div class=\"discussion-pubdate hide-if-collapsed\">"
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{
    'pubdate': (true),
    'contextSensitive': (true)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.updated_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.updated_at), options)))
    + "</div>\n        </div>\n      </div>\n    </header>\n    <div class=\"discussion-section message_wrapper\">\n      <div class=\"message user_content\">"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.message), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.message), options)))
    + "</div>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editor), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attachments), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"entry-controls\">\n      <a href=\"#entry-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"viewInDiscussion\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.results_entry")
  },data:data},helper ? helper.call(depth0, "view_in_discussion", "View in discussion", options) : helperMissing.call(depth0, "t", "view_in_discussion", "View in discussion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </div>\n  </div>\n</article>\n";
  return buffer;
  });
  
      
  return templates['discussions/results_entry'];
});
