(function(){define(["i18n!conversations","jquery","str/htmlEscape","jquery.instructure_misc_helpers"],function(n,t,e){return function(r,s){var u,c;return null==s&&(s=2),r.length>s&&(r=r.slice(0,s).concat([r.slice(s,r.length)])),t.toSentence(function(){var t,s,i;for(i=[],t=0,s=r.length;s>t;t++)c=r[t],i.push("string"==typeof c||c._icHTMLSafe?"<span>"+e(c)+"</span>":"<span class='others'>\n  "+e(n.t("other","other",{count:c.length}))+"\n  <span>\n    <ul>\n      "+function(){var n,t,r;for(r=[],n=0,t=c.length;t>n;n++)u=c[n],r.push("<li>"+e(u)+"</li>");return r}().join("")+"\n    </ul>\n  </span>\n</span>");return i}())}})}).call(this);