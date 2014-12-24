(function() {
  define(['ember', 'underscore'], function(Ember, _) {
    var CustomColumnCellComponent;

    return CustomColumnCellComponent = Ember.Component.extend({
      column: null,
      student: null,
      dataForStudent: null,
      id: (function() {
        return "custom_col_" + (this.get('column.id'));
      }).property('column'),
      dataForColumn: (function() {
        var studentData;

        studentData = this.get('dataForStudent');
        if (!studentData) {
          return null;
        }
        return studentData.findBy('column_id', this.get('column.id'));
      }).property('student', 'column', 'column.isLoaded', 'dataForStudent.@each.content'),
      contentDidChange: (function() {
        return this.set('value', this.get('dataForColumn.content'));
      }).observes('dataForColumn.content').on('didInsertElement'),
      ajax: function(url, options) {
        var data, type;

        type = options.type, data = options.data;
        return Ember.$.ajaxJSON(url, type, data);
      },
      customColURL: function() {
        return ENV.GRADEBOOK_OPTIONS.custom_column_datum_url;
      },
      saveURL: (function() {
        return this.customColURL().replace(/:id/, this.get('column.id')).replace(/:user_id/, this.get('student.id'));
      }).property('column', 'student'),
      focusOut: function() {
        var value, xhr;

        value = this.$('textarea').val();
        if ((value === "" && !this.get('dataForColumn')) || value === this.get('dataForColumn.content')) {
          return;
        }
        this.get('dataForColumn.content');
        xhr = this.ajax(this.get('saveURL'), {
          type: "PUT",
          data: {
            "column_data[content]": value
          }
        });
        return xhr.then(this.boundSaveSuccess);
      },
      bindSave: (function() {
        return this.boundSaveSuccess = _.bind(this.onSaveSuccess, this);
      }).on('init'),
      onSaveSuccess: function(columnDatum) {
        return this.sendAction('on-column-save', columnDatum, this.get('column.id'));
      }
    });
  });

}).call(this);
