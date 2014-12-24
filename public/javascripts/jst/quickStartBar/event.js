define('jst/quickStartBar/event', ["compiled/handlebars_helpers","i18n!quick_start_bar.event"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/event'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid expander\">\n      <input type=\"text\" placeholder=\"Event Title\" class=\"span12\" name=\"title\"></textarea>\n    </div>\n\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"dateFieldContainer\">\n        <input placeholder=\"Due date\" name=\"date\" type=\"text\" class=\"dateField\">\n      </div>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10\">\n        <input\n          name=\"context_code\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.event")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.event")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n  </div>\n</form>\n\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/event'];
});
