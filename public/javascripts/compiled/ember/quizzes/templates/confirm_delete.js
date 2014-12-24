define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['confirm_delete'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n  ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.confirm_delete.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "confirm_deletion_of_quiz", "Are you sure you want to delete this quiz?", options) : helperMissing.call(depth0, "t", "confirm_deletion_of_quiz", "Are you sure you want to delete this quiz?", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = (helper = helpers['confirm-dialog'] || (depth0 && depth0['confirm-dialog']),options={hash:{
    'on-submit': ("delete"),
    'confirm-text': ("confirmText"),
    'cancel-text': ("cancelText"),
    'fix-dialog-buttons': (true),
    'height': ("auto"),
    'title': ("deleteTitle")
  },hashTypes:{'on-submit': "STRING",'confirm-text': "ID",'cancel-text': "ID",'fix-dialog-buttons': "BOOLEAN",'height': "STRING",'title': "ID"},hashContexts:{'on-submit': depth0,'confirm-text': depth0,'cancel-text': depth0,'fix-dialog-buttons': depth0,'height': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "confirm-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
