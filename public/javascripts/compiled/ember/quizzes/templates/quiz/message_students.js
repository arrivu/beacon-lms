define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/message_students'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"message-students-who-dialog\">\n  <div class=\"field\">\n    <label for=\"select-recipient-group\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.message_students.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "recipients", "Recipients", options) : helperMissing.call(depth0, "t", "recipients", "Recipients", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'items': ("recipientGroups"),
    'value': ("selectedRecipientGroup"),
    'class': ("input-xlarge"),
    'valuePath': ("id"),
    'labelPath': ("name"),
    'id': ("select-recipient-group")
  },hashTypes:{'items': "ID",'value': "ID",'class': "STRING",'valuePath': "STRING",'labelPath': "STRING",'id': "STRING"},hashContexts:{'items': depth0,'value': depth0,'class': depth0,'valuePath': depth0,'labelPath': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"recipients\">\n    ");
  stack1 = helpers['if'].call(depth0, "recipients.isFulfilled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <label for=\"message-body\">\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.message_students.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "message", "Message", options) : helperMissing.call(depth0, "t", "message", "Message", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </label>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("messageBody"),
    'id': ("message-body")
  },hashTypes:{'value': "ID",'id': "STRING"},hashContexts:{'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers.each.call(depth0, "recipients", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <span class=\"more-label\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "moreRecipientsLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <span class=\"label\">");
  stack1 = helpers._triageMustache.call(depth0, "shortName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <img src='/images/ajax-loader-medium-444.gif'/>\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.message_students.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "loading", "Loading", options) : helperMissing.call(depth0, "t", "loading", "Loading", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  stack1 = (helper = helpers['form-dialog'] || (depth0 && depth0['form-dialog']),options={hash:{
    'title': ("title"),
    'on-submit': ("submit"),
    'submit-disabled': ("noRecipients"),
    'height': ("modalHeight"),
    'width': (500),
    'fix-dialog-buttons': (false)
  },hashTypes:{'title': "ID",'on-submit': "STRING",'submit-disabled': "ID",'height': "ID",'width': "INTEGER",'fix-dialog-buttons': "BOOLEAN"},hashContexts:{'title': depth0,'on-submit': depth0,'submit-disabled': depth0,'height': depth0,'width': depth0,'fix-dialog-buttons': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "form-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
