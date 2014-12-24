(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};define(["jquery","compiled/widget/TokenSelector","jquery.instructure_misc_plugins"],function(e,n){var i;return i=function(){function i(t,i){var o,s,r=this;this.$node=t,this.options=i,this.$node.data("token_input",this),this.$fakeInput=e("<div />").css("font-family",this.$node.css("font-family")).insertAfter(this.$node).addClass("token_input").click(function(){return r.$input.focus()}),this.nodeName=this.$node.attr("name"),this.$node.removeAttr("name").hide().change(function(){return r.$tokens.html(""),"function"==typeof r.change?r.change(r.tokenValues()):void 0}),this.added=this.options.added,this.change=this.options.change,this.$placeholder=e("<span />"),this.$placeholder.text(this.options.placeholder),this.options.placeholder&&this.$placeholder.appendTo(this.$fakeInput),this.$scroller=e("<div />").appendTo(this.$fakeInput),this.$tokens=e("<ul />").appendTo(this.$scroller),this.$tokens.click(function(t){var n,i;return(i=e(t.target).closest("li"))&&(n=e(t.target).closest("a"),n.length)?(i.remove(),"function"==typeof r.change?r.change(r.tokenValues()):void 0):void 0}),this.$tokens.maxTokenWidth=function(){var t;return parseInt(r.$tokens.css("width").replace("px",""))-(null!=(t=r.options.tokenWrapBuffer)?t:150)+"px"},this.$tokens.resizeTokens=function(t){return t.find("div.ellipsis").css("max-width",r.$tokens.maxTokenWidth())},e(window).resize(function(){return r.$tokens.resizeTokens(r.$tokens)}),this.$input=e('<input name="token_capture" />').attr("title",this.options.title).appendTo(this.$scroller).css("width","20px").css("font-size",this.$fakeInput.css("font-size")).autoGrowInput({comfortZone:20}).focus(function(){return r.$placeholder.hide(),r.active=!0,r.$fakeInput.addClass("active")}).blur(function(){return r.active=!1,setTimeout(function(){var t;return r.active?void 0:(r.$fakeInput.removeClass("active"),r.$placeholder.showIf(""===r.val()&&!r.$tokens.find("li").length),null!=(t=r.selector)&&"function"==typeof t.blur?t.blur():void 0)},50)}).keydown(function(t){return r.inputKeyDown(t)}).keyup(function(t){return r.inputKeyUp(t)}),this.options.selector&&(o=null!=(s=this.options.selector.type)?s:n,delete this.options.selector.type,(this.browser=this.options.selector.browser)&&(delete this.options.selector.browser,e('<a class="browser">browse</a>').click(function(){return r.selector.browse(r.browser.data)?r.$fakeInput.addClass("browse"):void 0}).prependTo(this.$fakeInput),this.$fakeInput.addClass("browsable")),this.selector=new o(this,this.$node.data("finder_url"),this.options.selector)),this.baseExclude=[],this.resize()}return i.prototype.teardown=function(){return this.selector.teardown()},i.prototype.resize=function(){var t;return t=this.options.fakeInputWidth||this.$node.css("width"),this.$fakeInput.css("width",t)},i.prototype.addToken=function(t){var n,i,o,s,r,a,u,l,h;return u=null!=(l=null!=t?t.value:void 0)?l:this.val(),s="token_"+u,o=this.$tokens.find("#"+s),r=0===o.length,r&&(o=e("<li />"),a=null!=(h=null!=t?t.text:void 0)?h:this.val(),o.attr("id",s),i=e("<div />").addClass("ellipsis"),i.attr("title",a),i.text(a),o.append(i),n=e("<a />"),o.append(n),o.append(e("<input />").attr("type","hidden").attr("name",this.nodeName+"[]").val(u)),this.options.onNewToken&&this.options.onNewToken(o),this.$tokens.resizeTokens(o),this.$tokens.append(o)),(null!=t?t.noClear:void 0)||this.val(""),this.$placeholder.hide(),t&&"function"==typeof this.added&&this.added(t.data,o,r),"function"==typeof this.change&&this.change(this.tokenValues()),this.reposition()},i.prototype.hasToken=function(t){var e;return this.$tokens.find("#token_"+(null!=(e=null!=t?t.value:void 0)?e:t)).length>0},i.prototype.removeToken=function(t){var e,n;return e="token_"+(null!=(n=null!=t?t.value:void 0)?n:t),this.$tokens.find("#"+e).remove(),"function"==typeof this.change&&this.change(this.tokenValues()),this.reposition()},i.prototype.removeLastToken=function(){return this.$tokens.find("li").last().remove(),"function"==typeof this.change&&this.change(this.tokenValues()),this.reposition()},i.prototype.reposition=function(){var t;return null!=(t=this.selector)&&t.reposition(),this.$scroller.scrollTop(this.$scroller.prop("scrollHeight"))},i.prototype.inputKeyDown=function(e){var n,i,o;if(this.keyUpAction=!1,this.selector){if(null!=(n=this.selector)?n.captureKeyDown(e):void 0)return e.preventDefault(),!1;this.$fakeInput.removeClass("browse")}else if(null!=(o=e.which,i=t.call(this.delimiters,o)>=0)?i:[])return this.keyUpAction=this.addToken,e.preventDefault(),!1;return!0},i.prototype.tokenPairs=function(){var t,n,i,o,s,r;for(s=this.$tokens.find("li"),r=[],i=0,o=s.length;o>i;i++)n=s[i],t=e(n),r.push([t.find("input").val(),t.find("div").attr("title")]);return r},i.prototype.tokenValues=function(){var t,e,n,i,o;for(i=this.$tokens.find("[name='"+this.nodeName+"[]']"),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.value);return o},i.prototype.inputKeyUp=function(){return this.reposition(),"function"==typeof this.keyUpAction?this.keyUpAction():void 0},i.prototype.bottomOffset=function(){var t;return t=this.$fakeInput.offset(),t.top+=this.$fakeInput.height()+2,t},i.prototype.focus=function(){return this.$input.focus()},i.prototype.hasFocus=function(){return this.active},i.prototype.val=function(t){return null==t?this.$input.val():t!==this.$input.val()?(this.$input.val(t).change(),this.reposition()):void 0},i.prototype.caret=function(){var t,e,n,i;return null!=this.$input[0].selectionStart?(n=this.$input[0].selectionStart,t=this.$input[0].selectionEnd):(i=this.val(),e=document.selection.createRange().duplicate(),e.moveEnd("character",i.length),n=""===e.text?i.length:i.lastIndexOf(e.text),e=document.selection.createRange().duplicate(),e.moveStart("character",-i.length),t=e.text.length),n===t?n:-1},i.prototype.selectorClosed=function(){return this.$fakeInput.removeClass("browse")},i}(),e.fn.tokenInput=function(t){return this.each(function(){return new i(e(this),e.extend(!0,{},t))})},i})}).call(this);