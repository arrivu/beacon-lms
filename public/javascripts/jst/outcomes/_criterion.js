define('jst/outcomes/_criterion', ["compiled/handlebars_helpers","i18n!outcomes.criterion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/_criterion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td class=\"rating\">\n  <div class=\"rating-wrap\">\n    <div class=\"show\">\n      <h5>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n      <span class=\"points\">";
  if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "points", "Points", options) : helperMissing.call(depth0, "t", "points", "Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <a\n        href=\"#\"\n        class=\"edit_rating active element_toggler\"\n        title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "edit_criterion_rating_title", "Edit \"%{description} criterion rating", options) : helperMissing.call(depth0, "t", "edit_criterion_rating_title", "Edit \"%{description} criterion rating", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "edit_criterion_rating_title", "Edit \"%{description} criterion rating", options) : helperMissing.call(depth0, "t", "edit_criterion_rating_title", "Edit \"%{description} criterion rating", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        role=button\n        tabindex=0\n        aria-controls=\"edit_rating_";
  if (helper = helpers._index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-edit\"></i></a>\n    </div>\n    <div class=\"edit\" id=\"edit_rating_";
  if (helper = helpers._index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" role=region tabindex=-1>\n      <div class=\"row-fluid\" class=\"outcomes-edit-row\">\n        <div class=\"span7\">\n          <input type=\"text\" name=\"ratings[";
  if (helper = helpers._index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][description]\" class=\"outcome_rating_description\" value=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "rating_description", "Criterion rating description", options) : helperMissing.call(depth0, "t", "rating_description", "Criterion rating description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        </div>\n        <div class=\"span4 offset1\">\n          <input type=\"text\" name=\"ratings[";
  if (helper = helpers._index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "][points]\" style=\"width: 20px;\" class=\"outcome_rating_points\" value=\"";
  if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "criterion_rating_points", "Criterion rating points", options) : helperMissing.call(depth0, "t", "criterion_rating_points", "Criterion rating points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"> <span class=\"outcomes-points-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "pts", "pts", options) : helperMissing.call(depth0, "t", "pts", "pts", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n\n      <div class=\"buttons row-fluid\">\n        <div class=\"span12\">\n          <button\n            class=\"btn btn-small btn-primary save_rating_link\"\n            aria-controls=\"edit_rating_";
  if (helper = helpers._index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            type=\"button\"\n          >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "close_rating", "Ok", options) : helperMissing.call(depth0, "t", "close_rating", "Ok", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          <button class=\"btn btn-small delete_rating_link\" type=\"button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "delete_criterion", "Delete", options) : helperMissing.call(depth0, "t", "delete_criterion", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"insert\">\n      <a href=\"#\" class=\"insert_rating\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "insert_criterion_rating", "Insert criterion rating", options) : helperMissing.call(depth0, "t", "insert_criterion_rating", "Insert criterion rating", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" tabindex=0 role=button>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.criterion")
  },data:data},helper ? helper.call(depth0, "insert_rating", "Insert", options) : helperMissing.call(depth0, "t", "insert_rating", "Insert", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <span class=\"arrow-icon\"></span>\n      </a>\n    </div>\n  </div>\n</td>\n";
  return buffer;
  });
  
Handlebars.registerPartial('outcomes/criterion', templates['outcomes/_criterion']);

      
  return templates['outcomes/_criterion'];
});
