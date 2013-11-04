/**
 * Wrapping chosen in angular directive
 * TODO: Test for multiple options
 * @param  {[type]} $timeout [description]
 * @return {[type]}          [description]
 */
angular.module('utopia').directive('chosen', function($timeout) {
	var returnObj = {
		restrict: 'A',
		link: function(scope, element, attr) {
			var model = attr['ngModel'];
			var options = attr['ngOptions'];
			var optionsModel = options.split(' ');
			optionsModel=  optionsModel[optionsModel.length - 1];
			element.chosen();

			scope.$watch(optionsModel, function() {
				element.trigger("liszt:updated");
			});
			scope.$watch(model, function () {
				element.trigger("liszt:updated");
			});
			return scope.$watch(model, function(newVal, oldVal) {
				element.trigger("liszt:updated");
			});
		}
	}
	return returnObj; 
});
