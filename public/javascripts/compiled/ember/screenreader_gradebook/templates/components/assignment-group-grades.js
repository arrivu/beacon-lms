define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['components/assignment-group-grades'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <span class=\"perc\">");
  stack1 = helpers._triageMustache.call(depth0, "percent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <span class=\"points\">");
  stack1 = helpers._triageMustache.call(depth0, "scoreDetail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        -\n      ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <span class='letter-grade-points'>");
  stack1 = helpers._triageMustache.call(depth0, "letterGrade", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <span class=\"weight\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "ag.group_weight", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%\n      </span>\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n      -\n    ");
  }

  data.buffer.push("<tr>\n  <td>\n    <strong>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "ag.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </strong>\n  </td>\n\n  <td class=\"assignment-group-grade\">\n    <span class=\"grade\">\n      ");
  stack1 = helpers['if'].call(depth0, "hasGrade", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </td>\n\n  <td>\n    <span class=\"grade\">\n      ");
  stack1 = helpers['if'].call(depth0, "letterGrade", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </td>\n\n  <td>\n    ");
  stack1 = helpers['if'].call(depth0, "hasWeightedGroups", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </td>\n</tr>\n");
  return buffer;
  
});
});
