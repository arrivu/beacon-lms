define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['student_information/assignment_groups'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['assignment-group-grades'] || (depth0 && depth0['assignment-group-grades']),options={hash:{
    'ag': ("assignment_group"),
    'student': ("selectedStudent"),
    'weightingScheme': ("weightingScheme"),
    'gradingStandard': ("ENV.GRADEBOOK_OPTIONS.grading_standard")
  },hashTypes:{'ag': "ID",'student': "ID",'weightingScheme': "ID",'gradingStandard': "ID"},hashContexts:{'ag': depth0,'student': depth0,'weightingScheme': depth0,'gradingStandard': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "assignment-group-grades", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<table class=\"table left-first\">\n  <thead>\n    <tr>\n      <th>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.student_information.assignment_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "ag_group_name", "Assignment Group", options) : helperMissing.call(depth0, "t", "ag_group_name", "Assignment Group", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      <th>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.student_information.assignment_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "ag_group_grade", "Grade", options) : helperMissing.call(depth0, "t", "ag_group_grade", "Grade", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      <th>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.student_information.assignment_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "ag_letter_grade", "Letter Grade", options) : helperMissing.call(depth0, "t", "ag_letter_grade", "Letter Grade", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n      <th>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.student_information.assignment_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "ag_group_percent_grade", "% of Grade", options) : helperMissing.call(depth0, "t", "ag_group_percent_grade", "% of Grade", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "assignment_group", "in", "assignment_groups", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>");
  return buffer;
  
});
});
