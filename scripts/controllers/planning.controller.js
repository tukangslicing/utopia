
/**
 * Planning view controller
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
angular.module('utopia').controller('PlanningController', function($scope, db, $routeParams, Restangular, $timeout, $modal) {
	
	/**
	 * Check if on current project
	 */
	$scope.project_id = $routeParams.project_id;
	if(db.get('current_project') !== $scope.project_id) {
		$scope.getProjectDetails($scope.project_id);
	}

	$scope.sprints = db.get('sprints');
	$scope.project_id = $routeParams.project_id;
	var sprint = Restangular.all('sprint');
	var selectedSprint = 0;
	

	
	/**
	 * Get workitems for each of the sprint
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	angular.forEach($scope.sprints, function(d){
		(function(d) {
			sprint.one(d.id).getList('workitems').then(function(workitems){
				d.workitems = workitems;
			});
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

	/**
	 * Creates a new sprint
	 * @param  {[type]} newsprint [description]
	 * @return {[type]}           [description]
	 */
	$scope.createSprint = function(newsprint) {
		sprint.one($scope.project_id).post('', newsprint).then(function(d){
			$scope.sprints.push(d);
		});
	}

	/**
	 * Either opens a edit or delete modal based on value
	 * @param  string value - could be 'edit' or 'delete'
	 * @param  sprint_id id
	 * @return {[type]}
	 */
	$scope.sprintModal = function(value, id) {
		var modal = $modal({
			template: value + '-sprint',
			show: true,
			backdrop: 'static',
			scope: $scope,
			persist : true
   		});
		$scope.selectedSprint = _.find($scope.sprints, function(d) { return d.id === id; });
		$scope.allowedSprints = _.filter($scope.sprints, function(d) { return d.id !== id; });
		$scope.shiftedSprint = _.first($scope.sprints).id;
	}

	/**
	 * Deletes the sprint
	 * @param  {[type]} shiftedSprint
	 * @return {[type]}
	 */
	$scope.deleteSprint = function(shiftedSprint){
		sprint.customDELETE($scope.selectedSprint.id + '/' + shiftedSprint).then(function(d){
			$scope.sprints = _.filter($scope.sprints, function(d) { return d.id !== $scope.selectedSprint.id; });
		});
		$scope.selectedSprint.id = null;
	}

	/**
	 * Changes sprint title and goals
	 * @return {[type]}
	 */
	$scope.editSprint = function() {
		var currentSprint = angular.copy($scope.selectedSprint);
		delete currentSprint.workitems;
		sprint.customPUT(currentSprint, $scope.selectedSprint.id).then(nothing);
	}
});