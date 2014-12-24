define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['components/custom-column-cell'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"custom-column-cell padding-top\">\n    <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("id")
  },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <h4>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "column.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </h4>\n    </label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("value"),
    'name': ("id"),
    'id': ("id"),
    'disabled': ("column.isLoading"),
    'class': ("span8"),
    'maxlength': (255)
  },hashTypes:{'value': "ID",'name': "ID",'id': "ID",'disabled': "ID",'class': "STRING",'maxlength': "INTEGER"},hashContexts:{'value': depth0,'name': depth0,'id': depth0,'disabled': depth0,'class': depth0,'maxlength': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "column.hidden", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
