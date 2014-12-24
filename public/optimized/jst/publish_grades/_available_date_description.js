define('jst/publish_grades/_available_date_description', ["compiled/handlebars_helpers","i18n!publish_grades.available_date_description"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/_available_date_description'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span class=\"status-description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.available_date_description")
  },data:data},helper ? helper.call(depth0, "not_available_until", "Not available until", options) : helperMissing.call(depth0, "t", "not_available_until", "Not available until", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unlockAt), "%b %-d", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.unlockAt), "%b %-d", options)))
    + "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span class=\"status-description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.available_date_description")
  },data:data},helper ? helper.call(depth0, "available_until", "Available until", options) : helperMissing.call(depth0, "t", "available_until", "Available until", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.lockAt), "%b %-d", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.lockAt), "%b %-d", options)))
    + "\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span class=\"status-description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.available_date_description")
  },data:data},helper ? helper.call(depth0, "closed", "Closed", options) : helperMissing.call(depth0, "t", "closed", "Closed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pending), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.open), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.closed), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
Handlebars.registerPartial('publish_grades/available_date_description', templates['publish_grades/_available_date_description']);

      
  return templates['publish_grades/_available_date_description'];
});
