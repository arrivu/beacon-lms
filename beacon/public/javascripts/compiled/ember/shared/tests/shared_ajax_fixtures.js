(function() {
  define(['ic-ajax', 'ember'], function(ajax, Ember) {
    var clone, data, numbers;

    clone = function(obj) {
      return Ember.copy(obj, true);
    };
    data = {
      attachment: {
        file_state: '0',
        workflow_state: 'to_be_zipped',
        readable_size: '73 KB'
      }
    };
    numbers = [1, 2, 3];
    return {
      create: function() {
        window.ENV = {
          submission_zip_url: '/courses/1/assignments/1/submissions?zip=1',
          numbers_url: '/courses/1/numbers'
        };
        ajax.defineFixture(window.ENV.submission_zip_url, {
          response: clone(data),
          jqXHR: {
            getResponseHeader: function() {
              return {};
            }
          },
          textStatus: 'success'
        });
        return ajax.defineFixture(window.ENV.numbers_url, {
          response: clone(numbers),
          jqXHR: {
            getResponseHeader: function() {
              return {};
            }
          },
          textStatus: 'success'
        });
      },
      makeAvailable: function() {
        data.attachment.file_state = 100;
        return data.attachment.workflow_state = 'available';
      }
    };
  });

}).call(this);
