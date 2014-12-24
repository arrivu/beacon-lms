(function() {
  define(['../../shared/title_builder'], function(titleBuilder) {
    module('title_builder - Unit - ');
    test('uses default separator', function() {
      var result;

      result = titleBuilder(['foo', 'bar']);
      return equal(result, 'foo: bar');
    });
    test('uses separator from arguments', function() {
      var result;

      result = titleBuilder(['foo', 'bar'], ' - ');
      return equal(result, 'foo - bar');
    });
    test('concats tokens in order given', function() {
      var result;

      result = titleBuilder(['foo', 'bar', 'baz'], ' ');
      return equal(result, 'foo bar baz');
    });
    test('handles empty tokens', function() {
      var result;

      result = titleBuilder([], '!');
      return equal(result, '');
    });
    test('handles no arguments', function() {
      var result;

      result = titleBuilder();
      return equal(result, '');
    });
    return test('handles first argument as a string', function() {
      var result;

      result = titleBuilder('baz');
      return equal(result, 'baz');
    });
  });

}).call(this);
