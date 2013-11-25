
/**
 * Controller to handle impediments
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
angular.module('utopia').controller('ImpedimentsController', function($scope, $routeParams, db, Restangular, $location) {
	
	$scope.project_id = $routeParams.project_id;
	if(db.get('current_project') !== $scope.project_id) {
		$scope.getProjectDetails($scope.project_id);
	}

	$scope.users = db.get('users');

	var impediments = Restangular.all('impediments');
	var id = $location.search().id;
	$scope.filter = {};
	$scope.filter.selectedUsers = []
	$scope.filter.is_resolved = "0";

	/**
	 * update selected impediment
	 * @return {[type]} [description]
	 */
	$scope.$on('$routeUpdate', function(){
		selectImpediment($location.search().id)
	});

	/**
	 * Selects an impediment to make it into a single view
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	function selectImpediment(id) {
		console.log(id);
		if(!id) return;
		$scope.comments = [];
		$scope.selectedImpediment = _.find($scope.impediments, function(d) { return d.id == id });
		getComments(id);
	}

	function getComments(id) {
		impediments.one(id).getList('comments').then(function(d) {
			$scope.comments = d;
		})
	}

	$scope.clearSearch = function() {
		$scope.selectedImpediment = null;
	}

	/**
	 * Adds a comment
	 */
	$scope.addComment = function() {
		impediments.one($scope.selectedImpediment.id)
		.post('comments', {comment_body : $scope.comment_body}).then(function(d) {
			$scope.comments.push(d);
			$scope.comment_body = '';
		})
	}

	/**
	 * Applies filter to impediments
	 * @return {[type]} [description]
	 */
	$scope.applyFilter = function() {
		$scope.filter.users = $scope.filter.selectedUsers.join(',');
		impediments.one($scope.project_id).getList('',$scope.filter).then(function(d) {
			$scope.impediments = d;
		});
	}

	/**
	 * Saves an impediment
	 * @return {[type]} [description]
	 */
	$scope.saveImpediment = function(from_edit) {
		if(!from_edit) {
			$scope.selectedImpediment.is_resolved = 1;	
		}
		$scope.selectedImpediment.put().then(nothing);
	}

	/**
	 * Removes the comment
	 * @return {[type]} [description]
	 */
	$scope.deleteComment = function() {
		var comment = this.comment;
		comment.remove().then(function(d) {
			$scope.comments = $scope.comments.filter(function(e) {
				return e.id != comment.id;
			});
		});
	}

	/**
	 * [deleteImpediment description]
	 * @return {[type]} [description]
	 */
	$scope.deleteImpediment = function() {
		$scope.selectedImpediment.remove().then(function(e){
			$scope.impediments = $scope.impediments.filter(function(d){
				return d.id !== $scope.selectedImpediment.id;
			});
			$scope.selectedImpediment = null;
			$location.search().id = null;
		})
	}

	/**
	 * Creates a new impediment
	 * @return {[type]} [description]
	 */
	$scope.createImpediment = function(newImpediment) {
		impediments.one($scope.project_id).post('', newImpediment).then(function(d){
			$scope.impediments.push(d);
		});
	}

	/**
	 * Initial fetch and check if any one is selected
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	if($location.search().id) {
		impediments.one($scope.project_id + '/' + $location.search().id).get().then(function(d){
			console.log(d);
			$scope.selectedImpediment = d;
		});
		getComments($location.search().id);
	} 
	$scope.applyFilter();
})