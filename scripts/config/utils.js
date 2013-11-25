
//Constants
ut.loggedInNav = [{text : "About", href: "#/about"}, {text : "Logout", href: "#/logout"}];
ut.notLoggedInNav = [{text : "Get started", href: "#/get-started"}];

//TODO : get all apis in here as constants jsut call the variable names after this.

// utility methods
ut.flashMessage = function (message) {
  console.log('flash-message', message);
}

jQuery.fn.exists = function() {
	return this.length > 0;
}

Offline.options = {
  // Should we check the connection status immediatly on page load.
  checkOnLoad: true,

  // Should we monitor AJAX requests to help decide if we have a connection.
  interceptRequests: false,

  // Should we automatically retest periodically when the connection is down (set to false to disable).
  reconnect: {
    // How many seconds should we wait before rechecking.
    initialDelay: 0,

    // How long should we wait between retries.
    delay: (3)
  },

  checks : {
  	active : 'xhr',
  	xhr : {
  		url : ut.host
  	}
  },

  // Should we store and attempt to remake requests which fail while the connection is down.
  requests: true,

  // Should we show a snake game while the connection is down to keep the user entertained?
  // It's not included in the normal build, you should bring in js/snake.js in addition to
  // offline.min.js.
  game: false
};

// var timeout = setInterval(function(){
// 	Offline.check();
// },2000)