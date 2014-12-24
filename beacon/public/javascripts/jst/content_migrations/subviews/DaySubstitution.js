define('jst/content_migrations/subviews/DaySubstitution', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.day_substitution"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/DaySubstitution'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <option value=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n    ";
  return buffer;
  }

  buffer += "<label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "move_from", "Move from", options) : helperMissing.call(depth0, "t", "move_from", "Move from", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n<div class=\"controls\">\n  <select class=\"currentDay span3\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "move_from_select_title", "Move from day of the week", options) : helperMissing.call(depth0, "t", "move_from_select_title", "Move from day of the week", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "move_from_select_label", "Move from day of the week", options) : helperMissing.call(depth0, "t", "move_from_select_label", "Move from day of the week", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> \n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weekdays), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "to_happen_on", "to", options) : helperMissing.call(depth0, "t", "to_happen_on", "to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <select class=\"subDay span3\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "move_to_select_title", "Move to day of the week", options) : helperMissing.call(depth0, "t", "move_to_select_title", "Move to day of the week", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "move_to_select_label", "Move to day of the week", options) : helperMissing.call(depth0, "t", "move_to_select_label", "Move to day of the week", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weekdays), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  <a href=\"#\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "remove_day_substitution_link_label", "Remove day substitution", options) : helperMissing.call(depth0, "t", "remove_day_substitution_link_label", "Remove day substitution", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.day_substitution")
  },data:data},helper ? helper.call(depth0, "remove_day_substitution_link", "Remove day substitution", options) : helperMissing.call(depth0, "t", "remove_day_substitution_link", "Remove day substitution", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-end plain\"></i></a>\n</div>\n<br />\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/DaySubstitution'];
});
