(function(){define(["compiled/models/Progress","underscore"],function(e){var r;return r={initialize:function(){return this.progressModel=new e,this.attachProgressable()},saveWithProgressDeferred:function(){return this.save(),this.progressModel.pollDfd},attachProgressable:function(){var e=this;return this.on("change:progress_url",function(r,s){return e.progressModel.set({url:s,workflow_state:"queued"})}),this.progressModel.on("complete",function(){return e.fetch({success:function(){return e.trigger("progressResolved")}})})}}})}).call(this);