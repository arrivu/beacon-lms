(function() {
  require(['jquery', 'compiled/jquery/mediaComment'], function($) {
    var mockServerResponse,
      _this = this;

    module('mediaComment', {
      setup: function() {
        this.server = sinon.fakeServer.create();
        window.INST.kalturaSettings = "settings set";
        return this.$holder = $('<div id="media-holder">').appendTo('#fixtures');
      },
      teardown: function() {
        window.INST.kalturaSettings = null;
        this.server.restore();
        return this.$holder.remove();
      }
    });
    mockServerResponse = function(server, id, type) {
      var resp;

      if (type == null) {
        type = "video";
      }
      resp = {
        media_sources: [
          {
            "content_type": "flv",
            "url": "http://some_flash_url.com"
          }, {
            "content_type": "mp4",
            "url": "http://some_mp4_url.com"
          }
        ]
      };
      return server.respond('GET', "/media_objects/" + id + "/info", [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify(resp)
      ]);
    };
    test("video player is displayed inline", function() {
      var id, video_tag_exists;

      id = 10;
      this.$holder.mediaComment('show_inline', id);
      mockServerResponse(this.server, id);
      video_tag_exists = this.$holder.find('video').length === 1;
      return ok(video_tag_exists, 'There should be a video tag');
    });
    test("audio player is displayed correctly", function() {
      var id;

      id = 10;
      this.$holder.mediaComment('show_inline', id, 'audio');
      mockServerResponse(this.server, id, 'audio');
      equal(this.$holder.find('audio').length, 1, 'There should be a audio tag');
      return equal(this.$holder.find('video').length, 0, 'There should not be a video tag');
    });
    return test("video player includes url sources provided by the server", function() {
      var id;

      id = 10;
      this.$holder.mediaComment('show_inline', id);
      mockServerResponse(this.server, id);
      equal(this.$holder.find('source[type=flv]').attr('src'), "http://some_flash_url.com", "Video contains the flash source");
      return equal(this.$holder.find('source[type=mp4]').attr('src'), "http://some_mp4_url.com", "Video contains the mp4 source");
    });
  });

}).call(this);
