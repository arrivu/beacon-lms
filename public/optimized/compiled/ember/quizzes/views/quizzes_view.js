(function(){define(["ember"],function(e){var n;return n=e.View.extend({ensureGroupVisibility:function(){return e.run.scheduleOnce("afterRender",this,function(){var n,r,t,i,l,o,s,c,u;for(c=this.$(".item-group-condensed"),u=[],o=0,s=c.length;s>o;o++)l=c[o],r=e.$(l),n=r.find('.ig-header-title[aria-expanded="false"]'),i=r.find(".ig-row-empty").length,t=n.length,u.push(!i&&t?n.click():void 0);return u})}.observes("controller.assignments.length","controller.practices.length","controller.surveys.length")})})}).call(this);