(function() {
  define(['jquery', 'compiled/jquery/fixDialogButtons'], function($) {
    var toggleRegion, updateTextToState;

    updateTextToState = function(newStateOfRegion) {
      return function() {
        var $this, newHtml, oldStateKey, savedHtml;

        $this = $(this);
        if (!(newHtml = $this.data("htmlWhileTarget" + newStateOfRegion))) {
          return;
        }
        oldStateKey = "htmlWhileTarget" + (newStateOfRegion === 'Hidden' ? 'Shown' : 'Hidden');
        savedHtml = $this.data(oldStateKey);
        if (!savedHtml) {
          $this.data(oldStateKey, $this.html());
        }
        return $this.html(newHtml);
      };
    };
    toggleRegion = function($region, showRegion, $trigger) {
      var $allElementsControllingRegion, dialogOpts;

      if (showRegion == null) {
        showRegion = $region.is(':ui-dialog:hidden') || ($region.attr('aria-expanded') !== 'true');
      }
      $allElementsControllingRegion = $("[aria-controls*=" + ($region.attr('id')) + "]");
      $allElementsControllingRegion.filter(function() {
        return $(this).data('hideWhileTargetShown');
      }).toggle(!showRegion);
      if ($trigger && $trigger.attr('aria-expanded') !== void 0) {
        $trigger.attr('aria-expanded', !($trigger.attr('aria-expanded') === 'true'));
        $region.toggle($trigger.attr('aria-expanded') === 'true');
      } else {
        $region.attr('aria-expanded', '' + showRegion).toggle(showRegion);
      }
      if ($region.is(':ui-dialog') || (dialogOpts = $region.data('turnIntoDialog'))) {
        if (dialogOpts && showRegion) {
          dialogOpts = $.extend({
            autoOpen: false,
            close: function() {
              return toggleRegion($region, false);
            }
          }, dialogOpts);
          $region.dialog(dialogOpts).fixDialogButtons();
        }
        if (showRegion) {
          $region.dialog('open');
          if ($region.data('read-on-open')) {
            $region.dialog('widget').attr('aria-live', 'assertive').attr('aria-atomic', 'true');
          }
        } else if ($region.dialog('isOpen')) {
          $region.dialog('close');
        }
      }
      return $allElementsControllingRegion.each(updateTextToState(showRegion ? 'Shown' : 'Hidden'));
    };
    return $(document).on('click change keyclick', '.element_toggler[aria-controls]', function(event) {
      var $icon, $parent, $region, $this, force;

      $this = $(this);
      if ($this.is('input[type="checkbox"]')) {
        if (event.type === 'click') {
          return;
        }
        force = $this.prop('checked');
      }
      if (event.type === 'click') {
        event.preventDefault();
      }
      $parent = $this.closest('.user_content');
      if (!$parent.length) {
        $parent = $(document.body);
      }
      $region = $parent.find("#" + ($this.attr('aria-controls').replace(/\s/g, ', #')));
      if ($region.length) {
        toggleRegion($region, force, $this);
      }
      $icon = $this.find('i[class*="icon-mini-arrow"].auto_rotate');
      if ($icon.length) {
        $icon.toggleClass('icon-mini-arrow-down');
        return $icon.toggleClass('icon-mini-arrow-right');
      }
    });
  });

}).call(this);
