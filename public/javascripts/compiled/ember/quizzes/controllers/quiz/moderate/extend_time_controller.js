(function() {
  define(['ember', 'ic-ajax', 'i18n!quiz_extend_time'], function(Ember, ajax, I18n) {
    var ExtendTimeController;

    return ExtendTimeController = Ember.ObjectController.extend({
      needs: ['quiz'],
      quiz: Ember.computed.alias('controllers.quiz.model'),
      extension: Ember.Object.create,
      title: I18n.t('extend_time', 'Extend Time'),
      extendFor: (function() {
        return I18n.t('extensions_student', 'Extend time for %{student}', {
          student: this.get("name")
        });
      }).property('name'),
      timeOptions: [
        {
          id: 'now',
          name: I18n.t('now', 'now')
        }, {
          id: 'end',
          name: I18n.t('ending_time', 'ending time')
        }
      ],
      setupExtension: (function() {
        this.set("extension.extendFromTime", null);
        return this.set("extension.extendQuizMins", null);
      }).observes("model"),
      actions: {
        submit: function() {
          var extendFromTime, options, quizExtension,
            _this = this;

          quizExtension = {
            user_id: this.get("id")
          };
          extendFromTime = this.get('extension.extendFromTime') === "now" ? "extend_from_now" : this.get('extension.extendFromTime') === "end" ? "extend_from_end_at" : void 0;
          quizExtension[extendFromTime] = this.get('extension.extendQuizMins');
          options = {
            url: this.get("quiz").get('quizExtensionsUrl'),
            data: JSON.stringify({
              quiz_extensions: [quizExtension]
            }),
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            headers: {
              'Accepts': 'application/vnd.api+json'
            }
          };
          return ajax.raw(options).then(function() {
            $.flashMessage(I18n.t('extensions_successfully_added', 'Extensions Successfully Added'));
            return _this.send('refreshData');
          });
        }
      }
    });
  });

}).call(this);
