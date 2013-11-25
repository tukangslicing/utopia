/*
         ^                       ^
         |\   \        /        /|
        /  \  |\__  __/|       /  \
       / /\ \ \ _ \/ _ /      /    \
      / / /\ \ {*}\/{*}      /  / \ \
      | | | \ \( (00) )     /  // |\ \
      | | | |\ \(V""V)\    /  / | || \| 
      | | | | \ |^--^| \  /  / || || || 
     / / /  | |( WWWW__ \/  /| || || ||
    | | | | | |  \______\  / / || || || 
    | | | / | | )|______\ ) | / | || ||
    / / /  / /  /______/   /| \ \ || ||
   / / /  / /  /\_____/  |/ /__\ \ \ \ \
   | | | / /  /\______/    \   \__| \ \ \
   | | | | | |\______ __    \_    \__|_| \
   | | ,___ /\______ _  _     \_       \  |
   | |/    /\_____  /    \      \__     \ |    /\
   |/ |   |\______ |      |        \___  \ |__/  \
   v  |   |\______ |      |            \___/     |
      |   |\______ |      |                    __/
       \   \________\_    _\               ____/
     __/   /\_____ __/   /   )\_,      _____/
    /  ___/  \uuuu/  ___/___)    \______/
    VVV  V        VVV  V 
*/
// this ASCII dragon is really important, do not remove

/**
 * Main module
 * @type {[type]}
 */
var ut = angular.module('utopia', ['restangular', '$strap.directives', 'ngDragDrop']);

/**
 * Constants
 * @type {String}
 */
ut.host = "http://PS7026/utopia/";
angular.module('utopia').constant("route", {
	resolve : function(route) {
		return {
			templateUrl : route,
			controller : this.capitalise(route) + 'Controller',
			reloadOnSearch: false
		} 
	},
	capitalise : function (string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
})

/**
 * Configuring route provider
 * @param  {[type]} $routeProvider
 * @param  {[type]} $locationProvider
 * @param  {[type]} route
 * @return {[type]}
 */
angular.module('utopia').config(function($routeProvider, $locationProvider, route) {
	$routeProvider.when('/', { redirectTo : 'projects' });
	$routeProvider.when('/login', route.resolve('login'));
	$routeProvider.when('/projects', route.resolve('projects'));
	$routeProvider.when('/logout', route.resolve('logout'));
	$routeProvider.when('/projects/:project_id/whiteboard', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/whiteboard/:workitem_id', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/timeline', route.resolve('timeline'));
	$routeProvider.when('/projects/:project_id/planning', route.resolve('planning'));
	$routeProvider.when('/projects/:project_id/dashboard', route.resolve('dashboard'));
	$routeProvider.otherwise({
		templateUrl : 'under-construction',
		controller : nothing
	});
});

/**
 * Setup $http interceptor and NProgress plugin
 * @param  {[type]} $httpProvider
 * @param  {[type]} $routeProvider
 * @param  {[type]} RestangularProvider
 * @return {[type]}
 */
angular.module('utopia').config(function($httpProvider, $routeProvider, RestangularProvider) {
	//global error handlers
	var interceptor = function ($rootScope, $q) {
		function success(response) {
			NProgress.done();
			return response;
		}
		function error(response) {
			NProgress.done();
			var status = response.status;
			console.log('are error ala ki', response);
			if (status != 200) {
				$routeProvider.location = "#/login";
				return;
			}
			return $q.reject(response);
		}
		return function (promise) {
			NProgress.start();
			return promise.then(success, error);
		}
	};
	$httpProvider.responseInterceptors.push(interceptor);

	RestangularProvider.setBaseUrl(ut.host);
	RestangularProvider.setRequestInterceptor(function(elem, operation) {
	   if (operation === "remove" || operation === 'customDELETE') {
	      return undefined;
	   } 
	   return elem;
	});
});

/**
 * Setup global authentication check and header settings
 * @param  {[type]} $rootScope
 * @param  {[type]} $location
 * @param  {[type]} $http
 * @param  {[type]} db
 * @param  {[type]} $timeout
 * @return {[type]}
 */
angular.module('utopia').run(function($rootScope, $location, $http, db, $timeout) {
	//global authentication
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		NProgress.start();
		var api = db.get('api-key');
		if (!api) {
			$location.path( "/login" );
		}
	});

	//navigation check
	$rootScope.$on("$routeChangeSuccess",  function(event, next, current) {
		NProgress.done();
		var api = db.get('api-key');
		if(!api) {
			$rootScope.menues = ut.notLoggedInNav;
		} else {
			$rootScope.menues = ut.loggedInNav;
		}
	});
	//global header settings
	$http.defaults.headers.common['utopia-server-version'] = db.get('api-key');
});

var nothing = function() {}