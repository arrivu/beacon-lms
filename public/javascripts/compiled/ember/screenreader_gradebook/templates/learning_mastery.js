define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['learning_mastery'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div>\n          <label for=\"outcome_result_value\">\n            <strong>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "result_for", "Result for:", options) : helperMissing.call(depth0, "t", "result_for", "Result for:", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "selectedOutcome.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n          </label>\n        </div>\n        <div id=\"outcome_result_value\">\n          ");
  stack1 = helpers['if'].call(depth0, "outcomeResultIsDefined", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "selectedOutcomeResult.score", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n            -\n          ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <p class=\"submission_selection\">\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "empty_submission_selection", "Select a student and an outcome to view results.", options) : helperMissing.call(depth0, "t", "empty_submission_selection", "Select a student and an outcome to view results.", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <h3 class=\"student_selection\">\n          ");
  stack1 = helpers['if'].call(depth0, "hideStudentNames", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </h3>\n        ");
  stack1 = helpers['if'].call(depth0, "selectedStudent.isLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "selectedStudent.hiddenName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("studentUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "selectedStudent.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </a>\n          ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student_information/details", options) : helperMissing.call(depth0, "partial", "student_information/details", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <p>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "results_loading", "Results for this student are still loading...", options) : helperMissing.call(depth0, "t", "results_loading", "Results for this student are still loading...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <p class=\"student_selection pad-box top-only\">\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "empty_student_selection", "Select a student to view additional information here.", options) : helperMissing.call(depth0, "t", "empty_student_selection", "Select a student to view additional information here.", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </p>\n      ");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings/header", options) : helperMissing.call(depth0, "partial", "settings/header", options))));
  data.buffer.push("\n\n<div class=\"row\">\n  <div class=\"span4\">\n    <label for=\"outcome_section_select\" class=\"text-right-responsive\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "select_a_section", "Select a section", options) : helperMissing.call(depth0, "t", "select_a_section", "Select a section", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n  <div class=\"span8\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'id': ("outcome_section_select"),
    'class': ("section_select"),
    'items': ("sections"),
    'valuePath': ("id"),
    'labelPath': ("name"),
    'labelDefault': ("sectionSelectDefaultLabel"),
    'selected': ("selectedSection")
  },hashTypes:{'id': "STRING",'class': "STRING",'items': "ID",'valuePath': "STRING",'labelPath': "STRING",'labelDefault': "ID",'selected': "ID"},hashContexts:{'id': depth0,'class': depth0,'items': depth0,'valuePath': depth0,'labelPath': depth0,'labelDefault': depth0,'selected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"span4\"></div>\n  <div class=\"span8\">\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("outcome_hide_names_checkbox"),
    'name': ("hide_names_checkbox"),
    'checked': ("hideStudentNames")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "hide_student_names_label", "Hide Student Names", options) : helperMissing.call(depth0, "t", "hide_student_names_label", "Hide Student Names", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"span4\">\n    \n  </div>\n  <div class=\"span8\">\n    <div class=\"pad-box bottom-only\">\n      <a class=\"btn\" role=\"button\" href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "downloadOutcomeCsvUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <i class=\"icon-download\"></i> ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_results", "Download Results (.csv)", options) : helperMissing.call(depth0, "t", "download_results", "Download Results (.csv)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content_selection/header", options) : helperMissing.call(depth0, "partial", "content_selection/header", options))));
  data.buffer.push("\n\n<div class=\"row pad-box bottom-only\">\n  <div class=\"span4 text-right-responsive\">\n    <label for=\"outcome_student_select\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "select_student", "Select a student", options) : helperMissing.call(depth0, "t", "select_student", "Select a student", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n\n\n  <div class=\"span8\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'id': ("outcome_student_select"),
    'class': ("student_select"),
    'items': ("studentsInSelectedSection"),
    'valuePath': ("id"),
    'labelPath': ("displayName"),
    'labelDefault': ("studentSelectDefaultLabel"),
    'selected': ("selectedStudent")
  },hashTypes:{'id': "STRING",'class': "STRING",'items': "ID",'valuePath': "STRING",'labelPath': "ID",'labelDefault': "ID",'selected': "ID"},hashContexts:{'id': depth0,'class': depth0,'items': depth0,'valuePath': depth0,'labelPath': depth0,'labelDefault': depth0,'selected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SelectionButtonsView", {hash:{
    'type': ("student"),
    'selected': ("selectedStudent"),
    'list': ("studentsInSelectedSection")
  },hashTypes:{'type': "STRING",'selected': "ID",'list': "ID"},hashContexts:{'type': depth0,'selected': depth0,'list': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n    </div>\n  </div>\n</div>\n\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content_selection/outcome", options) : helperMissing.call(depth0, "partial", "content_selection/outcome", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n\n<div id=\"outcome_result\">\n  <div class=\"row\">\n    <div class=\"span4\">\n      <h2>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "result", "Result", options) : helperMissing.call(depth0, "t", "result", "Result", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n    </div>\n    <div class= \"span8 pad-box top-only\">\n      ");
  stack1 = helpers['if'].call(depth0, "selectedOutcomeResult", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n\n<div class=\"hr\"></div>\n\n<div id=\"outcome_student_information\">\n  <div class=\"row\">\n    <div class=\"span4\">\n      <h2>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.learning_mastery.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_info", "Student Information", options) : helperMissing.call(depth0, "t", "student_info", "Student Information", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n    </div>\n    <div class=\"span8\">\n      ");
  stack1 = helpers['if'].call(depth0, "selectedStudent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "outcome_information", options) : helperMissing.call(depth0, "partial", "outcome_information", options))));
  data.buffer.push("\n");
  return buffer;
  
});
});
