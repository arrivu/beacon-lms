(function(){var e={}.hasOwnProperty,t=function(t,r){function n(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t};define(["i18n!discussions","jquery","underscore","Backbone","jquery.ajaxJSON"],function(e,r,n,o){var s,a;return s=function(s){function i(){return a=i.__super__.constructor.apply(this,arguments)}return t(i,s),i.prototype.defaults={id:null,parent_id:null,message:e.t("no_content","No Content"),user_id:null,read_state:"read",forced_read_state:!1,created_at:null,updated_at:null,deleted:!1,attachment:null,replies:[],canAttach:ENV.DISCUSSION.PERMISSIONS.CAN_ATTACH,"new":!1,highlight:!1},i.prototype.computedAttributes=["canModerate","canReply","speedgraderUrl","inlineReplyLink",{name:"allowsSideComments",deps:["parent_id","deleted"]},{name:"allowsThreadedReplies",deps:["deleted"]},{name:"showBoxReplyLink",deps:["allowsSideComments"]},{name:"collapsable",deps:["replies","allowsSideComments","allowsThreadedReplies"]},{name:"summary",deps:["message"]}],i.prototype.read=function(){return""+ENV.DISCUSSION.ENTRY_ROOT_URL+"?ids[]="+this.get("id")},i.prototype.create=function(){var e;return this.set("author",ENV.DISCUSSION.CURRENT_USER),e=this.get("parent_id"),null===e?ENV.DISCUSSION.ROOT_REPLY_URL:ENV.DISCUSSION.REPLY_URL.replace(/:entry_id/,e)},i.prototype["delete"]=function(){return ENV.DISCUSSION.DELETE_URL.replace(/:id/,this.get("id"))},i.prototype.update=function(){return ENV.DISCUSSION.DELETE_URL.replace(/:id/,this.get("id"))},i.prototype.sync=function(e,t,r){return null==r&&(r={}),r.url=this[e](),o.sync(e,this,r)},i.prototype.parse=function(e){return n.isArray(e)?e[0]:e},i.prototype.toJSON=function(){var e;return e=i.__super__.toJSON.apply(this,arguments),n.pick(e,"id","parent_id","message","user_id","read_state","forced_read_state","created_at","updated_at","deleted","attachment","replies","author")},i.prototype.canModerate=function(){var e;return e=this.get("user_id")+""===ENV.DISCUSSION.CURRENT_USER.id,e&&ENV.DISCUSSION.PERMISSIONS.CAN_MANAGE_OWN||ENV.DISCUSSION.PERMISSIONS.MODERATE},i.prototype.canReply=function(){return this.get("deleted")?!1:ENV.DISCUSSION.PERMISSIONS.CAN_REPLY?!0:!1},i.prototype.inlineReplyLink=function(){return ENV.DISCUSSION.THREADED&&(this.allowsThreadedReplies()||this.allowsSideComments())?!0:!1},i.prototype.allowsThreadedReplies=function(){return this.get("deleted")?!1:ENV.DISCUSSION.PERMISSIONS.CAN_REPLY&&ENV.DISCUSSION.THREADED?!0:!1},i.prototype.allowsSideComments=function(){return this.get("deleted")?!1:ENV.DISCUSSION.PERMISSIONS.CAN_REPLY?ENV.DISCUSSION.THREADED?!1:this.get("parent_id")?!1:!0:!1},i.prototype.showBoxReplyLink=function(){return this.allowsSideComments()},i.prototype.collapsable=function(){return this.hasChildren()||this.allowsSideComments()||this.allowsThreadedReplies()},i.prototype.speedgraderUrl=function(){return ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE?ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE.replace(/%22:student_id%22/,this.get("user_id")):void 0},i.prototype.summary=function(){return this.escapeDiv||(this.escapeDiv=r("<div/>")),this.escapeDiv.html(this.get("message")).text()},i.prototype.markAsRead=function(){var e;return this.set("read_state","read"),e=ENV.DISCUSSION.MARK_READ_URL.replace(/:id/,this.get("id")),r.ajaxJSON(e,"PUT")},i.prototype.markAsUnread=function(){var e;return this.set({read_state:"unread",forced_read_state:!0}),e=ENV.DISCUSSION.MARK_UNREAD_URL.replace(/:id/,this.get("id")),r.ajaxJSON(e,"DELETE",{forced_read_state:!0})},i.prototype.hasChildren=function(){return this.get("replies").length>0},i}(o.Model)})}).call(this);