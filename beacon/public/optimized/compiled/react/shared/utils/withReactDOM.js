(function(){define(["react"],function(n){var i,r;return i=!1,r=function(r){return function(){var t,e,o;if(i)return r.apply(this,arguments);e={};for(t in n.DOM)t in window&&(e[t]=window[t]),window[t]=n.DOM[t];i=!0,o=r.apply(this,arguments);for(t in n.DOM)t in e?window[t]=e[t]:delete window[t];return i=!1,o}}})}).call(this);