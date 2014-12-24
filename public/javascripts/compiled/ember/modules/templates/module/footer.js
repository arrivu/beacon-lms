define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['module/footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div>will unlock <span class=\"unlock_at\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "unlock_at", options) : helperMissing.call(depth0, "format-date", "unlock_at", options))));
  data.buffer.push("</span></div>\n    ");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "addItem", "", options) : helperMissing.call(depth0, "render", "addItem", "", options))));
  data.buffer.push("\n\n<div class=\"footer\">\n  <div class=\"progression_container\">\n    ");
  stack1 = helpers['if'].call(depth0, "locked", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <div class=\"prerequisites_footer\" style=\"display: none;\">\n    <div class=\"prerequisites_message\" style=\"float: left;\">\n      Prerequisites: \n    </div>\n    <div class=\"prerequisites\"></div>\n  </div>\n</div>\n\n");
  return buffer;
  
});
});
