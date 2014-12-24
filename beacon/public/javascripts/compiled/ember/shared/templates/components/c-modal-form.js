define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['components/c-modal-form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <ic-modal-main>\n    ");
  stack1 = (helper = helpers['ic-modal-trigger'] || (depth0 && depth0['ic-modal-trigger']),options={hash:{
    'class': ("ic-modal-close"),
    'aria-label': ("closeText")
  },hashTypes:{'class': "STRING",'aria-label': "ID"},hashContexts:{'class': depth0,'aria-label': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-modal-trigger", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ic-modal-main>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("×");
  }

  stack1 = helpers['if'].call(depth0, "isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
});
