
/**
 * Project list page controller, handles fetching appropriate data for a project
 * @param {[type]} $scope
 * @param {[type]} $resource
 * @param {[type]} $location
 * @param {[type]} db
 * @param {[type]} Restangular
 */
function ProjectsController($scope, $resource, $location, db, Restangular) {
	var projects = Restangular.all('project');
	
	projects.getList().then(function(pData) {
		$scope.projects = pData;
	});
	
	$scope.load_project = function() {
		var project_id = this.project.id;
		projects.one(project_id).getList('types').then(function(response) {
			db.set('types', response);
		});
		projects.one(project_id).getList('states').then(function(response) {
			db.set('states', response);
		});
		projects.one(project_id).getList('sprints').then(function(response) {
			db.set('sprints', response);
		});
		projects.one(project_id).getList('users').then(function(response) {
			db.set('users', response);
		});
		$location.path('/projects/' + project_id + '/whiteboard');
	}
}
