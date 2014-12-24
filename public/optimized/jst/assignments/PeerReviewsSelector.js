define('jst/assignments/PeerReviewsSelector', ["compiled/handlebars_helpers","i18n!assignments.peer_reviews_selector"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/PeerReviewsSelector'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "assignment[automatic_peer_reviews]";
  }

function program3(depth0,data) {
  
  
  return "automatic_peer_reviews";
  }

function program5(depth0,data) {
  
  
  return "assignment[peer_review_count]";
  }

function program7(depth0,data) {
  
  
  return "peer_review_count";
  }

function program9(depth0,data) {
  
  
  return "assignment[peer_reviews_assign_at]";
  }

function program11(depth0,data) {
  
  
  return "peer_reviews_assign_at";
  }

  buffer += "<div class=\"form-column-left\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "peer_reviews_header", "Peer Reviews", options) : helperMissing.call(depth0, "t", "peer_reviews_header", "Peer Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"form-column-right\">\n  <div class=\"border border-trbl border-round\">\n    <label class=\"checkbox flush\" for=\"assignment_peer_reviews\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_peer_reviews"),
    'prefix': ((depth0 && depth0.prefix)),
    'checked': ((depth0 && depth0.peerReviews)),
    'aria-controls': ("peer_reviews_details"),
    'disabled': ((depth0 && depth0.peerReviewsFrozen))
  },data:data},helper ? helper.call(depth0, "peer_reviews", options) : helperMissing.call(depth0, "checkbox", "peer_reviews", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "labels.require_peer_reviews", "Require Peer Reviews", options) : helperMissing.call(depth0, "t", "labels.require_peer_reviews", "Require Peer Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n\n    <div id=\"peer_reviews_details\"\n      aria-expanded=\"";
  if (helper = helpers.peerReviews) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.peerReviews); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.peerReviews), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.peerReviews), options)))
    + "\">\n      <div class=\"nested\">\n        <div class=\"subtitle\">\n          <strong>\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "how_to_peer_review", "How to Assign Peer Reviews", options) : helperMissing.call(depth0, "t", "how_to_peer_review", "How to Assign Peer Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </strong>\n        </div>\n        <label class=\"radio\" for=\"assignment_manual_peer_reviews\">\n          <input name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            id=\"assignment_manual_peer_reviews\"\n            type=\"radio\"\n            value=\"0\"\n            aria-controls=\"automatic_peer_reviews_options\"\n            "
    + escapeExpression((helper = helpers.checkedUnless || (depth0 && depth0.checkedUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.automaticPeerReviews), options) : helperMissing.call(depth0, "checkedUnless", (depth0 && depth0.automaticPeerReviews), options)))
    + "\n            "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "peer_reviews", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "peer_reviews", options)))
    + "/>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "labels.manually_assign_peer_reviews", "Manually Assign Peer Reviews", options) : helperMissing.call(depth0, "t", "labels.manually_assign_peer_reviews", "Manually Assign Peer Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <label class=\"radio\" for=\"assignment_automatic_peer_reviews\">\n          <input name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            id=\"assignment_automatic_peer_reviews\"\n            type=\"radio\"\n            value=\"1\"\n            aria-controls=\"automatic_peer_reviews_options\"\n            "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.automaticPeerReviews), options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.automaticPeerReviews), options)))
    + "\n            "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "peer_reviews", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "peer_reviews", options)))
    + "/>\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "labels.automatically_assign_peer_reviews", "Automatically Assign Peer Reviews", options) : helperMissing.call(depth0, "t", "labels.automatically_assign_peer_reviews", "Automatically Assign Peer Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <div id=\"automatic_peer_reviews_options\"\n          aria-enabled=\"";
  if (helper = helpers.automaticPeerReviews) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.automaticPeerReviews); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.automaticPeerReviews), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.automaticPeerReviews), options)))
    + "\">\n\n          <label for=\"assignment_peer_review_count\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "reviews_per_user", "Reviews Per User", options) : helperMissing.call(depth0, "t", "reviews_per_user", "Reviews Per User", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <input id=\"assignment_peer_review_count\"\n            name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            value=\"";
  if (helper = helpers.peerReviewCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.peerReviewCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            type=\"text\"\n            "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "peer_reviews", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "peer_reviews", options)))
    + "/>\n\n          <label for=\"assignment_peer_reviews_assign_at\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "locked_until", "Assign Reviews", options) : helperMissing.call(depth0, "t", "locked_until", "Assign Reviews", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <input id=\"assignment_peer_reviews_assign_at\"\n            name=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.nested), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            class=\"date_field datetime_field hasDatePicker\"\n            value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.peerReviewsAssignAt), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.peerReviewsAssignAt), false, options)))
    + "\"\n            type=\"text\"\n            "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "peer_reviews", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "peer_reviews", options)))
    + "/>\n          <div class=\"explanation nest\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.peer_reviews_selector")
  },data:data},helper ? helper.call(depth0, "peer_reviews_assign_at_explanation", "Must come after due date. If blank, uses due date.", options) : helperMissing.call(depth0, "t", "peer_reviews_assign_at_explanation", "Must come after due date. If blank, uses due date.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n";
  return buffer;
  });
  
      
  return templates['assignments/PeerReviewsSelector'];
});
