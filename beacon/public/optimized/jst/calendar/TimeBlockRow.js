define('jst/calendar/TimeBlockRow', ["compiled/handlebars_helpers","i18n!calendar.time_block_row"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/TimeBlockRow'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "class=\"locked\"";
  }

function program3(depth0,data) {
  
  
  return "disabled";
  }

function program5(depth0,data) {
  
  
  return " disabled";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a href=\"#\" class=\"delete-block-link icon-end\">\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.time_block_row")
  },data:data},helper ? helper.call(depth0, "delete_link", "Delete Time Range", options) : helperMissing.call(depth0, "t", "delete_link", "Delete Time Range", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n    ";
  return buffer;
  }

  buffer += "<tr ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <td class=\"date-column\">\n    <input name=\"date\" class=\"date_field\" value=\""
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start), "medium_with_weekday", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.start), "medium_with_weekday", options)))
    + "\"\n      aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "date_label", "Date", options) : helperMissing.call(depth0, "t", "date_label", "Date", options)))
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/>\n  </td>\n  <td class=\"start-time-column\">\n    <input name=\"start_time\" class=\"time_field start_time\" value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.start), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.start), "tiny", options)))
    + "\"\n      aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "start_time_label", "Start Time", options) : helperMissing.call(depth0, "t", "start_time_label", "Start Time", options)))
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/>\n  </td>\n  <td class=\"separator-column\">-</td>\n  <td class=\"end-time-column\">\n    <input name=\"end_time\" class=\"time_field end_time\" value=\""
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.end), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.end), "tiny", options)))
    + "\"\n      aria-label=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "end_time_label", "End Time", options) : helperMissing.call(depth0, "t", "end_time_label", "End Time", options)))
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"text\"/>\n  </td>\n  <td class=\"delete-column\">\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.locked), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </td>\n</tr>\n";
  return buffer;
  });
  
      
  return templates['calendar/TimeBlockRow'];
});
