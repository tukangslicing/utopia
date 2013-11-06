
/**
 * Planning view controller
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
angular.module('utopia').controller('PlanningController', function($scope, db, $routeParams, Restangular, $timeout){
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

	$scope.setWorkitemDrop = function(id) {
		$scope.id = id;
		console.log('called wk', id, $scope.sprints);
	}

	$scope.setSprintDrop = function(id) {
		$scope.sprint = id;
		console.log('called sprint', id);
	}
});