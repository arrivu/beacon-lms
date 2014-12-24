(function() {
  define(['compiled/views/profiles/GravatarView'], function(GravatarView) {
    module('GravatarView', {
      setup: function() {
        this.oldEnv = window.ENV;
        window.ENV = {
          PROFILE: {
            primary_email: 'foo@example.com'
          }
        };
        this.view = new GravatarView({
          avatarSize: {
            h: 42,
            w: 42
          }
        });
        this.view.$el.appendTo('#fixtures');
        this.view.render();
        this.view.setup();
        this.$preview = this.view.$el.find('.gravatar-preview-image');
        this.$previewButton = this.view.$el.find('.gravatar-preview-btn');
        return this.$input = this.view.$el.find('.gravatar-preview-input');
      },
      teardown: function() {
        var _ref;

        window.ENV = this.oldEnv;
        this.view.remove();
        return (_ref = this.server) != null ? _ref.restore() : void 0;
      }
    });
    test('pre-populates preview with default', function() {
      var md5;

      md5 = 'b48def645758b95537d4424c84d1a9ff';
      return equal(this.$preview.attr('src'), "https://secure.gravatar.com/avatar/" + md5 + "?s=200&d=identicon");
    });
    test('updates preview', function() {
      var md5;

      md5 = 'e8da7df89c8bcbfec59336b4e0d5e76d';
      this.$input.val('bar@example.com');
      this.$previewButton.click();
      return equal(this.$preview.attr('src'), "https://secure.gravatar.com/avatar/" + md5 + "?s=200&d=identicon");
    });
    return test('calls avatar url with specified size', function() {
      this.server = sinon.fakeServer.create();
      this.server.respond(function(request) {
        var body_match, body_param, size_match, size_param, url_match;

        url_match = request.url.match(/api\/v1\/users\/self/);
        ok(url_match, "call to unexpected url");
        body_param = encodeURIComponent("user[avatar][url]");
        body_match = request.requestBody.match(body_param);
        ok(body_match, "did not specify avatar url parameter");
        size_param = encodeURIComponent("s=42");
        size_match = request.requestBody.match(size_param);
        ok(size_match, "did not specify correct size");
        return request.respond(200, {
          'Content-Type': 'application/json'
        }, "{}");
      });
      this.view.updateAvatar();
      return this.server.respond();
    });
  });

}).call(this);
