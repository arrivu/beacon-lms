define('jst/publish_grades/AssignmentSettings', ["compiled/handlebars_helpers","i18n!publish_grades.assignment_settings"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/AssignmentSettings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"form-dialog-content\">\n  <div class=\"form-horizontal\">\n    <label class=\"checkbox\" id=\"weight-groups\" >\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "apply_assignment_group_weights", options) : helperMissing.call(depth0, "checkbox", "apply_assignment_group_weights", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_settings")
  },data:data},helper ? helper.call(depth0, "weight_groups", "Weight final grade based on assignment groups", options) : helperMissing.call(depth0, "t", "weight_groups", "Weight final grade based on assignment groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <div id=\"ag_weights_wrapper\">\n      <table id=\"assignment_groups_weights\">\n        <tbody>\n\n        </tbody>\n        <tfoot>\n          <tr>\n            <td>Total</td>\n            <td id=\"percent_total\" class=\"right-align\"></td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    id=\"cancel-assignment-settings\"\n    class=\"btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_settings")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    id=\"update-assignment-settings\"\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_settings")
  },data:data},helper ? helper.call(depth0, "validating", "Saving...", options) : helperMissing.call(depth0, "t", "validating", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_settings")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>";
  return buffer;
  });
  
      
  return templates['publish_grades/AssignmentSettings'];
});
