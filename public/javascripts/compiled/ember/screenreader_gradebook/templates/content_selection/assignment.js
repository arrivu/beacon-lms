define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['content_selection/assignment'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'id': ("assignment_select"),
    'class': ("assignment_select"),
    'items': ("assignments"),
    'valuePath': ("id"),
    'labelPath': ("name"),
    'labelDefault': ("assignmentSelectDefaultLabel"),
    'selected': ("selectedAssignment")
  },hashTypes:{'id': "STRING",'class': "STRING",'items': "ID",'valuePath': "STRING",'labelPath': "STRING",'labelDefault': "ID",'selected': "ID"},hashContexts:{'id': depth0,'class': depth0,'items': depth0,'valuePath': depth0,'labelPath': depth0,'labelDefault': depth0,'selected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <select disabled></select>\n    ");
  }

  data.buffer.push("<div class=\"row pad-box bottom-only\">\n  <div class=\"span4 text-right-responsive\">\n    <label for=\"assignment_select\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.content_selection.assignment.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "select_assignment", "Select an assignment", options) : helperMissing.call(depth0, "t", "select_assignment", "Select an assignment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n  <div class=\"span8\">\n    \n    \n    ");
  stack1 = helpers['if'].call(depth0, "assignments.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SelectionButtonsView", {hash:{
    'type': ("assignment"),
    'selected': ("selectedAssignment"),
    'list': ("assignments")
  },hashTypes:{'type': "STRING",'selected': "ID",'list': "ID"},hashContexts:{'type': depth0,'selected': depth0,'list': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});
});
