
function LoginController($scope) {
	ut.checkUserData();	
	$scope.submit = function() {
		db.get_user({username : $scope.username, password : $scope.password}, function(data) {
			db.set('user', data.data.user_basic);
			db.set('projects', data.data.user_projects);
			db.set('api-token', data.api_token);
			ut.redirectTo('');
			db.listen();
		});
	}
}

function LandingPageController($scope) {
	ut.checkUserData();	
	var projects = db.get('projects');
	$scope.projects = projects;
	db.on('data-updated', function(data) {
		console.log(data, 'from controller');
		$scope.projects = db.get('projects');
	})
}


function LogoutController($scope) {
	db.clear();
	ut.updateNav(ut.notLoggedInNav);
}

ut.checkUserData = function() {
	var user = db.get('api-token');
	if(!user) {
		ut.redirectTo('login')
		ut.updateNav(ut.notLoggedInNav);
		return;
	} 
	ut.redirectTo('')
	ut.updateNav(ut.loggedInNav);
};

