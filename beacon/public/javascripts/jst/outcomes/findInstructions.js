define('jst/outcomes/findInstructions', ["compiled/handlebars_helpers","i18n!outcomes.find_instructions"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/findInstructions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"wrapper\">\n  <h2 class=\"title\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.find_instructions")
  },data:data},helper ? helper.call(depth0, "instructions.find.title", "Finding Outcomes", options) : helperMissing.call(depth0, "t", "instructions.find.title", "Finding Outcomes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h2>\n  <div class=\"description\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.find_instructions"),
    'w0': ("<p>$1</p>")
  },data:data},helper ? helper.call(depth0, "instructions.find.description", "*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*", options) : helperMissing.call(depth0, "t", "instructions.find.description", "*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['outcomes/findInstructions'];
});
