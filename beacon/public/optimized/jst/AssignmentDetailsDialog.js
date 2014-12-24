define('jst/AssignmentDetailsDialog', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!assignment_details_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['AssignmentDetailsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"distribution\" style=\"display: block; \">\n      <div class=\"bar-left\"></div>\n      <div class=\"none-left\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "no_one_scored_lower", "No one scored lower than %{min}", options) : helperMissing.call(depth0, "t", "no_one_scored_lower", "No one scored lower than %{min}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  if (helper = helpers.noneLeftWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noneLeftWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; left: ";
  if (helper = helpers.noneLeftLeft) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noneLeftLeft); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; \"></div>\n      <div class=\"some-left\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "scores_lower_than_the_average", "Scores lower than the average of %{average}", options) : helperMissing.call(depth0, "t", "scores_lower_than_the_average", "Scores lower than the average of %{average}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  if (helper = helpers.someLeftWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.someLeftWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; left: ";
  if (helper = helpers.someLeftLeft) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.someLeftLeft); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; \"></div>\n      <div class=\"some-right\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "scores_higher_than_the_average", "Scores higher than the average of %{average}", options) : helperMissing.call(depth0, "t", "scores_higher_than_the_average", "Scores higher than the average of %{average}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  if (helper = helpers.someRightWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.someRightWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; left: ";
  if (helper = helpers.someRightLeft) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.someRightLeft); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; \"></div>\n      <div class=\"none-right\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "no_one_scored_higher", "No one scored higher than %{max}", options) : helperMissing.call(depth0, "t", "no_one_scored_higher", "No one scored higher than %{max}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"width: ";
  if (helper = helpers.noneRightWidth) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noneRightWidth); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; left: ";
  if (helper = helpers.noneRightLeft) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.noneRightLeft); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%; \"></div>\n      <div class=\"bar-right\"></div>\n    </div>\n  ";
  return buffer;
  }

  buffer += "<div id=\"assignment-details-dialog\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "grading_statistics_for_assignment", "Grade statistics for: %{assignment.name}", options) : helperMissing.call(depth0, "t", "grading_statistics_for_assignment", "Grade statistics for: %{assignment.name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showDistribution), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <table id=\"assignment-details-dialog-stats-table\">\n    <tr>\n      <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "average_score", "Average Score:", options) : helperMissing.call(depth0, "t", "average_score", "Average Score:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  if (helper = helpers.average) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.average); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "high_score", "High Score:", options) : helperMissing.call(depth0, "t", "high_score", "High Score:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  if (helper = helpers.max) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.max); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "low_score", "Low Score:", options) : helperMissing.call(depth0, "t", "low_score", "Low Score:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  if (helper = helpers.min) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.min); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "total_graded_submissions", "Total Graded Submissions:", options) : helperMissing.call(depth0, "t", "total_graded_submissions", "Total Graded Submissions:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignment_details_dialog")
  },data:data},helper ? helper.call(depth0, "count_of_submissions", "%{cnt} submissions", options) : helperMissing.call(depth0, "t", "count_of_submissions", "%{cnt} submissions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n    </tr>\n  </table>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('AssignmentDetailsDialog', "#assignment-details-dialog .distribution{margin:15px 0;height:30px;position:relative;}#assignment-details-dialog .distribution div{position:absolute;top:0;border-style:solid;border-color:#aaa;overflow:hidden;}#assignment-details-dialog .distribution .bar-left,#assignment-details-dialog .distribution .bar-right{height:10px;width:0px;margin:5px 0px;}#assignment-details-dialog .distribution .bar-left{left:0;border-width:2px 0 2px 2px;}#assignment-details-dialog .distribution .none-left,#assignment-details-dialog .distribution .none-right{height:11px;border-bottom-width:2px;}#assignment-details-dialog .distribution .some-left{height:20px;border-width:2px 0pt 2px 2px;border-top-left-radius:3px;border-bottom-left-radius:3px;background:#fff;z-index:2;}#assignment-details-dialog .distribution .some-right{height:20px;border-width:2px;overflow:hidden;border-top-right-radius:3px;border-bottom-right-radius:3px;background:#fff;z-index:2;}#assignment-details-dialog .distribution .bar-right{width:0;height:10px;margin:5px 0;right:0;border-width:2px 2px 2px 0;}#assignment-details-dialog-stats-table{font-size:1.2em;}#assignment-details-dialog-stats-table th,#assignment-details-dialog-stats-table td{padding:2px 5px;white-space:nowrap;}#assignment-details-dialog-stats-table td{font-size:1.1em;font-weight:bold;}");

  return templates['AssignmentDetailsDialog'];
});
