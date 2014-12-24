(function() {
  define(function() {
    var parseLinkHeader, regex;

    regex = /<(http.*?)>; rel="([a-z]*)",/g;
    return parseLinkHeader = function(jqXhr) {
      var header, link, links;

      links = {};
      header = jqXhr.getResponseHeader('Link');
      if (!header) {
        return links;
      }
      while (link = regex.exec(header)) {
        links[link[2]] = link[1];
      }
      return links;
    };
  });

}).call(this);
