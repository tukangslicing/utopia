'use strict';

var utopia = angular.module("utopia", ['utopia.services']).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      otherwise({
        templateUrl : '/partials/project/list',
        controller : ProjectListCtrl
      })
      .when('/project/new', {
        templateUrl : '/partials/project/new-wizard',
        controller : ProjectNewCtrl
      })
      .when('/project/create/express', {
        templateUrl : '/partials/project/new-express',
        controller : CreateExpressProject
      })
      .when('/project/:project_id/edit', {
        templateUrl : '/partials/project/edit',
        controller : ProjectEditController
      })
      .when('/project/:project_id/dashboard', {
        templateUrl : '/partials/dashboard/whiteboard',
        controller : WhiteBoardController
      })
      .when('/project/:project_id/whiteboard', {
        templateUrl : '/partials/dashboard/whiteboard',
        controller : WhiteBoardController
      })
      .when('/project/:project_id/summary', {
        templateUrl : '/partials/dashboard/summary',
        controller : WhiteBoardController
      })
      .when('/project/:project_id/planning', {
        templateUrl : '/partials/dashboard/planning',
        controller : WhiteBoardController
      })
      .when('/project/:project_id/timeline', {
        templateUrl : '/partials/dashboard/timeline',
        controller : WhiteBoardController
      });
  }]);

