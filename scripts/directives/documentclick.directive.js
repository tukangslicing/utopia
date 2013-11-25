
/**
 * Hides popover
 * @param  {[type]} $document  [description]
 * @param  {[type]} $rootScope [description]
 * @param  {[type]} $timeout   [description]
 * @return {[type]}            [description]
 */
angular.module('utopia').directive('bnDocumentClick', function($document,$rootScope,$timeout) {
  return {
    restrict: 'EA',
     link : function(scope, element, attrs) {
        $document.on("click", function(ev) {
           $('.popover').hide();
        });
     }
 }
});