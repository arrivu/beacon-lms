(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,o=function(t,o){function n(){this.constructor=t}for(var r in o)e.call(o,r)&&(t[r]=o[r]);return n.prototype=o.prototype,t.prototype=new n,t.__super__=o.prototype,t};define(["i18n!account_settings","jquery","underscore","Backbone","jst/feature_flags/featureFlagAdminView","compiled/collections/FeatureFlagCollection","compiled/views/feature_flags/FeatureFlagListView"],function(e,n,r,c,u,i,s){var l;return l=function(l){function a(){this.onSync=t(this.onSync,this),a.__super__.constructor.apply(this,arguments),this.collection=new i,this.attachEvents()}return o(a,l),a.prototype.template=u,a.prototype["default"]={account:[],rootaccount:[],course:[],user:[]},a.prototype.els={".alert":"$alertBox"},a.prototype.featureGroups=["account","course","user"],a.prototype.titles={account:e.t("account","Account"),course:e.t("course","Course"),user:e.t("user","User")},a.prototype.attachEvents=function(){return this.collection.on("sync",this.onSync)},a.prototype.onSync=function(){return this.collection.off("sync"),this.render()},a.prototype.shouldShowTitles=function(t){var e;return e=r.map(this.featureGroups,function(e){return t[e].length}),r.reject(e,function(t){return 0===t}).length>1},a.prototype.render=function(){var t,e=this;return a.__super__.render.apply(this,arguments),this.collection.length?this.$alertBox.hide():this.$alertBox.show(),t=r.extend({},this["default"],this.collection.groupBy("appliesTo")),t.account=t.account.concat(t.rootaccount),r.each(this.featureGroups,function(o){var r,u,i;if(null!=(i=t[o])?i.length:void 0)return r=e.shouldShowTitles(t)?e.titles[o]:null,u=new s({collection:new c.Collection(t[o]),el:n("."+o+"-feature-flags"),title:r}),u.render()})},a}(c.View)})}).call(this);