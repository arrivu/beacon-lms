define('jst/feature_flags/featureFlag', ["compiled/handlebars_helpers","i18n!feature_flags.feature_flag"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['feature_flags/featureFlag'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <span class=\"label label-";
  if (helper = helpers.cssClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cssClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "estimated_release", "Estimated Release:", options) : helperMissing.call(depth0, "t", "estimated_release", "Estimated Release:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <span class=\"feature-release-date\">\n        "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.releaseOn), "%B %-d, %Y", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.releaseOn), "%B %-d, %Y", options)))
    + "\n      </span>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <span class=\"feature-lock-message\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOn), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "enabled", "Enabled", options) : helperMissing.call(depth0, "t", "enabled", "Enabled", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "disabled", "Disabled", options) : helperMissing.call(depth0, "t", "disabled", "Disabled", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"btn-group\" role=\"radiogroup\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isSiteAdmin), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.currentContextIsAccount), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.disableOff), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.disableOn), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <button type=\"button\"\n                    class=\"btn ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOn), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                    data-action=\"on\"\n                    data-name=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                    role=\"radio\"\n                    aria-checked=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOn), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "on", "On", options) : helperMissing.call(depth0, "t", "on", "On", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          ";
  return buffer;
  }
function program13(depth0,data) {
  
  
  return "active";
  }

function program15(depth0,data) {
  
  
  return "true";
  }

function program17(depth0,data) {
  
  
  return "false";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.disableAllow), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <button type=\"button\"\n                    class=\"btn ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isAllowed), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                    data-action=\"allowed\"\n                    data-name=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                    role=\"radio\"\n                    aria-checked=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isAllowed), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "allow", "Allow", options) : helperMissing.call(depth0, "t", "allow", "Allow", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n          ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <button type=\"button\"\n                  class=\"btn ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOff), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                  data-action=\"off\"\n                  data-name=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                  role=\"radio\"\n                  aria-checked=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOff), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "off", "Off", options) : helperMissing.call(depth0, "t", "off", "Off", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        (";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "no_description", "no description", options) : helperMissing.call(depth0, "t", "no_description", "no description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ")\n      ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a href=\"";
  if (helper = helpers.releaseNotesUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.releaseNotesUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"feature-release-notes-link\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "release_notes", "release notes", options) : helperMissing.call(depth0, "t", "release_notes", "release notes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    ";
  return buffer;
  }

  buffer += "<div class=\"row-fluid\">\n  <div class=\"span4\">\n    <span\n       class=\"element_toggler\"\n       aria-controls=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-details\"\n       aria-expanded=\"false\"\n       role=\"button\"\n       tabindex=\"0\">\n       <span class=\"screenreader-only\">\n         ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("feature_flags.feature_flag")
  },data:data},helper ? helper.call(depth0, "toggle_feature_details_screenreader_info", "Toggle feature details for %{title}", options) : helperMissing.call(depth0, "t", "toggle_feature_details_screenreader_info", "Toggle feature details for %{title}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       </span>\n       <i class=\"icon-mini-arrow-right\"></i>\n    </span>\n    <span class=\"feature-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.labels), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"span4 feature-release text-center\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.releaseOn), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n\n  <div class=\"span4 text-right\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isLocked), {hash:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n\n<div class=\"feature-details row-fluid\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-details\">\n  <div class=\"span10\">\n    <p tabindex=\"0\" class=\"feature-description\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  </div>\n\n  <div class=\"span2 text-right feature-detail-links\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.releaseNotesUrl), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['feature_flags/featureFlag'];
});
