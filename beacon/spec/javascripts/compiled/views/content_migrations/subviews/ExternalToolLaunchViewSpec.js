(function() {
  define(['jquery', 'Backbone', 'compiled/views/content_migrations/subviews/ExternalToolLaunchView'], function($, Backbone, ExternalToolLaunchView) {
    module('ExternalToolLaunchView', {
      setup: function() {
        this.mockMigration = new Backbone.Model;
        this.mockReturnView = new Backbone.View;
        this.launchView = new ExternalToolLaunchView({
          contentReturnView: this.mockReturnView,
          model: this.mockMigration
        });
        return $('#fixtures').html(this.launchView.render().el);
      },
      teardown: function() {
        return this.launchView.remove();
      }
    });
    test('calls render on return view when launch button clicked', function() {
      sinon.stub(this.mockReturnView, 'render', function() {
        return this;
      });
      this.launchView.$el.find('#externalToolLaunch').click();
      return ok(this.mockReturnView.render.calledOnce, 'render not called on return view');
    });
    test("displays file name on 'ready'", function() {
      this.mockReturnView.trigger('ready', {
        text: 'data text',
        url: 'data url'
      });
      return strictEqual(this.launchView.$fileName.text(), 'data text');
    });
    return test("sets settings.data_url on migration on 'ready'", function() {
      this.mockReturnView.trigger('ready', {
        text: 'data text',
        url: 'data url'
      });
      return deepEqual(this.mockMigration.get('settings'), {
        file_url: 'data url'
      });
    });
  });

}).call(this);
