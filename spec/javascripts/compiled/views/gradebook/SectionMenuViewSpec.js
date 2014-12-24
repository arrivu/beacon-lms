(function() {
  define(['jquery', 'underscore', 'compiled/views/gradebook/SectionMenuView', 'vendor/jquery.ba-tinypubsub'], function($, _, SectionMenuView) {
    var currentSection, sections;

    sections = [
      {
        id: 1,
        name: 'Section One',
        checked: true
      }, {
        id: 2,
        name: 'Section Two',
        checked: false
      }
    ];
    currentSection = 1;
    module('gradebook/SectionMenuView', {
      setup: function() {
        this.view = new SectionMenuView({
          sections: sections,
          currentSection: currentSection
        });
        this.view.render();
        return this.view.$el.appendTo('#fixtures');
      },
      teardown: function() {
        return $('#fixtures').empty();
      }
    });
    test('it renders a button', function() {
      ok(this.view.$el.find('button').length, 'button displays');
      return ok(this.view.$el.find('button').text().match(/Section One/), 'button label includes current section');
    });
    test('it displays given sections', function() {
      var html;

      this.view.$el.find('button').click();
      html = $('.section-select-menu:visible').html();
      ok(html.match(/All Sections/), 'displays default "all sections"');
      ok(html.match(/Section One/), 'displays first section');
      return ok(html.match(/Section Two/), 'displays section section');
    });
    test('it changes sections', function() {
      this.view.$el.find('button').click();
      $('input[value=2]').parent().click();
      return ok(this.view.currentSection === '2', 'updates its section');
    });
    return asyncTest('it publishes changes', function() {
      expect(1);
      $.subscribe('currentSection/change', function(section) {
        ok(section === '2', 'publish fires');
        return start();
      });
      this.view.$el.find('button').click();
      return $('input[value=2]').parent().click();
    });
  });

}).call(this);
