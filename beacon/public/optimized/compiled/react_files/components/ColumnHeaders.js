(function(){define(["i18n!react_files","underscore","react","react-router","compiled/react/shared/utils/withReactDOM","compiled/fn/preventDefault"],function(e,a,r,s,t){var d,o;return o=[{displayName:e.t("name","Name"),property:"name",className:"ef-name-col"},{displayName:e.t("kind","Kind"),property:"content-type",className:"screenreader-only"},{displayNameShort:e.t("created_at_short","Created"),displayName:e.t("created_at","Date Created"),property:"created_at",className:"ef-date-created-col"},{displayNameShort:e.t("updated_at_short","Modified"),displayName:e.t("updated_at","Date Modified"),property:"updated_at",className:"ef-date-modified-col"},{displayName:e.t("modified_by","Modified By"),className:"ef-modified-by-col",property:"user"},{displayName:e.t("size","Size"),property:"size",className:"ef-size-col"}],d=r.createClass({displayName:"ColumnHeaders",propTypes:{to:r.PropTypes.string.isRequired,query:r.PropTypes.object.isRequired,toggleAllSelected:r.PropTypes.func.isRequired,areAllItemsSelected:r.PropTypes.func.isRequired,splat:r.PropTypes.string},queryParamsFor:function(e,r){var s;return s=(e.sort||"name")===r&&"desc"===e.order?"asc":"desc",a.defaults({sort:r,order:s},e)},render:t(function(){var r,t,d=this;return t=this.props.query.sort||"name",r=this.props.query.order||"asc",header({className:"ef-directory-header",role:"row"},label({className:"screenreader-only",role:"columnheader"},input({type:"checkbox",checked:this.props.areAllItemsSelected(),onChange:function(e){return d.props.toggleAllSelected(e.target.checked)}},e.t("select_all","Select All"))),o.map(function(o){var l;return l=t===o.property,div({key:o.property,className:""+o.className+" "+(l?"current-filter":void 0),role:"columnheader","aria-sort":{asc:"ascending",desc:"descending"}[l&&r]||"none"},s.Link(a.defaults({query:d.queryParamsFor(d.props.query,o.property),className:"ef-plain-link"},d.props),span({className:o.displayNameShort?"visible-desktop":void 0},o.displayName),o.displayNameShort?span({className:"hidden-desktop"},o.displayNameShort):void 0,l&&"asc"===r?i({className:"icon-mini-arrow-up"},span({className:"screenreader-only"},e.t("sorted_ascending","Sorted Ascending"))):void 0,l&&"desc"===r?i({className:"icon-mini-arrow-down"},span({className:"screenreader-only"},e.t("sorted_desending","Sorted Descending"))):void 0))}),div({className:"ef-links-col",role:"columnheader"}))})})})}).call(this);