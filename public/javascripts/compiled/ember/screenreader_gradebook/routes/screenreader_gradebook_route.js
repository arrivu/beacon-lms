(function() {
  define(['ember', 'underscore', 'ic-ajax', '../../shared/xhr/fetch_all_pages'], function(_arg, _, ajax, fetchAllPages) {
    var ArrayProxy, Route, ScreenreaderGradebookRoute;

    Route = _arg.Route, ArrayProxy = _arg.ArrayProxy;
    return ScreenreaderGradebookRoute = Route.extend({
      model: function() {
        var model;

        model = {
          enrollments: fetchAllPages(ENV.GRADEBOOK_OPTIONS.students_url),
          assignment_groups: fetchAllPages(ENV.GRADEBOOK_OPTIONS.assignment_groups_url),
          submissions: ArrayProxy.create({
            content: []
          }),
          custom_columns: fetchAllPages(ENV.GRADEBOOK_OPTIONS.custom_columns_url),
          sections: fetchAllPages(ENV.GRADEBOOK_OPTIONS.sections_url)
        };
        if (!ENV.GRADEBOOK_OPTIONS.outcome_gradebook_enabled) {
          model.outcomes = model.outcome_rollups = ArrayProxy.create({
            content: []
          });
        } else {
          model.outcomes = fetchAllPages(ENV.GRADEBOOK_OPTIONS.outcome_links_url, {
            process: function(response) {
              return response.map(function(x) {
                return x.outcome;
              });
            }
          });
          model.outcome_rollups = fetchAllPages(ENV.GRADEBOOK_OPTIONS.outcome_rollups_url, {
            process: function(response) {
              return _.flatten(response.rollups.map(function(row) {
                return row.scores.map(function(cell) {
                  return {
                    user_id: row.links.user,
                    outcome_id: cell.links.outcome,
                    score: cell.score
                  };
                });
              }));
            }
          });
        }
        return model;
      }
    });
  });

}).call(this);
