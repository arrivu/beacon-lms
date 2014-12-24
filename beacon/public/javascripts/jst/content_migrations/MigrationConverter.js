define('jst/content_migrations/MigrationConverter', ["compiled/handlebars_helpers","i18n!content_migrations.migration_converter"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/MigrationConverter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" >";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n      ";
  return buffer;
  }

  buffer += "<h1>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.migration_converter")
  },data:data},helper ? helper.call(depth0, "header", "Import Content", options) : helperMissing.call(depth0, "t", "header", "Import Content", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n<div class=\"control-group\">\n  <label class=\"control-label\" for=\"chooseMigrationConverter\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.migration_converter")
  },data:data},helper ? helper.call(depth0, "import_from_label", "Content Type", options) : helperMissing.call(depth0, "t", "import_from_label", "Content Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n  <div class=\"controls\">\n    <select id=\"chooseMigrationConverter\" class=\"span3\">\n      <option value=\"none\" >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.migration_converter")
  },data:data},helper ? helper.call(depth0, "default_option", "Select One", options) : helperMissing.call(depth0, "t", "default_option", "Select One", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </div>\n</div>\n\n<div id=\"converter\" aria-live=\"assertive\" aria-relevant=\"additions text\" aria-atomic=\"true\"></div>\n\n<div class=\"form-container\" style=\"display: none\">\n  <div class=\"controls control-height\">\n    <input class=\"cancelBtn btn btn-small\" type=\"button\" value=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.migration_converter")
  },data:data},helper ? helper.call(depth0, "cancel_migration", "Cancel", options) : helperMissing.call(depth0, "t", "cancel_migration", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">&nbsp;&nbsp;<input id=\"submitMigration\" type=\"submit\" value=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.migration_converter")
  },data:data},helper ? helper.call(depth0, "import_migration", "Import", options) : helperMissing.call(depth0, "t", "import_migration", "Import", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"btn btn-small btn-primary span2\" />\n  </div>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['content_migrations/MigrationConverter'];
});
