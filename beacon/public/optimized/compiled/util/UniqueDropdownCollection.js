(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,a=function(e,a){function l(){this.constructor=e}for(var s in a)t.call(a,s)&&(e[s]=a[s]);return l.prototype=a.prototype,e.prototype=new l,e.__super__=a.prototype,e};define(["Backbone","underscore"],function(t,l){var s,i;return s=function(s){function r(){return this.removeModel=e(this.removeModel,this),this.updateAvailableValues=e(this.updateAvailableValues,this),this.calculateTakenValues=e(this.calculateTakenValues,this),i=r.__super__.constructor.apply(this,arguments)}return a(r,s),r.prototype.initialize=function(e,a){return null==a&&(a={}),this.takenValues||(this.takenValues=new t.Collection([])),this.availableValues||(this.availableValues=new t.Collection([])),this.possibleValues=a.possibleValues,this.propertyName=a.propertyName,this.availableValues.comparator="value",this.calculateTakenValues(e),this.on("reset",this.calculateTakenValues),this.on("change:"+this.propertyName,this.updateAvailableValues),this.on("remove",this.removeModel)},r.prototype.calculateTakenValues=function(e){var a,s,i,r,n,o,u,p,h,c,v=this;for(i=e instanceof t.Collection?e.map(function(e){return e.get(v.propertyName)}):function(){var t,l,s;for(s=[],t=0,l=e.length;l>t;t++)a=e[t],s.push(a.get(this.propertyName));return s}.call(this),this.takenValues.reset(null,{silent:!0}),this.availableValues.reset(null,{silent:!0}),n=0,u=i.length;u>n;n++)s=i[n],this.takenValues.add(new t.Model({id:s,value:s}));for(h=l.difference(this.possibleValues,i),c=[],o=0,p=h.length;p>o;o++)r=h[o],c.push(this.availableValues.add(new t.Model({id:r,value:r})));return c},r.prototype.updateAvailableValues=function(e){var t,a,l,s;return a=e.previousAttributes()[this.propertyName],t=e.get(this.propertyName),l=this.availableValues.get(t),s=this.takenValues.get(a),this.availableValues.remove(l),this.takenValues.remove(s),this.takenValues.add(l),this.availableValues.add(s)},r.prototype.removeModel=function(e){var t,a;return a=e.get(this.propertyName),t=this.takenValues.get(a),this.takenValues.remove(t),this.availableValues.add(t)},r.prototype.findNextAvailable=function(){return this.availableValues.at(0)},r.prototype.add=function(e){var a;return l.isArray(e)||"object"!=typeof e||e instanceof t.Model||(a=this.findNextAvailable(),this.availableValues.remove(a),this.takenValues.add(a),e[this.propertyName]=a.get("value")),r.__super__.add.apply(this,arguments)},r}(t.Collection)})}).call(this);