define('jst/outcomes/outcomeGroupForm', ["compiled/handlebars_helpers","i18n!outcomes.outcome_group_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/outcomeGroupForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form action=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"outcome_group\" method=\"post\">\n  <label for=\"outcome_group_title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group_form")
  },data:data},helper ? helper.call(depth0, "title", "Name this group", options) : helperMissing.call(depth0, "t", "title", "Name this group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <input id=\"outcome_group_title\" class=\"outcome_title\" name=\"title\" size=\"50\" type=\"text\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <label for=\"outcome_group_description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group_form")
  },data:data},helper ? helper.call(depth0, "group_description", "Describe this group", options) : helperMissing.call(depth0, "t", "group_description", "Describe this group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</label>\n  <textarea cols=\"40\" id=\"outcome_group_description\" name=\"description\" rows=\"20\" style=\"width: 100%; height: 150px;\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  <div class=\"button-container pull-right\">\n    <button type=\"button\" class=\"btn cancel_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group_form")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    <button type=\"submit\" class=\"btn btn-primary submit_button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group_form")
  },data:data},helper ? helper.call(depth0, "#buttons.save", "Save", options) : helperMissing.call(depth0, "t", "#buttons.save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['outcomes/outcomeGroupForm'];
});
