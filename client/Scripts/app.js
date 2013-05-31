/* create main utopia module for angular */
var ut = {};
ut = angular.module('utopia', []);
ut.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'login',
		controller : LoginController
	});
	$routeProvider.when('/', {
		templateUrl : '/',
		controller : LandingPageController
	});
  $routeProvider.when('/logout', {
    templateUrl : 'logout',
    controller : LogoutController
  });
  $routeProvider.when('/white-board', {
    templateUrl : 'white-board',
    controller : LogoutController
  });
  $routeProvider.otherwise({
    templateUrl : 'under-construction',
    controller : function() {}
  });
});

/* Initiate event emmiter for database */
(function(jQuery) {
  jQuery.eventEmitter = {
    _JQInit: function() {
      this._JQ = jQuery(this);
    },
    emit: function(evt, data) {
      !this._JQ && this._JQInit();
      this._JQ.trigger(evt, data);
    },
    once: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.one(evt, handler);
    },
    on: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.bind(evt, handler);
    },
    off: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.unbind(evt, handler);
    }
  };
}(jQuery));



window.onload = function() {
  db.resetData();
  db.sync();
}


