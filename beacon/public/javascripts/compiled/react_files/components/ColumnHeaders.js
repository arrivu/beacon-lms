(function() {
  define(['i18n!react_files', 'underscore', 'react', 'react-router', 'compiled/react/shared/utils/withReactDOM', 'compiled/fn/preventDefault'], function(I18n, _, React, ReactRouter, withReactDOM, preventDefault) {
    var ColumnHeaders, columns;

    columns = [
      {
        displayName: I18n.t('name', 'Name'),
        property: 'name',
        className: 'ef-name-col'
      }, {
        displayName: I18n.t('kind', 'Kind'),
        property: 'content-type',
        className: 'screenreader-only'
      }, {
        displayNameShort: I18n.t('created_at_short', 'Created'),
        displayName: I18n.t('created_at', 'Date Created'),
        property: 'created_at',
        className: 'ef-date-created-col'
      }, {
        displayNameShort: I18n.t('updated_at_short', 'Modified'),
        displayName: I18n.t('updated_at', 'Date Modified'),
        property: 'updated_at',
        className: 'ef-date-modified-col'
      }, {
        displayName: I18n.t('modified_by', 'Modified By'),
        className: 'ef-modified-by-col',
        property: 'user'
      }, {
        displayName: I18n.t('size', 'Size'),
        property: 'size',
        className: 'ef-size-col'
      }
    ];
    return ColumnHeaders = React.createClass({
      displayName: 'ColumnHeaders',
      propTypes: {
        to: React.PropTypes.string.isRequired,
        query: React.PropTypes.object.isRequired,
        toggleAllSelected: React.PropTypes.func.isRequired,
        areAllItemsSelected: React.PropTypes.func.isRequired,
        splat: React.PropTypes.string
      },
      queryParamsFor: function(query, property) {
        var order;

        order = ((query.sort || 'name') === property) && (query.order === 'desc') ? 'asc' : 'desc';
        return _.defaults({
          sort: property,
          order: order
        }, query);
      },
      render: withReactDOM(function() {
        var order, sort,
          _this = this;

        sort = this.props.query.sort || 'name';
        order = this.props.query.order || 'asc';
        return header({
          className: 'ef-directory-header',
          role: 'row'
        }, label({
          className: 'screenreader-only',
          role: 'columnheader'
        }, input({
          type: 'checkbox',
          checked: this.props.areAllItemsSelected(),
          onChange: function(event) {
            return _this.props.toggleAllSelected(event.target.checked);
          }
        }, I18n.t('select_all', 'Select All'))), columns.map(function(column) {
          var isSortedCol;

          isSortedCol = sort === column.property;
          return div({
            key: column.property,
            className: "" + column.className + " " + (isSortedCol ? 'current-filter' : void 0),
            role: 'columnheader',
            'aria-sort': {
              asc: 'ascending',
              desc: 'descending'
            }[isSortedCol && order] || 'none'
          }, ReactRouter.Link(_.defaults({
            query: _this.queryParamsFor(_this.props.query, column.property),
            className: 'ef-plain-link'
          }, _this.props), span({
            className: (column.displayNameShort ? 'visible-desktop' : void 0)
          }, column.displayName), column.displayNameShort ? span({
            className: 'hidden-desktop'
          }, column.displayNameShort) : void 0, isSortedCol && order === 'asc' ? i({
            className: 'icon-mini-arrow-up'
          }, span({
            className: 'screenreader-only'
          }, I18n.t('sorted_ascending', "Sorted Ascending"))) : void 0, isSortedCol && order === 'desc' ? i({
            className: 'icon-mini-arrow-down'
          }, span({
            className: 'screenreader-only'
          }, I18n.t('sorted_desending', "Sorted Descending"))) : void 0));
        }), div({
          className: 'ef-links-col',
          role: 'columnheader'
        }));
      })
    });
  });

}).call(this);
