/**
 * Shows beautiful timeline
 * @param {[type]} $scope
 * @param {[type]} $routeParams
 * @param {[type]} timeline
 */
angular.module('utopia').controller('TimelineController', function ($scope, $routeParams, db, Restangular, $timeout) {
	
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
	 * Retrieves the data for workitem
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$scope.fetchDetails = function(id) {
		$scope.swkitm = null;
		Restangular.one('workitem', id).get().then(function(d){
			$scope.swkitm = d;
			$scope.$emit('popover-shown');
		})
	}

	/**
	 * Get the popover inside if
	 * @return {[type]} [description]
	 */
	$scope.$on('popover-shown', function(){
		$popover = $(".popover");
		$popover.find(".arrow").hide();
		
		/**
		 * 50ms delay to let it paint, 
		 * TODO : need to repeat this process till popover is properly adjusted
		 * @return {[type]} [description]
		 */
		$timeout(function() {
			/**
		 	* If going below the screen, bring it up
		 	*/
			if(($popover.height() + $popover.offset().top) > $(window).height()) {
				$popover.css({top : $(window).height() - $popover.height() - 30});
			}
			/**
			 * If its going above the top line, bring it down.
			 */
			if($popover.offset().top < 0) {
				$popover.css({top : 30});
			}
		}, 50)
		
	});

	$scope.$on("popover-hide",function() {
		$popover = $(".popover");
		$popover.hide();
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