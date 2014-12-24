(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define(["./FileUploader","./ZipUploader"],function(t,r){var n;return new(n=function(){function n(){this.remove=e(this.remove,this),this.onUploadProgress=e(this.onUploadProgress,this)}return n.prototype._uploading=!1,n.prototype._queue=[],n.prototype.length=function(){return this._queue.length},n.prototype.flush=function(){return this._queue=[]},n.prototype.getAllUploaders=function(){var e;return e=this._queue.slice(),this.currentUploader&&(e=e.concat(this.currentUploader)),e.reverse()},n.prototype.getCurrentUploader=function(){return this.currentUploader},n.prototype.onChange=function(){},n.prototype.onUploadProgress=function(){return this.onChange()},n.prototype.createUploader=function(e,n,o,u){var i;return i=e.expandZip?new r(e,n,o,u):new t(e,n),i.onProgress=this.onUploadProgress,i},n.prototype.enqueue=function(e,t,r,n){var o;return o=this.createUploader(e,t,r,n),this._queue.push(o),this.attemptNextUpload()},n.prototype.dequeue=function(){return this._queue.shift()},n.prototype.remove=function(e){var t;return this.currentUploader===e&&(this.currentUploader=null),t=this._queue.indexOf(e),this._queue.splice(t,1),this.onChange()},n.prototype.attemptNextUpload=function(){var e=this;return this.onChange(),this._uploading||0===this._queue.length?void 0:(this.currentUploader=this.dequeue(),this.currentUploader?(this.onChange(),this._uploading=!0,this.currentUploader.upload().then(function(){return e._uploading=!1,e.currentUploader=null,e.onChange(),e.attemptNextUpload()})):void 0)},n}())})}).call(this);