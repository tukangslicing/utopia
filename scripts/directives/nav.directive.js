/**
 * Directive for creating top navigation in each view
 * @return {[type]} [description]
 */
angular.module('utopia').directive('nav', function() {
	return {
		restrict : 'EA',
		templateUrl : 'nav',
		link : function(scope, element, attrs) {
			scope.items = ["Dashboard", "Whiteboard", "Timeline", "Planning", "Impediments"];
			scope.activeIndex = attrs.nav;
		}
	}
});