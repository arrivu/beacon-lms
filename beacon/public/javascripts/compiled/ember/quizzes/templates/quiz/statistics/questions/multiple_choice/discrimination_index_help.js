define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/multiple_choice/discrimination_index_help'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n  ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.statistics.questions.multiple_choice.discrimination_index_help.hbs"),
    'w0': ("<p> $1</p>"),
    'w1': ("<a target=\"_blank\" href=\"http://guides.instructure.com/m/4152/l/41484-once-i-publish-my-quiz-what-kinds-of-quiz-statistics-are-available\">$1</a>")
  },hashTypes:{'scope': "STRING",'w0': "STRING",'w1': "STRING"},hashContexts:{'scope': depth0,'w0': depth0,'w1': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "discrimination_index_help", "*This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. * <p> More information is available **here**. </p>", options) : helperMissing.call(depth0, "t", "discrimination_index_help", "*This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. * <p> More information is available **here**. </p>", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = (helper = helpers['message-dialog'] || (depth0 && depth0['message-dialog']),options={hash:{
    'fix-dialog-buttons': (true),
    'height': (270),
    'title': ("discriminationIndexHelpDialogTitle")
  },hashTypes:{'fix-dialog-buttons': "BOOLEAN",'height': "INTEGER",'title': "ID"},hashContexts:{'fix-dialog-buttons': depth0,'height': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "message-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
