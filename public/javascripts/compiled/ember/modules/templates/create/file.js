define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['create/file'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"bootstrap-form form-inline modules-create-item-form\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("document")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['c-file-input'] || (depth0 && depth0['c-file-input']),options={hash:{
    'type': ("file"),
    'files': ("files"),
    'value': ("fileValue"),
    'aria-label': ("text.file")
  },hashTypes:{'type': "STRING",'files': "ID",'value': "ID",'aria-label': "ID"},hashContexts:{'type': depth0,'files': depth0,'value': depth0,'aria-label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-file-input", options))));
  data.buffer.push("\n\n  <button\n    class=\"btn btn-primary\"\n    type=\"submit\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.create.file.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "upload", "Upload", options) : helperMissing.call(depth0, "t", "upload", "Upload", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n\n  <button\n    class=\"btn\"\n    type=\"button\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.create.file.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n</form>\n\n");
  return buffer;
  
});
});
