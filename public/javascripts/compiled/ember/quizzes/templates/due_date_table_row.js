define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['due_date_table_row'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "dueAt", "short_weekday", options) : helperMissing.call(depth0, "tDateToString", "dueAt", "short_weekday", options))));
  data.buffer.push(", ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "dueAt", "date_at_time", options) : helperMissing.call(depth0, "tDateToString", "dueAt", "date_at_time", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n    -\n  ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.due_date_table_row.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "everyone", "Everyone", options) : helperMissing.call(depth0, "t", "everyone", "Everyone", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "unlockAt", "short_weekday", options) : helperMissing.call(depth0, "tDateToString", "unlockAt", "short_weekday", options))));
  data.buffer.push(", ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "unlockAt", "date_at_time", options) : helperMissing.call(depth0, "tDateToString", "unlockAt", "date_at_time", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "lockAt", "short_weekday", options) : helperMissing.call(depth0, "tDateToString", "lockAt", "short_weekday", options))));
  data.buffer.push(", ");
  data.buffer.push(escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "lockAt", "date_at_time", options) : helperMissing.call(depth0, "tDateToString", "lockAt", "date_at_time", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<td>\n  ");
  stack1 = helpers['if'].call(depth0, "dueAt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</td>\n<td>\n  ");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</td>\n<td>\n  ");
  stack1 = helpers['if'].call(depth0, "unlockAt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</td>\n<td>\n  ");
  stack1 = helpers['if'].call(depth0, "lockAt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</td>\n");
  return buffer;
  
});
});
