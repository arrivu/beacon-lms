(function(){var t={}.hasOwnProperty,e=function(e,r){function o(){this.constructor=e}for(var a in r)t.call(r,a)&&(e[a]=r[a]);return o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e};define(["i18n!groups","jquery","underscore","Backbone","compiled/views/CollectionView","compiled/views/groups/manage/GroupCategoryView","compiled/views/groups/manage/GroupCategoryCreateView","compiled/models/GroupCategory","jst/groups/manage/groupCategories","jst/groups/manage/groupCategoryTab","jqueryui/tabs"],function(t,r,o,a,i,n,s,p,u,l){var c,d,h;return d=a.View,c=function(t){function a(){return h=a.__super__.constructor.apply(this,arguments)}return e(a,t),a.prototype.template=u,a.prototype.className="group_categories_area",a.prototype.els=o.extend({},i.prototype.els,{"#group_categories_tabs":"$tabs","li.static":"$static","#add-group-set":"$addGroupSetButton",".empty-groupset-instructions":"$emptyInstructions"}),a.prototype.events={"click #add-group-set":"addGroupSet","tabsactivate #group_categories_tabs":"activatedTab"},a.prototype.itemView=d.extend({tagName:"li",template:function(){var t;return l(o.extend(this.model.present(),{id:null!=(t=this.model.id)?t:this.model.cid}))}}),a.prototype.render=function(){return a.__super__.render.apply(this,arguments),this.collection.length>1&&this.reorder(),this.refreshTabs(),this.loadTabFromUrl()},a.prototype.refreshTabs=function(){return this.collection.length>0&&(this.$tabs.find("ul.ui-tabs-nav li.static").remove(),this.$tabs.find("ul.ui-tabs-nav").prepend(this.$static)),this.$tabs.data("tabs")?this.$tabs.tabs("refresh").show():this.$tabs.tabs({cookie:{}}).show(),this.$tabs.tabs({beforeActivate:function(t,e){return!e.newTab.hasClass("static")}}),this.collection.length>0?this.$emptyInstructions.hide():(this.$emptyInstructions.show(),this.$tabs.hide()),this.$tabs.find("li.static a").unbind(),this.$tabs.on("keydown","li.static",function(t){return t.stopPropagation(),13===t.keyCode||32===t.keyCode?window.location.href=r(this).find("a").attr("href"):void 0})},a.prototype.loadTabFromUrl=function(){var t,e;return"#new"===location.hash?this.addGroupSet():(t=location.hash.split("-")[1],null!=t&&(e=this.collection.get(t))?this.$tabs.tabs({active:this.tabOffsetOfModel(e)}):void 0)},a.prototype.tabOffsetOfModel=function(t){var e,r;return e=this.collection.indexOf(t),r=this.$static.length,e+r},a.prototype.createItemView=function(t){var e,o,i,n,s=this;return o="tab-"+(null!=(n=t.id)?n:t.cid),e=r("<div/>").addClass("tab-panel").attr("id",o).data("loaded",!1).data("model",t),this.$tabs.append(e),1===this.$tabs.find(".tab-panel").length&&this.loadPanelView(e,t),i=a.__super__.createItemView.apply(this,arguments),i.listenTo(t,"change",function(){return i.render(),s.reorder(),s.refreshTabs()}),i},a.prototype.renderItem=function(){return a.__super__.renderItem.apply(this,arguments),this.refreshTabs()},a.prototype.removeItem=function(t){var e;return a.__super__.removeItem.apply(this,arguments),t.itemView.remove(),null!=(e=t.panelView)&&e.remove(),this.refreshTabs()},a.prototype.addGroupSet=function(t){var e,r,o=this;return null!=t&&t.preventDefault(),null==(r=this.createView)&&(this.createView=new s({collection:this.collection,trigger:this.$addGroupSetButton})),e=new p,e.once("sync",function(){return window.location.hash="tab-"+e.id,o.collection.add(e),o.reorder(),o.refreshTabs(),o.$tabs.tabs({active:o.tabOffsetOfModel(e)}),e.set("create_group_count",null)}),this.createView.model=e,this.createView.open()},a.prototype.activatedTab=function(t,e){var r;return r=e.newPanel,this.loadPanelView(r)},a.prototype.loadPanelView=function(t){var e,r;return t.data("loaded")||(r=t.data("model"),e=new n({model:r}),e.setElement(t),e.render(),r.panelView=t,t.data("loaded",!0)),t},a.prototype.toJSON=function(){var t,e;return e=a.__super__.toJSON.apply(this,arguments),e.ENV=ENV,t=ENV.context_asset_string.split("_"),e.context=t[0],e.isCourse="course"===e.context,e.context_id=t[1],e},a}(i)})}).call(this);