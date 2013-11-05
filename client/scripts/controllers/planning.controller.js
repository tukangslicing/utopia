
/**
 * Planning view controller
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
angular.module('utopia').controller('PlanningController', function($scope, db, $routeParams, Restangular){
	$scope.sprints = db.get('sprints');
	$scope.project_id = $routeParams.project_id;
	var sprint = Restangular.all('sprint');

	angular.forEach($scope.sprints, function(d){
		(function(d) {
			sprint.one(d.id).getList('workitems').then(function(workitems){
				d.workitems = workitems;
			})
		})(d);
	});

	$scope.finishDrop = function() {
		console.log($scope.sprints, arguments);
	}
});