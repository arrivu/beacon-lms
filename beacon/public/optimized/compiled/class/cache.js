(function(){var t=[].slice;define(["underscore"],function(e){return{cache:{prefix:"",store:{},use:function(t){return this.store=function(){switch(t){case"memory":return{};case"sessionStorage":return sessionStorage;case"localStorage":return localStorage}}()},toKey:function(){var r,n;return n=1<=arguments.length?t.call(arguments,0):[],this.prefix+function(){var t,s,a,u;for(a=e.flatten(n),u=[],t=0,s=a.length;s>t;t++)r=a[t],u.push(JSON.stringify(r));return u}().join("|")},get:function(){var e,r;return e=1<=arguments.length?t.call(arguments,0):[],(r=this.store[this.toKey(e)])?JSON.parse(r):null},set:function(){var e,r,n;return e=2<=arguments.length?t.call(arguments,0,n=arguments.length-1):(n=0,[]),r=arguments[n++],this.store[this.toKey(e)]=JSON.stringify(r),this},remove:function(){var e;return e=1<=arguments.length?t.call(arguments,0):[],delete this.store[this.toKey(e)]}}}})}).call(this);