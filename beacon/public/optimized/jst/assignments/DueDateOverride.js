define('jst/assignments/DueDateOverride', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!assignments.due_date_override"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/DueDateOverride'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"due-date-override-headers clearfix\">\n  <div class=\"section-header\">\n    <label id=\"overrides_course_section\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_override")
  },data:data},helper ? helper.call(depth0, "overrides.for", "For", options) : helperMissing.call(depth0, "t", "overrides.for", "For", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"due-date-header\">\n    <label id=\"overrides_due_date\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_override")
  },data:data},helper ? helper.call(depth0, "overrides.due_date", "Due Date", options) : helperMissing.call(depth0, "t", "overrides.due_date", "Due Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"lock-header\">\n    <label id=\"overrides_unlock_at\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_override")
  },data:data},helper ? helper.call(depth0, "overrides.available_from", "Available From", options) : helperMissing.call(depth0, "t", "overrides.available_from", "Available From", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"unlock-header\">\n    <label id=\"overrides_lock_at\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_override")
  },data:data},helper ? helper.call(depth0, "until", "Until", options) : helperMissing.call(depth0, "t", "until", "Until", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n\n</div>\n\n<ul class=\"due-date-overrides\"></ul>\n\n<div class=\"due-date-override-footer\">\n  <button type=\"button\" class=\"btn\" id=\"add_due_date\" style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.shouldHideDueDate), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.shouldHideDueDate), options)))
    + "\">\n    <i class=\"icon-add\"><span class=screenreader-only>Add</span></i>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.due_date_override")
  },data:data},helper ? helper.call(depth0, "overrides.due_date", "Due Date", options) : helperMissing.call(depth0, "t", "overrides.due_date", "Due Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('assignments/DueDateOverride', ".js-assignment-overrides{overflow:auto;}.js-assignment-overrides .remove-link .icon-end:hover{opacity:1;}.js-assignment-overrides .remove-link .icon-end{opacity:0.5;color:black;vertical-align:middle;}.js-assignment-overrides .due-date-override-headers{min-width:900px;}.js-assignment-overrides .due-date-override-headers div{width:210px;float:left;margin-right:10px;}.js-assignment-overrides .due-date-overrides{margin:0;}.js-assignment-overrides .due-date-overrides li.due-date-row{list-style-type:none;overflow:hidden;min-width:900px;}.js-assignment-overrides .due-date-overrides li.due-date-row select{float:left;margin:0px 10px 0px 0px;width:210px;}.js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container{float:left;position:relative;margin-right:10px;}.js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container input{width:155px;}.js-assignment-overrides .due-date-overrides li.due-date-row .date_field_container .datetime_suggest{height:20px;}");

  return templates['assignments/DueDateOverride'];
});
