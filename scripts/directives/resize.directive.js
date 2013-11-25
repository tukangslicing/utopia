/**
 * Helpful directive for handling full page view of workitems and timeline
 * @param  {[type]} $window [description]
 * @return {[type]}         [description]
 */
angular.module('utopia').directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height(), 'w': w.width() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            scope.style = function () {
                return { 
                    'height': Math.floor(newValue.h - angular.element(element).offset().top - 42) + 'px'
                };
            };
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});