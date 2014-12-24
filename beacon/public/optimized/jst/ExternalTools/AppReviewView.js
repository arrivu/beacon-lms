define('jst/ExternalTools/AppReviewView', ["compiled/handlebars_helpers","i18n!external_tools.app_review_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppReviewView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<table class=\"table review-item\">\n  <tr>\n    <td class=\"image-and-stars\" valign=\"top\">\n      <img class=\"avatar_image\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n      <div class=\"star-sprite star-sprite-";
  if (helper = helpers.rating) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rating); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n    </td>\n    <td class=\"review-content\" valign=\"top\">\n      <div class=\"review-item-header\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_review_view"),
    'w0': ("<span>$1</span>")
  },data:data},helper ? helper.call(depth0, "posted_by_on", "Posted by *%{user.name}* on *%{created_at}*", options) : helperMissing.call(depth0, "t", "posted_by_on", "Posted by *%{user.name}* on *%{created_at}*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <p>";
  if (helper = helpers.comments) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.comments); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </td>\n  </tr>\n</table>\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/AppReviewView'];
});
