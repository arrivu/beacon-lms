define('jst/courses/roster/rosterTabs', ["compiled/handlebars_helpers","i18n!courses.roster.roster_tabs"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/rosterTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <li class=\"ui-state-default ui-corner-top\" >\n    <a href=\"/courses/";
  if (helper = helpers.course_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/groups#tab-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"group-category-tab-link ui-tabs-anchor\">\n      ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </a>\n  </li>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <li class=\"static ui-state-default ui-corner-top\" ><a href=\"/courses/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.course)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/groups\" class=\"ui-tabs-anchor\" >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_tabs")
  },data:data},helper ? helper.call(depth0, "groups", "Groups", options) : helperMissing.call(depth0, "t", "groups", "Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n";
  return buffer;
  }

  buffer += "<li class=\"static ui-state-default ui-corner-top ui-tabs-active ui-state-active\" >\n  <a href=\"#\" class=\"ui-tabs-anchor\" >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.roster_tabs")
  },data:data},helper ? helper.call(depth0, "everyone_tab", "Everyone", options) : helperMissing.call(depth0, "t", "everyone_tab", "Everyone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.collection), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['courses/roster/rosterTabs'];
});
