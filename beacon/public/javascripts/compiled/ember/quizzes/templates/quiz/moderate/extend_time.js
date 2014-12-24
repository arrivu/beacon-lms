define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/moderate/extend_time'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"student-extension-dialog\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "extendFor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  <p>\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.moderate.extend_time.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "you_can_give_this_student_extra_time", "You can give this student extra time on the current quiz attempt. How much time would you like to give them?", options) : helperMissing.call(depth0, "t", "you_can_give_this_student_extra_time", "You can give this student extra time on the current quiz attempt. How much time would you like to give them?", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n\n  <dl class=\"clearfix\">\n    <dt>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "started", "Started", options) : helperMissing.call(depth0, "t", "started", "Started", options))));
  data.buffer.push("</dt>\n    <dd>");
  data.buffer.push(escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "quizSubmission.startedAt", options) : helperMissing.call(depth0, "friendlyDatetime", "quizSubmission.startedAt", options))));
  data.buffer.push("</dd>\n    <dt>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "ending", "Ending", options) : helperMissing.call(depth0, "t", "ending", "Ending", options))));
  data.buffer.push("</dt>\n    <dd>");
  data.buffer.push(escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "quizSubmission.endAt", options) : helperMissing.call(depth0, "friendlyDatetime", "quizSubmission.endAt", options))));
  data.buffer.push("</dd>\n  </dl>\n\n  <div class=\"relative-time\">\n    <label for=\"extend_quiz_mins\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "end_the_quiz", "End the quiz", options) : helperMissing.call(depth0, "t", "end_the_quiz", "End the quiz", options))));
  data.buffer.push("\n    </label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['numeric-field'] || (depth0 && depth0['numeric-field']),options={hash:{
    'value': ("extension.extendQuizMins"),
    'id': ("extend_quiz_mins"),
    'min': (0),
    'max': (1440),
    'allowDecimal': (false),
    'allowNegative': (false),
    'class': ("text")
  },hashTypes:{'value': "ID",'id': "STRING",'min': "INTEGER",'max': "INTEGER",'allowDecimal': "BOOLEAN",'allowNegative': "BOOLEAN",'class': "STRING"},hashContexts:{'value': depth0,'id': depth0,'min': depth0,'max': depth0,'allowDecimal': depth0,'allowNegative': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "numeric-field", options))));
  data.buffer.push("\n\n    <label for=\"extend_from_time\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "minutes_from", "minutes from", options) : helperMissing.call(depth0, "t", "minutes_from", "minutes from", options))));
  data.buffer.push("\n    </label>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("select"),
    'id': ("extend_from_time"),
    'content': ("timeOptions"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'value': ("extension.extendFromTime")
  },hashTypes:{'viewName': "STRING",'id': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'viewName': depth0,'id': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    <p class=\"note\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.moderate.extend_time.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "maximum_of_1440_minutes", "Maximum of 1440 minutes (24 hours)", options) : helperMissing.call(depth0, "t", "maximum_of_1440_minutes", "Maximum of 1440 minutes (24 hours)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n  </div>\n\n</div>\n");
  return buffer;
  }

  stack1 = (helper = helpers['form-dialog'] || (depth0 && depth0['form-dialog']),options={hash:{
    'title': ("title"),
    'on-submit': ("submit"),
    'height': (355),
    'width': (490)
  },hashTypes:{'title': "ID",'on-submit': "STRING",'height': "INTEGER",'width': "INTEGER"},hashContexts:{'title': depth0,'on-submit': depth0,'height': depth0,'width': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "form-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
});
