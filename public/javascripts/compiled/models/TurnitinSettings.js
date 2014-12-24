(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty;

  define(['underscore'], function(_) {
    var TurnitinSettings;

    return TurnitinSettings = (function() {
      function TurnitinSettings(options) {
        if (options == null) {
          options = {};
        }
        this.normalizeBoolean = __bind(this.normalizeBoolean, this);
        this.present = __bind(this.present, this);
        this.excludesSmallMatches = __bind(this.excludesSmallMatches, this);
        this.toJSON = __bind(this.toJSON, this);
        this.percent = __bind(this.percent, this);
        this.words = __bind(this.words, this);
        this.originalityReportVisibility = options.originality_report_visibility || 'immediate';
        this.sPaperCheck = this.normalizeBoolean(options.s_paper_check);
        this.internetCheck = this.normalizeBoolean(options.internet_check);
        this.excludeBiblio = this.normalizeBoolean(options.exclude_biblio);
        this.excludeQuoted = this.normalizeBoolean(options.exclude_quoted);
        this.journalCheck = this.normalizeBoolean(options.journal_check);
        this.excludeSmallMatchesType = options.exclude_small_matches_type;
        this.excludeSmallMatchesValue = options.exclude_small_matches_value || 0;
        this.submitPapersTo = options.hasOwnProperty('submit_papers_to') ? this.normalizeBoolean(options.submit_papers_to) : true;
      }

      TurnitinSettings.prototype.words = function() {
        if (this.excludeSmallMatchesType === 'words') {
          return this.excludeSmallMatchesValue;
        } else {
          return "";
        }
      };

      TurnitinSettings.prototype.percent = function() {
        if (this.excludeSmallMatchesType === 'percent') {
          return this.excludeSmallMatchesValue;
        } else {
          return "";
        }
      };

      TurnitinSettings.prototype.toJSON = function() {
        return {
          s_paper_check: this.sPaperCheck,
          originality_report_visibility: this.originalityReportVisibility,
          internet_check: this.internetCheck,
          exclude_biblio: this.excludeBiblio,
          exclude_quoted: this.excludeQuoted,
          journal_check: this.journalCheck,
          exclude_small_matches_type: this.excludeSmallMatchesType,
          exclude_small_matches_value: this.excludeSmallMatchesValue,
          submit_papers_to: this.submitPapersTo
        };
      };

      TurnitinSettings.prototype.excludesSmallMatches = function() {
        return !(this.excludeSmallMatchesType == null);
      };

      TurnitinSettings.prototype.present = function() {
        var json, key, value;

        json = {};
        for (key in this) {
          if (!__hasProp.call(this, key)) continue;
          value = this[key];
          json[key] = value;
        }
        json.excludesSmallMatches = this.excludesSmallMatches();
        json.words = this.words();
        json.percent = this.percent();
        return json;
      };

      TurnitinSettings.prototype.normalizeBoolean = function(value) {
        return _.contains(["1", true, "true", 1], value);
      };

      return TurnitinSettings;

    })();
  });

}).call(this);
