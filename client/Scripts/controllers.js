
function LoginController($scope, $http, $location, db) {
	$scope.submit = function() {
		var data = {username : $scope.username, password : $scope.password};
		//login.post(data);
		$http.post(ut.host + 'key', data).success(function(d) {
			$location.path('/');
			db.set('api-key', d.key);
			db.set('currentUser', d.user);
			$http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
		})
	}
}

function ProjectsController($scope, $resource, project, $location, db) {
	project.crud.get(function(response) {
		$scope.projects	= response.data;	
	});
	
	$scope.load_project = function() {
		var project_id = this.project.id;
		project.details.get({project_id : project_id }, function(response) {
			db.set('project_details', response.data);
			$location.path('/projects/' + project_id  + '/whiteboard');
		});
	}
}

function LogoutController($scope, db) {
	db.clear();
}

function WhiteboardController($scope, $routeParams, workitem, $window, db, progressbar) {
	progressbar.start();
	$scope.project_id = $routeParams.project_id;
	workitem.crud.get({project_id : $scope.project_id }, function(data) {
		$scope.workitems = data.data;
		progressbar.complete();
	});

	//$scope.currentUser = 123; //db.get('project_details').workitem_types;
	$scope.users = db.get('project_details').users;
	$scope.types = db.get('project_details').workitem_types;
	//$scope.flash('data-pulled!', 'alert-success');
	
	$scope.select = function() {
		$scope.swkitm = this.wk;
		$scope.selectedIndex = this.$index;
		$scope.newComment = "";
		$scope.updateStates();
		progressbar.start();
		workitem.comments.get({project_id: $scope.project_id, workitem_id : this.wk.id}, function(data) {
			$scope.comments = data.data;
		});
		workitem.tasks.get({workitem_id : this.wk.id}, function(data) {
			$scope.tasks = data.data;
			progressbar.complete();
		});
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
		var types = db.get('project_details').workitem_types;
		$scope.states = types.filter(function(d) { return d.id == $scope.swkitm.type })[0].states;
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

function TimelineController($scope, $routeParams, timeline) {
	$scope.project_id = $routeParams.project_id;
	var oldLogs = [];
	$scope.logs = [];

	timeline.get({project_id : $scope.project_id} ,function(data){
		var logs = formatLogs(data);
		$scope.logs = logs;
	});
	
	$scope.filterUsers = function(userIds) {
		if(userIds.length == 0) {
			updateTimeline();
		}
		$scope.logs.forEach(function(d) {
			d.entries = d.entries.filter(function(e) {
				return userIds.indexOf(e.user_id || e.created_by) != -1; 
			})
		})
	}

	$scope.filterTimeline = function(filterObj) {
		filterObj.project_id = $scope.project_id;
		timeline.get(filterObj, function(data){
			var logs = formatLogs(data);
			logs = filterByUsers(filterObj, logs);
			$scope.logs = logs;
		});
	}

	function filterByUsers(filterObj, logs) {
		if(filterObj.users.length == 0) {
			return logs;
		}
		logs.forEach(function(d) {
			d.entries = d.entries.filter(function(e) {
				console.log(filterObj.users);
				return filterObj.users.indexOf(e.user_id || e.created_by) != -1; 
			})
		});
		return logs;
	}

	function formatLogs(data) {
		var logs = [];
		data.data.workitem_log.forEach(function(d) {
			d.log_type = 'workitem_log';
			d.last_updated = d.timestamp;
			logs.push(d);
		});
		data.data.task_log.forEach(function(d) {
			d.log_type = 'task_log';
			d.last_updated = d.done_date;
			logs.push(d);
		});
		data.data.comments.forEach(function(d) {
			d.log_type = 'comments';
			d.last_updated = d.created_at;
			d.user_id = d.created_by;
			logs.push(d);
		});
		logs = logs.sort(function(one, two) { 
			var key1 = new Date(one.last_updated);
		    var key2 = new Date(two.last_updated);

		    if (key1 > key2) {
		        return -1;
		    } else if (key1 == key2) {
		        return 0;
		    } else {
		        return 1;
		    }
		});
		
		var insertUs = [];
		logs.forEach(function(d, i) {
			var curDate = new Date(d.last_updated);
			curDate.setHours(0,0,0);
			var index = i == 0 ? i : i + 1;
			var dataObj = {log_type:'year', last_updated : curDate, index: index};
			var exists = insertUs.filter(function(ins) {
				return ins.last_updated.toString() == curDate.toString(); 
			}).length;
			if(!exists) {
				insertUs.push(dataObj);
			}
		});
		var updatedLog = [];
		var testLog = logs;
		console.log(logs);
		insertUs.forEach(function(d,i) {
			var last_index = insertUs[i+1] ? insertUs[i+1].index - 1 : logs.length;
			last_index = d.index == last_index ? last_index+ 1 : last_index;
			updatedLog.push({year : d, entries : logs.slice(d.index, last_index)})
		});
		return updatedLog;
	}
}