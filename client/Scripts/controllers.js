
function LoginController($scope) {
	$scope.submit = function() {
		db.getUser({username : $scope.username, password : $scope.password}, function(data) {
			db.set('api-key', data.key);
			ut.redirectTo('');
			db.listen();
		});
	}
}

function LandingPageController($scope) {
	$scope.projects = [];
	var projects = db.getProjects(function(data) {
		db.set('projects', data)
		$scope.projects = db.get('projects');
		$scope.$apply();
	});
	db.on('data-updated', function(data) {
		$scope.projects = db.get('projects');
		$scope.$apply();
	});
	$scope.load_project = function() {
		var project = db.getProjectById(this.project.id)
		ut.setTitle(project.title);
		db.loadProject(project.id, function(data) {
			console.log(data);
			db.set('currentProject', data);
			ut.redirectTo('white-board');
		});
	}
}


function LogoutController($scope) {
	db.clear();
	ut.updateNav(ut.notLoggedInNav);
}

function WhiteboardController($scope) {

}
