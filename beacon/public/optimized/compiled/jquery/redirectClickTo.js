(function(){define(["jquery"],function(e){return e.fn.redirectClickTo=function(t,n){var i;return null==n&&(n={}),(t=e(t).get(0))?(n.css!==!1&&(i=n.css||{cursor:"pointer"}),i&&this.css(i),this.off(".redirectClickTo"),this.on("click.redirectClickTo",function(e){var n,i,r;if(i=e.target===t,i=i||e.isDefaultPrevented(),!i){if(e.stopPropagation(),e.preventDefault(),document.createEvent)return r=e.originalEvent,n=document.createEvent("MouseEvents"),n.initMouseEvent(r.type,!0,!0,window,0,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget),t.dispatchEvent(n);if(t.click)return t.click()}})):void 0}})}).call(this);