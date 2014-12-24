define('jst/FindFlickrImageView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!find_flickr_image_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['FindFlickrImageView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"input-append\">\n  <input class=\"input-xxlarge flickrSearchTerm\"\n         placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("find_flickr_image_view")
  },data:data},helper ? helper.call(depth0, "find_cc_on_flickr", "Find Creative Commons images on Flickr", options) : helperMissing.call(depth0, "t", "find_cc_on_flickr", "Find Creative Commons images on Flickr", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         type=\"search\"\n         style=\"position: relative; z-index: 1200\"\n         ><button class=\"btn flickrSearchButton\"\n                               title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("find_flickr_image_view")
  },data:data},helper ? helper.call(depth0, "search", "Search", options) : helperMissing.call(depth0, "t", "search", "Search", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                               type=\"submit\"><i class=\"icon-search\"></i></button>\n</div>\n<ul class=\"flickrResults thumbnails insertUpdateImageTabpane\" style=\"display: none;\"></ul>\n";
  return buffer;
  });
  
      
arguments[1]('FindFlickrImageView', ".FindFlickrImageView .flickrResults{padding:0;max-height:200px;overflow:auto;margin-left:0px;margin-top:10px;}.FindFlickrImageView .flickrResults li{margin-bottom:10px;margin-left:10px;}.FindFlickrImageView .flickrResults li a.active{background-color:#5fb6f3;}.WikiSidebarView .flickrResults{max-height:130px;}.WikiSidebarView .flickrResults li{margin-bottom:10px;margin-left:10px;}.WikiSidebarView .flickrResults img{width:40px;height:40px;}");

  return templates['FindFlickrImageView'];
});
