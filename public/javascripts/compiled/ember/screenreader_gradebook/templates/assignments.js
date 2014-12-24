define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['assignments'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings/header", options) : helperMissing.call(depth0, "partial", "settings/header", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings/section_select", options) : helperMissing.call(depth0, "partial", "settings/section_select", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings/sort_select", options) : helperMissing.call(depth0, "partial", "settings/sort_select", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings/assignment_toggles_and_actions", options) : helperMissing.call(depth0, "partial", "settings/assignment_toggles_and_actions", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content_selection/header", options) : helperMissing.call(depth0, "partial", "content_selection/header", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content_selection/student", options) : helperMissing.call(depth0, "partial", "content_selection/student", options))));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content_selection/assignment", options) : helperMissing.call(depth0, "partial", "content_selection/assignment", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "grading", options) : helperMissing.call(depth0, "partial", "grading", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "student_information/index", options) : helperMissing.call(depth0, "partial", "student_information/index", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "assignment_information/index", options) : helperMissing.call(depth0, "partial", "assignment_information/index", options))));
  data.buffer.push("\n\n<div class=\"hr\"></div>\n");
  return buffer;
  
});
});
