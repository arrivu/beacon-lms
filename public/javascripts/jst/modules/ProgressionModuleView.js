define('jst/modules/ProgressionModuleView', ["compiled/handlebars_helpers","i18n!modules.progression_module_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ProgressionModuleView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "no_subtitle";
  }

function program3(depth0,data) {
  
  
  return "completed";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"subtitle\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_view")
  },data:data},helper ? helper.call(depth0, "items_below", "Items to complete below", options) : helperMissing.call(depth0, "t", "items_below", "Items to complete below", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "<i class=\"icon-check\" aria-hidden=\"true\"></i>";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"items\">\n      <hr>\n      <ul title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_view")
  },data:data},helper ? helper.call(depth0, "items", "Items to complete", options) : helperMissing.call(depth0, "t", "items", "Items to complete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_module_view")
  },data:data},helper ? helper.call(depth0, "items", "Items to complete", options) : helperMissing.call(depth0, "t", "items", "Items to complete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.completion_requirement)),stack1 == null || stack1 === false ? stack1 : stack1.completed), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"ig-text\">\n              <i class=\""
    + escapeExpression(((stack1 = (depth0 && depth0.icon_class)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" aria-hidden=\"true\"></i> "
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </li>\n          ";
  return buffer;
  }

  buffer += "<div id=\"progression_student_";
  if (helper = helpers.student_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.student_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_module_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"progression-module content-box border border-trbl border-round container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"name ig-header span8\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"status ig-header span4 ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.started), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.completed), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      ";
  if (helper = helpers.status_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.completed), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
  
      
  return templates['modules/ProgressionModuleView'];
});
