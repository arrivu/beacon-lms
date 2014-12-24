define('jst/content_migrations/subviews/DateShift', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.date_shift"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/DateShift'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"controls\">\n  <label class=\"checkbox\" for=\"dateAdjustCheckbox\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("dateAdjustCheckbox")
  },data:data},helper ? helper.call(depth0, "adjust_dates.enabled", options) : helperMissing.call(depth0, "checkbox", "adjust_dates.enabled", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "checkbox_label", "Adjust events and due dates", options) : helperMissing.call(depth0, "t", "checkbox_label", "Adjust events and due dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n</div>\n\n<div class=\"dateAdjustContent\" style=\"display:none\">\n  <br />\n    <div class=\"control-group\">\n      <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "date_adjustment", "Date adjustment", options) : helperMissing.call(depth0, "t", "date_adjustment", "Date adjustment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n      <div class=\"controls\">\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"adjust_dates[operation]\" checked id=\"dateShiftOption\" value=\"shift_dates\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "shift_dates", "Shift dates", options) : helperMissing.call(depth0, "t", "shift_dates", "Shift dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        </div>\n        <div class=\"radio\">\n          <label>\n            <input type=\"radio\" name=\"adjust_dates[operation]\" id=\"dateRemoveOption\" value=\"remove_dates\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "remove_dates", "Remove dates", options) : helperMissing.call(depth0, "t", "remove_dates", "Remove dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"dateShiftContent\" style=\"display:none\">\n      <div class=\"control-group\">\n        <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "beginning_date", "Beginning date", options) : helperMissing.call(depth0, "t", "beginning_date", "Beginning date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n        <div class=\"controls\">\n          <div class=\"pull-left\"><input type=\"text\" name=\"date_shift_options[old_start_date]\" id=\"oldStartDate\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "old_start_date_title", "Beginning date", options) : helperMissing.call(depth0, "t", "old_start_date_title", "Beginning date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "old_start_date_label", "Beginning date", options) : helperMissing.call(depth0, "t", "old_start_date_label", "Beginning date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n          <div class=\"pull-left\">&nbsp; ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "beginning_change_to", "change to", options) : helperMissing.call(depth0, "t", "beginning_change_to", "change to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <input type=\"text\" name=\"date_shift_options[new_start_date]\" id=\"newStartDate\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "new_start_date_title", "Change beginning date to", options) : helperMissing.call(depth0, "t", "new_start_date_title", "Change beginning date to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "new_start_date_label", "Change beginning date to", options) : helperMissing.call(depth0, "t", "new_start_date_label", "Change beginning date to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n        </div>\n      </div>\n\n      <div class=\"control-group\">\n        <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "ending_date", "Ending date", options) : helperMissing.call(depth0, "t", "ending_date", "Ending date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n        <div class=\"controls\">\n          <div class=\"pull-left\"><input type=\"text\" name=\"date_shift_options[old_end_date]\" id=\"oldEndDate\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "old_end_date_title", "Ending date", options) : helperMissing.call(depth0, "t", "old_end_date_title", "Ending date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "old_end_date_label", "Ending date", options) : helperMissing.call(depth0, "t", "old_end_date_label", "Ending date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n          <div class=\"pull-left\">&nbsp; ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "ending_change_to", "change to", options) : helperMissing.call(depth0, "t", "ending_change_to", "change to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <input type=\"text\" name=\"date_shift_options[new_end_date]\" id=\"newEndDate\" class=\"span2\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "new_end_date_title", "Change ending date to", options) : helperMissing.call(depth0, "t", "new_end_date_title", "Change ending date to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "new_end_date_label", "Change ending date to", options) : helperMissing.call(depth0, "t", "new_end_date_label", "Change ending date to", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></div>\n        </div>\n      </div>\n\n      <div class=\"control-group\">\n        <div id=\"daySubstitution\"></div>\n        <div class=\"controls\">\n          <button aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "add_day_sub_title", "Add day substitution", options) : helperMissing.call(depth0, "t", "add_day_sub_title", "Add day substitution", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" id='addDaySubstitution' class=\"btn top-margin bottomMargin\"><i class=\"icon-add\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.date_shift")
  },data:data},helper ? helper.call(depth0, "substitution", "Substitution", options) : helperMissing.call(depth0, "t", "substitution", "Substitution", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        </div>\n      </div>\n    </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/DateShift'];
});
