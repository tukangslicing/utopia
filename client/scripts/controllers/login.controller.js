/**
 * Login screen controller
 * @param {[type]} $scope
 * @param {[type]} $http
 * @param {[type]} $location
 * @param {[type]} db
 */
function LoginController($scope, $http, $location, db) {
	$scope.submit = function() {
		var data = {username : $scope.username, password : $scope.password};
		$http.post(ut.host + 'key', data).success(function(d) {
			$location.path('/');
			db.set('api-key', d);
			$http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
		})
	}
}

/**
 * Handles logout screen
 * TODO : send request to delete the key
 * @param {[type]} $scope [description]
 * @param {[type]} db     [description]
 */
function LogoutController($scope, db, Restangular) {
	var key = db.get('api-key');
	NProgress.start();
	Restangular.one('key/' + key).remove().then(function(data){	NProgress.done(); db.clear(); });
}