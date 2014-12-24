define('jst/gradebook2/total_column_header', ["compiled/handlebars_helpers","i18n!gradebook2.total_column_header"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/total_column_header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a class=toggle_percent href=\"#\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showingPoints), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a></li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.total_column_header")
  },data:data},helper ? helper.call(depth0, "switch_to_percent", "Switch to percent", options) : helperMissing.call(depth0, "t", "switch_to_percent", "Switch to percent", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.total_column_header")
  },data:data},helper ? helper.call(depth0, "switch_to_points", "Switch to points", options) : helperMissing.call(depth0, "t", "switch_to_points", "Switch to points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.total_column_header")
  },data:data},helper ? helper.call(depth0, "move_to_end", "Move to end", options) : helperMissing.call(depth0, "t", "move_to_end", "Move to end", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.total_column_header")
  },data:data},helper ? helper.call(depth0, "move_to_front", "Move to front", options) : helperMissing.call(depth0, "t", "move_to_front", "Move to front", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<a id=total_dropdown class=gradebook-header-drop href=\"#\" role=button>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("gradebook2.total_column_header")
  },data:data},helper ? helper.call(depth0, "options", "Options", options) : helperMissing.call(depth0, "t", "options", "Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n<ul class=gradebook-header-menu>\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.weightedGroups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <li><a class=move_column href=#>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.totalColumnInFront), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a></li>\n</ul>\n";
  return buffer;
  });
  
      
  return templates['gradebook2/total_column_header'];
});
