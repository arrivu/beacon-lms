define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz_index_row'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <i class=\"icon-quiz\"></i>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"ig-admin\">\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['ic-publish-icon'] || (depth0 && depth0['ic-publish-icon']),options={hash:{
    'disabled': ("canNotUnpublish"),
    'is-published': ("showAsPublished"),
    'disabled-message': ("disabledMessage"),
    'icon-only': ("true"),
    'on-publish': ("publish"),
    'on-unpublish': ("unpublish")
  },hashTypes:{'disabled': "ID",'is-published': "ID",'disabled-message': "ID",'icon-only': "STRING",'on-publish': "STRING",'on-unpublish': "STRING"},hashContexts:{'disabled': depth0,'is-published': depth0,'disabled-message': depth0,'icon-only': depth0,'on-publish': depth0,'on-unpublish': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-publish-icon", options))));
  data.buffer.push("\n\n        ");
  stack1 = (helper = helpers['ic-actions'] || (depth0 && depth0['ic-actions']),options={hash:{
    'title': ("settings")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-actions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </div>\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("edit")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("delete")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <i class='icon-edit'></i>\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz_index_row.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <i class='icon-trash'></i>\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz_index_row.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<li class='quiz'>\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ig-row :ig-editable publishable:ig-publishable isPublishedStatusVisible:ig-published")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("ig-title ellipses")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz.show", "", options) : helperMissing.call(depth0, "link-to", "quiz.show", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div class='ig-details row-fluid'>\n      <div class='span4 ellipses date-available'>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['ic-dates-available'] || (depth0 && depth0['ic-dates-available']),options={hash:{
    'allDates': ("allDates"),
    'linkHref': ("html_url")
  },hashTypes:{'allDates': "ID",'linkHref': "ID"},hashContexts:{'allDates': depth0,'linkHref': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-dates-available", options))));
  data.buffer.push("\n      </div>\n      <div class='span4 ellipses date-due'>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['ic-dates-available'] || (depth0 && depth0['ic-dates-available']),options={hash:{
    'allDates': ("allDates"),
    'linkHref': ("html_url"),
    'showDueDates': (true)
  },hashTypes:{'allDates': "ID",'linkHref': "ID",'showDueDates': "BOOLEAN"},hashContexts:{'allDates': depth0,'linkHref': depth0,'showDueDates': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-dates-available", options))));
  data.buffer.push("\n      </div>\n      <div class='span2 ellipses'>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "pointsPossible", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div class='span2 ellipses'>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "questionCountLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "canUpdate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</li>\n");
  return buffer;
  
});
});
