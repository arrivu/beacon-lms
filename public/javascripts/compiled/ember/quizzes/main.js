(function() {
  define(["ember", "compiled/ember/quizzes/config/app", "compiled/ember/quizzes/config/routes", "compiled/ember/quizzes/views/quizzes_view", "compiled/ember/quizzes/views/quiz_view", "compiled/ember/quizzes/views/quiz/preview_view", "compiled/ember/quizzes/views/quiz/moderate_view", "compiled/ember/quizzes/views/quiz/statistics/summary_view", "compiled/ember/quizzes/views/quiz/statistics/questions_view", "compiled/ember/quizzes/views/quiz/statistics/questions/fill_in_multiple_blanks/answer_bars_view", "compiled/ember/quizzes/views/quiz/statistics/questions/fill_in_multiple_blanks/correct_pie_view", "compiled/ember/quizzes/views/quiz/statistics/questions/file_upload_view", "compiled/ember/quizzes/views/quiz/statistics/questions/short_answer_view", "compiled/ember/quizzes/views/quiz/statistics/questions/calculated_view", "compiled/ember/quizzes/views/quiz/statistics/questions/essay/score_chart_view", "compiled/ember/quizzes/views/quiz/statistics/questions/essay/correct_pie_view", "compiled/ember/quizzes/views/quiz/statistics/questions/essay_view", "compiled/ember/quizzes/views/quiz/statistics/questions/fill_in_multiple_blanks_view", "compiled/ember/quizzes/views/quiz/statistics/questions/multiple_choice/answer_bars_view", "compiled/ember/quizzes/views/quiz/statistics/questions/multiple_choice/correct_pie_view", "compiled/ember/quizzes/views/quiz/statistics/questions/multiple_choice/discrimination_index_view", "compiled/ember/quizzes/views/quiz/statistics/questions/multiple_choice_view", "compiled/ember/quizzes/views/quiz/statistics/summary/report_generator_view", "compiled/ember/quizzes/views/quiz/show_view", "compiled/ember/quizzes/serializers/application_serializer", "compiled/ember/quizzes/serializers/quiz_statistics_serializer", "compiled/ember/quizzes/serializers/quiz_serializer", "compiled/ember/quizzes/serializers/assignment_group_serializer", "compiled/ember/quizzes/serializers/quiz_report_serializer", "compiled/ember/quizzes/serializers/assignment_override_serializer", "compiled/ember/quizzes/serializers/progress_serializer", "compiled/ember/quizzes/serializers/user_serializer", "compiled/ember/quizzes/serializers/submitted_student_serializer", "compiled/ember/quizzes/serializers/quiz_submission_serializer", "compiled/ember/quizzes/serializers/unsubmitted_student_serializer", "compiled/ember/quizzes/serializers/student_quiz_submission_serializer", "compiled/ember/quizzes/adapters/conversation_adapter", "compiled/ember/quizzes/adapters/quiz_adapter", "compiled/ember/quizzes/adapters/assignment_override_adapter", "compiled/ember/quizzes/adapters/quiz_submission_adapter", "compiled/ember/quizzes/adapters/application_adapter", "compiled/ember/quizzes/adapters/progress_adapter", "compiled/ember/quizzes/adapters/quiz_report_adapter", "compiled/ember/quizzes/adapters/jsonapi_adapter", "compiled/ember/quizzes/controllers/quiz_controller", "compiled/ember/quizzes/controllers/quiz_index_row_controller", "compiled/ember/quizzes/controllers/quiz/submission_row_controller", "compiled/ember/quizzes/controllers/quiz/statistics/summary_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/short_answer_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/multiple_choice_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/fill_in_multiple_blanks/answer_bars_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/essay/score_chart_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/file_upload_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/essay_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/calculated_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/fill_in_multiple_blanks_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/multiple_choice/discrimination_index_controller", "compiled/ember/quizzes/controllers/quiz/statistics/questions/multiple_choice/answer_bars_controller", "compiled/ember/quizzes/controllers/quiz/statistics/summary/report_generator_controller", "compiled/ember/quizzes/controllers/quiz/show_controller", "compiled/ember/quizzes/controllers/quiz/preview_controller", "compiled/ember/quizzes/controllers/quiz/moderate/extend_time_controller", "compiled/ember/quizzes/controllers/quiz/moderate/student_extension_controller", "compiled/ember/quizzes/controllers/quiz/message_students_controller", "compiled/ember/quizzes/controllers/quiz/statistics_controller", "compiled/ember/quizzes/controllers/quiz/moderate_controller", "compiled/ember/quizzes/controllers/quizzes_controller", "compiled/ember/quizzes/models/user", "compiled/ember/quizzes/models/assignment_group", "compiled/ember/quizzes/models/quiz_report", "compiled/ember/quizzes/models/quiz_statistics", "compiled/ember/quizzes/models/quiz", "compiled/ember/quizzes/models/student_quiz_submission", "compiled/ember/quizzes/models/submitted_student", "compiled/ember/quizzes/models/quiz_submission", "compiled/ember/quizzes/models/unsubmitted_student", "compiled/ember/quizzes/models/assignment_override", "compiled/ember/quizzes/models/question_statistics", "compiled/ember/quizzes/models/question_statistics/response_ratio_calculator", "compiled/ember/quizzes/models/progress", "compiled/ember/quizzes/components/dialog_mixin", "compiled/ember/quizzes/components/ic_dates_available_component", "compiled/ember/quizzes/components/form_dialog_component", "compiled/ember/quizzes/components/ic_tooltip_component", "compiled/ember/quizzes/components/message_dialog_component", "compiled/ember/quizzes/components/numeric_field_component", "compiled/ember/quizzes/components/confirm_dialog_component", "compiled/ember/quizzes/routes/quiz_show_route", "compiled/ember/quizzes/routes/quiz_route", "compiled/ember/quizzes/routes/quiz_preview_route", "compiled/ember/quizzes/routes/quiz_moderate_route", "compiled/ember/quizzes/routes/quiz_statistics_route", "compiled/ember/quizzes/routes/quizzes_route", "compiled/ember/quizzes/templates/quiz", "compiled/ember/quizzes/templates/quizzes", "compiled/ember/quizzes/templates/loading", "compiled/ember/quizzes/templates/mixins/_chart_inspector", "compiled/ember/quizzes/templates/application", "compiled/ember/quizzes/templates/confirm_delete", "compiled/ember/quizzes/templates/quiz/message_students", "compiled/ember/quizzes/templates/quiz/show_student", "compiled/ember/quizzes/templates/quiz/show_teacher", "compiled/ember/quizzes/templates/quiz/moderate", "compiled/ember/quizzes/templates/quiz/statistics/error", "compiled/ember/quizzes/templates/quiz/statistics/questions/essay/_charts", "compiled/ember/quizzes/templates/quiz/statistics/questions/essay/_header_contents", "compiled/ember/quizzes/templates/quiz/statistics/questions/essay/score_chart", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice", "compiled/ember/quizzes/templates/quiz/statistics/questions/file_upload", "compiled/ember/quizzes/templates/quiz/statistics/questions/fill_in_multiple_blanks", "compiled/ember/quizzes/templates/quiz/statistics/questions/calculated", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/_answers", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/answer_bars", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/discrimination_index", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/_header", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/discrimination_index_help", "compiled/ember/quizzes/templates/quiz/statistics/questions/multiple_choice/correct_pie", "compiled/ember/quizzes/templates/quiz/statistics/questions/generic", "compiled/ember/quizzes/templates/quiz/statistics/questions/essay", "compiled/ember/quizzes/templates/quiz/statistics/questions/short_answer", "compiled/ember/quizzes/templates/quiz/statistics/summary/report_generator", "compiled/ember/quizzes/templates/quiz/statistics/summary", "compiled/ember/quizzes/templates/quiz/moderate/extend_time", "compiled/ember/quizzes/templates/quiz/moderate/student_extension", "compiled/ember/quizzes/templates/quiz/preview", "compiled/ember/quizzes/templates/quiz/statistics", "compiled/ember/quizzes/templates/quiz/legacy_submissions", "compiled/ember/quizzes/templates/quiz/show", "compiled/ember/quizzes/templates/due_date_table_row", "compiled/ember/quizzes/templates/quiz_index_row", "compiled/ember/quizzes/templates/components/ic-tooltip", "compiled/ember/quizzes/templates/components/form-dialog", "compiled/ember/quizzes/templates/components/confirm-dialog", "compiled/ember/quizzes/templates/components/message-dialog", "compiled/ember/quizzes/templates/components/ic-dates-available", "compiled/ember/quizzes/helpers/force_precision", "compiled/ember/quizzes/helpers/t_date_to_string", "compiled/ember/quizzes/helpers/poly_render"], function(Ember, App, routes, QuizzesView, QuizView, QuizPreviewView, QuizModerateView, QuizStatisticsSummaryView, QuizStatisticsQuestionsView, QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsView, QuizStatisticsQuestionsFillInMultipleBlanksCorrectPieView, QuizStatisticsQuestionsFileUploadView, QuizStatisticsQuestionsShortAnswerView, QuizStatisticsQuestionsCalculatedView, QuizStatisticsQuestionsEssayScoreChartView, QuizStatisticsQuestionsEssayCorrectPieView, QuizStatisticsQuestionsEssayView, QuizStatisticsQuestionsFillInMultipleBlanksView, QuizStatisticsQuestionsMultipleChoiceAnswerBarsView, QuizStatisticsQuestionsMultipleChoiceCorrectPieView, QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexView, QuizStatisticsQuestionsMultipleChoiceView, QuizStatisticsSummaryReportGeneratorView, QuizShowView, ApplicationSerializer, QuizStatisticsSerializer, QuizSerializer, AssignmentGroupSerializer, QuizReportSerializer, AssignmentOverrideSerializer, ProgressSerializer, UserSerializer, SubmittedStudentSerializer, QuizSubmissionSerializer, UnsubmittedStudentSerializer, StudentQuizSubmissionSerializer, ConversationAdapter, QuizAdapter, AssignmentOverrideAdapter, QuizSubmissionAdapter, ApplicationAdapter, ProgressAdapter, QuizReportAdapter, JsonapiAdapter, QuizController, QuizIndexRowController, QuizSubmissionRowController, QuizStatisticsSummaryController, QuizStatisticsQuestionsController, QuizStatisticsQuestionsShortAnswerController, QuizStatisticsQuestionsMultipleChoiceController, QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsController, QuizStatisticsQuestionsEssayScoreChartController, QuizStatisticsQuestionsFileUploadController, QuizStatisticsQuestionsEssayController, QuizStatisticsQuestionsCalculatedController, QuizStatisticsQuestionsFillInMultipleBlanksController, QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexController, QuizStatisticsQuestionsMultipleChoiceAnswerBarsController, QuizStatisticsSummaryReportGeneratorController, QuizShowController, QuizPreviewController, QuizModerateExtendTimeController, QuizModerateStudentExtensionController, QuizMessageStudentsController, QuizStatisticsController, QuizModerateController, QuizzesController, User, AssignmentGroup, QuizReport, QuizStatistics, Quiz, StudentQuizSubmission, SubmittedStudent, QuizSubmission, UnsubmittedStudent, AssignmentOverride, QuestionStatistics, QuestionStatisticsResponseRatioCalculator, Progress, DialogMixin, IcDatesAvailableComponent, FormDialogComponent, IcTooltipComponent, MessageDialogComponent, NumericFieldComponent, ConfirmDialogComponent, QuizShowRoute, QuizRoute, QuizPreviewRoute, QuizModerateRoute, QuizStatisticsRoute, QuizzesRoute) {
    App.initializer({
      name: 'routes',
      initialize: function(container, application) {
        return application.Router.map(routes);
      }
    });
    return App.reopen({
      QuizzesView: QuizzesView,
      QuizView: QuizView,
      QuizPreviewView: QuizPreviewView,
      QuizModerateView: QuizModerateView,
      QuizStatisticsSummaryView: QuizStatisticsSummaryView,
      QuizStatisticsQuestionsView: QuizStatisticsQuestionsView,
      QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsView: QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsView,
      QuizStatisticsQuestionsFillInMultipleBlanksCorrectPieView: QuizStatisticsQuestionsFillInMultipleBlanksCorrectPieView,
      QuizStatisticsQuestionsFileUploadView: QuizStatisticsQuestionsFileUploadView,
      QuizStatisticsQuestionsShortAnswerView: QuizStatisticsQuestionsShortAnswerView,
      QuizStatisticsQuestionsCalculatedView: QuizStatisticsQuestionsCalculatedView,
      QuizStatisticsQuestionsEssayScoreChartView: QuizStatisticsQuestionsEssayScoreChartView,
      QuizStatisticsQuestionsEssayCorrectPieView: QuizStatisticsQuestionsEssayCorrectPieView,
      QuizStatisticsQuestionsEssayView: QuizStatisticsQuestionsEssayView,
      QuizStatisticsQuestionsFillInMultipleBlanksView: QuizStatisticsQuestionsFillInMultipleBlanksView,
      QuizStatisticsQuestionsMultipleChoiceAnswerBarsView: QuizStatisticsQuestionsMultipleChoiceAnswerBarsView,
      QuizStatisticsQuestionsMultipleChoiceCorrectPieView: QuizStatisticsQuestionsMultipleChoiceCorrectPieView,
      QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexView: QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexView,
      QuizStatisticsQuestionsMultipleChoiceView: QuizStatisticsQuestionsMultipleChoiceView,
      QuizStatisticsSummaryReportGeneratorView: QuizStatisticsSummaryReportGeneratorView,
      QuizShowView: QuizShowView,
      ApplicationSerializer: ApplicationSerializer,
      QuizStatisticsSerializer: QuizStatisticsSerializer,
      QuizSerializer: QuizSerializer,
      AssignmentGroupSerializer: AssignmentGroupSerializer,
      QuizReportSerializer: QuizReportSerializer,
      AssignmentOverrideSerializer: AssignmentOverrideSerializer,
      ProgressSerializer: ProgressSerializer,
      UserSerializer: UserSerializer,
      SubmittedStudentSerializer: SubmittedStudentSerializer,
      QuizSubmissionSerializer: QuizSubmissionSerializer,
      UnsubmittedStudentSerializer: UnsubmittedStudentSerializer,
      StudentQuizSubmissionSerializer: StudentQuizSubmissionSerializer,
      ConversationAdapter: ConversationAdapter,
      QuizAdapter: QuizAdapter,
      AssignmentOverrideAdapter: AssignmentOverrideAdapter,
      QuizSubmissionAdapter: QuizSubmissionAdapter,
      ApplicationAdapter: ApplicationAdapter,
      ProgressAdapter: ProgressAdapter,
      QuizReportAdapter: QuizReportAdapter,
      JsonapiAdapter: JsonapiAdapter,
      QuizController: QuizController,
      QuizIndexRowController: QuizIndexRowController,
      QuizSubmissionRowController: QuizSubmissionRowController,
      QuizStatisticsSummaryController: QuizStatisticsSummaryController,
      QuizStatisticsQuestionsController: QuizStatisticsQuestionsController,
      QuizStatisticsQuestionsShortAnswerController: QuizStatisticsQuestionsShortAnswerController,
      QuizStatisticsQuestionsMultipleChoiceController: QuizStatisticsQuestionsMultipleChoiceController,
      QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsController: QuizStatisticsQuestionsFillInMultipleBlanksAnswerBarsController,
      QuizStatisticsQuestionsEssayScoreChartController: QuizStatisticsQuestionsEssayScoreChartController,
      QuizStatisticsQuestionsFileUploadController: QuizStatisticsQuestionsFileUploadController,
      QuizStatisticsQuestionsEssayController: QuizStatisticsQuestionsEssayController,
      QuizStatisticsQuestionsCalculatedController: QuizStatisticsQuestionsCalculatedController,
      QuizStatisticsQuestionsFillInMultipleBlanksController: QuizStatisticsQuestionsFillInMultipleBlanksController,
      QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexController: QuizStatisticsQuestionsMultipleChoiceDiscriminationIndexController,
      QuizStatisticsQuestionsMultipleChoiceAnswerBarsController: QuizStatisticsQuestionsMultipleChoiceAnswerBarsController,
      QuizStatisticsSummaryReportGeneratorController: QuizStatisticsSummaryReportGeneratorController,
      QuizShowController: QuizShowController,
      QuizPreviewController: QuizPreviewController,
      QuizModerateExtendTimeController: QuizModerateExtendTimeController,
      QuizModerateStudentExtensionController: QuizModerateStudentExtensionController,
      QuizMessageStudentsController: QuizMessageStudentsController,
      QuizStatisticsController: QuizStatisticsController,
      QuizModerateController: QuizModerateController,
      QuizzesController: QuizzesController,
      User: User,
      AssignmentGroup: AssignmentGroup,
      QuizReport: QuizReport,
      QuizStatistics: QuizStatistics,
      Quiz: Quiz,
      StudentQuizSubmission: StudentQuizSubmission,
      SubmittedStudent: SubmittedStudent,
      QuizSubmission: QuizSubmission,
      UnsubmittedStudent: UnsubmittedStudent,
      AssignmentOverride: AssignmentOverride,
      QuestionStatistics: QuestionStatistics,
      QuestionStatisticsResponseRatioCalculator: QuestionStatisticsResponseRatioCalculator,
      Progress: Progress,
      DialogMixin: DialogMixin,
      IcDatesAvailableComponent: IcDatesAvailableComponent,
      FormDialogComponent: FormDialogComponent,
      IcTooltipComponent: IcTooltipComponent,
      MessageDialogComponent: MessageDialogComponent,
      NumericFieldComponent: NumericFieldComponent,
      ConfirmDialogComponent: ConfirmDialogComponent,
      QuizShowRoute: QuizShowRoute,
      QuizRoute: QuizRoute,
      QuizPreviewRoute: QuizPreviewRoute,
      QuizModerateRoute: QuizModerateRoute,
      QuizStatisticsRoute: QuizStatisticsRoute,
      QuizzesRoute: QuizzesRoute
    });
  });

}).call(this);
