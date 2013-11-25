
/**
 * Project list page controller, handles fetching appropriate data for a project
 * @param {[type]} $scope
 * @param {[type]} $resource
 * @param {[type]} $location
 * @param {[type]} db
 * @param {[type]} Restangular
 */
angular.module('utopia').controller('ProjectsController', function ($scope, $location, db, Restangular) {
	var projects = Restangular.all('project');
	
	projects.getList().then(function(pData) {
		$scope.projects = pData;
	});
	
	/**
	 * Sends out requests for loading individual data items
	 * Includes : WorkitemTypes, WorkitemStates, ProjectSprints, ProjectUsers
	 * @return {[type]} [description]
	 */
	$scope.load_project = function() {
		var project_id = this.project.id;
		$scope.getProjectDetails(project_id);
		$location.path('/projects/' + project_id + '/whiteboard');
	}
});
