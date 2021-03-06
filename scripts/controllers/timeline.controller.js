/**
 * Shows beautiful timeline
 * @param {[type]} $scope
 * @param {[type]} $routeParams
 * @param {[type]} timeline
 */
angular.module('utopia').controller('TimelineController', function ($scope, $routeParams, db, Restangular, $timeout) {
	
	/**
	 * Check if on current project
	 */
	$scope.project_id = $routeParams.project_id;
	if(db.get('current_project') !== $scope.project_id) {
		$scope.getProjectDetails($scope.project_id);
	}
	/**
	 * Setup basic constants for the controller
	 * @type {[type]}
	 */
	$scope.project_id = $routeParams.project_id;
	$scope.users = db.get('users');
	$scope.logs = [];
	var timeline = Restangular.one('timeline', $scope.project_id);
	
	/**
	 * Initial fetch
	 * @param  {[type]} comments [description]
	 * @return {[type]}          [description]
	 */
	timeline.getList('comments').then(function(comments){
		normalizeAndPush(comments, 'comments');	
	});

	timeline.getList('tasks').then(function(tasks){
		normalizeAndPush(tasks, 'task_log');
	});

	timeline.getList('logs').then(function(logs){
		normalizeAndPush(logs, 'workitem_log');
	});


	/**
	 * Helper function to add logs in timeline
	 * @param  {[type]} data [description]
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	function normalizeAndPush(data, type) {
		data.forEach(function(d) {
			d.log_type = type;
			if(d.done_date) d.last_updated = d.done_date;
			if(d.created_at) d.last_updated = d.created_at;
			if(d.timestamp) d.last_updated = d.timestamp;
			$scope.logs.push(d);
		});
	}

	/**
	 * Called from filter directive,
	 * @param  {[type]} filterObj [description]
	 * @return {[type]}           [description]
	 */
	$scope.filterTimeline = function(filterObj) {
		
		filterObj.project_id = $scope.project_id;
		filter = angular.copy(filterObj);
		filter.users = filterObj.users.join(',');
		$scope.logs = [];
		timeline.getList('comments', filter).then(function(comments){
			normalizeAndPush(comments, 'comments');	
		});

		timeline.getList('tasks', filter).then(function(tasks){
			normalizeAndPush(tasks, 'task_log');
		});

		timeline.getList('logs', filter).then(function(logs){
			normalizeAndPush(logs, 'workitem_log');
		});
	}
});