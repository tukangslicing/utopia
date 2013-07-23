ut.host = "http://localhost/utopia/";
ut.apihost = "http://localhost/utopia/api/";

ut.factory('project', function($resource) {
	var project = {
		crud :
		$resource(ut.apihost + 'project/:project_id', { project_id : "@project_id" }),
		details : $resource(ut.apihost + 'project/details/project_id/:project_id', { project_id : "@project_id" })
	}
	return project;
})

ut.factory('workitem', function($resource) {
	 var workitem = { 
	 	crud : $resource(ut.apihost + 'workitem/index/project_id/:project_id/workitem_id/:workitem_id', 
		{ project_id : "@project_id",  workitem_id: "@workitem_id"  }),
		comments : $resource(ut.apihost + 'workitem/comments/workitem_id/:workitem_id/workitem_comment_id/:workitem_comment_id', 
		{ workitem_id: "@workitem_id" , workitem_comment_id: "@workitem_comment_id"  }),
		tasks : $resource(ut.apihost + 'workitem/tasks/workitem_id/:workitem_id/task_id/:task_id',
			{ workitem_id: "@workitem_id" , task_id : "@task_id"})
	};
 	return workitem;
})

ut.factory('timeline', function($resource) {
	return $resource(ut.apihost + 'timeline/index/project_id/:project_id/start_date/:from/end_date/:to/workitem_id/:workitem_id', {project_id : '@project_id', from : '@from', to : '@to', workitem_id : '@workitem_id'});
})

ut.service('db', function($rootScope) {
	var dataset = localStorage || {};
	
	var returnObject = {
		get : function(key) {
			return dataset[key] ? JSON.parse(dataset[key]) : undefined;
		},
		set : function(key, value) {
			dataset[key] = JSON.stringify(value);
		},
		clear : function(key) {
			if(key) {
				delete dataset[key];
			} else {
				for (var a in dataset) {
					delete dataset[a];
				};
			}
		}, 
		resetData : function() {
			for (var a in dataset) {
				if(a != 'api-key') {
					delete dataset[a];
				}
			};
		},
		listen : function() {
			$rootScope.$broadcast('event',{data : 'updated'});
			setInterval(this.listen, 1000);
		},
		print : function() {
			console.log(dataset);
		}
	};
	returnObject.listen();
	return returnObject;
})