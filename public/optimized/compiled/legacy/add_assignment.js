(function(){define(["i18n!shared.add_assignment","jquery","jqueryui/dialog","jquery.instructure_misc_plugins"],function(n,t){return function(i,e,a,s){var o;return o=i,e=e||t("#add_assignment_inline_form").attr("action"),o.change(function(){return o=t(this),"new"===t(this).val()?t("#add_assignment_inline").show().dialog({title:n.t("titles.add_assignment","Add Assignment"),width:300,height:"auto",autoSize:!0,modal:!0,autoOpen:!1,overlay:{backgroundColor:"#000",opacity:.5},open:function(){var n;return s&&t.isFunction(s)&&(n=s.call(o),t("#add_assignment_inline_form :text:first").val(n)),t("#add_assignment_inline_form :text:first").focus().select(),t("#add_assignment_inline_form").find(".weight_assignment_groups").showIf(o.hasClass("weight")),t("#add_assignment_inline_form").data("group_select",o).data("group_selector",a||"").attr("action",e)},close:function(){return"new"===o.val()?o[0].selectedIndex=0:void 0}}).dialog("open").fixDialogButtons():void 0}),"new"===o.val()?o[0].selectedIndex=0:void 0}})}).call(this);