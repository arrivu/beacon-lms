define('jst/outcomes/mainInstructions', ["compiled/handlebars_helpers","i18n!outcomes.main_instructions"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/mainInstructions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"wrapper\">\n  <h2 class=\"title\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.main_instructions")
  },data:data},helper ? helper.call(depth0, "instructions.main.manage.title", "Setting up Outcomes", options) : helperMissing.call(depth0, "t", "instructions.main.manage.title", "Setting up Outcomes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h2>\n  <div class=\"description\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.main_instructions"),
    'w0': ("<p>$1</p>")
  },data:data},helper ? helper.call(depth0, "instructions.main.manage.description", "*Outcomes are created here to track mastery in a course. To get started, checkout the menu bar along the top. Click on the New button to create a new outcome, or the New Group button to create a new group to organize your outcomes into. The Find button will allow you to use outcomes that have been created by your state or institution. As you create and use outcomes you will be able to use the panel to the left to navigate through your outcomes. You can drag and drop outcomes between the different levels to create structure.* *More importantly, Canvas allows you to add outcomes to your grading rubrics so that you can evaluate mastery as you grade assignments. Once you've set up outcomes, click Manage Rubrics to start using your outcomes for grading.*", options) : helperMissing.call(depth0, "t", "instructions.main.manage.description", "*Outcomes are created here to track mastery in a course. To get started, checkout the menu bar along the top. Click on the New button to create a new outcome, or the New Group button to create a new group to organize your outcomes into. The Find button will allow you to use outcomes that have been created by your state or institution. As you create and use outcomes you will be able to use the panel to the left to navigate through your outcomes. You can drag and drop outcomes between the different levels to create structure.* *More importantly, Canvas allows you to add outcomes to your grading rubrics so that you can evaluate mastery as you grade assignments. Once you've set up outcomes, click Manage Rubrics to start using your outcomes for grading.*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['outcomes/mainInstructions'];
});
