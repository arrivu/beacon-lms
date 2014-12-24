(function() {
  define(['underscore', '../modules/UploadQueue'], function(_, UploadQueue) {
    /*
    Manages buckets of FileOptions (resolved, nameCollisions, zipOptions)
    
    FileOption:
      file: <File>
      dup: how to handle duplicate names rename || overwrite (used in api call)
      name: name by which to upload the file
      expandZip: (bool) upload the zip or expand it to current directory
    */

    var FileOptionsCollection;

    FileOptionsCollection = (function() {
      function FileOptionsCollection() {
        this.state = this.buildDefaultState();
      }

      FileOptionsCollection.prototype.buildDefaultState = function() {
        return {
          resolvedNames: [],
          nameCollisions: [],
          zipOptions: [],
          newOptions: false
        };
      };

      FileOptionsCollection.prototype.queueUploads = function(contextId, contextType) {
        var _this = this;

        this.state.resolvedNames.forEach(function(f) {
          return UploadQueue.enqueue(f, _this.folder, contextId, contextType);
        });
        return this.setState({
          newOptions: false
        });
      };

      FileOptionsCollection.prototype.toFilesOptionArray = function(fList) {
        var files, i;

        files = [];
        i = 0;
        while (i < fList.length) {
          files.push({
            file: fList.item(i)
          });
          i++;
        }
        return files;
      };

      FileOptionsCollection.prototype.fileNameExists = function(name) {
        var found;

        return found = _.find(this.folder.files.models, function(f) {
          return f.get('display_name') === name;
        });
      };

      FileOptionsCollection.prototype.isZipFile = function(file) {
        var _ref;

        return !!((_ref = file.type) != null ? _ref.match(/zip/) : void 0);
      };

      FileOptionsCollection.prototype.segregateOptionBuckets = function(selectedFiles) {
        var collisions, fileOptions, i, nameToTest, resolved, zips;

        i = 0;
        collisions = [];
        resolved = [];
        zips = [];
        while (i < selectedFiles.length) {
          fileOptions = selectedFiles[i];
          nameToTest = fileOptions.name || fileOptions.file.name;
          if (this.isZipFile(fileOptions.file) && fileOptions.expandZip === void 0) {
            zips.push(fileOptions);
          } else if (this.fileNameExists(nameToTest) && (fileOptions.dup !== 'overwrite' && ((fileOptions.expandZip == null) || fileOptions.expandZip === false))) {
            collisions.push(fileOptions);
          } else {
            resolved.push(fileOptions);
          }
          i++;
        }
        return {
          collisions: collisions,
          resolved: resolved,
          zips: zips
        };
      };

      FileOptionsCollection.prototype.handleAddFilesClick = function() {
        return this.refs.addFileInput.getDOMNode().click();
      };

      FileOptionsCollection.prototype.handleFilesInputChange = function(e) {
        var collisions, resolved, selectedFiles, zips, _ref;

        selectedFiles = this.toFilesOptionArray(this.refs.addFileInput.getDOMNode().files);
        _ref = this.segregateOptionBuckets(selectedFiles), resolved = _ref.resolved, collisions = _ref.collisions, zips = _ref.zips;
        return this.setState({
          nameCollisions: collisions,
          resolvedNames: resolved,
          zipOptions: zips
        });
      };

      FileOptionsCollection.prototype.onNameConflictResolved = function(fileNameOptions) {
        var allOptions, collisions, nameCollisions, resolved, resolvedNames, zips, _ref;

        nameCollisions = this.state.nameCollisions;
        resolvedNames = this.state.resolvedNames;
        zips = this.state.zipOptions;
        resolvedNames.push(fileNameOptions);
        nameCollisions.shift();
        allOptions = resolvedNames.concat(nameCollisions).concat(zips);
        _ref = this.segregateOptionBuckets(allOptions), resolved = _ref.resolved, collisions = _ref.collisions, zips = _ref.zips;
        return this.setState({
          nameCollisions: collisions,
          resolvedNames: resolved,
          zipOptions: zips
        });
      };

      FileOptionsCollection.prototype.onZipOptionsResolved = function(fileNameOptions) {
        var allOptions, collisions, nameCollisions, resolved, resolvedNames, zips, _ref;

        nameCollisions = this.state.nameCollisions;
        resolvedNames = this.state.resolvedNames;
        zips = this.state.zipOptions;
        resolvedNames.push(fileNameOptions);
        zips.shift();
        allOptions = resolvedNames.concat(nameCollisions).concat(zips);
        _ref = this.segregateOptionBuckets(allOptions), resolved = _ref.resolved, collisions = _ref.collisions, zips = _ref.zips;
        return this.setState({
          nameCollisions: collisions,
          resolvedNames: resolved,
          zipOptions: zips
        });
      };

      FileOptionsCollection.prototype.setOptionsFromFiles = function(files, notifyChange) {
        var allOptions, collisions, resolved, zips, _ref;

        allOptions = this.toFilesOptionArray(files);
        _ref = this.segregateOptionBuckets(allOptions), resolved = _ref.resolved, collisions = _ref.collisions, zips = _ref.zips;
        this.setState({
          nameCollisions: collisions,
          resolvedNames: resolved,
          zipOptions: zips,
          newOptions: true
        });
        if (notifyChange && this.onChange) {
          return this.onChange();
        }
      };

      FileOptionsCollection.prototype.hasNewOptions = function() {
        return this.state.newOptions;
      };

      FileOptionsCollection.prototype.setFolder = function(folder) {
        return this.folder = folder;
      };

      FileOptionsCollection.prototype.getFolder = function() {
        return this.folder;
      };

      FileOptionsCollection.prototype.setState = function(options) {
        return this.state = _.defaults(options, this.state);
      };

      FileOptionsCollection.prototype.getState = function() {
        return this.state;
      };

      FileOptionsCollection.prototype.resetState = function() {
        return this.state = this.buildDefaultState();
      };

      FileOptionsCollection.prototype.onChange = function() {};

      return FileOptionsCollection;

    })();
    return new FileOptionsCollection();
  });

}).call(this);
