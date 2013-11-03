/**
 * Timeline filter pane directive
 * @param  {[type]} db [description]
 * @return {[type]}    [description]
 */
angular.module('utopia').directive('utFilterPane', function(db) {
    return {
        templateUrl : 'filter-pane',
        controller : function($scope) {
            $scope.users = db.get('project_details').users;
            $scope.selectedUsers = [];
            $scope.from = new Date().toJSON().slice(0,10);
            $scope.to = new Date();
            $scope.applyFilter = function() {
                var filterObj = {
                    from : $scope.from,
                    to : $scope.to,
                    workitem_id : $scope.workitem_ids,
                    users : $scope.selectedUsers
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