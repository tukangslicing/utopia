/**
 * Timeline filter pane directive
 * @param  {[type]} db [description]
 * @return {[type]}    [description]
 */
angular.module('utopia').directive('utFilterPane', function(db) {
    return {
        templateUrl : 'filter-pane',
        controller : function($scope) {
            $scope.selectedUsers = [];
            $scope.from;
            $scope.to;
            $scope.applyFilter = function() {
                var filterObj = {};
                var filterObj = {
                    from : $scope.from,
                    to : $scope.to,
                    workitem_id : $scope.workitem_ids,
                    users : $scope.selectedUsers
                }   
                for(a in filterObj) {
                    if(!filterObj[a]) {
                        delete filterObj[a];
                    }
                }
                $scope.filterTimeline(filterObj);
            }

            $scope.changed = function() {
                console.log('message');    
            }
        },
        link : function(scope, element, attr) {
        }
    }
})