(function() {
  define(['compiled/views/content_migrations/NavigationForTree', 'jquery', 'helpers/fakeENV'], function(NavigationForTree, $, fakeENV) {
    module("Navigation: Click Tests", {
      setup: function() {
        $('#fixtures').html("<ul role='tree'>          <li role='treeitem' id='42'>            <div class='treeitem-heading'>Heading Text</div>          </li>        </ul>");
        this.$tree = $('[role=tree]');
        return this.nft = new NavigationForTree(this.$tree);
      },
      teardown: function() {
        return $('#fixtures').html('');
      }
    });
    return test("clicking treeitem heading selects that tree item", function() {
      var $heading, $treeitem;

      $heading = this.$tree.find('.treeitem-heading');
      $treeitem = $heading.closest('[role=treeitem]');
      $heading.click();
      ok(!!$treeitem.attr('aria-selected'));
      return equal(this.$tree.attr('aria-activedescendant'), $treeitem.attr('id'));
    });
  });

}).call(this);
