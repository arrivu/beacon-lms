define('jst/AssignmentGroupWeightsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!assignment_group_weights_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['AssignmentGroupWeightsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_group_weights_dialog")
  },data:data},helper ? helper.call(depth0, "titles.assignment_group_weights", "Manage assignment group weighting", options) : helperMissing.call(depth0, "t", "titles.assignment_group_weights", "Manage assignment group weighting", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"display:none;\" id=\"assignment_group_weights_dialog\">\n  <p style=\"margin-top: 8px;\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "group_weighting_scheme", options) : helperMissing.call(depth0, "checkbox", "group_weighting_scheme", options)))
    + "\n    <label for=\"group_weighting_scheme\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_group_weights_dialog")
  },data:data},helper ? helper.call(depth0, "weight_final", "Weight final grade based on groups", options) : helperMissing.call(depth0, "t", "weight_final", "Weight final grade based on groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n  </p>\n  <table>\n    <tbody class=\"groups_holder\">\n      <tr style=\"display:none;\" class=\"assignment_group_row blank\">\n        <td><label></label></td>\n        <td><input type=\"number\" min=\"0\" max=\"100\" class=\"group_weight\"/>%</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_group_weights_dialog")
  },data:data},helper ? helper.call(depth0, "titles.total", "Total", options) : helperMissing.call(depth0, "t", "titles.total", "Total", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>&nbsp;<span class=\"total_weight\"></span>%</td>\n      </tr>\n    </tfoot>\n  </table>\n  <button class=\"btn btn-primary\" type=\"submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_group_weights_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.save", "Save", options) : helperMissing.call(depth0, "t", "buttons.save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('AssignmentGroupWeightsDialog', "#assignment_group_weights_dialog table{width:100%;}#assignment_group_weights_dialog th,#assignment_group_weights_dialog td{padding:2px 10px;}#assignment_group_weights_dialog td{width:1px;white-space:nowrap;}#assignment_group_weights_dialog tbody tr{border:solid #ccc;border-width:1px 0;}#assignment_group_weights_dialog tfoot th,#assignment_group_weights_dialog tfoot td{font-weight:bold;}#assignment_group_weights_dialog .group_weight{width:50px;}");

  return templates['AssignmentGroupWeightsDialog'];
});
