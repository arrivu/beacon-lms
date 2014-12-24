define('jst/assignments/NeverDropCollection', ["compiled/handlebars_helpers","i18n!assignments.never_drop_collection"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/NeverDropCollection'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<button class=\"btn btn-link add_never_drop\">"
    + escapeExpression((helper = helpers.addIcon || (depth0 && depth0.addIcon),options={hash:{},data:data},helper ? helper.call(depth0, "add", options) : helperMissing.call(depth0, "addIcon", "add", options)))
    + "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasNeverDrops), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</button>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.never_drop_collection")
  },data:data},helper ? helper.call(depth0, "add_another_assignment", "Add another assignment", options) : helperMissing.call(depth0, "t", "add_another_assignment", "Add another assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.never_drop_collection")
  },data:data},helper ? helper.call(depth0, "add_first_assignment", "Add an assignment", options) : helperMissing.call(depth0, "t", "add_first_assignment", "Add an assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<div class=\"never_drop collectionViewItems\"> </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasAssignments), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['assignments/NeverDropCollection'];
});
