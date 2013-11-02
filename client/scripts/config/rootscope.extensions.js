ut.run(function($rootScope, $location, $http, db, $timeout) {
	//utility methods
	$rootScope.getType = function(id) {
		var types = db.get('types');
		return types.filter(function(d) { return d.id == id; })[0].title;
	}

	$rootScope.getState = function(id) {
		var states = db.get('states');
		var state = states.filter(function(d) { return d.id == id; })[0];
		return state.title;
	};

	$rootScope.getSprint = function(id) {
		if(!id) {
			return '';
		}   
		return db.get('sprints').filter(function(d) { return d.id == id })[0].title;
	};

	$rootScope.ago = function(date) {
		if(!date) {
			return '';
		}
		var d = new Date(date);
		return moment(d).fromNow();
	};

	$rootScope.getUser = function(id) {
		var users = db.get('users');
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