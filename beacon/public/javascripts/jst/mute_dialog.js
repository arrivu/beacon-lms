define('jst/mute_dialog', ["compiled/handlebars_helpers","i18n!mute_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['mute_dialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "mute_assignment", "Mute Assignment", options) : helperMissing.call(depth0, "t", "mute_assignment", "Mute Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <div id=\"assignment_muter_content\" tabindex=\"-1\">\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "sure_you_want_to_mute", "Are you sure you want to mute this assignment? While this assignment is muted, students will not receive new notifications about or be able to see:", options) : helperMissing.call(depth0, "t", "sure_you_want_to_mute", "Are you sure you want to mute this assignment? While this assignment is muted, students will not receive new notifications about or be able to see:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <ul>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "see_grade", "Their grade for the assignment", options) : helperMissing.call(depth0, "t", "see_grade", "Their grade for the assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "grade_change_notifications", "Grade change notifications", options) : helperMissing.call(depth0, "t", "grade_change_notifications", "Grade change notifications", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "submission_comments", "Submission comments", options) : helperMissing.call(depth0, "t", "submission_comments", "Submission comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "curving_assignments", "Curving assignments", options) : helperMissing.call(depth0, "t", "curving_assignments", "Curving assignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "score_change_notifications", "Score change notifications", options) : helperMissing.call(depth0, "t", "score_change_notifications", "Score change notifications", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    </ul>\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "students_will_see", "Students will be able to see that this assignment is muted.", options) : helperMissing.call(depth0, "t", "students_will_see", "Students will be able to see that this assignment is muted.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("mute_dialog")
  },data:data},helper ? helper.call(depth0, "how_to_unmute", "Once you have muted this assignment, you can begin sending notifications again by clicking the \"Unmute Assignment\" link.", options) : helperMissing.call(depth0, "t", "how_to_unmute", "Once you have muted this assignment, you can begin sending notifications again by clicking the \"Unmute Assignment\" link.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['mute_dialog'];
});
