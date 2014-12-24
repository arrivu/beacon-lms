define('jst/quickStartBar/message', ["compiled/handlebars_helpers","i18n!quick_start_bar.message"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/message'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<form class=\"newItemForm message\">\n  <div class=\"box-content controls\">\n\n    <div class=\"row-fluid expander\">\n      <textarea placeholder=\"Message\" class=\"span12\" rows=\"5\" name=\"body\"></textarea>\n    </div>\n\n    <div class=\"row-fluid expandee\">\n      <div class=\"span10 recipient_finder\">\n        <input\n          name=\"recipients\"\n          class=\"contextSearch span10\"\n          type=\"text\"\n          data-finder_url=\"http://localhost:3000/conversations/find_recipients\">\n      </div>\n      <div class=\"span2\">\n        <button type=\"submit\" class=\"btn btn-small button-wide\" data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.message")
  },data:data},helper ? helper.call(depth0, "Sending", "Sending...", options) : helperMissing.call(depth0, "t", "Sending", "Sending...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Send</button>\n      </div>\n    </div>\n  </div>\n</form>\n\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/message'];
});
