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


/* utility methods */
ut.setTitle = function (title) {
	$('title').html(title);
}

ut.flashMessage = function (message) {
  alert(message);
}

ut.redirectTo = function (url) {
  window.location = "#/" + url;
}

ut.handleMessage = function(data) {
  if(!data.action_result) {
    ut.flashMessage(data.message);
  }
}

ut.updateNav = function(data) {
  var menu = $('.menu-bar ul');
  var html = "";
  for (var i = 0; i < data.length; i++) {
    var current = data[i];
    html += "<li><a href='"+ current.href +"'>" + current.text + "</li>";
  };
  menu.html(html);
};

ut.loggedInNav = [{text : "About", href: "#/about"}, {text : "Logout", href: "#/logout"}];
ut.notLoggedInNav = [{text : "Get started", href: "#/get-started"}];