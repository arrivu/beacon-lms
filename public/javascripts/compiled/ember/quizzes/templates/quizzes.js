define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quizzes'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <a id='new-quiz'\n        ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("newQuizLink")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("addQuiz")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("addQuiz")
  },hashTypes:{'aria-label': "ID"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n        class='btn btn-primary new-quiz-link icon-plus' role='button'>\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "add_quiz", "Quiz", options) : helperMissing.call(depth0, "t", "add_quiz", "Quiz", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </a>\n\n      ");
  stack1 = (helper = helpers['ic-actions'] || (depth0 && depth0['ic-actions']),options={hash:{
    'title': ("settings")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-actions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("editBanks")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <i class='icon-edit'></i>\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "links.manage_question_banks", "Manage Question Banks", options) : helperMissing.call(depth0, "t", "links.manage_question_banks", "Manage Question Banks", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <ul class=\"ig-list\">\n      <li>\n        <div class=\"ig-row ig-row-empty\">\n          <div class=\"ig-empty-msg\">\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "no_quizzes", "No quizzes available", options) : helperMissing.call(depth0, "t", "no_quizzes", "No quizzes available", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n      </li>\n    </ul>\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div data-view='assignment' class='item-group-condensed'>\n      <div class='ig-header'>\n        <h2 class='ig-header-title element_toggler'\n          ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("assignmentsLabel")
  },hashTypes:{'aria-label': "ID"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n          aria-controls='assignment-quizzes'\n          aria-expanded='true'\n          tabindex=\"0\"\n          role='button'>\n          <i class='icon-mini-arrow-down auto_rotate'}}></i>\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "assignments", "Assignment Quizzes", options) : helperMissing.call(depth0, "t", "assignments", "Assignment Quizzes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </h2>\n      </div>\n        <ul id='assignment-quizzes' class='ig-list collectionViewItems'>\n          ");
  stack1 = helpers['if'].call(depth0, "assignments.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n    </div>\n  ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.each.call(depth0, "assignments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz_index_row", "", options) : helperMissing.call(depth0, "render", "quiz_index_row", "", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li>\n              <div class='ig-row ig-row-empty'>\n                <div class='ig-empty-msg'>\n                  ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "no_quizzes_found", "No quizzes found", options) : helperMissing.call(depth0, "t", "no_quizzes_found", "No quizzes found", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n              </div>\n            </li>\n          ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class='item-group-condensed'>\n      <div class='ig-header'>\n        <h2 class='ig-header-title element_toggler'\n          ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("practicesLabel")
  },hashTypes:{'aria-label': "ID"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n          aria-controls='practice-quizzes'\n          aria-expanded='true'\n          role='button'>\n          <i class='icon-mini-arrow-down auto_rotate'}}></i>\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "practice", "Practice Quizzes", options) : helperMissing.call(depth0, "t", "practice", "Practice Quizzes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </h2>\n      </div>\n      <ul id='practice-quizzes' class='ig-list collectionViewItems'>\n        ");
  stack1 = helpers['if'].call(depth0, "practices.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers.each.call(depth0, "practices", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz_index_row", "", options) : helperMissing.call(depth0, "render", "quiz_index_row", "", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li>\n            <div class='ig-row ig-row-empty'>\n              <div class='ig-empty-msg'>\n                ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "no_quizzes_found", "No quizzes found", options) : helperMissing.call(depth0, "t", "no_quizzes_found", "No quizzes found", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n            </div>\n          </li>\n        ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class='item-group-condensed'>\n      <div class='ig-header'>\n        <h2 class='ig-header-title element_toggler'\n          ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("surveysLabel")
  },hashTypes:{'aria-label': "ID"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n          aria-controls='surveys-quizzes'\n          aria-expanded='true'\n          role='button'>\n          <i class='icon-mini-arrow-down auto_rotate'}}></i>\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "surveys", "Surveys", options) : helperMissing.call(depth0, "t", "surveys", "Surveys", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </h2>\n      </div>\n      <ul id='surveys-quizzes' class='ig-list collectionViewItems'>\n        ");
  stack1 = helpers['if'].call(depth0, "surveys.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div>\n  ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers.each.call(depth0, "surveys", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class='paginated-loading'>\n      <img src='/images/ajax-loader-medium-444.gif' />\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

  data.buffer.push("<h1 class=\"screenreader-only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quizzes.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "quizzes_title", "Quizzes", options) : helperMissing.call(depth0, "t", "quizzes_title", "Quizzes", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n<div class='header-bar'>\n  <div class='header-bar-left form-inline'>\n    <label class='hidden-inline-text' for='searchTerm'>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "searchPlaceholder", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("searchFilter"),
    'placeholder': ("searchPlaceholder"),
    'class': ("search-filter"),
    'id': ("searchTerm")
  },hashTypes:{'value': "ID",'placeholder': "ID",'class': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'class': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='header-bar-right form-inline'>\n    ");
  stack1 = helpers['if'].call(depth0, "canManage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n\n<div class='item-group-container'>\n  ");
  stack1 = helpers.unless.call(depth0, "model.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "rawAssignments.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "rawPractices.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "rawSurveys.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers.unless.call(depth0, "finishedPaginationLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});
});
