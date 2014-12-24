(function() {
  define(['../../shared/environment'], function(environment) {
    module('environment', {
      setup: function() {
        return environment.setEnv({
          context_asset_string: 'course_10',
          current_user_id: 1,
          files_domain: 'localhost:3000'
        });
      }
    });
    test('computes course id correctly', function() {
      return equal(environment.get('courseId'), 10, 'courseId');
    });
    test('returns false for permissions when not available', function() {
      return equal(environment.get('canManage'), false);
    });
    test('returns appropriate permissions when available', function() {
      expect(2);
      environment.setEnv({
        PERMISSIONS: {
          manage: true,
          update: true
        }
      });
      equal(environment.get('canManage'), true);
      return equal(environment.get('canUpdate'), true);
    });
    test('returns false for flags when not available', function() {
      return equal(environment.get('moderateEnabled'), false);
    });
    return test('returns appropriate flag status when available', function() {
      environment.setEnv({
        FLAGS: {
          quiz_moderate: true
        }
      });
      return equal(environment.get('moderateEnabled'), true);
    });
  });

}).call(this);
