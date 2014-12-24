define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['add/header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"bootstrap-form form-inline modules-create-item-form\">\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'autofocus': ("true"),
    'type': ("text"),
    'class': ("span4"),
    'value': ("model.title"),
    'placeholder': ("text.headerName"),
    'aria-label': ("text.headerName")
  },hashTypes:{'autofocus': "STRING",'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "ID",'aria-label': "ID"},hashContexts:{'autofocus': depth0,'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0,'aria-label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n  <button\n    class=\"btn btn-primary\"\n    type=\"submit\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add.header.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "create_header", "Create Header", options) : helperMissing.call(depth0, "t", "create_header", "Create Header", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n\n  <button\n    class=\"btn\"\n    type=\"button\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add.header.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n</form>\n\n");
  return buffer;
  
});
});
