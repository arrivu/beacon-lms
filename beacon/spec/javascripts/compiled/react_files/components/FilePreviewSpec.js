(function() {
  define(['react', 'react-router', 'react-modal', 'compiled/react_files/components/FilePreview', 'compiled/models/Folder', 'compiled/models/File', 'compiled/collections/FilesCollection', 'compiled/react_files/components/FolderChild'], function(React, Router, Modal, FilePreview, Folder, File, FilesCollection, FolderChild) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('File Preview Rendering', {
      setup: function() {
        var properties;

        sinon.stub(Router, 'Link').returns('some link');
        sinon.stub(Folder, 'resolvePath').returns($.Deferred());
        this.filesCollection = new FilesCollection();
        this.file1 = new File({
          id: '1',
          cid: 'c1',
          name: 'Test File.file1',
          'content-type': 'unknown/unknown'
        }, {
          preflightUrl: ''
        });
        this.file2 = new File({
          id: '2',
          cid: 'c2',
          name: 'Test File.file2',
          'content-type': 'unknown/unknown'
        }, {
          preflightUrl: ''
        });
        this.file3 = new File({
          id: '3',
          cid: 'c3',
          name: 'Test File.file3',
          'content-type': 'image/png',
          'url': 'test/test/test.png'
        }, {
          preflightUrl: ''
        });
        this.filesCollection.add(this.file1);
        this.filesCollection.add(this.file2);
        this.filesCollection.add(this.file3);
        this.currentFolder = new Folder({
          files: this.filesCollection
        });
        Modal.setAppElement($('#fixtures').get(0));
        properties = {
          currentFolder: this.currentFolder,
          params: {
            splat: "test/test/test/"
          },
          appElement: $('#fixtures').get(0),
          query: {
            preview: "1"
          }
        };
        return this.filePreview = React.renderComponent(FilePreview(properties), $('#fixtures')[0]);
      },
      teardown: function() {
        Router.Link.restore();
        Folder.resolvePath.restore();
        return React.unmountComponentAtNode($('#fixtures')[0]);
      }
    });
    test('clicking the info button should render out the info panel', function() {
      var infoButton;

      infoButton = $('.ef-file-preview-header-info').get(0);
      Simulate.click(infoButton);
      return ok($('.ef-file-preview-information').length, 'The info panel did not show');
    });
    test('clicking the Show button should render out the footer', function() {
      var showButton;

      showButton = $('.ef-file-preview-toggle').get(0);
      Simulate.click(showButton);
      return ok($('.ef-file-preview-footer').length, 'The footer did not show');
    });
    return test('clicking the Show button should change the text to Hide', function() {
      var showButton;

      showButton = $('.ef-file-preview-toggle').get(0);
      Simulate.click(showButton);
      return ok($('.ef-file-preview-toggle').text().trim() === "Hide", 'The button text did not become Hide');
    });
  });

}).call(this);
