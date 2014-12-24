(function() {
  var __slice = [].slice;

  define(['i18n!react_files', 'jquery', 'underscore', 'react', 'react-router', './BreadcrumbCollapsedContainer', 'compiled/react/shared/utils/withReactDOM', '../modules/customPropTypes'], function(I18n, $, _, React, _arg, BreadcrumbCollapsedContainer, withReactDOM, customPropTypes) {
    var Breadcrumbs, Link, MAX_CRUMB_WIDTH, MIN_CRUMB_WIDTH;

    Link = _arg.Link;
    MAX_CRUMB_WIDTH = 500;
    MIN_CRUMB_WIDTH = 40;
    return Breadcrumbs = React.createClass({
      displayName: 'Breadcrumbs',
      propTypes: {
        rootTillCurrentFolder: React.PropTypes.arrayOf(customPropTypes.folder).isRequired
      },
      getInitialState: function() {
        return {
          maxCrumbWidth: MAX_CRUMB_WIDTH,
          availableWidth: 200000
        };
      },
      componentWillMount: function() {
        return this.fixOldCrumbs();
      },
      componentDidMount: function() {
        $(window).on('resize', this.handleResize);
        return this.handleResize();
      },
      componentWillUnmount: function() {
        return $(window).off('resize', this.handleResize);
      },
      fixOldCrumbs: function() {
        var $a, $oldCrumbs, contextName, contextUrl, heightOfOneBreadcrumb, homeName;

        $oldCrumbs = $('#breadcrumbs');
        heightOfOneBreadcrumb = $oldCrumbs.find('li:visible:first').height() * 1.5;
        homeName = $oldCrumbs.find('.home').text();
        $a = $oldCrumbs.find('li').eq(1).find('a');
        contextUrl = $a.attr('href');
        contextName = $a.text();
        $oldCrumbs.remove();
        return this.setState({
          homeName: homeName,
          contextUrl: contextUrl,
          contextName: contextName,
          heightOfOneBreadcrumb: heightOfOneBreadcrumb
        });
      },
      handleResize: function() {
        return this.startRecalculating(window.innerWidth);
      },
      startRecalculating: function(newAvailableWidth) {
        return this.setState({
          availableWidth: newAvailableWidth,
          maxCrumbWidth: MAX_CRUMB_WIDTH
        }, this.checkIfCrumbsFit);
      },
      componentWillReceiveProps: function() {
        return setTimeout(this.startRecalculating);
      },
      checkIfCrumbsFit: function() {
        var breadcrumbHeight, maxCrumbWidth;

        if (!this.state.heightOfOneBreadcrumb) {
          return;
        }
        breadcrumbHeight = $(this.refs.breadcrumbs.getDOMNode()).height();
        if ((breadcrumbHeight > this.state.heightOfOneBreadcrumb) && (this.state.maxCrumbWidth > MIN_CRUMB_WIDTH)) {
          maxCrumbWidth = Math.max(MIN_CRUMB_WIDTH, this.state.maxCrumbWidth - 20);
          return this.setState({
            maxCrumbWidth: maxCrumbWidth
          }, this.checkIfCrumbsFit);
        }
      },
      renderSingleCrumb: function(folder, isLastCrumb, isRootCrumb) {
        var name;

        name = isRootCrumb ? I18n.t('files', 'Files') : folder.get('name');
        return li({}, Link({
          to: (isRootCrumb ? 'rootFolder' : 'folder'),
          params: (!isRootCrumb ? {
            splat: folder.urlPath()
          } : void 0),
          title: (this.state.maxCrumbWidth < 500 ? name : void 0)
        }, span({
          className: 'ellipsis',
          style: {
            maxWidth: (!isLastCrumb ? this.state.maxCrumbWidth : void 0)
          }
        }, name)));
      },
      renderDynamicCrumbs: function() {
        var foldersInMiddle, lastFolder, _i, _ref, _ref1,
          _this = this;

        if (this.props.showingSearchResults) {
          return [
            this.renderSingleCrumb(null, !'isLastCrumb', !!'isRootCrumb'), li({}, Link({
              to: 'search',
              query: this.props.query
            }, span({
              className: 'ellipsis'
            }, this.props.query.search_term ? I18n.t('search_results_for', 'search results for "%{search_term}"', {
              search_term: this.props.query.search_term
            }) : void 0)))
          ];
        } else {
          if (!((_ref = this.props.rootTillCurrentFolder) != null ? _ref.length : void 0)) {
            return [];
          }
          _ref1 = this.props.rootTillCurrentFolder, foldersInMiddle = 2 <= _ref1.length ? __slice.call(_ref1, 0, _i = _ref1.length - 1) : (_i = 0, []), lastFolder = _ref1[_i++];
          if (this.state.maxCrumbWidth > MIN_CRUMB_WIDTH) {
            return this.props.rootTillCurrentFolder.map(function(folder, i) {
              return _this.renderSingleCrumb(folder, folder === lastFolder, i === 0);
            });
          } else {
            return [
              BreadcrumbCollapsedContainer({
                foldersToContain: foldersInMiddle
              }), this.renderSingleCrumb(lastFolder, true)
            ];
          }
        }
      },
      render: withReactDOM(function() {
        return nav({
          'aria-label': 'breadcrumbs',
          role: 'navigation',
          id: 'breadcrumbs',
          ref: 'breadcrumbs'
        }, ul.apply(null, [{}, li({
          className: 'home'
        }, a({
          href: '/'
        }, i({
          className: 'icon-home standalone-icon',
          title: this.state.homeName
        }, span({
          className: 'screenreader-only'
        }, this.state.homeName)))), li({}, a({
          href: this.state.contextUrl
        }, span({
          className: 'ellipsible'
        }, this.state.contextName)))].concat(__slice.call(this.renderDynamicCrumbs()))));
      })
    });
  });

}).call(this);
