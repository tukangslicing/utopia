
/**
 * Controller for handling the dashboard
 * @param  {[type]} $scope       [description]
 * @param  {[type]} $routeParams [description]
 * @return {[type]}              [description]
 */
angular.module('utopia').controller('DashboardController', function($scope, $routeParams) {
	$scope.project_id = $routeParams.project_id;
});	