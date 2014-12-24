define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['settings/mastery_toggles_and_actions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"span4\"></div>\n  <div class=\"span8\">\n    <div class=\"checkbox\">\n      <label class=\"checkbox\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'id': ("outcome_hide_names_checkbox"),
    'name': ("hide_names_checkbox"),
    'checked': ("hideStudentNames")
  },hashTypes:{'type': "STRING",'id': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'id': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.mastery_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "hide_student_names_label", "Hide Student Names", options) : helperMissing.call(depth0, "t", "hide_student_names_label", "Hide Student Names", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"span4\">\n    \n  </div>\n  <div class=\"span8\">\n    <div class=\"pad-box bottom-only\">\n      <a class=\"btn\" role=\"button\" href=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "downloadOutcomeCsvUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\">\n        <i class=\"icon-download\"></i> ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.mastery_toggles_and_actions.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_results", "Download Results (.csv)", options) : helperMissing.call(depth0, "t", "download_results", "Download Results (.csv)", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </a>\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});
});
