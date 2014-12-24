define('jst/discussions/_deleted_entry', ["compiled/handlebars_helpers","i18n!discussions.deleted_entry"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/_deleted_entry'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "collapsable";
  }

function program3(depth0,data) {
  
  
  return "data-event=\"toggleCollapsed\"";
  }

  buffer += "<header class=\"entry-header discussion-section admin-link-hover-area ";
  if (helper = helpers.read_state) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.read_state); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " clearfix ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collapsable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collapsable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <div class=\"discussion-header-content right-of-avatar\">\n    <div class=\"discussion-header-right\">\n      <div class=\"headerBadges show-if-collapsed\"></div>\n    </div>\n    <div class=\"discussion-title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.deleted_entry"),
    'w0': ("<a %{editor_href} tabindex=\"0\">$1</a>")
  },data:data},helper ? helper.call(depth0, "deleted", "Deleted by *%{editor_name}* on %{edited_at}", options) : helperMissing.call(depth0, "t", "deleted", "Deleted by *%{editor_name}* on %{edited_at}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  </div>\n</header>\n\n";
  return buffer;
  });
  
Handlebars.registerPartial('discussions/deleted_entry', templates['discussions/_deleted_entry']);

      
  return templates['discussions/_deleted_entry'];
});
