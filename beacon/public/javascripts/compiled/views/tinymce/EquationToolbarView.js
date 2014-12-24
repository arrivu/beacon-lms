(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!editor', 'jquery', 'Backbone', 'jst/tinymce/EquationToolbarView', 'mathquill'], function(I18n, $, Backbone, template) {
    var EquationToolbarView, _ref;

    return EquationToolbarView = (function(_super) {
      __extends(EquationToolbarView, _super);

      function EquationToolbarView() {
        this.addMathJaxEvents = __bind(this.addMathJaxEvents, this);        _ref = EquationToolbarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EquationToolbarView.prototype.template = template;

      EquationToolbarView.prototype.els = {
        '#mathjax-view .mathquill-toolbar': '$toolbar',
        '#mathjax-editor': '$matheditor'
      };

      EquationToolbarView.prototype.render = function() {
        var $tabLinks;

        this.cacheEls();
        this.$toolbar.append(this.template());
        $tabLinks = $('#mathjax-view .mathquill-tab-bar li a');
        $tabLinks.click(function(e) {
          e.preventDefault();
          $('#mathjax-view .mathquill-tab-bar li').removeClass('mathquill-tab-selected');
          $tabLinks.attr('aria-selected', 'false').attr('tabindex', '-1');
          $('#mathjax-view .mathquill-tab-pane').removeClass('mathquill-tab-pane-selected');
          $(this).parent().addClass('mathquill-tab-selected');
          $(this).attr('aria-selected', 'true').attr('tabindex', 0).focus();
          return $(this.href.replace(/.*#/, '#')).addClass('mathquill-tab-pane-selected');
        }).keydown(function(e) {
          var direction, listIndex;

          switch (e.keyCode) {
            case 37:
              direction = 'l';
              break;
            case 39:
              direction = 'r';
              break;
            default:
              return true;
          }
          e.preventDefault();
          listIndex = $tabLinks.index(this);
          if (listIndex === ($tabLinks.length - 1) && direction === 'r') {
            listIndex = -1;
          }
          if (direction === 'r') {
            listIndex++;
          } else {
            listIndex--;
          }
          return $($tabLinks.get(listIndex)).focus().click();
        });
        $('#mathjax-view .mathquill-tab-bar li:first-child').addClass('mathquill-tab-selected');
        return $.getScript("//cdn.mathjax.org/mathjax/2.1-latest/MathJax.js?config=TeX-AMS_HTML.js", this.addMathJaxEvents);
      };

      EquationToolbarView.prototype.addMathJaxEvents = function() {
        var renderPreview;

        renderPreview = function() {
          var jax, tex;

          jax = MathJax.Hub.getAllJax("mathjax-preview")[0];
          if (jax) {
            tex = $('#mathjax-editor').val();
            return MathJax.Hub.Queue(["Text", jax, tex]);
          }
        };
        $('#mathjax-view a.mathquill-rendered-math').mousedown(function(e) {
          return e.stopPropagation();
        }).click(function(e) {
          var field, s, sel, text, val;

          e.preventDefault();
          text = this.title + ' ';
          field = document.getElementById('mathjax-editor');
          if (document.selection) {
            sel = document.selection.createRange();
            sel.text = text;
          } else if (field.selectionStart || field.selectionStart === '0') {
            s = field.selectionStart;
            e = field.selectionEnd;
            val = field.value;
            field.value = val.substring(0, s) + text + val.substring(e, val.length);
          } else {
            field.value += text;
          }
          $(field).focus();
          return renderPreview();
        });
        this.renderPreview = renderPreview;
        this.$matheditor.keyup(renderPreview);
        return this.$matheditor.bind('paste', renderPreview);
      };

      return EquationToolbarView;

    })(Backbone.View);
  });

}).call(this);
