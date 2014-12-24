define('jst/quickStartBar/discussion', ["compiled/handlebars_helpers","i18n!quick_start_bar.discussion"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/discussion'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid\">\n      <input placeholder=\"Discussion topic\" class=\"span12 expander\" name=\"title\" type=\"text\">\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <textarea placeholder=\"Discussion message\" class=\"span12\" rows=\"3\" name=\"message\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span2\">\n        <label class=\"checkbox checkbox-inline\" for=\"graded\">"
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "graded", options) : helperMissing.call(depth0, "checkbox", "graded", options)))
    + " Graded?</label>\n      </div>\n\n      <div class=\"span2\">\n        <input placeholder=\"Points\" class=\"span1\" name=\"assignment[points_possible]\" type=\"text\" disabled>\n      </div>\n\n      <div class=\"span8 expandee\">\n        <div class=\"dateFieldContainer\">\n          <input placeholder=\"Due date\" name=\"assignment[due_at]\" type=\"text\" class=\"dateField\" disabled>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"course_finder span10\">\n        <input\n          name=\"context_ids\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.discussion")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Create</button>\n      </div>\n    </div>\n\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/discussion'];
});
