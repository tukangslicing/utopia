/**
 * Shows beautiful timeline
 * @param {[type]} $scope
 * @param {[type]} $routeParams
 * @param {[type]} timeline
 */
angular.module('utopia').controller('TimelineController', function ($scope, $routeParams) {
	
	$scope.project_id = $routeParams.project_id;
	var oldLogs = [];
	$scope.logs = [];

	// timeline.get({project_id : $scope.project_id} ,function(data){
	// 	var logs = formatLogs(data);
	// 	$scope.logs = logs;
	// });
	
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
});