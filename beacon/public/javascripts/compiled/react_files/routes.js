(function() {
  define(['react-router', 'compiled/react_files/modules/filesEnv', 'compiled/react_files/components/FilesApp', 'compiled/react_files/components/ShowFolder', 'compiled/react_files/components/SearchResults'], function(_arg, filesEnv, FilesApp, ShowFolder, SearchResults) {
    var Redirect, Route, Routes, routes;

    Routes = _arg.Routes, Route = _arg.Route, Redirect = _arg.Redirect;
    routes = [
      Route({
        path: filesEnv.baseUrl.replace(/\/files$/, ''),
        addHandlerKey: true,
        handler: FilesApp
      }, Route({
        path: "" + filesEnv.baseUrl + "/search",
        name: 'search',
        addHandlerKey: true,
        handler: SearchResults
      }), Route({
        path: "" + filesEnv.baseUrl + "/folder/*",
        name: 'folder',
        addHandlerKey: true,
        handler: ShowFolder
      }), Route({
        path: "" + filesEnv.baseUrl,
        name: 'rootFolder',
        addHandlerKey: true,
        handler: ShowFolder
      })), Redirect({
        from: "" + filesEnv.baseUrl + "/folder",
        to: filesEnv.baseUrl
      })
    ];
    if (filesEnv.showingAllContexts) {
      routes.push(Redirect({
        from: "" + filesEnv.baseUrl + "/folder/" + filesEnv.contexts[0].asset_string,
        to: filesEnv.baseUrl
      }));
    }
    return Routes({
      location: 'history'
    }, routes);
  });

}).call(this);
