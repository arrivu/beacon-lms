(function() {
  define(['ember', './dialog_mixin', '../templates/components/form-dialog'], function(Em, DialogMixin) {
    var FormDialogComponent;

    return FormDialogComponent = Em.Component.extend(DialogMixin);
  });

}).call(this);
