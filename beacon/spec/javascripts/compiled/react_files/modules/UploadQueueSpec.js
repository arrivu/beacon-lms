(function() {
  define(['compiled/react_files/modules/UploadQueue', 'jquery'], function(UploadQueue, $) {
    var mockAttemptNext, mockFileOptions, mockFileUploader;

    mockFileOptions = function(name, type) {
      if (name == null) {
        name = 'foo';
      }
      if (type == null) {
        type = 'bar';
      }
      return {
        file: {
          size: 1,
          name: name,
          type: type
        }
      };
    };
    mockFileUploader = function(file) {
      return {
        upload: function() {
          var promise;

          promise = $.Deferred();
          window.setTimeout(function() {
            return promise.resolve();
          }, 2);
          return promise;
        },
        file: file
      };
    };
    mockAttemptNext = function() {};
    module('UploadQueue', {
      setup: function() {
        return this.queue = UploadQueue;
      },
      teardown: function() {
        this.queue.flush();
        return delete this.queue;
      }
    });
    test('Enqueues uploads, flush clears', function() {
      var original;

      original = this.queue.attemptNextUpload;
      this.queue.attemptNextUpload = mockAttemptNext;
      this.queue.enqueue(mockFileOptions());
      equal(this.queue.length(), 1);
      this.queue.enqueue(mockFileOptions());
      equal(this.queue.length(), 2);
      this.queue.flush();
      equal(this.queue.length(), 0);
      return this.queue.attemptNextUpload = original;
    });
    test('processes one upload at a time', function() {
      var original,
        _this = this;

      expect(2);
      original = this.queue.createUploader;
      this.queue.createUploader = mockFileUploader;
      this.queue.enqueue('foo');
      this.queue.enqueue('bar');
      this.queue.enqueue('baz');
      equal(this.queue.length(), 2);
      stop();
      window.setTimeout(function() {
        start();
        return equal(_this.queue.length(), 1);
      }, 2);
      return this.queue.createUploader = original;
    });
    test('dequeue removes top of the queue', function() {
      var foo, original;

      original = this.queue.attemptNextUpload;
      this.queue.attemptNextUpload = mockAttemptNext;
      foo = mockFileOptions('foo');
      this.queue.enqueue(foo);
      equal(this.queue.length(), 1);
      this.queue.enqueue(mockFileOptions('zoo'));
      equal(this.queue.length(), 2);
      equal(this.queue.dequeue().options, foo);
      return this.queue.attemptNextUpload = original;
    });
    return test('getAllUploaders includes the current uploader', function() {
      var all, foo, original, sentinel;

      original = this.queue.attemptNextUpload;
      this.queue.attemptNextUpload = mockAttemptNext;
      this.queue.flush();
      foo = mockFileOptions('foo');
      this.queue.enqueue(foo);
      equal(this.queue.length(), 1);
      this.queue.enqueue(mockFileOptions('zoo'));
      equal(this.queue.length(), 2);
      equal(this.queue.length(), 2);
      sentinel = mockFileOptions('sentinel');
      this.queue.currentUploader = sentinel;
      all = this.queue.getAllUploaders();
      equal(all.length, 3);
      equal(all.indexOf(sentinel), 0);
      this.queue.currentUploader = void 0;
      return this.queue.attemptNextUpload = original;
    });
  });

}).call(this);
