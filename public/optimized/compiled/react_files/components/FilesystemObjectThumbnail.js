(function(){define(["react","../mixins/BackboneMixin","compiled/models/Folder","../modules/customPropTypes","compiled/util/mimeClass"],function(e,s,i,t,l){var m,o;return m=e.DOM,o=e.createClass({displayName:"FilesystemObjectThumbnail",propTypes:{model:t.filesystemObject},mixins:[s("model")],render:function(){var e;return this.transferPropsTo(this.props.model.get("thumbnail_url")?m.span({className:"media-object ef-thumbnail FilesystemObjectThumbnail",style:{backgroundImage:"url('"+this.props.model.get("thumbnail_url")+"')"}}):(e=this.props.model instanceof i?"folder":l(this.props.model.get("content-type")),m.i({className:"media-object ef-big-icon FilesystemObjectThumbnail mimeClass-"+e})))}})})}).call(this);