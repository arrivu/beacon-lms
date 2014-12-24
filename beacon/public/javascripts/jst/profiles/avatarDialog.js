define('jst/profiles/avatarDialog', ["compiled/handlebars_helpers","i18n!profiles.avatar_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/avatarDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li class=\"active\">\n        <a href=\"#upload-picture\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.avatar_dialog")
  },data:data},helper ? helper.call(depth0, "upload_a_picture", "Upload a Picture", options) : helperMissing.call(depth0, "t", "upload_a_picture", "Upload a Picture", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </li>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li>\n        <a href=\"#take-picture\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.avatar_dialog")
  },data:data},helper ? helper.call(depth0, "take_a_picture", "Take a Picture", options) : helperMissing.call(depth0, "t", "take_a_picture", "Take a Picture", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"avatar-nav\">\n  <ul class=\"nav nav-pills\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasFileReader), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasGetUserMedia), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <li>\n      <a href=\"#from-gravatar\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.avatar_dialog")
  },data:data},helper ? helper.call(depth0, "from_gravatar", "From Gravatar", options) : helperMissing.call(depth0, "t", "from_gravatar", "From Gravatar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    </li>\n  </ul>\n</div>\n\n<div class=\"avatar-content\">\n  <div class=\"active\" id=\"upload-picture\"></div>\n  <div id=\"take-picture\" class=\"text-center\"></div>\n  <div id=\"from-gravatar\" class=\"text-center\"></div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['profiles/avatarDialog'];
});
