define('jst/calendar/undatedEvents', ["compiled/handlebars_helpers","i18n!calendar.undated_events"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/undatedEvents'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"spin_holder\"></div>\n  <a href=\"#\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.undated_events")
  },data:data},helper ? helper.call(depth0, "loading_undated_events", "Loading undated items...", options) : helperMissing.call(depth0, "t", "loading_undated_events", "Loading undated items...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"undated-events-link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.undated_events")
  },data:data},helper ? helper.call(depth0, "show_undated_events", "Show undated items", options) : helperMissing.call(depth0, "t", "show_undated_events", "Show undated items", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.program(12, program12, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul id=\"undated_events_list\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li class=\"undated_event event group_";
  if (helper = helpers.contextCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contextCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-event-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <i class='icon-";
  if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' aria-hidden='true'></i>\n          <a href=\"";
  if (helper = helpers.details_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.details_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class='undated_event_title ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCompleted), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n            ";
  stack1 = (helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), 35, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.title), 35, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCompleted), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n      ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "calendar__event--completed";
  }

function program8(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "<span class=\"screenreader-only\">,(completed),</span>";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.undated_events")
  },data:data},helper ? helper.call(depth0, "no_undated_events", "No undated items.", options) : helperMissing.call(depth0, "t", "no_undated_events", "No undated items.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.unloaded), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['calendar/undatedEvents'];
});
