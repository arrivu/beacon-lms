(function(){define([],function(){var n,r,e;return n={0:"toUpperCase",1:"toLowerCase"},e=function(r){var e,t,i,o,s;return t=/(\s*%h?\{[^\}]+\}\s*|\s*[\n\\`\*_\{\}\[\]\(\)\#\+\-!]+\s*|^\s+)/,i=function(){var i,f,u,a,c,l;for(a=r.split(t),l=[],i=0,u=a.length;u>i;i++)if(s=a[i],s.match(t))l.push(s);else{for(o="",e=f=0,c=s.length;c>=0?c>f:f>c;e=c>=0?++f:--f)o+=s[e][n[e%2]]();o=o.replace(/\.( |$)/,"!!?! "),o=o.replace(/^(\w+)$/,"$1!"),o.length>2&&(o+=" LOL!"),l.push(o)}return l}(),i.join("")},r=function(n){var r,t,i;if("string"==typeof n)return e(n);t={};for(r in n)i=n[r],t[r]=e(i);return t}})}).call(this);