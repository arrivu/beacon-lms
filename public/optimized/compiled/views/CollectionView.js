(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,i=function(t,i){function r(){this.constructor=t}for(var n in i)e.call(i,n)&&(t[n]=i[n]);return r.prototype=i.prototype,t.prototype=new r,t.__super__=i.prototype,t};define(["i18n!instructure","jquery","underscore","Backbone","jst/collectionView"],function(e,r,n,o,s){var p,h;return p=function(o){function p(){return this.renderItem=t(this.renderItem,this),this.renderOnAdd=t(this.renderOnAdd,this),this.removeItem=t(this.removeItem,this),this.renderOnReset=t(this.renderOnReset,this),this.removePreviousItems=t(this.removePreviousItems,this),this.reorder=t(this.reorder,this),this.render=t(this.render,this),h=p.__super__.constructor.apply(this,arguments)}return i(p,o),p.optionProperty("itemView"),p.optionProperty("itemViewOptions"),p.optionProperty("emptyMessage"),p.optionProperty("listClassName"),p.prototype.className="collectionView",p.prototype.els={".collectionViewItems":"$list"},p.prototype.defaults={itemViewOptions:{},emptyMessage:e.t("no_items","No items.")},p.prototype.template=s,p.prototype.initialize=function(){return p.__super__.initialize.apply(this,arguments),this.attachCollection()},p.prototype.render=function(){return p.__super__.render.apply(this,arguments),this.empty||this.renderItems(),this},p.prototype.toJSON=function(){return n.extend(this.options,{emptyMessage:this.emptyMessage,listClassName:this.listClassName,ENV:ENV})},p.prototype.reorder=function(){var t,e,i;return this.collection.sort(),this.$list.children().detach(),t=function(){var t,i,r,n;for(r=this.collection.models,n=[],t=0,i=r.length;i>t;t++)e=r[t],n.push(e.itemView.$el);return n}.call(this),(i=this.$list).append.apply(i,t)},p.prototype.attachCollection=function(){return this.listenTo(this.collection,"reset",this.renderOnReset),this.listenTo(this.collection,"add",this.renderOnAdd),this.listenTo(this.collection,"remove",this.removeItem),this.empty=!this.collection.length},p.prototype.detachCollection=function(){return this.stopListening(this.collection)},p.prototype.switchCollection=function(t){return this.detachCollection(),this.collection=t,this.attachCollection()},p.prototype.removePreviousItems=function(t){var e,i,r,n,o;for(o=[],i=0,r=t.length;r>i;i++)e=t[i],o.push(null!=(n=e.view)?n.remove():void 0);return o},p.prototype.renderOnReset=function(t,e){return this.empty=!this.collection.length,this.removePreviousItems(e.previousModels),this.render()},p.prototype.renderItems=function(){return this.collection.each(this.renderItem)},p.prototype.removeItem=function(t){return this.empty=!this.collection.length,this.empty?this.render():t.view.remove()},p.prototype.renderOnAdd=function(t){return this.empty&&this.render(),this.empty=!1,this.renderItem(t)},p.prototype.renderItem=function(t){var e;return e=this.createItemView(t),e.render(),"function"==typeof this.attachItemView&&this.attachItemView(t,e),this.insertView(e)},p.prototype.createItemView=function(t){var e;return e=new this.itemView(r.extend({},this.itemViewOptions||{},{model:t})),t.itemView=e,e},p.prototype.insertView=function(t){var e;return e=this.collection.indexOf(t.model),0===e?this.prependView(t):e===this.collection.length-1?this.appendView(t):this.insertViewAtIndex(t,e)},p.prototype.insertViewAtIndex=function(t,e){var i;return i=this.$list.children().eq(e),i.length?i.before(t.el):this.$list.append(t.el)},p.prototype.prependView=function(t){return this.$list.prepend(t.el)},p.prototype.appendView=function(t){return this.$list.append(t.el)},p}(o.View)})}).call(this);