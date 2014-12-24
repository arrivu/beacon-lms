(function() {
  var __slice = [].slice;

  require(['jquery', 'underscore', 'compiled/jquery/mediaCommentThumbnail'], function($, _) {
    module('mediaCommentThumbnail', {
      setup: function() {
        this.stub = sinon.stub(_, 'defer', function() {
          var args, func;

          func = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return func.apply(null, args);
        });
        return this.$fixtures = $('#fixtures');
      },
      teardown: function() {
        _.defer.restore();
        return window.INST.kalturaSettings = null;
      }
    });
    return test("creates a thumbnail span with a background image URL generated from kaltura settings and media id", function() {
      var mediaComment, mediaId, partnerId, resourceDomain;

      resourceDomain = 'resources.example.com';
      mediaId = 'someExternalId';
      partnerId = '12345';
      mediaComment = $("<a id=\"media_comment_" + mediaId + "\" class=\"instructure_inline_media_comment video_comment\" href=\"/media_objects/" + mediaId + "\">\n  this is a media comment\n</a>");
      window.INST.kalturaSettings = {
        resource_domain: resourceDomain,
        partner_id: partnerId
      };
      this.$fixtures.append(mediaComment);
      $('.instructure_inline_media_comment', this.$fixtures).mediaCommentThumbnail('normal');
      equal($('.media_comment_thumbnail', this.$fixtures).length, 1);
      return ok($('.media_comment_thumbnail', this.$fixtures).first().css('background-image').indexOf("https://" + resourceDomain + "/p/" + partnerId + "/thumbnail/entry_id/" + mediaId + "/width/140/height/100/bgcolor/000000/type/2/vid_sec/5") > 0);
    });
  });

}).call(this);
