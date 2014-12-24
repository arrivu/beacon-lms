define('jst/content_migrations/ProgressingIssues', ["compiled/handlebars_helpers","i18n!content_migrations.progressing_issues"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressingIssues'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n<ul class=\"unstyled well collectionViewItems\"></ul>\n";
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div aria-hidden=\"true\" class=\"paginatedLoadingIndicator\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_issues")
  },data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/ProgressingIssues'];
});
