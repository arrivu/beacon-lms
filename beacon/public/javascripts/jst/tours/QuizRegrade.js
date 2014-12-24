define('jst/tours/QuizRegrade', ["compiled/handlebars_helpers","i18n!tours.quiz_regrade"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['tours/QuizRegrade'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div\n  id=\"tour-quiz-regrade-step1\"\n  data-points-to=\".regrade-options\"\n  class=\"popover tour top\"\n  style=\"width: 500px; padding: 35px 30px 25px 30px;\"\n  data-position=\"top\"\n  data-offset-x=\"10\"\n  data-offset-y=\"10\">\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <i class=\"usher-close icon-x\"></i>\n    <h2 class=\"h4\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tours.quiz_regrade")
  },data:data},helper ? helper.call(depth0, "try_later", "You can now set regrade options for students who have already taken the quiz.", options) : helperMissing.call(depth0, "t", "try_later", "You can now set regrade options for students who have already taken the quiz.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <ul>\n      <li style=\"padding-bottom: .7em;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tours.quiz_regrade")
  },data:data},helper ? helper.call(depth0, "first_bullet", "Once you’ve changed an answer you’ll need to choose an option before updating the question.", options) : helperMissing.call(depth0, "t", "first_bullet", "Once you’ve changed an answer you’ll need to choose an option before updating the question.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n      <li style=\"padding-bottom: .7em;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tours.quiz_regrade")
  },data:data},helper ? helper.call(depth0, "second_bullet", "Make sure you choose the most appropiate option as students' scores MAY be affected.", options) : helperMissing.call(depth0, "t", "second_bullet", "Make sure you choose the most appropiate option as students' scores MAY be affected.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n      <li style=\"padding-bottom: .7em;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tours.quiz_regrade")
  },data:data},helper ? helper.call(depth0, "third_bullet", "Canvas will regrade all your submissions after you save the quiz, this may take a few minutes.", options) : helperMissing.call(depth0, "t", "third_bullet", "Canvas will regrade all your submissions after you save the quiz, this may take a few minutes.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    </ul>\n    </p>\n    <div class=\"controls clearfix\" style=\"margin-top: 15px;\">\n      <div class=\"pull-right\">\n        <button class=\"btn btn-primary usher-close\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("tours.quiz_regrade")
  },data:data},helper ? helper.call(depth0, "got_it", "Ok, got it", options) : helperMissing.call(depth0, "t", "got_it", "Ok, got it", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['tours/QuizRegrade'];
});
