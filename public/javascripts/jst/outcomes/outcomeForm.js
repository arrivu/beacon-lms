define('jst/outcomes/outcomeForm', ["compiled/handlebars_helpers","i18n!outcomes.outcome_form","jst/outcomes/_criterion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/outcomeForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = self.invokePartial(partials['outcomes/criterion'], 'outcomes/criterion', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

  buffer += "<form action=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"learning_outcome\" method=\"post\">\n\n  <label class=\"span3\" for=\"title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "title", "Name this outcome", options) : helperMissing.call(depth0, "t", "title", "Name this outcome", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <input class=\"outcome_title span3\" name=\"title\" id=title size=\"50\" type=\"text\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n  <label class=\"span3\" for=\"display_name\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "display_name", "Friendly name (optional)", options) : helperMissing.call(depth0, "t", "display_name", "Friendly name (optional)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <input class=\"outcome_display_name span3\" name=\"display_name\" id=display_name size=\"50\" type=\"text\" value=\"";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n\n\n  <label for=\"description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "description", "Describe this outcome", options) : helperMissing.call(depth0, "t", "description", "Describe this outcome", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <textarea cols=\"40\" name=\"description\" id=description rows=\"20\" style=\"width: 100%; height: 150px;\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  <div id=\"outcome_criterion_dialog\" style=\"display: none;\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "criterion_dialog", "Learning outcomes can be included in assignment rubrics as an easy way to assess mastery of outcomes aligned to specific assignments. When you define a learning outcome, you should also define a criterion that can be used when building assignment rubrics. Define as many rubric columns as you need, and specify a point threshold that will be used to define mastery of this outcome.", options) : helperMissing.call(depth0, "t", "criterion_dialog", "Learning outcomes can be included in assignment rubrics as an easy way to assess mastery of outcomes aligned to specific assignments. When you define a learning outcome, you should also define a criterion that can be used when building assignment rubrics. Define as many rubric columns as you need, and specify a point threshold that will be used to define mastery of this outcome.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "criterion", "Criterion ratings", options) : helperMissing.call(depth0, "t", "criterion", "Criterion ratings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":\n    <a class=\"outcome_information_link\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "criterion_info_link", "Click to learn about criterion ratings", options) : helperMissing.call(depth0, "t", "criterion_info_link", "Click to learn about criterion ratings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=0 href=\"#\"><i class=\"icon-question\"></i></a>\n  </label>\n  <table class=\"criterion\">\n    <tbody>\n      <tr>\n        ";
  stack1 = (helper = helpers.eachWithIndex || (depth0 && depth0.eachWithIndex),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.ratings), options) : helperMissing.call(depth0, "eachWithIndex", (depth0 && depth0.ratings), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       <td class=\"total\">\n         <h5 class=\"total\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "total_points", "Total Points", options) : helperMissing.call(depth0, "t", "total_points", "Total Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n         <div class=\"points_possible\">\n           ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "points", "%{points_possible} Points", options) : helperMissing.call(depth0, "t", "points", "%{points_possible} Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n         </div>\n       </td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label for=\"mastery_points\" style=\"display:inline\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "mastery", "Mastery at", options) : helperMissing.call(depth0, "t", "mastery", "Mastery at", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n    <input type=\"text\" name=\"mastery_points\" style=\"width: 20px;\" class=\"mastery_points\" id=\"mastery_points\" value=\"";
  if (helper = helpers.mastery_points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mastery_points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n  <div class=\"align-right\">\n    <button type=\"button\" class=\"btn cancel_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <button type=\"submit\" class=\"btn btn-primary submit_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_form")
  },data:data},helper ? helper.call(depth0, "#buttons.save", "Save", options) : helperMissing.call(depth0, "t", "#buttons.save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['outcomes/outcomeForm'];
});
