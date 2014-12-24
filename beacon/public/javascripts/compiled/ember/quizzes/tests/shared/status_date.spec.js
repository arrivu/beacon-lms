(function() {
  define(['../../shared/status_date', '../date_string_offset'], function(StatusDate, dateString) {
    module('status_date', {
      setup: function() {}
    });
    test('availableStatus closed', function() {
      var sDate;

      sDate = StatusDate.create({
        lockAt: dateString(-1),
        unlockAt: dateString(-1)
      });
      return equal(sDate.get('availableStatus'), 'closed');
    });
    test('availableStatus pending', function() {
      var sDate;

      sDate = StatusDate.create({
        lockAt: dateString(2),
        unlockAt: dateString(1)
      });
      return equal(sDate.get('availableStatus'), 'pending');
    });
    test('availableStatus none', function() {
      var sDate;

      sDate = StatusDate.create({
        unlockAt: dateString(-1)
      });
      return equal(sDate.get('availableStatus'), 'none');
    });
    test('availableStatus availableUntil', function() {
      var sDate;

      sDate = StatusDate.create({
        unlockAt: dateString(-1),
        lockAt: dateString(1)
      });
      return equal(sDate.get('availableStatus'), 'availableUntil');
    });
    test('availableStatus none', function() {
      var sDate;

      sDate = StatusDate.create({});
      return equal(sDate.get('availableStatus'), 'none');
    });
    test('availableLabel available', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'available'
      });
      return equal(sDate.get('availableLabel'), 'Available');
    });
    test('availableLabel availableUntil', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'availableUntil'
      });
      return equal(sDate.get('availableLabel'), 'Available until');
    });
    test('availableLabel pending', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'pending'
      });
      return equal(sDate.get('availableLabel'), 'Not available until');
    });
    test('availableMultiLabel pending', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'pending'
      });
      return equal(sDate.get('availableMultiLabel'), 'Available on');
    });
    test('availableLabel closed', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'closed'
      });
      return equal(sDate.get('availableLabel'), 'Closed');
    });
    test('availableLabel none', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'none'
      });
      return equal(sDate.get('availableLabel'), '');
    });
    return test('availableMultiLabel none', function() {
      var sDate;

      sDate = StatusDate.create({
        availableStatus: 'available'
      });
      return equal(sDate.get('availableMultiLabel'), 'Available');
    });
  });

}).call(this);
