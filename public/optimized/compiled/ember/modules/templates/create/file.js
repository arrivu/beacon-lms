define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["create/file"]=e.Handlebars.template(function(s,t,a,l,n){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.Handlebars.helpers),n=n||{};var h,p,c,o="",f=a.helperMissing,u=this.escapeExpression;return n.buffer.push('<form class="bootstrap-form form-inline modules-create-item-form">\n  '),n.buffer.push(u((p=a["c-icon"]||t&&t["c-icon"],c={hash:{type:"document"},hashTypes:{type:"STRING"},hashContexts:{type:t},contexts:[],types:[],data:n},p?p.call(t,c):f.call(t,"c-icon",c)))),n.buffer.push("\n\n  "),n.buffer.push(u((p=a["c-file-input"]||t&&t["c-file-input"],c={hash:{type:"file",files:"files",value:"fileValue","aria-label":"text.file"},hashTypes:{type:"STRING",files:"ID",value:"ID","aria-label":"ID"},hashContexts:{type:t,files:t,value:t,"aria-label":t},contexts:[],types:[],data:n},p?p.call(t,c):f.call(t,"c-file-input",c)))),n.buffer.push('\n\n  <button\n    class="btn btn-primary"\n    type="submit"\n    '),n.buffer.push(u(a.action.call(t,"create",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push("\n  >"),p=a.t||t&&t.t,c={hash:{scope:"modules.templates.create.file.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:n},h=p?p.call(t,"upload","Upload",c):f.call(t,"t","upload","Upload",c),(h||0===h)&&n.buffer.push(h),n.buffer.push('</button>\n\n  <button\n    class="btn"\n    type="button"\n    '),n.buffer.push(u(a.action.call(t,"cancel",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:n}))),n.buffer.push("\n  >"),p=a.t||t&&t.t,c={hash:{scope:"modules.templates.create.file.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:t},contexts:[t,t],types:["STRING","STRING"],data:n},h=p?p.call(t,"cancel","Cancel",c):f.call(t,"t","cancel","Cancel",c),(h||0===h)&&n.buffer.push(h),n.buffer.push("</button>\n</form>\n\n"),o})});