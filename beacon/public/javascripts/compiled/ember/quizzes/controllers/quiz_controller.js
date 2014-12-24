(function() {
  define(['ember', '../mixins/legacy_submission_html', '../shared/is_locked', 'i18n!quiz', 'jquery', '../shared/environment', 'compiled/behaviors/authenticity_token', 'compiled/jquery.rails_flash_notifications', 'compiled/bundles/submission_download'], function(Ember, LegacySubmissions, isQuizLocked, I18n, $, env, authenticity_token) {
    var QuizController;

    return QuizController = Ember.ObjectController.extend(LegacySubmissions, Ember.Evented, {
      disabledMessage: I18n.t('cant_unpublish_when_students_submit', "Can't unpublish if there are student submissions"),
      showAsPublished: false,
      isLocked: (function() {
        return isQuizLocked(this.get('unlockAt'), this.get('lockAt'));
      }).property('unlockAt', 'lockAt'),
      displayPublished: (function() {
        return this.set('showAsPublished', this.get('published'));
      }).observes('model'),
      moderateEnabled: (function() {
        return env.get("moderateEnabled");
      }).property(),
      speedGraderActive: (function() {
        return this.get('studentQuizSubmissions.length');
      }).property('studentQuizSubmissions.length'),
      downloadActive: (function() {
        return !!this.get('quizSubmissionsZipUrl');
      }).property('quizSubmissionsZipUrl'),
      takeQuizActive: (function() {
        return this.get('published') && this.get('takeable') && !this.get('lockedForUser');
      }).property('published', 'takeable', 'lockedForUser'),
      messageStudentsActive: (function() {
        return this.get('published');
      }).property('published'),
      takeOrResumeMessage: (function() {
        if (this.get('quizSubmission.isCompleted')) {
          if (this.get('isSurvey')) {
            return I18n.t('take_the_survey_again', 'Take the Survey Again');
          } else {
            return I18n.t('take_the_quiz_again', 'Take the Quiz Again');
          }
        } else if (this.get('quizSubmission.isUntaken')) {
          if (this.get('isSurvey')) {
            return I18n.t('resume_the_survey', 'Resume the Survey');
          } else {
            return I18n.t('resume_the_quiz', 'Resume the Quiz');
          }
        } else {
          if (this.get('isSurvey')) {
            return I18n.t('take_the_survey', 'Take the Survey');
          } else {
            return I18n.t('take_the_quiz', 'Take the Quiz');
          }
        }
      }).property('isSurvey', 'quizSubmisison.isUntaken'),
      updatePublished: function(publishStatus) {
        var failed, success,
          _this = this;

        success = (function() {
          return _this.displayPublished();
        });
        failed = function() {
          _this.set('published', true);
          _this.set('unpublishable', false);
          return _this.displayPublished();
        };
        this.set('published', publishStatus);
        return this.get('model').save().then(success, failed);
      },
      submissionHasRegrade: (function() {
        var score;

        score = this.get('quizSubmission.scoreBeforeRegrade');
        return score !== null && score >= 0;
      }).property('quizSubmission.scoreBeforeRegrade'),
      scoreAffectedByRegradeLabel: (function() {
        var since;

        if (this.get('quizSubmission.scoreBeforeRegrade') !== this.get('quizSubmission.keptScore')) {
          since = this.get('quizSubmission.questionsRegradedSinceLastAttempt');
          if (since === 1) {
            return I18n.t('regrade_score_affected', 'This quiz has been regraded; your score was affected.');
          } else {
            return I18n.t('regrade_count_affected', 'This quiz has been regraded; your new score reflects %{num} questions that were affected.', {
              num: since
            });
          }
        } else {
          return I18n.t('quiz_regraded_your_score_not_affected', "This quiz has been regraded; your score was not affected.");
        }
      }).property('quizSubmission.scoreBeforeRegrade', 'quizSubmission.keptScore', 'quizSubmission.questionsRegradedSinceLastAttempt'),
      warningText: (function() {
        return I18n.t('warning', 'Warning');
      }).property(),
      deleteTitle: (function() {
        return I18n.t('delete_quiz', 'Delete Quiz');
      }).property(),
      confirmText: (function() {
        return I18n.t('delete', 'Delete');
      }).property(),
      cancelText: (function() {
        return I18n.t('cancel', 'Cancel');
      }).property(),
      timeLimitWithMinutes: (function() {
        return I18n.t('time_limit_minutes', "%{limit} minutes", {
          limit: this.get("timeLimit")
        });
      }).property('timeLimit'),
      actions: {
        takeQuiz: function() {
          var msg, url;

          if (this.get('takeQuizActive')) {
            url = "" + (this.get('takeQuizUrl')) + "&authenticity_token=" + (authenticity_token());
            return $('<form></form>').prop('action', url).prop('method', 'POST').appendTo("body").submit();
          } else {
            msg = !this.get('published') ? I18n.t('cant_take_unpublished_quiz', "You can't take a quiz until it is published") : I18n.t('no_more_allowed_quiz_attempts', "You aren't allowed any more attempts on this quiz.");
            return $.flashWarning(msg);
          }
        },
        speedGrader: function() {
          if (this.get('speedGraderActive')) {
            return window.location = this.get('speedGraderUrl');
          } else {
            return $.flashWarning(I18n.t('there_are_no_submissions_to_grade', 'There are no submissions to grade.'));
          }
        },
        messageStudents: function() {
          if (!this.get('messageStudentsActive')) {
            return $.flashWarning(I18n.t('you_cannot_message_unpublished', 'You can not message students until this quiz is published.'));
          } else {
            return true;
          }
        },
        moderateQuiz: function() {
          return window.location = this.get('moderateUrl');
        },
        downloadFiles: function() {
          if (this.get('downloadActive')) {
            return INST.downloadSubmissions(this.get('quizSubmissionsZipUrl'));
          } else {
            return $.flashWarning(I18n.t('there_are_no_files_to_download', 'There are no files to download.'));
          }
        },
        showStudentResults: function() {
          this.replaceRoute('quiz.moderate');
          return $.flashMessage(I18n.t('now_on_moderate', 'This information is now found on the Moderate tab.'));
        },
        preview: function() {
          return $('<form/>').attr('action', "" + (this.get('previewUrl')) + "&authenticity_token=" + (authenticity_token())).attr('method', 'POST').appendTo('body').submit();
        },
        toggleLock: function() {
          if (this.get('isLocked')) {
            return this.send('unlock');
          } else {
            return this.send('lock');
          }
        },
        lock: function() {
          var now, prevDueAt;

          now = new Date();
          prevDueAt = this.get('dueAt');
          if (!prevDueAt || prevDueAt > now) {
            this.set('dueAt', now);
          }
          this.set('lockAt', now);
          return this.get('model').save().then(function() {
            return $.flashMessage(I18n.t('quiz_successfully_updated', 'Quiz Successfully Updated!'));
          });
        },
        unlock: function() {
          var lock, now, unlock;

          now = new Date();
          unlock = this.get('unlockAt');
          lock = this.get('lockAt');
          if (unlock && unlock > now) {
            this.set('unlockAt', now);
          }
          if (lock && lock < now) {
            this.set('lockAt', null);
          }
          return this.get('model').save().then(function() {
            return $.flashMessage(I18n.t('quiz_successfully_updated', 'Quiz Successfully Updated!'));
          });
        },
        publish: function() {
          return this.updatePublished(true);
        },
        unpublish: function() {
          return this.updatePublished(false);
        },
        "delete": function() {
          var model,
            _this = this;

          model = this.get('model');
          model.deleteRecord();
          model.save().then(function() {
            return $.flashMessage(I18n.t('quiz_successfully_deleted', 'Quiz Successfully Deleted!'));
          });
          this.transitionToRoute('quizzes');
        },
        showRubric: function() {
          return this.trigger('rubricDisplayRequest');
        }
      },
      rubricActionUrl: (function() {
        return "/courses/" + (env.get('courseId')) + "/rubrics";
      }).property('env.courseId'),
      rubricUrl: (function() {
        var assignmentId, courseId, quizId;

        courseId = env.get('courseId');
        quizId = this.get('id');
        assignmentId = this.get('assignmentId');
        return "/courses/" + courseId + "/assignments/" + assignmentId + "/rubric";
      }).property('env.courseId')
    });
  });

}).call(this);
