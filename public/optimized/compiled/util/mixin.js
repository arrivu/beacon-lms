(function(){var t=[].slice;define(["underscore"],function(n){var e,r,o,i,u;return e=n.extend,r=n.flatten,i=["attach","afterRender","initialize"],o=RegExp("^(?:__("+i.join("|")+")__|("+i.join("|")+"))$"),u=function(){var n,a,l,c,f,s,_,h,g,p,d,v,m,y,j,x,R;for(g=arguments[0],f=2<=arguments.length?t.call(arguments,1):[],"function"==typeof g&&(g=g.prototype),p=0,v=f.length;v>p;p++){u=f[p];for(a in u)h=u[a],"events"===a||"defaults"===a||"els"===a?(_=null!=(j=g.constructor)?j.prototype[a]:void 0,g[a]=e({},_,g[a],h)):(l=a.match(o))?(x=l.slice(1),n=x[0],s=x[1],(g[y="__"+(n||s)+"__"]||(g[y]=[])).push(h)):g[a]=h}for(R=function(){var t,n,e;for(e=[],t=0,n=i.length;n>t;t++)c=i[t],e.push("__"+c+"__");return e}(),d=0,m=R.length;m>d;d++)a=R[d],g[a]&&(g[a]=r(g[a],!0));return g}})}).call(this);