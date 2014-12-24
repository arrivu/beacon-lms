(function() {
  define(['ember', 'ic-ajax', 'i18n!quiz_extensions'], function(Em, ajax, I18n) {
    var StudentExtensionsController;

    return StudentExtensionsController = Em.ArrayController.extend({
      needs: ['quiz'],
      quiz: Ember.computed.alias('controllers.quiz.model'),
      extension: Ember.Object.create,
      title: I18n.t('student_extensions', 'Student Extensions'),
      extensionsFor: (function() {
        var student;

        if (this.get("length") === 1) {
          student = this.get("firstObject.name");
          return I18n.t('extensions_student', 'Extensions for %{student}', {
            student: student
          });
        } else {
          return I18n.t('extensions_num_students', 'Extensions for %{num} Students', {
            num: this.get('length')
          });
        }
      }).property('@each'),
      modalHeight: (function() {
        var height;

        height = 220;
        if (this.get('quiz.timeLimit')) {
          height += 60;
        }
        if (!this.get('unlimitedAttempts')) {
          height += 60;
        }
        return height;
      }).property('quiz.timeLimit', 'unlimitedAttempts'),
      unlimitedAttempts: (function() {
        return this.get('quiz.multipleAttemptsAllowed') && this.get('quiz.allowedAttempts') === -1;
      }).property('quiz.multipleAttemptsAllowed', 'quiz.allowedAttempts'),
      extraAttemptsNote: (function() {
        return I18n.t('everyone_gets_attempts', 'everyone already gets %{num}', {
          num: this.get('quiz.allowedAttempts')
        });
      }).property('quiz.allowedAttempts'),
      extraTimeNote: (function() {
        return I18n.t('everyone_gets_time', 'everyone already gets %{num} minutes', {
          num: this.get('quiz.timeLimit')
        });
      }).property('quiz.timeLimit'),
      setupExtension: (function() {
        var allUnlocked, qs;

        if (this.get('length') === 1) {
          qs = this.get("firstObject.quizSubmission");
          this.set("extension.extraAttempts", qs.get("extraAttempts"));
          this.set("extension.extraTime", qs.get("extraTime"));
          return this.set("extension.manuallyUnlocked", qs.get("manuallyUnlocked"));
        } else {
          allUnlocked = this.everyProperty('quizSubmission.manuallyUnlocked', true);
          return this.set("extension.manuallyUnlocked", !!this.get('length') && allUnlocked);
        }
      }).observes('model'),
      actions: {
        submit: function() {
          var options, quizExtensions,
            _this = this;

          quizExtensions = this.get("model").map(function(student) {
            return {
              user_id: student.get("id"),
              extra_attempts: _this.get('extension.extraAttempts'),
              extra_time: _this.get('extension.extraTime'),
              manually_unlocked: _this.get('extension.manuallyUnlocked')
            };
          });
          options = {
            url: this.get("quiz").get('quizExtensionsUrl'),
            data: JSON.stringify({
              quiz_extensions: quizExtensions
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
