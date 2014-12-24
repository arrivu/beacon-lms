define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['content_selection/student'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row pad-box bottom-only\">\n  <div class=\"span4 text-right-responsive\">\n    <label for=\"student_select\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.content_selection.student.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "select_student", "Select a student", options) : helperMissing.call(depth0, "t", "select_student", "Select a student", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n  <div class=\"span8\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'id': ("student_select"),
    'class': ("student_select"),
    'items': ("studentsInSelectedSection"),
    'valuePath': ("id"),
    'labelPath': ("displayName"),
    'labelDefault': ("studentSelectDefaultLabel"),
    'selected': ("selectedStudent")
  },hashTypes:{'id': "STRING",'class': "STRING",'items': "ID",'valuePath': "STRING",'labelPath': "ID",'labelDefault': "ID",'selected': "ID"},hashContexts:{'id': depth0,'class': depth0,'items': depth0,'valuePath': depth0,'labelPath': depth0,'labelDefault': depth0,'selected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SelectionButtonsView", {hash:{
    'type': ("student"),
    'selected': ("selectedStudent"),
    'list': ("studentsInSelectedSection")
  },hashTypes:{'type': "STRING",'selected': "ID",'list': "ID"},hashContexts:{'type': depth0,'selected': depth0,'list': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n  </div>\n</div>");
  return buffer;
  
});
});
