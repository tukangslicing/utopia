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
		//login.post(data);
		$http.post(ut.host + 'key', data).success(function(d) {
			$location.path('/');
			db.set('api-key', d);
			$http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
		})
	}
}