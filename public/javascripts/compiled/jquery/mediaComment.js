(function() {
  var __slice = [].slice;

  define(['i18n!media_comments', 'underscore', 'vendor/jquery.ba-tinypubsub', 'vendor/mediaelement-and-player', 'jquery', 'compiled/util/kalturaAnalytics'], function(I18n, _, pubsub, mejs, $, kalturaAnalytics) {
    var VIDEO_HEIGHT, VIDEO_WIDTH, createMediaTag, getSourcesAndTracks, mediaCommentActions, positionAfterSubtitleSelector;

    VIDEO_WIDTH = 550;
    VIDEO_HEIGHT = 448;
    $.extend(mejs.MediaElementDefaults, {
      pluginPath: '/images/mediaelement/',
      defaultVideoWidth: VIDEO_WIDTH,
      defaultVideoHeight: VIDEO_HEIGHT
    });
    if (!INST.enableHtml5FirstVideos) {
      mejs.MepDefaults.mode = 'auto_plugin';
    }
    mejs.MepDefaults.success = function(mediaElement, domObject) {
      kalturaAnalytics(this.mediaCommentId, mediaElement, INST.kalturaSettings);
      return mediaElement.play();
    };
    mejs.MepDefaults.features.push('googleanalytics');
    positionAfterSubtitleSelector = mejs.MepDefaults.features.indexOf('tracks') + 1;
    mejs.MepDefaults.features.splice(positionAfterSubtitleSelector, 0, 'sourcechooser');
    mejs.MepDefaults.features.splice(positionAfterSubtitleSelector, 0, 'speed');
    getSourcesAndTracks = function(id) {
      var dfd;

      dfd = new $.Deferred;
      $.getJSON("/media_objects/" + id + "/info", function(data) {
        var source, sources, tracks, types;

        sources = (function() {
          var _i, _len, _ref, _results;

          _ref = data.media_sources;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            source = _ref[_i];
            if (source.content_type !== 'audio/mp3') {
              _results.push("<source type='" + source.content_type + "' src='" + source.url + "' title='" + source.width + "x" + source.height + " " + (Math.floor(source.bitrate / 1024)) + " kbps' />");
            }
          }
          return _results;
        })();
        tracks = _.map(data.media_tracks, function(track) {
          var languageName;

          languageName = mejs.language.codes[track.locale] || track.locale;
          return "<track kind='" + track.kind + "' label='" + languageName + "' src='" + track.url + "' srclang='" + track.locale + "' />";
        });
        types = _.map(data.media_sources, function(source) {
          return source.content_type;
        });
        return dfd.resolve({
          sources: sources,
          tracks: tracks,
          types: types,
          can_add_captions: data.can_add_captions
        });
      });
      return dfd;
    };
    createMediaTag = function(_arg) {
      var getElement, height, mediaPlayerOptions, mediaType, sourcesAndTracks, st_tags, tagType, width, willPlayAudioInFlash;

      sourcesAndTracks = _arg.sourcesAndTracks, mediaType = _arg.mediaType, height = _arg.height, width = _arg.width, mediaPlayerOptions = _arg.mediaPlayerOptions;
      tagType = mediaType === 'video' ? 'video' : 'audio';
      st_tags = sourcesAndTracks.sources.concat(sourcesAndTracks.tracks).join('');
      getElement = function(tagType) {
        return $("<" + tagType + " " + (mediaType === 'video' ? "width='" + width + "' height='" + height + "'" : '') + " controls>" + st_tags + "</" + tagType + ">");
      };
      willPlayAudioInFlash = function() {
        var opts, playback;

        opts = $.extend({
          mode: 'auto'
        }, mejs.MediaElementDefaults, mejs.MepDefaults, mediaPlayerOptions);
        playback = mejs.HtmlMediaElementShim.determinePlayback(getElement('audio')[0], opts, mejs.MediaFeatures.supportsMediaTag, !!'isMediaTag', null);
        return playback.method !== 'native';
      };
      if (mediaType === 'audio' && sourcesAndTracks.types[0].match(/^video\//) && willPlayAudioInFlash()) {
        tagType = 'video';
        mediaPlayerOptions.mode = 'auto_plugin';
        mediaPlayerOptions.isVideo = false;
        mediaPlayerOptions.videoHeight = height = 30;
      }
      return getElement(tagType);
    };
    mediaCommentActions = {
      create: function(mediaType, callback, onClose, defaultTitle) {
        var initOpts,
          _this = this;

        $("#media_recorder_container").removeAttr('id');
        this.attr('id', 'media_recorder_container');
        pubsub.unsubscribe('media_comment_created');
        pubsub.subscribe('media_comment_created', function(data) {
          return callback(data.id, data.mediaType);
        });
        initOpts = {
          modal: false,
          defaultTitle: defaultTitle
        };
        if ($.isFunction(onClose)) {
          initOpts.close = onClose.bind(this);
        }
        return $.mediaComment.init(mediaType, initOpts);
      },
      show_inline: function(id, mediaType, downloadUrl) {
        var $holder, detailsUrl, onError, onSuccess, showInline;

        if (mediaType == null) {
          mediaType = 'video';
        }
        $holder = $(this).closest('.instructure_file_link_holder').andSelf().first();
        $holder.text(I18n.t('loading', 'Loading media...'));
        showInline = function(id) {
          var height, width;

          width = Math.min($holder.closest("div,p,table").width() || VIDEO_WIDTH, VIDEO_WIDTH);
          height = Math.round(width / 336 * 240);
          return getSourcesAndTracks(id).done(function(sourcesAndTracks) {
            var $mediaTag, mediaPlayerOptions, player;

            if (sourcesAndTracks.sources.length) {
              mediaPlayerOptions = {
                can_add_captions: sourcesAndTracks.can_add_captions,
                mediaCommentId: id,
                googleAnalyticsTitle: id
              };
              $mediaTag = createMediaTag({
                sourcesAndTracks: sourcesAndTracks,
                mediaPlayerOptions: mediaPlayerOptions,
                mediaType: mediaType,
                height: height,
                width: width
              });
              $mediaTag.appendTo($holder.html(''));
              player = new MediaElementPlayer($mediaTag, mediaPlayerOptions);
              return $mediaTag.data('mediaelementplayer', player);
            } else {
              return $holder.text(I18n.t('media_still_converting', 'Media is currently being converted, please try again in a little bit.'));
            }
          });
        };
        if (id === 'maybe') {
          detailsUrl = downloadUrl.replace(/\/download.*/, "");
          onError = function() {
            return $holder.text(I18n.t('messages.file_failed_to_load', "This media file failed to load"));
          };
          onSuccess = function(data) {
            var _ref;

            if (((_ref = data.attachment) != null ? _ref.media_entry_id : void 0) !== 'maybe') {
              $holder.text('');
              return showInline(data.attachment.media_entry_id);
            } else {
              return onError();
            }
          };
          return $.ajaxJSON(detailsUrl, 'GET', {}, onSuccess, onError);
        } else {
          return showInline(id);
        }
      },
      show: function(id, mediaType) {
        var $dialog, $this, dialog, height, spaceNeededForControls, width;

        $this = $(this);
        if (dialog = $this.data('media_comment_dialog')) {
          return dialog.dialog('open');
        } else {
          spaceNeededForControls = 35;
          mediaType = mediaType || 'video';
          height = mediaType === 'video' ? 426 : 180;
          width = mediaType === 'video' ? VIDEO_WIDTH : 400;
          $dialog = $('<div style="overflow: hidden; padding: 0;" />');
          if (mediaType === 'audio') {
            $dialog.css('padding-top', '120px');
          }
          $dialog.dialog({
            title: I18n.t('titles.play_comment', "Play Media Comment"),
            width: width,
            height: height,
            modal: false,
            resizable: false,
            close: function() {
              return $this.data('mediaelementplayer').pause();
            }
          });
          return $dialog.disableWhileLoading(getSourcesAndTracks(id).done(function(sourcesAndTracks) {
            var $mediaTag, mediaPlayerOptions;

            if (sourcesAndTracks.sources.length) {
              mediaPlayerOptions = {
                can_add_captions: sourcesAndTracks.can_add_captions,
                mediaCommentId: id,
                googleAnalyticsTitle: id
              };
              $mediaTag = createMediaTag({
                sourcesAndTracks: sourcesAndTracks,
                mediaPlayerOptions: mediaPlayerOptions,
                mediaType: mediaType,
                height: height - spaceNeededForControls,
                width: width
              });
              $mediaTag.appendTo($dialog.html(''));
              return $this.data({
                mediaelementplayer: new MediaElementPlayer($mediaTag, mediaPlayerOptions),
                media_comment_dialog: $dialog
              });
            } else {
              return $dialog.text(I18n.t('media_still_converting', 'Media is currently being converted, please try again in a little bit.'));
            }
          }));
        }
      }
    };
    return $.fn.mediaComment = function() {
      var command, restArgs;

      command = arguments[0], restArgs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!INST.kalturaSettings) {
        return console.log('Kaltura has not been enabled for this account');
      }
      mediaCommentActions[command].apply(this, restArgs);
      return this;
    };
  });

}).call(this);
