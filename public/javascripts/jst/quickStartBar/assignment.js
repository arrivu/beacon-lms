define('jst/quickStartBar/assignment', ["compiled/handlebars_helpers","i18n!quick_start_bar.assignment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/assignment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n    <div class=\"row-fluid\">\n      <input placeholder=\"Assignment title\" class=\"span12 expander\" name=\"name\" type=\"text\" id=\"assignmentTitle\">\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <textarea placeholder=\"Assignment description\" class=\"span12\" rows=\"3\" name=\"description\" id=\"assignmentDescription\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span2\">\n        <input placeholder=\"Points\" class=\"span1\" name=\"points_possible\" type=\"text\" id=\"assignmentPoints\">\n      </div>\n\n      <div class=\"span10 expandee\">\n        <div class=\"dateFieldContainer\">\n          <input placeholder=\"Due date\" name=\"due_at\" type=\"text\" class=\"dateField\" id=\"assignmentDueDate\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10\">\n        <input\n          name=\"course_ids\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"http://localhost:3000/conversations/find_recipients\"\n        >\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.assignment")
  },data:data},helper ? helper.call(depth0, "assigning", "Saving...", options) : helperMissing.call(depth0, "t", "assigning", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Assign</button>\n      </div>\n    </div>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/assignment'];
});
