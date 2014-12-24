(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'Backbone', 'jquery', 'underscore', 'compiled/collections/PaginatedCollection', 'compiled/models/ConversationSearchResult', 'compiled/views/PaginatedCollectionView', 'jst/conversations/autocompleteToken', 'jst/conversations/autocompleteResult', 'compiled/jquery/scrollIntoView'], function(I18n, Backbone, $, _, PaginatedCollection, ConversationSearchResult, PaginatedCollectionView, tokenTemplate, resultTemplate) {
    var AutocompleteView, capitalize, _ref;

    capitalize = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return AutocompleteView = (function(_super) {
      __extends(AutocompleteView, _super);

      function AutocompleteView() {
        this._addToken = __bind(this._addToken, this);
        this._onSearchResultLoad = __bind(this._onSearchResultLoad, this);
        this._getModel = __bind(this._getModel, this);
        this._addToModelCache = __bind(this._addToModelCache, this);        _ref = AutocompleteView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AutocompleteView.optionProperty('single');

      AutocompleteView.optionProperty('excludeAll');

      AutocompleteView.prototype.collection = null;

      AutocompleteView.prototype.currentRequest = null;

      AutocompleteView.prototype.currentContext = null;

      AutocompleteView.prototype.parentContexts = [];

      AutocompleteView.prototype.selectedModel = null;

      AutocompleteView.prototype.tokens = [];

      AutocompleteView.prototype.permissions = {};

      AutocompleteView.prototype.cache = {};

      AutocompleteView.prototype.url = function(term) {
        var baseURL, params;

        baseURL = '/api/v1/search/recipients?';
        params = {
          search: term,
          per_page: 20,
          'permissions[]': 'send_messages_all',
          synthetic_contexts: true
        };
        if (this.currentContext) {
          params.context = this.currentContext.id;
        }
        return baseURL + _.reduce(params, function(queryString, v, k) {
          queryString.push("" + k + "=" + v);
          return queryString;
        }, []).join('&');
      };

      AutocompleteView.prototype.messages = {
        noResults: I18n.t('no_results_found', 'No results found'),
        back: I18n.t('back', 'Back'),
        everyone: function(context) {
          return I18n.t('all_in_context', 'All in %{context}', {
            context: context
          });
        },
        "private": I18n.t('cannot_add_to_private', 'You cannot add participants to a private conversation.')
      };

      AutocompleteView.prototype.keys = {
        8: 'backspace',
        13: 'enter',
        27: 'escape',
        38: 'up',
        40: 'down'
      };

      AutocompleteView.prototype.els = {
        '.ac-input-box': '$inputBox',
        '.ac-input': '$input',
        '.ac-token-list': '$tokenList',
        '.ac-result-wrapper': '$resultWrapper',
        '.ac-result-container': '$resultContainer',
        '.ac-result-contents': '$resultContents',
        '.ac-result-list': '$resultList',
        '.ac-placeholder': '$placeholder',
        '.ac-clear': '$clearBtn',
        '.ac-search-btn': '$searchBtn',
        '.ac-results-status': '$resultsStatus',
        '.ac-selected-name': '$selectedName'
      };

      AutocompleteView.prototype.events = {
        'blur      .ac-input': '_onInputBlur',
        'click     .ac-input-box': '_onWidgetClick',
        'click     .ac-clear': '_onClearTokens',
        'click     .ac-token-remove-btn': '_onRemoveToken',
        'click     .ac-search-btn': '_onSearch',
        'keyclick  .ac-search-btn': '_onSearch',
        'focus     .ac-input': '_onInputFocus',
        'input     .ac-input': '_onSearchTermChange',
        'keydown   .ac-input': '_onInputAction',
        'mousedown .ac-result': '_onResultClick',
        'mouseenter .ac-result-list': '_clearSelectedStyles'
      };

      AutocompleteView.prototype.initialize = function() {
        var _this = this;

        AutocompleteView.__super__.initialize.apply(this, arguments);
        this.parentContexts = [];
        this.currentContext = null;
        $(document).on("mousedown", this._onDocumentMouseDown.bind(this));
        this.render();
        this.$span = this._initializeWidthSpan();
        setTimeout((function() {
          if (_this.options.disabled) {
            return _this._disable();
          }
        }), 0);
        this._fetchResults = _.debounce(this.__fetchResults, 250);
        return this.resultView = new PaginatedCollectionView({
          el: this.$resultContents,
          scrollContainer: this.$resultContainer,
          buffer: 50,
          collection: new Backbone.Collection(),
          template: null,
          itemView: Backbone.View.extend({
            template: resultTemplate
          }),
          itemViewOptions: {
            tagName: 'li',
            attributes: function() {
              var attributes, classes;

              classes = ['ac-result'];
              if (this.model.get('isContext')) {
                classes.push('context');
              }
              if (this.model.get('back')) {
                classes.push('back');
              }
              if (this.model.get('everyone')) {
                classes.push('everyone');
              }
              attributes = {
                "class": classes.join(' '),
                'data-id': this.model.id,
                'data-people-count': this.model.get('user_count'),
                'aria-label': this.model.get('name'),
                id: "result-" + ($.guid++)
              };
              attributes['aria-haspopup'] = this.model.get('isContext');
              return attributes;
            }
          }
        });
      };

      AutocompleteView.prototype._attachCollection = function() {
        this.resultView.switchCollection(this.resultCollection);
        this.resultView.stopListening(this.resultCollection, 'reset', this.resultView.renderOnReset);
        return this.resultView.stopListening(this.resultCollection, 'remove', this.resultView.removeItem);
      };

      AutocompleteView.prototype.toggleResultList = function(isVisible) {
        this.$resultWrapper.attr('aria-hidden', !isVisible);
        this.$resultWrapper.toggle(isVisible);
        this.$input.attr('aria-expanded', isVisible);
        if (!isVisible) {
          return this.$resultList.empty();
        }
      };

      AutocompleteView.prototype._disable = function() {
        this.disable();
        this.$inputBox.attr('title', this.messages["private"]);
        this.$inputBox.attr('data-tooltip', '{"position":"bottom"}');
        return this.disabled = true;
      };

      AutocompleteView.prototype._resetContext = function() {
        if (this.hasExternalContext) {
          this.currentContext = _.isEmpty(this.parentContexts) ? this.currentContext : _.head(this.parentContexts);
        } else {
          this.currentContext = null;
        }
        return this.parentContexts = [];
      };

      AutocompleteView.prototype._initializeWidthSpan = function() {
        return $('<span />').css({
          fontSize: '14px',
          position: 'absolute',
          top: '-9999px'
        }).appendTo('body');
      };

      AutocompleteView.prototype.modelCache = new Backbone.Collection();

      AutocompleteView.prototype._addToModelCache = function(model) {
        return this.modelCache.add(model);
      };

      AutocompleteView.prototype._getModel = function(id) {
        var result;

        id = id && String(id);
        return result = this.modelCache.get(id);
      };

      AutocompleteView.prototype._clearSelectedStyles = function(e) {
        this.$resultList.find('.selected').removeClass('selected');
        return this.selectedModel = null;
      };

      AutocompleteView.prototype._onWidgetClick = function(e) {
        return this.$input.focus();
      };

      AutocompleteView.prototype._onInputAction = function(e) {
        var key, methodName;

        if (!(key = this.keys[e.keyCode])) {
          return;
        }
        methodName = "_on" + (capitalize(key)) + "Key";
        if (typeof this[methodName] === 'function') {
          return this[methodName].call(this, e);
        }
      };

      AutocompleteView.prototype._onDocumentMouseDown = function(e) {
        var inputParent, parentClassName, targetParent;

        if (!this.$inputBox.hasClass('focused')) {
          return;
        }
        parentClassName = '.ac';
        targetParent = $(e.target).closest(parentClassName);
        inputParent = this.$input.closest(parentClassName);
        this._shouldPreventBlur = targetParent.length && inputParent.length && targetParent[0] === inputParent[0];
        if (this._shouldPreventBlur) {
          return e.preventDefault();
        } else {
          return this._onInputBlur();
        }
      };

      AutocompleteView.prototype._onInputBlur = function(e) {
        if (this._shouldPreventBlur) {
          this._shouldPreventBlur = false;
          this.$input.focus();
          return;
        }
        this.$inputBox.removeAttr('role');
        this.$inputBox.removeClass('focused');
        if (!(this.tokens.length || this.$input.val())) {
          this.$placeholder.css({
            opacity: 1
          });
        }
        this._resetContext();
        return this.toggleResultList(false);
      };

      AutocompleteView.prototype._onInputFocus = function(e) {
        this.$inputBox.addClass('focused');
        this.$inputBox.attr('role', 'application');
        this.$placeholder.css({
          opacity: 0
        });
        if (!$(e.target).hasClass('ac-input')) {
          return this.$input[0].selectionStart = this.$input.val().length;
        }
      };

      AutocompleteView.prototype._onSearchTermChange = function(e) {
        var _this = this;

        if (!this.$input.val()) {
          this.toggleResultList(false);
        } else {
          this._fetchResults();
        }
        this.$input.width(this.$span.text(this.$input.val()).width() + 15);
        return this.resultView.collection.each(function(m) {
          return _this.resultView.removeItem(m);
        });
      };

      AutocompleteView.prototype._onSearchResultLoad = function() {
        var hasResults, isFinished;

        _.extend(this.permissions, this._getPermissions());
        if (!(this.excludeAll || !this._canSendToAll())) {
          this._addEveryoneResult(this.resultCollection);
        }
        this.resultCollection.each(this._addToModelCache);
        hasResults = this.resultCollection.length;
        isFinished = !this.nextRequest;
        this._addBackResult(this.resultCollection);
        this.currentRequest = null;
        if (!hasResults) {
          this.resultCollection.push(new ConversationSearchResult({
            id: 'no_results',
            name: '',
            noResults: true
          }));
        }
        if (isFinished) {
          this._drawResults();
        }
        if (this.nextRequest) {
          this._fetchResults(true);
        }
        return this.updateStatusMessage(this.resultCollection.length);
      };

      AutocompleteView.prototype._canSendToAll = function() {
        var key;

        if (!this.currentContext) {
          return false;
        }
        key = this.currentContext.id.replace(/_(students|teachers)$/, '');
        return this.permissions[key];
      };

      AutocompleteView.prototype._getPermissions = function() {
        var permissions;

        permissions = this.resultCollection.filter(function(r) {
          return r.attributes.hasOwnProperty('permissions');
        });
        return _.reduce(permissions, function(map, result) {
          var key;

          key = result.id.replace(/_(students|teachers)$/, '');
          map[key] = !!result.get('permissions').send_messages_all;
          return map;
        }, {});
      };

      AutocompleteView.prototype._addEveryoneResult = function(results) {
        var actual_results, name, searchTerm, tag;

        if (!this.currentContext) {
          return;
        }
        name = this.messages.everyone(this.currentContext.name);
        searchTerm = new RegExp(this.$input.val().trim(), 'gi');
        if (searchTerm && !name.match(searchTerm)) {
          return results;
        }
        actual_results = results.reject(function(result) {
          return result.attributes.back || result.attributes.noResults || result.attributes.everyone;
        });
        if (!actual_results.length) {
          return results;
        }
        if (this.currentContext.id.match(/course_\d+_(group|section)/)) {
          return;
        }
        tag = {
          id: this.currentContext.id,
          name: name,
          everyone: true,
          people: this.currentContext.peopleCount
        };
        return results.unshift(new ConversationSearchResult(tag));
      };

      AutocompleteView.prototype._addBackResult = function(results) {
        var back, tag;

        if (!this.parentContexts.length) {
          return results;
        }
        tag = {
          id: 'back',
          name: this.messages.back,
          back: true,
          isContext: true
        };
        back = new ConversationSearchResult(tag);
        results.unshift(back);
        return this._addToModelCache(back);
      };

      AutocompleteView.prototype._drawResults = function() {
        var $el;

        this.resultView.empty = !this.resultView.collection.length;
        this.resultView.$('.collectionViewItems').empty();
        this.resultView.render();
        $el = this.$resultList.find('li:first').addClass('selected');
        this.selectedModel = this._getModel($el.data('id'));
        return this.$input.attr('aria-activedescendant', $el.attr('id'));
      };

      AutocompleteView.prototype.__fetchResults = function(fetchIfEmpty) {
        var url;

        if (fetchIfEmpty == null) {
          fetchIfEmpty = false;
        }
        if (!(this.$input.val() || fetchIfEmpty)) {
          return;
        }
        url = this._loadURL();
        if (!url) {
          return;
        }
        this.currentUrl = url;
        if (this.cache[url]) {
          this.resultCollection = this.cache[url];
          this._attachCollection();
          this.toggleResultList(true);
          return this._onSearchResultLoad();
        } else {
          this.resultCollection = new PaginatedCollection([], {
            model: ConversationSearchResult
          });
          this.resultCollection.url = url;
          this.cache[url] = this.resultCollection;
          this._attachCollection();
          this.currentRequest = this.resultCollection.fetch().done(this._onSearchResultLoad);
          return this.toggleResultList(true);
        }
      };

      AutocompleteView.prototype._loadURL = function() {
        var previousNextRequest, searchURL;

        searchURL = this.url(this.$input.val());
        if (this.currentRequest) {
          this.nextRequest = searchURL;
          return '';
        } else {
          previousNextRequest = this.nextRequest;
          delete this.nextRequest;
          return previousNextRequest || searchURL;
        }
      };

      AutocompleteView.prototype._onBackspaceKey = function(e) {
        if (!this.$input.val()) {
          return this._removeToken(_.last(this.tokens));
        }
      };

      AutocompleteView.prototype._onEscapeKey = function(e) {
        var _this = this;

        e.preventDefault() && e.stopPropagation();
        this.toggleResultList(false);
        this._resetContext();
        return setTimeout((function() {
          return _this.$input.focus();
        }), 0);
      };

      AutocompleteView.prototype._onEnterKey = function(e) {
        e.preventDefault() && e.stopPropagation();
        return this._activateSelected(e.metaKey || e.ctrlKey);
      };

      AutocompleteView.prototype._activateSelected = function(keepOpen) {
        if (keepOpen == null) {
          keepOpen = false;
        }
        if (!this.selectedModel || this.selectedModel.get('noResults')) {
          return;
        }
        if (this.selectedModel.get('back')) {
          this.currentContext = this.parentContexts.pop();
          return this._fetchResults(true);
        } else if (this.selectedModel.get('isContext')) {
          this.parentContexts.push(this.currentContext);
          this.$input.val('');
          this.currentContext = {
            id: this.selectedModel.id,
            name: this.selectedModel.get('name'),
            peopleCount: this.selectedModel.get('user_count')
          };
          return this._fetchResults(true);
        } else {
          return this._addToken(this.selectedModel.attributes, keepOpen);
        }
      };

      AutocompleteView.prototype._onDownKey = function(e) {
        return this._onArrowKey(e, 1);
      };

      AutocompleteView.prototype._onUpKey = function(e) {
        return this._onArrowKey(e, -1);
      };

      AutocompleteView.prototype._onArrowKey = function(e, inc) {
        var $el, currentIndex, newIndex;

        if (this.$resultWrapper.css('display') !== 'block') {
          return;
        }
        e.stopPropagation();
        e.preventDefault();
        this.$resultList.find('li.selected:first').removeClass('selected');
        currentIndex = this.selectedModel ? this.resultCollection.indexOf(this.selectedModel) : -1;
        newIndex = currentIndex + inc;
        if (newIndex < 0) {
          newIndex = 0;
        }
        if (newIndex >= this.resultCollection.length) {
          newIndex = this.resultCollection.length - 1;
        }
        this.selectedModel = this.resultCollection.at(newIndex);
        $el = this.$resultList.find("[data-id=" + this.selectedModel.id + "]");
        $el.scrollIntoView();
        this.$input.attr('aria-activedescendant', $el.addClass('selected').attr('id'));
        return this.updateSelectedNameForScreenReaders($el.text());
      };

      AutocompleteView.prototype._onResultClick = function(e) {
        var $target;

        if (e.button !== 0) {
          return;
        }
        e.preventDefault() && e.stopPropagation();
        $target = $(e.currentTarget);
        this.selectedModel = this.resultCollection.get($target.data('id'));
        return this._activateSelected(e.metaKey || e.ctrlKey);
      };

      AutocompleteView.prototype._onClearTokens = function(e) {
        e.preventDefault();
        while (this.tokens.length) {
          this._removeToken(this.tokens[0], false);
        }
        this.$clearBtn.hide();
        if (!this.disabled) {
          this.$input.prop('disabled', false).focus();
        }
        this.trigger('enabled');
        return this.trigger('changeToken', this.tokenParams());
      };

      AutocompleteView.prototype._onRemoveToken = function(e) {
        e.preventDefault();
        return this._removeToken($(e.currentTarget).siblings('input').val());
      };

      AutocompleteView.prototype._onSearch = function(e) {
        if (this.$searchBtn.attr('disabled')) {
          return;
        }
        this._fetchResults(true);
        return this.$input.focus();
      };

      AutocompleteView.prototype._addToken = function(model, keepOpen) {
        if (keepOpen == null) {
          keepOpen = false;
        }
        if (this.disabled) {
          return;
        }
        model.name = this._formatTokenName(model);
        this.tokens.push(model.id);
        this.$tokenList.append(tokenTemplate(model));
        if (!keepOpen) {
          this.toggleResultList(false);
          this.selectedModel = null;
          this._resetContext();
        }
        this.$input.val('');
        if (this.options.single) {
          this.$clearBtn.show().focus();
          this.$input.prop('disabled', true);
          this.$searchBtn.prop('disabled', true);
          this.trigger('disabled');
        }
        return this.trigger('changeToken', this.tokenParams());
      };

      AutocompleteView.prototype._formatTokenName = function(model) {
        var parent;

        if (!model.everyone) {
          return model.name;
        }
        if (parent = _.head(this.parentContexts)) {
          return "" + parent.name + ": " + this.currentContext.name;
        } else {
          return this.currentContext.name;
        }
      };

      AutocompleteView.prototype._removeToken = function(id, silent) {
        if (silent == null) {
          silent = false;
        }
        if (this.disabled) {
          return;
        }
        this.$tokenList.find("input[value=" + id + "]").parent().remove();
        this.tokens.splice(_.indexOf(id), 1);
        if (!this.tokens.length) {
          this.$clearBtn.hide();
        }
        if (this.options.single && !this.tokens.length) {
          this.$input.prop('disabled', false);
          this.$searchBtn.prop('disabled', false);
          this.trigger('enabled');
        }
        if (!silent) {
          return this.trigger('changeToken', this.tokenParams());
        }
      };

      AutocompleteView.prototype.tokenParams = function() {
        return _.map(this.tokens, function(t) {
          if (t.match) {
            return t;
          } else {
            return "user_" + t;
          }
        });
      };

      AutocompleteView.prototype.tokenModels = function() {
        return _.map(this.tokens, this._getModel);
      };

      AutocompleteView.prototype.setContext = function(context, disable) {
        var _ref1;

        if (disable == null) {
          disable = false;
        }
        if (!context.id) {
          context = null;
        }
        if (disable && !_.include(ENV.current_user_roles, 'admin') && !this.disabled) {
          this.disable(!context);
        }
        if ((context != null ? context.id : void 0) === ((_ref1 = this.currentContext) != null ? _ref1.id : void 0)) {
          return;
        }
        this.currentContext = context;
        this.hasExternalContext = !!context;
        this.tokens = [];
        return this.$tokenList.find('li.ac-token').remove();
      };

      AutocompleteView.prototype.disable = function(value) {
        if (value == null) {
          value = true;
        }
        this.$input.prop('disabled', value);
        this.$searchBtn.prop('disabled', value);
        return this.$inputBox.toggleClass('disabled', value);
      };

      AutocompleteView.prototype.setTokens = function(tokens) {
        var _this = this;

        return _.each(tokens, function(token) {
          _this._addToModelCache(token);
          return _this._addToken(token);
        });
      };

      AutocompleteView.prototype.updateStatusMessage = function(resultCount) {
        this.$resultsStatus.text('');
        return this.$resultsStatus.text(I18n.t('result_status', "The autocomplete has %{results} entries listed, use the up and down arrow keys" + " to navigate to a listing, then press enter to add the person to the To field.", {
          results: resultCount
        }));
      };

      AutocompleteView.prototype.updateSelectedNameForScreenReaders = function(selectedName) {
        this.$selectedName.text('');
        return this.$selectedName.text(selectedName);
      };

      return AutocompleteView;

    })(Backbone.View);
  });

}).call(this);
