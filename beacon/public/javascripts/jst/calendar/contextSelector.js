define('jst/calendar/contextSelector', ["compiled/handlebars_helpers","i18n!calendar.context_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/contextSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"ag_contexts_menu hidden\">\n  <ul class=\"ag-contexts\"></ul>\n  <button class=\"btn btn-small ag_contexts_done\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.context_selector")
  },data:data},helper ? helper.call(depth0, "done", "Done", options) : helperMissing.call(depth0, "t", "done", "Done", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/contextSelector'];
});
