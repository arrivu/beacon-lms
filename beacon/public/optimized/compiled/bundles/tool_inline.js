define("tool_inline",["jquery","jquery.google-analytics"],function(t){function e(){return c||t(".tool_content_wrapper")}var n=t("#tool_form"),o=function(){var e=n.find("button");n.show(),e.attr("disabled",!1),setTimeout(function(){e.attr("disabled",!0).text(e.data("expired_message"))},15e4),n.submit(function(){t(this).find(".load_tab,.tab_loaded").toggle()})},i=function(){n.attr("target","_blank"),o()};switch(n.data("tool-launch-type")){case"window":n.show(),i();break;case"self":n.removeAttr("target");try{n.submit()}catch(a){}break;default:try{n.submit()}catch(a){}t("#tool_content").bind("load",function(){t("#content").addClass("padless"),t("#insecure_content_msg").hide(),n.hide()}),setTimeout(function(){t("#insecure_content_msg").is(":visible")&&(t("#load_failure").show(),i())},3e3)}var r=n.data("tool-id")||"unknown",s=n.data("tool-path"),d=n.data("message-type")||"tool_launch";t.trackEvent(d,r,s);var l,c,u=function(t){var n=l||450;e().height(n>t?n:t)};t(function(){var e=t(window);l=t("#main").height(),c=t(".tool_content_wrapper"),c.length&&e.resize(function(){if(!c.data("height_overridden")){var t=c.offset().top,n=e.height();u(n-t)}}).triggerHandler("resize")}),window.addEventListener("message",function(t){try{var n=JSON.parse(t.data);if("lti.frameResize"===n.subject){var o=n.height;o>=5e3&&(o=5e3),0>=o&&(o=1),e().data("height_overridden",!0),u(o)}}catch(i){(console.error||console.log)("invalid message received from ",t.origin)}})}),function(){require(["tool_inline"])}.call(this),define("compiled/bundles/tool_inline",function(){});