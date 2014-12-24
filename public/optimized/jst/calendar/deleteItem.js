define('jst/calendar/deleteItem', ["compiled/handlebars_helpers","i18n!calendar.delete_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/deleteItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <p>\n    ";
  if (helper = helpers.details) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.details); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div>\n    <label for=\"cancel_reason\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.delete_item")
  },data:data},helper ? helper.call(depth0, "deletion_reason", "Reason for deletion:", options) : helperMissing.call(depth0, "t", "deletion_reason", "Reason for deletion:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label><br />\n    <textarea id=\"cancel_reason\" class=\"input-block-level\"></textarea>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<div id=\"delete_event_dialog\">\n  <p>\n    ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </p>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.details), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.hide_reason), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
  
      
  return templates['calendar/deleteItem'];
});
