define('jst/calendar/agendaView', ["compiled/handlebars_helpers","i18n!calendar.agenda_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/agendaView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"agenda-day";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isToday), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <h3 class=\"agenda-date\" tabindex=\"-1\">\n          <span aria-hidden=\"true\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          <span class=\"screenreader-only\">";
  if (helper = helpers.accessibleDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.accessibleDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </h3>\n\n        <div class=\"agenda-events\">\n          <div class=\"item-group-condensed\">\n            <ul class=\"ig-list\">\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n          </div>\n        </div>\n      </div>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " agenda-today";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <li class=\"agenda-event\" data-event-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                  <div class=\"ig-row\" tabindex=\"0\" role=\"button\">\n                    <span class=\"ig-title group_";
  if (helper = helpers.contextCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contextCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCompleted), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                      <span class=\"screenreader-only\">";
  if (helper = helpers.readableType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.readableType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ",</span>\n                      <i class=\"icon-";
  if (helper = helpers.iconType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.iconType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n                      ";
  stack1 = (helper = helpers.truncate || (depth0 && depth0.truncate),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.title), 60, options) : helperMissing.call(depth0, "truncate", (depth0 && depth0.title), 60, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isCompleted), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </span>\n                    <span class=\"screenreader-only\">,"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contextInfo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ",</span>\n                    <div class=\"ig-details\">\n                      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.assignment), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                  </div>\n                </li>\n              ";
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
  buffer += "\n                        <b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.agenda_view")
  },data:data},helper ? helper.call(depth0, "due", "Due", options) : helperMissing.call(depth0, "t", "due", "Due", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b><span class=\"screenreader-only\">,</span>\n                        "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalStart), "%l:%M%P", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.originalStart), "%l:%M%P", options)))
    + "\n                      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.all_day), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.agenda_view")
  },data:data},helper ? helper.call(depth0, "starts_at", "Starts at", options) : helperMissing.call(depth0, "t", "starts_at", "Starts at", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ",</span>\n                          "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalStart), "%l:%M%P", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.originalStart), "%l:%M%P", options)))
    + "\n                        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.agenda_view")
  },data:data},helper ? helper.call(depth0, "no_events", "No events after this date.", options) : helperMissing.call(depth0, "t", "no_events", "No events after this date.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program19(depth0,data) {
  
  
  return "\n    <a href=\"#\" class=\"btn agenda-load-btn\" role=\"button\">Load more</a>\n  ";
  }

  buffer += "<div class=\"item-group-container\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.program(17, program17, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"agenda-actions\">\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.hasMore), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <i class=\"loading-spinner\"\n    aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.agenda_view")
  },data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    aria-hidden=\"true\"></i>\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/agendaView'];
});
