
/**
 * Planning view controller
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
angular.module('utopia').controller('PlanningController', function($scope, db, $routeParams, Restangular, $timeout){
	$scope.sprints = db.get('sprints');
	$scope.project_id = $routeParams.project_id;
	var sprint = Restangular.all('sprint');

	/**
	 * Get workitems for each of the sprint
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	angular.forEach($scope.sprints, function(d){
		(function(d) {
			sprint.one(d.id).getList('workitems').then(function(workitems){
				d.workitems = workitems;
			})
		})(d);
	});

	/**
	 * Will be called when workitem is dropped from one sprint to another
	 * @param {[type]} id [description]
	 */
	$scope.setWorkitemDrop = function(event, ui, id) {
		$scope.draggedWk = id;
	}

	$scope.setSprintDrop = function(event, ui, id) {
		var sprint = _.find($scope.sprints, function(d) { return d.id === id });
		var wk = _.find(sprint.workitems, function(d) {return d.id === $scope.draggedWk });
		if(wk.planned_for !== id) {
			Restangular.one('workitem',wk.id).get().then(function(d){
				d.planned_for = id;
				d.put();
			});
		}
	}

	$scope.createSprint = function(newsprint) {
		sprint.one(project_id).post('', newsprint).then(function(d){
			$scope.sprints.push(d);
			//db.set('sprints', $scope.sprints);
		});
	}

});