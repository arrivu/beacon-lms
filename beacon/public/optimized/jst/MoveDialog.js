define('jst/MoveDialog', ["compiled/handlebars_helpers","i18n!move_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['MoveDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"form-dialog-content form-horizontal move-dialog\">\n  <h2 class=\"move-select-header\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("move_dialog"),
    'w0': ("<b>$1</b>")
  },data:data},helper ? helper.call(depth0, "where_to_move", "Where would you like to move *%{name}*?", options) : helperMissing.call(depth0, "t", "where_to_move", "Where would you like to move *%{name}*?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n  <div class=\"child_container\">\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"cancel_button btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("move_dialog")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"create_group btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("move_dialog")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("move_dialog")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['MoveDialog'];
});
