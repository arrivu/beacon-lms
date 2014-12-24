(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conferences', 'jquery', 'Backbone', 'jst/conferences/newConference', 'jquery.google-analytics'], function(I18n, $, _arg, template) {
    var ConferenceView, View, _ref;

    View = _arg.View;
    return ConferenceView = (function(_super) {
      __extends(ConferenceView, _super);

      function ConferenceView() {
        _ref = ConferenceView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ConferenceView.prototype.tagName = 'li';

      ConferenceView.prototype.className = 'conference';

      ConferenceView.prototype.template = template;

      ConferenceView.prototype.events = {
        'click .edit_conference_link': 'edit',
        'click .delete_conference_link': 'delete',
        'click .close_conference_link': 'close',
        'click .start-button': 'start',
        'click .external_url': 'external'
      };

      ConferenceView.prototype.initialize = function() {
        ConferenceView.__super__.initialize.apply(this, arguments);
        return this.model.on('change', this.render);
      };

      ConferenceView.prototype["delete"] = function(e) {
        e.preventDefault();
        if (!confirm(I18n.t('confirm.delete', "Are you sure you want to delete this conference?"))) {
          return;
        }
        return this.model.destroy();
      };

      ConferenceView.prototype.close = function(e) {
        var _this = this;

        e.preventDefault();
        if (!confirm(I18n.t('confirm.close', "Are you sure you want to end this conference?\n\nYou will not be able to reopen it."))) {
          return;
        }
        return $.ajaxJSON($(e.currentTarget).attr('href'), "POST", {}, function(data) {
          return window.router.close(_this.model);
        });
      };

      ConferenceView.prototype.start = function(e) {
        var i, w;

        if (this.model.isNew()) {
          e.preventDefault();
          return;
        }
        w = window.open(e.currentTarget.href, '_blank');
        if (!w) {
          return;
        }
        e.preventDefault();
        w.onload = function() {
          return window.location.reload(true);
        };
        return i = setInterval(function() {
          var href;

          if (!w) {
            return;
          }
          try {
            return href = w.location.href;
          } catch (_error) {
            e = _error;
            clearInterval(i);
            return window.location.reload(true);
          }
        }, 100);
      };

      ConferenceView.prototype.external = function(e) {
        var $self, link_text, loading_text;

        $.trackEvent('Conference', 'External URL');
        e.preventDefault();
        loading_text = I18n.t('loading_urls_message', "Loading, please wait...");
        $self = $(e.currentTarget);
        link_text = $self.text();
        if (link_text === loading_text) {
          return;
        }
        $self.text(loading_text);
        return $.ajaxJSON($self.attr('href'), 'GET', {}, function(data) {
          var $a, $box, datum, _i, _len;

          $self.text(link_text);
          if (data.length === 0) {
            return $.flashError(I18n.t('no_urls_error', "Sorry, it looks like there aren't any %{type} pages for this conference yet.", {
              type: $self.attr('name')
            }));
          } else if (data.length > 1) {
            $box = $(document.createElement('DIV'));
            $box.append($("<p />").text(I18n.t('multiple_urls_message', "There are multiple %{type} pages available for this conference. Please select one:", {
              type: $self.attr('name')
            })));
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              datum = data[_i];
              $a = $("<a />", {
                href: datum.url || $self.attr('href') + '&url_id=' + datum.id,
                target: '_blank'
              });
              $a.text(datum.name);
              $box.append($a).append("<br>");
            }
            return $box.dialog({
              width: 425,
              minWidth: 425,
              minHeight: 215,
              resizable: true,
              height: "auto",
              title: $self.text()
            });
          } else {
            return window.open(data[0].url);
          }
        });
      };

      return ConferenceView;

    })(View);
  });

}).call(this);
