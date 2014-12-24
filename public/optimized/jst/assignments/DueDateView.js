define('jst/assignments/DueDateView', ["compiled/handlebars_helpers","i18n!assignments.due_date_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DueDateView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <select class=\"section-list input-small\" name=\"course_section_id\" aria-labelledby=\"overrides_course_section\">\n  </select>\n\n  <div class=\"date_field_container\">\n    <input value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.due_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.due_at), false, options)))
    + "\" name=\"due_at\" type=\"text\"\n    class=\"input-small date_field\" aria-labelledby=\"overrides_due_date\">\n  </div>\n\n  <div class=\"date_field_container\">\n    <input name=\"unlock_at\" value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unlock_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.unlock_at), false, options)))
    + "\" type=\"text\"\n    class=\"date_field\" aria-labelledby=\"overrides_unlock_at\">\n  </div>\n\n  <div class=\"date_field_container to\">\n    <input name=\"lock_at\" value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.lock_at), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.lock_at), false, options)))
    + "\" type=\"text\"\n    class=\"date_field\" aria-labelledby=\"overrides_lock_at\">\n  </div>\n\n  <div>\n    <a\n      href=\"#\"\n      class=\"remove-link\"\n      role=\"button\"\n      title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_view")
  },data:data},helper ? helper.call(depth0, "overrides.remove_these_dates", "Remove These Dates", options) : helperMissing.call(depth0, "t", "overrides.remove_these_dates", "Remove These Dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n      aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_view")
  },data:data},helper ? helper.call(depth0, "overrides.remove_these_dates", "Remove These Dates", options) : helperMissing.call(depth0, "t", "overrides.remove_these_dates", "Remove These Dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    ><i class=\"icon-end\"></i>\n    </a>\n  </div>\n  ";
  return buffer;
  }

  buffer += "<form>\n  ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.assignment_override), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</form>\n";
  return buffer;
  });
  
      
  return templates['assignments/DueDateView'];
});
