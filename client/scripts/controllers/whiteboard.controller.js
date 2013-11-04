/**
 * Handles everything on whiteboard screen, CRUD of workitem and related components
 * @param {[type]} $scope
 * @param {[type]} $routeParams
 * @param {[type]} $window
 * @param {[type]} db
 * @param {[type]} Restangular
 */
angular.module('utopia').controller('WhiteboardController', function ($scope, $routeParams, $window, db, Restangular) {
	
	//init restangular URLs!
	var project = Restangular.all('project');
	var workitem = Restangular.all('workitem')
	
	//init all the scope constants!	
	$scope.users = db.get('users');
	$scope.types = db.get('types');
	$scope.states = db.get('states');
	$scope.project_id = $routeParams.project_id;
	$scope.swkitm = null;

	//do the first pull
	project.one($scope.project_id).getList('workitems').then(function(workitems){
		$scope.workitems = workitems;
	});
	
	/**
	 * Select a workitem
	 * Fetch its comments and tasks
	 * udpate the scope
	 * @return {[type]} [description]
	 */
	$scope.select = function() {
		$scope.swkitm = this.wk;
		$scope.selectedIndex = this.$index;
		$scope.newComment = "";
		$scope.updateStates();
		workitem.one($scope.swkitm.id).getList('comments').then(function(data){
			$scope.comments = data;
		});
		workitem.one($scope.swkitm.id).getList('tasks').then(function(data){
			$scope.tasks = data;
		});
	}	

	/**
	 * TODO
	 * @return {[type]} [description]
	 */
	$scope.search = function() {
		console.log('send a server call', $scope.query);
	}

	/**
	 * Returns nice priority-wise breakup of your tasks
	 * @return {[type]} [description]
	 */
	$scope.getBreakDown = function() {
		var s = '';
		if($scope.workitems) {
			var p0 = $scope.workitems.filter(function(d) { return d.importance == 0; }).length;
			var p1 = $scope.workitems.filter(function(d) { return d.importance == 1; }).length;
			var p2 = $scope.workitems.filter(function(d) { return d.importance == 2; }).length;
			s = 'P0 - ' + p0 + ', P1 - ' + p1 + ', P2 - ' + p2 + '';
		}
		return s;
	}

	/**
	 * Called on change of WorkitemType dropdown
	 * @return {[type]} [description]
	 */
	$scope.updateStates = function() {
		var types = db.get('states');
		$scope.states = types.filter(function(d) { return d.workitem_type_id == $scope.swkitm.type });
	}

	/**
	 * Called on importance option click
	 * @param {[type]} d [description]
	 */
	$scope.setImportance = function(d) {
		$scope.swkitm.importance = d;
	}

	/**
	 * Called on story point click
	 * @param {[type]} d [description]
	 */
	$scope.setStoryPoints = function(d) {
		$scope.swkitm.story_points = d;
	}

	/**
	 * Explains itself
	 */
	$scope.addComment = function() {
		workitem.comments.save({ workitem_id : $scope.swkitm.id, 
			comment_body : $scope.newComment }, function(data) {
			$scope.newComment = '';
			$scope.comments.push(data.data[0]);
		});
	}

	/**
	 * Just delete the goddamn comment!
	 * @param  {[type]} index [description]
	 * @return {[type]}       [description]
	 */
	$scope.deleteComment = function(index) {
		var comment = new workitem.comments({workitem_id : $scope.swkitm.id,
			workitem_comment_id : this.comment.id});
		comment.$delete();
		$scope.comments.splice(index, 1);
	}

	/**
	 * PUT request to server for workitem
	 * 
	 * @return {[type]} [description]
	 */
	$scope.saveWorkitem = function() {
		$scope.swkitm.last_updated = new Date().toUTCString();
		workitem.customPUT($scope.swkitm).then(nothing);
	}

	/**
	 * DELETE request to server for workitem
	 * TODO : splice using underscore
	 * And change the logic once white-board filters are in place
	 * @return {[type]} [description]
	 */
	$scope.deleteWorkitem = function() {
		var index = $scope.workitems.indexOf($scope.swkitm);
		workitem.one($scope.swkitm.id).remove().then(function(){
			$scope.workitems.splice(index, 1);	
			$scope.swkitm = null;
		})
	}

	/**
	 * Explains itself!
	 */
	$scope.addTask = function() {
		workitem.one($scope.swkitm.id).post('tasks', {task : $scope.newTask}).then(function(task){
			$scope.newTask = '';
			$scope.tasks.push(task);
		});
	}

	/**
	 * Sets task true or false
	 * @return {[type]} [description]
	 */
	$scope.toggleTask = function() {
		$scope.swkitm.last_updated = new Date().toUTCString();
		workitem.customPUT(this.task, 'tasks').then(nothing);
	}

	/**
	 * Deletes the task
	 * @return {[type]} [description]
	 */
	$scope.deleteTask = function() {
		workitem.customDELETE('tasks/' + this.task.id).then(function(task){
			$scope.tasks = _.filter($scope.tasks, function(d) { return d.id != task.id });
		});
	}

	/**
	 * This is work in progress, don't pay much attention
	 * @param  {[type]} event [description]
	 * @param  {[type]} data  [description]
	 * @return {[type]}       [description]
	 */
	$scope.$on('event', function(event,data) {
		// do the updatation stuff here
	});
});