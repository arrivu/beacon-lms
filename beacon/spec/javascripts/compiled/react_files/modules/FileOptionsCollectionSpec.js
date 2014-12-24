(function() {
  define(['compiled/react_files/modules/FileOptionsCollection'], function(FileOptionsCollection) {
    var createFileOption, mockFile, setupFolderWith;

    mockFile = function(name, type) {
      if (type == null) {
        type = 'application/image';
      }
      return {
        get: function(attr) {
          if (attr === 'display_name') {
            return name;
          }
        },
        type: type
      };
    };
    setupFolderWith = function(names) {
      var folder, mockFiles;

      mockFiles = names.map(function(name) {
        return mockFile(name);
      });
      folder = {
        files: {
          models: mockFiles
        }
      };
      return FileOptionsCollection.setFolder(folder);
    };
    createFileOption = function(fileName, dup, optionName) {
      var options;

      options = {
        file: {
          name: fileName
        }
      };
      if (dup) {
        options.dup = dup;
      }
      if (optionName) {
        options.name = optionName;
      }
      return options;
    };
    return module('FileOptionsCollection', {
      setup: function() {
        return FileOptionsCollection.resetState();
      },
      teardown: function() {
        return FileOptionsCollection.resetState();
      }
    }, test('fileNameExists correctly finds existing files by display_name', function() {
      setupFolderWith(['foo', 'bar', 'baz']);
      return ok(FileOptionsCollection.fileNameExists('foo'));
    }), test('fileNameExists returns falsy value when no matching file exists', function() {
      setupFolderWith(['foo', 'bar', 'baz']);
      return equal(FileOptionsCollection.fileNameExists('xyz') != null, false);
    }), test('segregateOptionBuckets divides files into collsion and resolved buckets', function() {
      var collisions, one, resolved, two, _ref;

      setupFolderWith(['foo', 'bar', 'baz']);
      one = createFileOption('file_name.txt', 'overwrite', 'option_name.txt');
      two = createFileOption('foo');
      _ref = FileOptionsCollection.segregateOptionBuckets([one, two]), collisions = _ref.collisions, resolved = _ref.resolved;
      equal(collisions.length, 1);
      equal(resolved.length, 1);
      return equal(collisions[0].file.name, 'foo');
    }), test('segregateOptionBuckets uses fileOptions name over actual file name', function() {
      var collisions, one, resolved, _ref;

      setupFolderWith(['foo', 'bar', 'baz']);
      one = createFileOption('file_name.txt', 'rename', 'foo');
      _ref = FileOptionsCollection.segregateOptionBuckets([one]), collisions = _ref.collisions, resolved = _ref.resolved;
      equal(collisions.length, 1);
      equal(resolved.length, 0);
      return equal(collisions[0].file.name, 'file_name.txt');
    }), test('segregateOptionBuckets name conflicts marked as overwrite are considered resolved', function() {
      var collisions, one, resolved, _ref;

      setupFolderWith(['foo', 'bar', 'baz']);
      one = createFileOption('foo', 'overwrite');
      _ref = FileOptionsCollection.segregateOptionBuckets([one]), collisions = _ref.collisions, resolved = _ref.resolved;
      equal(collisions.length, 0);
      equal(resolved.length, 1);
      return equal(resolved[0].file.name, 'foo');
    }), test('segregateOptionBuckets detects zip files', function() {
      var collisions, one, resolved, zips, _ref;

      setupFolderWith(['foo', 'bar', 'baz']);
      one = createFileOption('other.zip');
      one.file.type = 'application/zip';
      _ref = FileOptionsCollection.segregateOptionBuckets([one]), collisions = _ref.collisions, resolved = _ref.resolved, zips = _ref.zips;
      equal(resolved.length, 0);
      return equal(zips[0].file.name, 'other.zip');
    }), test('segregateOptionBuckets ignores zip files that have an expandZip option', function() {
      var collisions, one, resolved, zips, _ref;

      setupFolderWith(['foo', 'bar', 'baz']);
      one = createFileOption('other.zip');
      one.file.type = 'application/zip';
      one.expandZip = false;
      _ref = FileOptionsCollection.segregateOptionBuckets([one]), collisions = _ref.collisions, resolved = _ref.resolved, zips = _ref.zips;
      equal(resolved.length, 1);
      return equal(zips.length, 0);
    }), test('segregateOptionBuckets ignores zip file names when expandZip option is true', function() {
      var collisions, one, resolved, zips, _ref;

      setupFolderWith(['other.zip', 'bar', 'baz']);
      one = createFileOption('other.zip');
      one.file.type = 'application/zip';
      one.expandZip = true;
      _ref = FileOptionsCollection.segregateOptionBuckets([one]), collisions = _ref.collisions, resolved = _ref.resolved, zips = _ref.zips;
      equal(resolved.length, 1);
      equal(collisions.length, 0);
      return equal(zips.length, 0);
    }));
  });

}).call(this);
