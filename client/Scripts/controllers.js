
function LoginController($scope) {
	ut.checkUserData();	
	$scope.submit = function() {
		db.get_user({username : $scope.username, password : $scope.password}, function(data) {
			db.set('user', data.data.user_basic);
			db.set('projects', data.data.user_projects);
			ut.redirectTo('');
			db.listen();
		});
	}
}

function LandingPageController($scope) {
	ut.checkUserData();	
	$scope.projects = db.get('projects');
}


function LogoutController($scope) {
	db.clear();
	ut.updateNav(ut.notLoggedInNav);
}

ut.checkUserData = function() {
	var user = db.get('user');
	if(!user) {
		ut.redirectTo('login')
		ut.updateNav(ut.notLoggedInNav);
		return;
	} 
	ut.updateNav(ut.loggedInNav);
};

