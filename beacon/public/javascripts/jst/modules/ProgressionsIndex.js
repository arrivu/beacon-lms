define('jst/modules/ProgressionsIndex', ["compiled/handlebars_helpers","i18n!modules.progressions_index"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ProgressionsIndex'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n      <ul class=\"collectionViewItems\"></ul>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.atLeastOnePageFetched), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progressions_index")
  },data:data},helper ? helper.call(depth0, "no_students_found", "No students were found", options) : helperMissing.call(depth0, "t", "no_students_found", "No students were found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

  buffer += "<h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progressions_index")
  },data:data},helper ? helper.call(depth0, "progression_header", "Module Progression", options) : helperMissing.call(depth0, "t", "progression_header", "Module Progression", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n<div class=\"row-fluid\">\n  <div id=\"progression_modules\" class=\"span9\" aria-busy=\"true\" aria-live=\"polite\" aria-relevant=\"additions\" aria-atomic=\"false\">\n  </div>\n  <div id=\"progression_students\" class=\"span3\" aria-busy=\"true\">\n    <div class=\"header\">\n      <h3>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progressions_index")
  },data:data},helper ? helper.call(depth0, "student_progress", "Student Progress", options) : helperMissing.call(depth0, "t", "student_progress", "Student Progress", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n      <a title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progressions_index")
  },data:data},helper ? helper.call(depth0, "back_to_modules", "Back to Modules Page", options) : helperMissing.call(depth0, "t", "back_to_modules", "Back to Modules Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"";
  if (helper = helpers.modules_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modules_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <i class=\"icon-x standalone-icon\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progressions_index")
  },data:data},helper ? helper.call(depth0, "back_to_modules", "Back to Modules Page", options) : helperMissing.call(depth0, "t", "back_to_modules", "Back to Modules Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });
  
      
  return templates['modules/ProgressionsIndex'];
});
