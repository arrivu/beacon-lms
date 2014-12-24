define('jst/content_migrations/ProgressingContentMigrationCollection', ["compiled/handlebars_helpers","i18n!content_migrations.progressing_content_migration_collection"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/ProgressingContentMigrationCollection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n<ul class=\"unstyled collectionViewItems row-fluid\"></ul>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<p>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration_collection")
  },data:data},helper ? helper.call(depth0, "no_items", "No jobs have been queued", options) : helperMissing.call(depth0, "t", "no_items", "No jobs have been queued", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>\n";
  return buffer;
  }

  buffer += "<h2><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.progressing_content_migration_collection")
  },data:data},helper ? helper.call(depth0, "progress_label", "Current Jobs", options) : helperMissing.call(depth0, "t", "progress_label", "Current Jobs", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></h2>\n<hr>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['content_migrations/ProgressingContentMigrationCollection'];
});
