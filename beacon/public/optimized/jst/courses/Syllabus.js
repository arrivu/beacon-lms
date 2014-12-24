define('jst/courses/Syllabus', ["compiled/handlebars_helpers","i18n!courses.syllabus"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/Syllabus'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a id=\"toggle_special_dates_in_syllabus\" class=\"shown\" href=\"#\">\n      <span class=\"hide\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.syllabus")
  },data:data},helper ? helper.call(depth0, "syllabus.hide_specific_dates", "Hide section, group, and person specific dates", options) : helperMissing.call(depth0, "t", "syllabus.hide_specific_dates", "Hide section, group, and person specific dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      <span class=\"show\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.syllabus")
  },data:data},helper ? helper.call(depth0, "syllabus.show_specific_dates", "Show section, group, and person specific dates", options) : helperMissing.call(depth0, "t", "syllabus.show_specific_dates", "Show section, group, and person specific dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    &nbsp;\n  ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr class=\"date";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.passed), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <th scope=\"row\" class=\"day_date\" data-date=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.date), options)))
    + ">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </th>\n      <td class=\"details\">\n        <table class=\"detail_list\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </table>\n      </td>\n    </tr>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " date_passed";
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += " events_"
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), "%Y_%m_%d", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.date), "%Y_%m_%d", options)));
  return buffer;
  }

function program10(depth0,data) {
  
  var helper, options;
  return escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), "%Y_%m_%d", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.date), "%Y_%m_%d", options)));
  }

function program12(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n          "
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.date), "medium_with_weekday", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.date), "medium_with_weekday", options)))
    + "\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <tr class=\"syllabus_";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " related-";
  if (helper = helpers.related_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.related_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.override), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <td class=\"name";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.last), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.html_url), {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.override), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td class=\"dates";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.last), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.start_at), {hash:{},inverse:self.program(34, program34, data),fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n          </tr>\n          ";
  return buffer;
  }
function program15(depth0,data) {
  
  
  return " special_date";
  }

function program17(depth0,data) {
  
  
  return " not_last";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n              ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"special_date_title\">("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.override)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</div>\n              ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.due_at), {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                  due by <span "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.due_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.due_at), options)))
    + " >"
    + escapeExpression((helper = helpers.tTimeHours || (depth0 && depth0.tTimeHours),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.due_at), options) : helperMissing.call(depth0, "tTimeHours", (depth0 && depth0.due_at), options)))
    + "</span>\n                ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                  <span "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.start_at), options)))
    + " >"
    + escapeExpression((helper = helpers.tTimeHours || (depth0 && depth0.tTimeHours),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start_at), options) : helperMissing.call(depth0, "tTimeHours", (depth0 && depth0.start_at), options)))
    + "</span>\n                  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.same_time), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    to\n                    <span "
    + escapeExpression((helper = helpers.contextSensitiveDatetimeTitle || (depth0 && depth0.contextSensitiveDatetimeTitle),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.end_at), options) : helperMissing.call(depth0, "contextSensitiveDatetimeTitle", (depth0 && depth0.end_at), options)))
    + " >\n                      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.same_day), {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                   </span>\n                  ";
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        "
    + escapeExpression((helper = helpers.tTimeHours || (depth0 && depth0.tTimeHours),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.end_at), options) : helperMissing.call(depth0, "tTimeHours", (depth0 && depth0.end_at), options)))
    + "\n                      ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        "
    + escapeExpression((helper = helpers.tEventToString || (depth0 && depth0.tEventToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.end_at), options) : helperMissing.call(depth0, "tEventToString", (depth0 && depth0.end_at), options)))
    + "\n                      ";
  return buffer;
  }

function program34(depth0,data) {
  
  
  return "\n                &nbsp;\n              ";
  }

  buffer += "<div id=\"syllabus_links\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.overrides_present), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<table id=\"syllabus\">\n  <thead>\n    <tr>\n      <th scope=\"col\" style=\"width: 25%;\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.syllabus")
  },data:data},helper ? helper.call(depth0, "headers.date", "Date", options) : helperMissing.call(depth0, "t", "headers.date", "Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th scope=\"col\" style=\"width: 75%;\">\n      <div style=\"float: right;\"></div>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.syllabus")
  },data:data},helper ? helper.call(depth0, "headers.details", "Details", options) : helperMissing.call(depth0, "t", "headers.details", "Details", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.dates), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>\n";
  return buffer;
  });
  
      
  return templates['courses/Syllabus'];
});
