(function(){define(["underscore","../modules/UploadQueue"],function(t,e){var s;return new(s=function(){function s(){this.state=this.buildDefaultState()}return s.prototype.buildDefaultState=function(){return{resolvedNames:[],nameCollisions:[],zipOptions:[],newOptions:!1}},s.prototype.queueUploads=function(t,s){var i=this;return this.state.resolvedNames.forEach(function(o){return e.enqueue(o,i.folder,t,s)}),this.setState({newOptions:!1})},s.prototype.toFilesOptionArray=function(t){var e,s;for(e=[],s=0;s<t.length;)e.push({file:t.item(s)}),s++;return e},s.prototype.fileNameExists=function(e){var s;return s=t.find(this.folder.files.models,function(t){return t.get("display_name")===e})},s.prototype.isZipFile=function(t){var e;return!!(null!=(e=t.type)?e.match(/zip/):void 0)},s.prototype.segregateOptionBuckets=function(t){var e,s,i,o,n,r;for(i=0,e=[],n=[],r=[];i<t.length;)s=t[i],o=s.name||s.file.name,this.isZipFile(s.file)&&void 0===s.expandZip?r.push(s):!this.fileNameExists(o)||"overwrite"===s.dup||null!=s.expandZip&&s.expandZip!==!1?n.push(s):e.push(s),i++;return{collisions:e,resolved:n,zips:r}},s.prototype.handleAddFilesClick=function(){return this.refs.addFileInput.getDOMNode().click()},s.prototype.handleFilesInputChange=function(){var t,e,s,i,o;return s=this.toFilesOptionArray(this.refs.addFileInput.getDOMNode().files),o=this.segregateOptionBuckets(s),e=o.resolved,t=o.collisions,i=o.zips,this.setState({nameCollisions:t,resolvedNames:e,zipOptions:i})},s.prototype.onNameConflictResolved=function(t){var e,s,i,o,n,r,p;return i=this.state.nameCollisions,n=this.state.resolvedNames,r=this.state.zipOptions,n.push(t),i.shift(),e=n.concat(i).concat(r),p=this.segregateOptionBuckets(e),o=p.resolved,s=p.collisions,r=p.zips,this.setState({nameCollisions:s,resolvedNames:o,zipOptions:r})},s.prototype.onZipOptionsResolved=function(t){var e,s,i,o,n,r,p;return i=this.state.nameCollisions,n=this.state.resolvedNames,r=this.state.zipOptions,n.push(t),r.shift(),e=n.concat(i).concat(r),p=this.segregateOptionBuckets(e),o=p.resolved,s=p.collisions,r=p.zips,this.setState({nameCollisions:s,resolvedNames:o,zipOptions:r})},s.prototype.setOptionsFromFiles=function(t,e){var s,i,o,n,r;return s=this.toFilesOptionArray(t),r=this.segregateOptionBuckets(s),o=r.resolved,i=r.collisions,n=r.zips,this.setState({nameCollisions:i,resolvedNames:o,zipOptions:n,newOptions:!0}),e&&this.onChange?this.onChange():void 0},s.prototype.hasNewOptions=function(){return this.state.newOptions},s.prototype.setFolder=function(t){return this.folder=t},s.prototype.getFolder=function(){return this.folder},s.prototype.setState=function(e){return this.state=t.defaults(e,this.state)},s.prototype.getState=function(){return this.state},s.prototype.resetState=function(){return this.state=this.buildDefaultState()},s.prototype.onChange=function(){},s}())})}).call(this);