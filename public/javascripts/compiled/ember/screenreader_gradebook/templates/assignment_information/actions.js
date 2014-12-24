define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['assignment_information/actions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <button\n      id=\"curve_grades\"\n      class=\"btn\"\n      ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", "curve_grades", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("\n    >\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.assignment_information.actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "curve_grades", "Curve Grades", options) : helperMissing.call(depth0, "t", "curve_grades", "Curve Grades", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </button>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"checkbox\">\n  <label class=\"checkbox\">\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.assignment_information.actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "assignment_is_muted", "Muted?", options) : helperMissing.call(depth0, "t", "assignment_is_muted", "Muted?", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['assignment-muter'] || (depth0 && depth0['assignment-muter']),options={hash:{
    'assignment': ("selectedAssignment"),
    'id': ("assignment_muted_check"),
    'name': ("assignment_muted_check")
  },hashTypes:{'assignment': "ID",'id': "STRING",'name': "STRING"},hashContexts:{'assignment': depth0,'id': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "assignment-muter", options))));
  data.buffer.push("\n  </label>\n</div>\n<div class=\"pad-box no-sides\">\n  <button\n    id=\"message_students\"\n    class=\"btn\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", "message_students", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("\n  >\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.assignment_information.actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "message_students", "Message students who...", options) : helperMissing.call(depth0, "t", "message_students", "Message students who...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n</div>\n<div class=\"pad-box bottom-only\">\n  <button\n    id=\"set_default_grade\"\n    class=\"btn\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", "set_default_grade", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("\n  >\n    ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.assignment_information.actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "set_default_grade", "Set default grade", options) : helperMissing.call(depth0, "t", "set_default_grade", "Set default grade", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n  ");
  stack1 = helpers['if'].call(depth0, "selectedAssignment.points_possible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
});
