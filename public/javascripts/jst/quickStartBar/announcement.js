define('jst/quickStartBar/announcement', ["compiled/handlebars_helpers","i18n!quick_start_bar.announcement"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/announcement'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<form class=\"newItemForm\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid\">\n      <input placeholder=\"Announcement title\" class=\"span12 expander\" name=\"title\" type=\"text\">\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <textarea placeholder=\"Announcement message\" class=\"span12\" rows=\"3\" name=\"message\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10 course_finder\">\n        <input\n          name=\"course_ids\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.announcement")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Announce</button>\n      </div>\n    </div>\n\n\n\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/announcement'];
});
