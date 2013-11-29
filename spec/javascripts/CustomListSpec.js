(function() {
  define(['compiled/widget/CustomList', 'helpers/simulateClick', 'helpers/loadFixture'], function(CustomList, simulateClick, loadFixture) {
    module('CustomList', {
      setup: function() {
        var index, items, _i;

        this.fixture = loadFixture('CustomList');
        items = window.items = [];
        for (index = _i = 0; _i <= 100; index = ++_i) {
          items.push({
            id: index,
            shortName: "Course " + index,
            longName: "Course long " + index,
            subtitle: "Enrolled as Teacher",
            href: "/courses/" + index
          });
        }
        this.list = new CustomList(this.fixture.find('#customList'), items, {
          url: 'fixtures/ok.json',
          appendTarget: this.fixture.find('#customList')
        });
        this.list.open();
        this.lis = this.fixture.find('.customListItem');
        return this.clock = sinon.useFakeTimers();
      },
      teardown: function() {
        this.clock.restore();
        return this.fixture.detach();
      }
    });
    test('should open and close', function() {
      this.list.close();
      this.clock.tick(1);
      equal(this.list.wrapper.is(':visible'), false, 'starts hidden');
      this.list.open();
      this.clock.tick(1);
      return equal(this.list.wrapper.is(':visible'), true, 'displays on open');
    });
    test('should remove and add the first item', function() {
      var expectedLength, originalLength;

      originalLength = this.list.targetList.children().length;
      simulateClick(this.lis[0]);
      simulateClick(this.lis[1]);
      this.clock.tick(300);
      expectedLength = originalLength - 1;
      equal(this.list.pinned.length, expectedLength, 'only one item should have been removed');
      simulateClick(this.lis[0]);
      this.clock.tick(300);
      return equal(this.list.pinned.length, originalLength, 'item should be restored');
    });
    test('should cancel pending add request on remove', function() {
      var el, item;

      el = jQuery(this.lis[16]);
      this.list.add(16, el);
      this.clock.tick(300);
      ok(this.list.requests.add[16], 'create an "add" request');
      item = this.list.pinned.findBy('id', 16);
      this.list.remove(item, el);
      this.clock.tick(300);
      return equal(this.list.requests.add[16], void 0, 'delete "add" request');
    });
    test('should cancel pending remove request on add', function() {
      var el, item;

      el = jQuery(this.lis[1]);
      item = this.list.pinned.findBy('id', 1);
      this.list.remove(item, el);
      this.clock.tick(300);
      ok(this.list.requests.remove[1], 'create a "remove" request');
      this.list.add(1, el);
      this.clock.tick(300);
      return equal(this.list.requests.remove[1], void 0, 'delete "remove" request');
    });
    return test('should reset', function() {
      var length, originalLength;

      originalLength = this.list.targetList.children().length;
      simulateClick(this.lis[0]);
      this.clock.tick(300);
      ok(originalLength !== this.list.targetList.children().length, 'length should be different');
      this.list.reset();
      length = this.list.targetList.children().length;
      return equal(length, originalLength, 'targetList items restored');
    });
  });

}).call(this);
