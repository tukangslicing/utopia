/**
 * Defines utility methods for $scope hierarchy
 * @param  {[type]} $rootScope [description]
 * @param  {[type]} $location  [description]
 * @param  {[type]} $http      [description]
 * @param  {[type]} db         [description]
 * @param  {[type]} $timeout   [description]
 * @return {[type]}            [description]
 */
angular.module('utopia').run(function($rootScope, $location, $http, db, $timeout, Restangular) {
	/**
	 * Returns workitem type 
	 * @param  WorkitemType id 
	 * @return WorkitemType
	 */
	$rootScope.getType = function(id) {
		var type = _.find(db.get('types'), function(d) { return d.id == id; });
		return type ? type.title : '';
	}

	/**
	 * Returns state based on WorkitemState id
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getState = (function() {
		var states = db.get('states');
		return function(id) {
			var state = _.find(states, function(d) { return d.id == id; });
			return state ? state.title : '';
		}
	})();

	/**
	 * Retrieves the data for workitem
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.fetchDetails = function(id) {
		$rootScope.swkitm = null;
		Restangular.one('workitem', id).get().then(function(d){
			$rootScope.swkitm = d;
			$rootScope.$emit('popover-shown');
		})
	}

	/**
	 * Returns Sprint of project based on SprintID 
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getSprint = function(id) {
		if(!id) {
			return '';
		}   
		var sprint = _.find(db.get('sprints'), function(d) { return d.id == id });
		return sprint ? sprint.title : '';
	};

	/**
	 * Converts regular date into momentjs ago
	 * @param  {[type]} date [description]
	 * @return {[type]}      [description]
	 */
	$rootScope.ago = function(date) {
		if(!date) {
			return '';
		}
		//var d = new Date(date);
		return moment(date).fromNow();
	};

	/**
	 * Returns a user from id
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getUser = function(id) {
		if(!id) {
			return
		}
		var users = db.get('users');
		var a = _.find(users, function(d) { return d.id == id; });
		return a ? a.display_name : '';
	};

	/**
	 * Multipurpose function
	 * used in timeline. handles conversion from 
	 * type_id = type
	 * state_id = state
	 * user_id = user
	 * @param  {[type]} value  [description]
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
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
			},
			planned_for : function(value) {
				return $rootScope.getSprint(value);
			}
		}
		return actionObject[action] ? actionObject[action](value) : value;
	}

	/**
	 * used to show a flash message to use
	 * NOTE: Yet to add an HTML elemnt for it
	 * @param  {[type]} message [description]
	 * @param  {[type]} cls     [description]
	 * @return {[type]}         [description]
	 */
	$rootScope.flash = function(message, cls) {
		$rootScope.flashMessage = message;
		$rootScope.flashClass = cls || 'alert-block';
		$rootScope.flashShow = true;
		$timeout(function(){
			$rootScope.flashShow = false;
		},500)
	}

	/**
	 * Formats date into a readable format
	 * @param  {[type]} date   [description]
	 * @param  {[type]} noTime [description]
	 * @return {[type]}        [description]
	 */
	$rootScope.formatDate = function(date, noTime) {
		var expression = noTime ? "Do MMM YYYY" : "Do MMM YYYY, h:mm a";
		return moment(date).format(expression);
	}


	/**
	 * Get the popover inside if
	 * @return {[type]} [description]
	 */
	$rootScope.$on('popover-shown', function($event){
		$popover = $(".popover");
		$popover.find(".arrow").hide();
		
		/**
		 * 50ms delay to let it paint, 
		 * TODO : need to repeat this process till popover is properly adjusted
		 * @return {[type]} [description]
		 */
		$timeout(function() {
			/**
		 	* If going below the screen, bring it up
		 	*/
			if(($popover.height() + $popover.offset().top) > $(window).height()) {
				$popover.css({top : $(window).height() - $popover.height() - 30});
			}
			/**
			 * If its going above the top line, bring it down.
			 */
			if($popover.offset().top < 0) {
				$popover.css({top : 30});
			}
		}, 0)
		event.stopPropagation();
	});

	/**
	 * Retrieves project details from server
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	$rootScope.getProjectDetails = function(project_id) {
		var projects = Restangular.all('project');
		db.set('current_project', project_id);
		projects.one(project_id).getList('types').then(function(response) {
			db.set('types', response);
		});
		projects.one(project_id).getList('states').then(function(response) {
			db.set('states', response);
		});
		projects.one(project_id).getList('sprints').then(function(response) {
			db.set('sprints', response);
		});
		projects.one(project_id).getList('users').then(function(response) {
			db.set('users', response);
		});
	}

	/**
	 * Immediately hides the popover
	 * @return {[type]} [description]
	 */
	$rootScope.$on("popover-hide",function() {
		$popover = $(".popover");
		$popover.hide();
	});
});