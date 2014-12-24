(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'i18n!observees', 'jst/UserObservees', 'compiled/views/UserObserveeView', 'compiled/views/PaginatedCollectionView'], function(_, I18n, template, itemView, PaginatedCollectionView) {
    var UserObserveesView, _ref;

    return UserObserveesView = (function(_super) {
      __extends(UserObserveesView, _super);

      function UserObserveesView() {
        _ref = UserObserveesView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      UserObserveesView.prototype.autoFetch = true;

      UserObserveesView.prototype.template = template;

      UserObserveesView.prototype.itemView = itemView;

      UserObserveesView.prototype.className = 'user-observees';

      UserObserveesView.prototype.events = {
        'submit .add-observee-form': 'addObservee'
      };

      UserObserveesView.prototype.els = _.extend({}, PaginatedCollectionView.prototype.els, {
        '.add-observee-form': '$form'
      });

      UserObserveesView.prototype.initialize = function() {
        var _this = this;

        UserObserveesView.__super__.initialize.apply(this, arguments);
        this.collection.on('beforeFetch', function() {
          return _this.setLoading(true);
        });
        return this.collection.on('fetch', function() {
          return _this.setLoading(false);
        });
      };

      UserObserveesView.prototype.addObservee = function(ev) {
        var d, observee,
          _this = this;

        ev.preventDefault();
        observee = this.$form.getFormData();
        d = $.post(this.collection.url(), {
          observee: observee
        });
        d.done(function(model) {
          _this.collection.add([model], {
            merge: true
          });
          $.flashMessage(I18n.t('observee_added', 'Now observing %{user}', {
            user: model.name
          }));
          _this.$form.get(0).reset();
          return _this.focusForm();
        });
        return d.error(function(response) {
          _this.$form.formErrors(JSON.parse(response.responseText));
          return _this.focusForm();
        });
      };

      UserObserveesView.prototype.focusForm = function() {
        var field;

        field = this.$form.find(":input[value='']:not(button)").first();
        if (!field.length) {
          field = this.$form.find(":input:not(button)");
        }
        return field.focus();
      };

      UserObserveesView.prototype.setLoading = function(loading) {
        this.$el.toggleClass('loading', loading);
        return this.$('.observees-list-container').attr('aria-busy', loading ? 'true' : 'false');
      };

      return UserObserveesView;

    })(PaginatedCollectionView);
  });

}).call(this);
