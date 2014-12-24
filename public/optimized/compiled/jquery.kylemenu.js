(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};define(["jquery","jquery.ui.menu.inputmenu","jqueryui/button","jqueryui/popup"],function(e){var n;return n=function(){function n(i,s){this.keepButtonActive=t(this.keepButtonActive,this),this.close=t(this.close,this),this.onClose=t(this.onClose,this),this.select=t(this.select,this),this.onKeyDown=t(this.onKeyDown,this),this.onOpen=t(this.onOpen,this);var o,r,u,p=this;this.$trigger=e(i).data("kyleMenu",this),this.$ariaMenuWrapper=this.$trigger.parent(),this.opts=e.extend(!0,{},n.defaults,s),this.opts.noButton||(this.opts.buttonOpts.addDropArrow&&this.$trigger.append('<i class="icon-mini-arrow-down"></i>'),this.$trigger.button(this.opts.buttonOpts),this.$trigger.bind("mouseleave.button",this.keepButtonActive)),this.$menu=this.$trigger.next().menu(this.opts.menuOpts).popup(this.opts.popupOpts).addClass("ui-kyle-menu use-css-transitions-for-show-hide"),this.opts.appendMenuTo&&(o=this.$menu.data("popup"),u=o.open,r=this,o.open=function(){return r.$menu.appendTo(r.opts.appendMenuTo),u.apply(this,arguments)},this.$placeholder=e('<span style="display:none;">').insertAfter(this.$menu),this.$menu.bind("click",function(){var t;return(t=p.$placeholder).trigger.apply(t,arguments)})),this.opts.notifyMenuActiveOnParent&&(this.$notifyParent=this.$trigger.closest(this.opts.notifyMenuActiveOnParent)),this.$menu.on({menuselect:this.select,popupopen:this.onOpen,popupclose:this.onClose,keydown:this.onKeyDown})}return n.prototype.onOpen=function(t){return this.$ariaMenuWrapper.attr("role","application"),this.adjustCarat(t),this.$menu.addClass("ui-state-open"),this.opts.notifyMenuActiveOnParent?this.$notifyParent.addClass("menu_active"):void 0},n.prototype.onKeyDown=function(t){return 9===t.keyCode?this.$trigger.focus():void 0},n.prototype.open=function(){return this.$menu.popup("open")},n.prototype.select=function(t,n){var i,s,o,r;return"click"!==(null!=(r=t.originalEvent)?r.type:void 0)&&(i=e(n.item).find("a"))&&(t.preventDefault(),s=i[0],o=document.createEvent("MouseEvent"),o.initEvent("click",!0,!0),s.dispatchEvent(o)),this.close()},n.prototype.onClose=function(){return this.opts.appendMenuTo&&this.$menu.insertBefore(this.$placeholder),this.$trigger.removeClass("ui-state-active"),this.$ariaMenuWrapper.removeAttr("role"),this.$menu.removeClass("ui-state-open"),this.opts.notifyMenuActiveOnParent?this.$notifyParent.removeClass("menu_active"):void 0},n.prototype.close=function(){return this.$menu.hasClass("ui-state-open")&&this.$menu.popup("close").removeClass("ui-state-open")},n.prototype.keepButtonActive=function(){return this.$menu.is(".ui-state-open")&&this.$trigger.is(".btn, .ui-button")?this.$trigger.addClass("ui-state-active"):void 0},n.prototype.adjustCarat=function(t){var n,i,s,o,r,u,p;return null!=(p=this.$carat)&&p.remove(),this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active"),u=this.$trigger.outerWidth(),r=this.$trigger.offset().left,o=t.pageX||r+u/2,s=r-this.$menu.offset().left,n=o-this.$trigger.offset().left,i=Math.min(Math.max(6,n),u-6)+s,this.$carat=e('<span class="ui-menu-carat"><span /></span>').css("left",i).prependTo(this.$menu),this.$menu.css("-webkit-transform-origin-x",i+"px")},n.defaults={popupOpts:{position:{my:"center top",at:"center bottom",offset:"0 10px",within:"#main",collision:"fit"}},buttonOpts:{addDropArrow:!0}},n}(),e.fn.kyleMenu=function(t){return this.each(function(){return e(this).data().kyleMenu?void 0:new n(this,t)})},n})}).call(this);