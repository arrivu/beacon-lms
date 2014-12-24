(function(){define(["jquery","react","compiled/react/shared/utils/withReactDOM","i18n!restrict_student_access","./DialogContent","./DialogButtons","jqueryui/dialog"],function(t,n,e,o,i,r){var l;return l=n.createClass({propTypes:{open:n.PropTypes.bool.isRequired,title:n.PropTypes.string},getDefaultProps:function(){return{open:!1,modal:!0,title:o.t("title.default_title","Dialog"),onOpen:function(){return{}},onClose:function(){return{}}}},componentWillReceiveProps:function(t){return this.handlePropsChanged(t)},handlePropsChanged:function(n){var e=this;return null==n&&(n=this.props),this.forceBuildDialog(n),n.open?(this.dialog.open(),setTimeout(function(){var n;return n=t(e.node).parent().find(".btn-primary"),n?n.focus():t(e.node).parents(".ui-dialog").find(".ui-dialog-titlebar-close").focus()},1)):this.dialog.close()},forceBuildDialog:function(t){var e,o,i;return o=null,e=null,1===n.Children.count(t.children)?o=t.children:(i=this.processMultipleChildren(t),o=i.content,e=i.buttons),this.addContent(o),this.addButtons(e)},processMultipleChildren:function(t){var e,o;return o=null,e=null,n.Children.forEach(t.children,function(t){return t.type===i.type&&(o=t),t.type===r.type?e=t:void 0}),{content:o,buttons:e}},addContent:function(t){return n.renderComponent(t,this.node)},addButtons:function(e){var o;return null!=e?(o=t(this.node).parent().find(".ui-dialog-buttonset").html("").get(0),n.renderComponent(e,o)):t(this.node).parent().find(".ui-dialog-buttonpane").hide()},componentWillUnmount:function(){return this.dialog.destroy()},componentDidMount:function(){var n;return this.node=this.getDOMNode(),n={modal:this.props.modal,close:this.props.onClose,open:this.props.onOpen,title:this.props.title,autoOpen:!1,buttons:[{text:""}]},this.dialog=t(this.node).dialog(n).data("dialog"),this.handlePropsChanged()},render:e(function(){return div({})})})})}).call(this);