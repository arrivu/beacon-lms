define('jst/content_migrations/ProgressingContentMigration', ["compiled/handlebars_helpers","i18n!content_migrations.progressing_content_migration"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressingContentMigration'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "top-margin";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button type='button' title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration")
  },data:data},helper ? helper.call(depth0, "select_content", "Select Content", options) : helperMissing.call(depth0, "t", "select_content", "Select Content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class='btn btn-small btn-primary selectContentBtn'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration")
  },data:data},helper ? helper.call(depth0, "select_content", "Select Content", options) : helperMissing.call(depth0, "t", "select_content", "Select Content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <form class=\"selectContentDialog form-dialog\" style=\"display:none\"></form>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.migration_issues), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a id='issueText";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='showIssues' href='#issues";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' aria-controls='issues";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\n         aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration")
  },data:data},helper ? helper.call(depth0, "show_issues", "Show Issues", options) : helperMissing.call(depth0, "t", "show_issues", "Show Issues", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration")
  },data:data},helper ? helper.call(depth0, "show_issues", "Show Issues", options) : helperMissing.call(depth0, "t", "show_issues", "Show Issues", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         aria-haspopup=\"true\" aria-owns=\"issues";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <span aria-hidden='true' data-bind=\"migration_issues_count\">";
  if (helper = helpers.issuesCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issuesCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span aria-hidden='true' id=\"issuesButtonText";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-bind=\"issuesButtonText\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration")
  },data:data},helper ? helper.call(depth0, "issues_text", "issues", options) : helperMissing.call(depth0, "t", "issues_text", "issues", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n    ";
  return buffer;
  }

  buffer += "<div class=\"span3 migrationName top-margin\" tabindex=\"0\">";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"span3 sourceLink top-margin\"></div>\n<div class=\"span2 top-margin centerText\" tabindex=\"0\">"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.created_at), options)))
    + "</div>\n<div class=\"span2 top-margin rightAlign progressStatus\" tabindex=\"0\"></div>\n<div class=\"span2 changable ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.migration_issues), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.waiting_for_select), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div id=\"issues";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"migrationIssues clear\" style=\"display: none\" aria-expanded=\"false\" tabindex=\"0\"></div>\n<br />\n<hr />\n";
  return buffer;
  });
  
      
  return templates['content_migrations/ProgressingContentMigration'];
});
