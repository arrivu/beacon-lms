define('jst/MoveDialogSelect', ["compiled/handlebars_helpers","i18n!move_dialog_select"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['MoveDialogSelect'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "\n  class=\"move_select_parent_collection\"\n  ";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <option\n      ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1.lastList), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n    >\n      ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </option>\n  ";
  return buffer;
  }
function program4(depth0,data,depth2) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.selectedIf || (depth2 && depth2.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.assignmentGroupId), (depth0 && depth0.id), options) : helperMissing.call(depth0, "selectedIf", (depth2 && depth2.assignmentGroupId), (depth0 && depth0.id), options)))
    + "\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <option value=\"last\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("move_dialog_select")
  },data:data},helper ? helper.call(depth0, "move_to_end", "-- At the bottom --", options) : helperMissing.call(depth0, "t", "move_to_end", "-- At the bottom --", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n  ";
  return buffer;
  }

  buffer += "<label for=\"move_select_";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.labelText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n<select \n  id=\"move_select_";
  if (helper = helpers.cid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.lastList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  >\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lastList), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n\n";
  return buffer;
  });
  
      
  return templates['MoveDialogSelect'];
});
