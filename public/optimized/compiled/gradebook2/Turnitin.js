(function(){define(["i18n!turnitin","underscore"],function(t,n){var i,e,r;return r=n.max,e=n.invert,i={extractData:function(t){var n,i,a,s,o,u,l,c,m,d,_,p,f;if(null!=t?t.turnitin_data:void 0){if(i={items:[]},t.attachments&&"online_upload"===t.submission_type)for(d=t.attachments,c=0,m=d.length;m>c;c++)n=d[c],n=null!=(_=n.attachment)?_:n,(l=null!=(p=t.turnitin_data)?p["attachment_"+n.id]:void 0)&&i.items.push(l);else"online_text_entry"===t.submission_type&&(l=null!=(f=t.turnitin_data)?f["submission_"+t.id]:void 0)&&i.items.push(l);if(i.items.length)return s=["no","none","acceptable","warning","problem","failure"],o=e(s),u=function(){var t,n,e,r;for(e=i.items,r=[],t=0,n=e.length;n>t;t++)a=e[t],r.push(parseInt(o[a.state||"no"]));return r}(),i.state=s[r(u)],i}},extractDataFor:function(n,i,e){var r;return r=n.turnitin_data,r&&r[i]&&null!=r[i].similarity_score?(r=r[i],r.state=""+(r.state||"no")+"_score",r.score=""+r.similarity_score+"%",r.reportUrl=""+e+"/assignments/"+n.assignment_id+"/submissions/"+n.user_id+"/turnitin/"+i,r.tooltip=t.t("tooltip.score","Turnitin Similarity Score - See detailed report"),r):{}}}})}).call(this);