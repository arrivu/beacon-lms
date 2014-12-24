define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['settings/assignment_toggles_and_actions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"checkbox\">\n        <label class=\"checkbox\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("show_total_as_points"),
    'name': ("show_total_as_points"),
    'checked': ("showTotalAsPoints")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "show_total_as_points", "Show Totals as Points on Student Grade Page", options) : helperMissing.call(depth0, "t", "show_total_as_points", "Show Totals as Points on Student Grade Page", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </label>\n      </div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <a href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "publishToSisURL", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "sis_export", "Publish grades to SIS", options) : helperMissing.call(depth0, "t", "sis_export", "Publish grades to SIS", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </a>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row pad-box bottom-only\">\n  <div class=\"span4\">\n    \n  </div>\n  <div class=\"span8\">\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("ungraded"),
    'name': ("ungraded"),
    'checked': ("includeUngradedAssignments")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "include_ungraded_assignments", "Treat Ungraded as 0", options) : helperMissing.call(depth0, "t", "include_ungraded_assignments", "Treat Ungraded as 0", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("hide_names_checkbox"),
    'name': ("hide_names_checkbox"),
    'checked': ("hideStudentNames")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "hide_student_names_label", "Hide Student Names", options) : helperMissing.call(depth0, "t", "hide_student_names_label", "Hide Student Names", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("concluded_enrollments"),
    'name': ("concluded_enrollments"),
    'checked': ("showConcludedEnrollments"),
    'disabled': ("enrollments.isLoading")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID",'disabled': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "show_concluded_enrollments_label", "Show Concluded Enrollments", options) : helperMissing.call(depth0, "t", "show_concluded_enrollments_label", "Show Concluded Enrollments", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("show_notes"),
    'name': ("show_notes"),
    'checked': ("showNotesColumn")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "show_notes", "Show Notes in Student Info", options) : helperMissing.call(depth0, "t", "show_notes", "Show Notes in Student Info", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n    ");
  stack1 = helpers.unless.call(depth0, "groupsAreWeighted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"span4\">\n    \n  </div>\n  <div class=\"span8\">\n    <div class=\"pad-box bottom-only\">\n      <button\n        id=\"ag_weights\"\n        class=\"btn\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", "ag_weights", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("assignment_groups.isLoading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n      >\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "set_group_weights", "Set Group Weights", options) : helperMissing.call(depth0, "t", "set_group_weights", "Set Group Weights", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </button>\n    </div>\n\n    <div class=\"pad-box bottom-only\">\n      <a class=\"btn\" role=\"button\" href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "downloadCsvUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <i class=\"icon-download\"></i> ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_scores", "Download Scores (.csv)", options) : helperMissing.call(depth0, "t", "download_scores", "Download Scores (.csv)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </a>\n      <button\n        id=\"upload\"\n        class=\"btn\"\n        ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", "upload", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("\n      >\n        <i class=\"icon-upload\"></i> ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "upload_scores", "Upload Scores (.csv)", options) : helperMissing.call(depth0, "t", "upload_scores", "Upload Scores (.csv)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </button>\n    </div>\n\n    <div class=\"pad-box bottom-only\">\n      <div>\n        ");
  stack1 = helpers['if'].call(depth0, "publishToSisEnabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div>\n        <a href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "gradingHistoryUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.assignment_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "grading_history", "View Grading History", options) : helperMissing.call(depth0, "t", "grading_history", "View Grading History", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});
});
