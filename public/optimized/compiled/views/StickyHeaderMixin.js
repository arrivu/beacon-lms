(function(){define(["jquery","compiled/jquery/sticky"],function(){return{afterRender:function(){return this.stickyHeader&&this.stickyHeader.remove(),this.stickyHeader=this.$("[data-sticky]").sticky()}}})}).call(this);