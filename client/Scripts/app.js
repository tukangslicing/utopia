/* create main utopia module for angular */
var ut = angular.module('utopia', ['ngResource', 
						'localytics.directives', 
						'ui.bootstrap', 
						'ngProgress', 
						'restangular']);

ut.host = "http://localhost/utopia/";

ut.constant("route", {
	resolve : function(route) {
		return {
			templateUrl : route,
			controller : this.capitalise(route) + 'Controller'
		} 
	},
	capitalise : function (string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}
})

ut.config(function($routeProvider, $locationProvider, route) {
	$routeProvider.when('/', { redirectTo : 'projects' });
	$routeProvider.when('/login', route.resolve('login'));
	$routeProvider.when('/projects', route.resolve('projects'));
	$routeProvider.when('/logout', route.resolve('logout'));
	$routeProvider.when('/projects/:project_id/whiteboard', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/whiteboard/:workitem_id', route.resolve('whiteboard'));
	$routeProvider.when('/projects/:project_id/timeline', route.resolve('timeline'));
	$routeProvider.otherwise({
		templateUrl : 'under-construction',
		controller : function() {}
	});
});

ut.config(function($httpProvider, $routeProvider, RestangularProvider) {
	//global error handlers
	var interceptor = function ($rootScope, $q) {
		function success(response) {
			return response;
		}
		function error(response) {
			var status = response.status;
			if (status != 200) {
				$routeProvider.location = "#/login";
				return;
			}
			return $q.reject(response);
		}
		return function (promise) {
			return promise.then(success, error);
		}
	};
	$httpProvider.responseInterceptors.push(interceptor);
	 RestangularProvider.setBaseUrl(ut.host);
});

ut.run(function($rootScope, $location, $http, db, $timeout) {
	//global authentication
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		var api = db.get('api-key');
		if (!api) {
			$location.path( "/login" );
		}
	});

	//navigation check
	$rootScope.$on("$routeChangeSuccess",  function(event, next, current) {
		var api = db.get('api-key');
		if(!api) {
			$rootScope.menues = ut.notLoggedInNav;
		} else {
			$rootScope.menues = ut.loggedInNav;
		}
	});
	//global header settings
	$http.defaults.headers.common['utopia-server-version'] = JSON.parse(db.get('api-key'));

	//utility methods
	$rootScope.getType = function(id) {
		var types = db.get('project_details').workitem_types;
		return types.filter(function(d) { return d.id == id; })[0].title;
	}

	$rootScope.getState = function(id) {
		var types = db.get('project_details').workitem_types;
		var states = [];
		types.forEach(function (d) { d.states.forEach(function(s) { states.push(s); }) });
		var state = states.filter(function(d) { return d.id == id; })[0];
		return state.title;
	};

	$rootScope.getSprint = function(id) {
		if(!id) {
			return '';
		}   
		return db.get('project_details').sprints.filter(function(d) { return d.id == id })[0].title;
	};

	$rootScope.ago = function(date) {
		if(!date) {
			return '';
		}
		var d = new Date(date);
		return moment(d).fromNow();
	};

	$rootScope.getUser = function(id) {
		var users = db.get('project_details').users;
		return users.filter(function(d) {
			return d.user_id == id;
		})[0].display_name;
	};

	$rootScope.getProjectTitle = function() {
		var project = db.get('project_details').project[0];
		return project.title;
	}

	$rootScope.getValue = function(value, action) {
		var actionObject = {
			state : function(value) {
				return $rootScope.getState(value);
			},
			type : function(value) {
				return $rootScope.getType(value);
			},
			assigned_to : function(value) {
				return $rootScope.getUser(value);
			},
			created_by : function(value) {
				return $rootScope.getUser(value);
			}
		}
		return actionObject[action] ? actionObject[action](value) : value;
	}

	$rootScope.flash = function(message, cls) {
		$rootScope.flashMessage = message;
		$rootScope.flashClass = cls || 'alert-block';
		$rootScope.flashShow = true;
		$timeout(function(){
			$rootScope.flashShow = false;
		},500)
	}

	$rootScope.formatDate = function(date, noTime) {
		var expression = noTime ? "Do MMM YYYY" : "Do MMM YYYY, h:mm a";
		return moment(date).format(expression);
	}
});