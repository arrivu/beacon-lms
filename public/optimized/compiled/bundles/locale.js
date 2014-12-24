(function(){var t=function(t,i){return function(){return t.apply(i,arguments)}};define("compiled/util/Popover",["jquery"],function(i){var e,r,o,n;return n=function(t,e){return i(this).css(t).toggleClass("carat-bottom","bottom"===e.vertical)},o=0,r=[],e=function(){function e(e,r,o){var n=this;this.content=r,this.options=null!=o?o:{},this.position=t(this.position,this),this.outsideClickHandler=t(this.outsideClickHandler,this),this.trigger=i(e.currentTarget),this.el=i(this.content).addClass("carat-bottom").data("popover",this).keydown(function(t){var e,r;if(t.keyCode===i.ui.keyCode.ESCAPE&&(n.hide(),n.previousTarget&&n.previousTarget.is(":visible")&&n.previousTarget.focus()),t.keyCode===i.ui.keyCode.TAB&&(r=i(":tabbable",n.el),e=i.inArray(t.target,r),-1!==e))if(t.shiftKey){if(0===e)return n.hide()}else if(e===r.length-1)return n.hide()}),this.el.delegate(".popover_close","click",function(t){return t.preventDefault(),n.hide(),n.previousTarget&&n.previousTarget.is(":visible")?n.previousTarget.focus():void 0}),this.show(e)}return e.prototype.show=function(t){for(var e,n,s,a,l,u,h,c=this;u=r.pop();)u.hide();return r.push(this),a="popover-"+o++,this.trigger.attr({"aria-expanded":!0,"aria-controls":a}),this.previousTarget=t.currentTarget,this.el.attr({id:a}).appendTo(document.body).show(),this.position(),this.el.find(":tabbable").first().focus(),setTimeout(function(){return c.el.find(":tabbable").first().focus()},100),this.el.find(".ui-menu-carat").remove(),s=this.trigger.offset().left-this.el.offset().left,e=t.pageX-this.trigger.offset().left,l=Math.max(0,this.trigger.width()/2-this.el.width()/2)+20,h=this.trigger.width()-l,n=Math.min(Math.max(l,e),h)+s,i('<span class="ui-menu-carat"><span /></span>').css("left",n).prependTo(this.el),this.positionInterval=setInterval(this.position,200),i(window).click(this.outsideClickHandler)},e.prototype.hide=function(){var t,e,o,n;for(t=o=0,n=r.length;n>o;t=++o)e=r[t],this===e&&r.splice(t,1);return this.el.detach(),this.trigger.attr("aria-expanded",!1),clearInterval(this.positionInterval),i(window).unbind("click",this.outsideClickHandler)},e.prototype.ignoreOutsideClickSelector=".ui-dialog",e.prototype.outsideClickHandler=function(t){return i(t.target).closest(this.el.add(this.trigger).add(this.ignoreOutsideClickSelector)).length?void 0:this.hide()},e.prototype.position=function(){return this.el.position({my:"center "+("bottom"===this.options.verticalSide?"top":"bottom"),at:"center "+(this.options.verticalSide||"top"),of:this.trigger,offset:"0 -10px",within:"body",collision:"flipfit "+(this.options.verticalSide?"none":"flipfit"),using:n})},e}()})}).call(this),function(){var t=[].indexOf||function(t){for(var i=0,e=this.length;e>i;i++)if(i in this&&this[i]===t)return i;return-1};require(["jquery","compiled/util/Popover"],function(i){return i(function(){var e,r,o;return e=i("select.locale"),r=i("i.locale-warning"),r.hide(),o=function(){var i;return i=e.val(),t.call(ENV.crowdsourced_locales,i)>=0?r.show():r.hide()},e.change(function(){return o()}),o()})})}.call(this),define("compiled/bundles/locale",function(){});