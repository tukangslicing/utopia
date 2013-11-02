/**
 * Handles everything on whiteboard screen, CRUD of workitem and related components
 * @param {[type]} $scope
 * @param {[type]} $routeParams
 * @param {[type]} $window
 * @param {[type]} db
 * @param {[type]} Restangular
 */
function WhiteboardController($scope, $routeParams, $window, db, Restangular) {
	$scope.project_id = $routeParams.project_id;
	var project = Restangular.all('project');
	var workitem = Restangular.all('workitem')

	$scope.users = db.get('users');
	$scope.types = db.get('types');
	$scope.states = db.get('states');

	project.one($scope.project_id).getList('workitems').then(function(workitems){
		$scope.workitems = workitems;
	});
	
	$scope.select = function() {
		$scope.swkitm = this.wk;
		$scope.selectedIndex = this.$index;
		$scope.newComment = "";
		$scope.updateStates();
	}	

	$scope.search = function() {
		console.log('send a server call', $scope.query);
	}

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

	$scope.format = function(date, format) {
		if(!date) {
			return '';
		}
		return moment(date).format('Do MMM YYYY, h:mm a');
	}

	$scope.updateStates = function() {
		var types = db.get('states');
		$scope.states = types.filter(function(d) { return d.workitem_type_id == $scope.swkitm.type });
	}

	$scope.setImportance = function(d) {
		$scope.swkitm.importance = d;
	}

	$scope.setStoryPoints = function(d) {
		$scope.swkitm.story_points = d;
	}

	$scope.addComment = function() {
		workitem.comments.save({ workitem_id : $scope.swkitm.id, 
			comment_body : $scope.newComment }, function(data) {
			$scope.newComment = '';
			$scope.comments.push(data.data[0]);
		});
	}

	$scope.deleteComment = function(index) {
		var comment = new workitem.comments({workitem_id : $scope.swkitm.id,
			workitem_comment_id : this.comment.id});
		comment.$delete();
		$scope.comments.splice(index, 1);
	}

	$scope.saveWorkitem = function() {
		$scope.swkitm.last_updated = new Date().toUTCString();
		var wk = new workitem.crud({project_id: $scope.project_id, workitem_id: $scope.swkitm.id, data: $scope.swkitm});
		wk.$save();
		$scope.flash('Workitem saved', 'alert-success');
	}

	$scope.deleteWorkitem = function() {
		var wk = new workitem.crud({project_id : $scope.project_id, workitem_id : $scope.swkitm.id});
		var index = $scope.workitems.indexOf($scope.swkitm);
		$scope.workitems.splice(index, 1);
		wk.$delete();
		$scope.swkitm = null;
	}

	$scope.addTask = function() {
		workitem.tasks.save({workitem_id : $scope.swkitm.id, task : $scope.newTask}, function(data){
			$scope.newTask = '';
			$scope.tasks.push(data.data[0]);
		});
	}

	$scope.toggleTask = function() {
		$scope.swkitm.last_updated = new Date().toUTCString();
		var task = new workitem.tasks({data : this.task, task_id : this.task.id, workitem_id : $scope.swkitm.id});
		task.$save();
	}

	$scope.deleteTask = function() {
		var task = new workitem.tasks({task_id : this.task.id, workitem_id : $scope.swkitm.id});
		task.$delete();
		$scope.tasks.splice(this.task.$index, 1);
	}
	$scope.$on('event', function(event,data) {
		// do the updatation stuff here
	});
}