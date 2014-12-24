(function(){var e={}.hasOwnProperty,t=function(t,r){function o(){this.constructor=t}for(var a in r)e.call(r,a)&&(t[a]=r[a]);return o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype,t};define(["i18n!outcomes","Backbone","underscore","compiled/views/CollectionView","compiled/views/grade_summary/OutcomeView","jst/grade_summary/group"],function(e,r,o,a,i,s){var n,d,p,l;return p=r.View,n=r.Collection,d=function(r){function n(){return l=n.__super__.constructor.apply(this,arguments)}return t(n,r),n.prototype.tagName="li",n.prototype.className="group",n.prototype.els={".outcomes":"$outcomes"},n.prototype.events={"click .group-description":"expand","keyclick .group-description":"expand"},n.prototype.template=s,n.prototype.render=function(){var e;return n.__super__.render.apply(this,arguments),e=new a({el:this.$outcomes,collection:this.model.get("outcomes"),itemView:i}),e.render()},n.prototype.expand=function(){var e,t;return this.$el.toggleClass("expanded"),this.$el.hasClass("expanded")?this.$el.children("div.group-description").attr("aria-expanded","true"):this.$el.children("div.group-description").attr("aria-expanded","false"),e=$("div.outcome-toggles a.icon-collapse"),0===$("li.group.expanded").length?(e.attr("disabled","disabled"),e.attr("aria-disabled","true")):(e.removeAttr("disabled"),e.attr("aria-disabled","false")),t=$("div.outcome-toggles a.icon-expand"),0===$("li.group:not(.expanded)").length?(t.attr("disabled","disabled"),t.attr("aria-disabled","true")):(t.removeAttr("disabled"),t.attr("aria-disabled","false"))},n.prototype.statusTooltip=function(){switch(this.model.status()){case"undefined":return e.t("undefined","Unstarted");case"remedial":return e.t("remedial","Remedial");case"near":return e.t("near","Near mastery");case"mastery":return e.t("mastery","Mastery")}},n.prototype.toJSON=function(){var e;return e=n.__super__.toJSON.apply(this,arguments),o.extend(e,{statusTooltip:this.statusTooltip()})},n}(p)})}).call(this);