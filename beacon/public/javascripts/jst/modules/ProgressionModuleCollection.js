define('jst/modules/ProgressionModuleCollection', ["compiled/handlebars_helpers","i18n!modules.progression_module_collection"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ProgressionModuleCollection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n    <ul class=\"collectionViewItems\"></ul>\n  ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.atLeastOnePageFetched), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_collection")
  },data:data},helper ? helper.call(depth0, "no_modules_found", "No modules were found", options) : helperMissing.call(depth0, "t", "no_modules_found", "No modules were found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<h2 id=\"student_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.student)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_header\" class=\"screenreader-only\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_collection")
  },data:data},helper ? helper.call(depth0, "module_progress_for_student", "Module Progress for %{student.name}", options) : helperMissing.call(depth0, "t", "module_progress_for_student", "Module Progress for %{student.name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n<h2 class=\"student-header\" aria-hidden=\"true\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_collection"),
    'w0': ("<a href='%{studentUrl}'>$1</a>")
  },data:data},helper ? helper.call(depth0, "module_progress_for", "Module Progress for *%{student.name}*", options) : helperMissing.call(depth0, "t", "module_progress_for", "Module Progress for *%{student.name}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n<div class=\"module-progressions\">\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
  
      
  return templates['modules/ProgressionModuleCollection'];
});
