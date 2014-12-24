define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['settings/sort_select'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row pad-box bottom-only\">\n  <div class=\"span4\">\n    <label for=\"arrange_assignments\" class=\"text-right-responsive\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.settings.sort_select.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "sort_assignments", "Sort assignments", options) : helperMissing.call(depth0, "t", "sort_assignments", "Sort assignments", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n  <div class=\"span8\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'name': ("arrange_assignments"),
    'id': ("arrange_assignments"),
    'items': ("assignmentSortOptions"),
    'selected': ("assignmentSort"),
    'value': ("assignmentSort.value")
  },hashTypes:{'name': "STRING",'id': "STRING",'items': "ID",'selected': "ID",'value': "ID"},hashContexts:{'name': depth0,'id': depth0,'items': depth0,'selected': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});
});
