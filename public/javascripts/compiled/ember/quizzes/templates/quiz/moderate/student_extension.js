define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/moderate/student_extension'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"student-extension-dialog clearfix\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "extensionsFor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  ");
  stack1 = helpers.unless.call(depth0, "unlimitedAttempts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "quiz.timeLimit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div class=\"field manually-unlock\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("manually_unlocked"),
    'checked': ("extension.manuallyUnlocked")
  },hashTypes:{'type': "STRING",'id': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label for=\"manually_unlocked\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "manually_unlock", "Manually unlock the quiz for the next attempt", options) : helperMissing.call(depth0, "t", "manually_unlock", "Manually unlock the quiz for the next attempt", options))));
  data.buffer.push("\n    </label>\n  </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"field extra-attempts\">\n      <label for=\"extra_attempts\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "extra_attempts", "Extra attempts:", options) : helperMissing.call(depth0, "t", "extra_attempts", "Extra attempts:", options))));
  data.buffer.push("\n        <em class=\"note\">");
  stack1 = helpers._triageMustache.call(depth0, "extraAttemptsNote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\n      </label>\n      <span class=\"input\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("extra_attempts"),
    'value': ("extension.extraAttempts"),
    'class': ("text")
  },hashTypes:{'type': "STRING",'id': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'id': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <span class=\"units\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "attempts", "attempts", options) : helperMissing.call(depth0, "t", "attempts", "attempts", options))));
  data.buffer.push("</span>\n      </span>\n    </div>\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"field extra-time\">\n      <label for=\"extra_time\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "extra_time_on_every_attempt", "Extra time on every attempt:", options) : helperMissing.call(depth0, "t", "extra_time_on_every_attempt", "Extra time on every attempt:", options))));
  data.buffer.push("\n        <em class=\"note\">");
  stack1 = helpers._triageMustache.call(depth0, "extraTimeNote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\n      </label>\n      <span class=\"input\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("extra_time"),
    'value': ("extension.extraTime"),
    'class': ("text")
  },hashTypes:{'type': "STRING",'id': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'id': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <span class=\"units\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "minutes", "minutes", options) : helperMissing.call(depth0, "t", "minutes", "minutes", options))));
  data.buffer.push("</span>\n      </span>\n    </div>\n  ");
  return buffer;
  }

  stack1 = (helper = helpers['form-dialog'] || (depth0 && depth0['form-dialog']),options={hash:{
    'title': ("title"),
    'on-submit': ("submit"),
    'height': ("modalHeight"),
    'width': (490)
  },hashTypes:{'title': "ID",'on-submit': "STRING",'height': "ID",'width': "INTEGER"},hashContexts:{'title': depth0,'on-submit': depth0,'height': depth0,'width': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "form-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
