define('jst/collaborations/edit', ["compiled/handlebars_helpers","i18n!collaborations.edit"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['collaborations/edit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<form action=\"";
  if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      class=\"edit_collaboration communication_message\"\n      method=\"POST\">\n  <input type=\"hidden\" name=\"_method\" value=\"put\" />\n  <input type=\"hidden\" name=\"authenticity_token\" value=\"";
  if (helper = helpers.token) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.token); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n  <div class=\"header\">\n    <input name=\"collaboration[title]\"\n           aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.edit")
  },data:data},helper ? helper.call(depth0, "labels.title", "Collaboration title", options) : helperMissing.call(depth0, "t", "labels.title", "Collaboration title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           style=\"width: 300px;\"\n           type=\"text\"\n           value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n  </div>\n\n  <div class=\"content\">\n    <label for=\"collaboration_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_description\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.edit")
  },data:data},helper ? helper.call(depth0, "labels.description", "Description", options) : helperMissing.call(depth0, "t", "labels.description", "Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label><br />\n    <textarea id=\"collaboration_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_description\"\n              name=\"collaboration[description]\"\n              style=\"height: 50px; width: 400px;\">\n      ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </textarea>\n  </div>\n\n  <div class=\"footer\">\n    <div class=\"collaborator_list\"></div>\n  </div>\n\n  <div class=\"collaboration-actions form-actions\">\n    <button type=\"button\" class=\"btn cancel_button\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.edit")
  },data:data},helper ? helper.call(depth0, "buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("collaborations.edit")
  },data:data},helper ? helper.call(depth0, "buttons.update", "Update collaboration", options) : helperMissing.call(depth0, "t", "buttons.update", "Update collaboration", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['collaborations/edit'];
});
