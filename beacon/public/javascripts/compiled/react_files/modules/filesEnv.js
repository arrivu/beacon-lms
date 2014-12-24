(function() {
  define(['compiled/models/Folder', 'compiled/str/splitAssetString'], function(Folder, splitAssetString) {
    var fileContexts, filesEnv, _ref, _ref1;

    fileContexts = ENV.FILES_CONTEXTS || [];
    filesEnv = {
      contexts: fileContexts,
      contextsDictionary: fileContexts.reduce(function(dict, context) {
        var contextId, contextType, _ref;

        _ref = splitAssetString(context.asset_string), contextType = _ref[0], contextId = _ref[1];
        context.contextType = contextType;
        context.contextId = contextId;
        dict[[contextType, contextId].join('_')] = context;
        return dict;
      }, {}),
      showingAllContexts: window.location.pathname.match(/^\/files/),
      contextType: (_ref = fileContexts[0]) != null ? _ref.contextType : void 0,
      contextId: (_ref1 = fileContexts[0]) != null ? _ref1.contextId : void 0,
      rootFolders: fileContexts.map(function(contextData) {
        var folder;

        folder = new Folder({
          'custom_name': contextData.name,
          'context_type': contextData.contextType.replace(/s$/, ''),
          'context_id': contextData.contextId
        });
        folder.url = "/api/v1/" + contextData.contextType + "/" + contextData.contextId + "/folders/root";
        folder.fetch();
        return folder;
      })
    };
    filesEnv.userHasPermission = function(folderOrFile, action) {
      var assetString, folder, _ref2, _ref3, _ref4;

      if (!folderOrFile) {
        return false;
      }
      if (folderOrFile instanceof Folder) {
        folder = folderOrFile;
        assetString = ((folder != null ? folder.get('context_type') : void 0) + 's_' + (folder != null ? folder.get('context_id') : void 0)).toLowerCase();
      } else if (folderOrFile.contextType && folderOrFile.contextId) {
        assetString = ("" + folderOrFile.contextType + "_" + folderOrFile.contextId).toLowerCase();
      }
      return (_ref2 = filesEnv.contextsDictionary) != null ? (_ref3 = _ref2[assetString]) != null ? (_ref4 = _ref3.permissions) != null ? _ref4[action] : void 0 : void 0 : void 0;
    };
    filesEnv.baseUrl = filesEnv.showingAllContexts ? '/files' : "/" + filesEnv.contextType + "/" + filesEnv.contextId + "/files";
    return filesEnv;
  });

}).call(this);
