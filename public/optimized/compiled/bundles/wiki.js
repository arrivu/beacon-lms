define("wiki",["jquery","wikiSidebar","jquery.ajaxJSON","jquery.instructure_forms","jquery.instructure_misc_plugins","jquery.templateData","compiled/tinymce"],function(i,e){function t(){e.init(),e.attachToEditor(i("#wiki_page_body"))}function n(){i("#wiki_show_view_secondary a.edit_link").click(function(i){i.preventDefault(),_()})}function o(){i("#wiki_edit_view_main").show(),i("#wiki_page_body").editorBox({fullHeight:!0,elementToLeaveInViewport:i("#below_editor")}),i("#wiki_edit_view_main").hide(),i("#wiki_edit_view_main #cancel_editing").click(function(i){i.preventDefault(),_()}),i("#wiki_edit_view_main .wiki_switch_views_link").click(function(e){e.preventDefault(),i("#wiki_page_body").editorBox("toggle"),i(this).siblings(".wiki_switch_views_link").andSelf().toggle()}),i("a#page_doesnt_exist_so_start_editing_it_now").length&&(i("a#page_doesnt_exist_so_start_editing_it_now").click(function(i){i.preventDefault(),_()}),i(function(){i("a#page_doesnt_exist_so_start_editing_it_now:not(.dont_click)").triggerHandler("click")}))}function _(){i("#wiki_edit_view_main, #wiki_show_view_main, #wiki_show_view_secondary, #wiki_edit_view_secondary").toggle(),i("#wiki_edit_view_page_tools").showIf(i("#wiki_edit_view_page_tools li").length>0),e.toggle(),i(window).triggerHandler("resize")}var r={init:function(){o(),i(function(){t(),n()})}};return i(document).ready(function(){i(document).fragmentChange(function(e,t){"#edit"===t&&i("#wiki_show_view_secondary a.edit_link:visible").click()});var e=!1;i(document).bind("mousemove focus keypress",function(){e=!0});var t=function(){return e?(e=!1,void i.ajaxJSON(i("#latest_page_version").attr("href"),"GET",{},function(e){var n=parseInt(i("#wiki_page_version_number").text(),10),o=e&&e&&e.wiki_page&&e.wiki_page.version_number,_=n&&o&&o>n;_?(i(".someone_else_edited").slideDown(),setTimeout(t,24e4)):setTimeout(t,12e4)},function(){setTimeout(t,6e4)})):void setTimeout(t,12e4)};setTimeout(t,5e3),i(".more_pages_link").click(function(e){e.preventDefault(),i(this).parents("ul").find("li").show(),i(this).parent("li").remove()}),i("#add_wiki_page_form,#rename_wiki_page_form").formSubmit({success:function(i){location.href=i.success_url},error:function(e){i(this).formErrors(e)}})}),r}),function(){require(["wiki"])}.call(this),define("compiled/bundles/wiki",function(){});