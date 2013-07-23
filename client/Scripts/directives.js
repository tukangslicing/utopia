{}
ut.directive('resize', function ($window) {
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
                    'height': (newValue.h - angular.element('#internal-view').offset().top - 35) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});

ut.directive("utWkPopover", function($document, $parse, $http, $compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var buttonId, html, message, nope, title, yep;
            
            buttonId = Math.floor(Math.random() * 10000000000);
            
            attrs.buttonId = buttonId;
            
            html = "<h1>Hello {{hello}}</h1>";
            scope.hello = "world";

            element.popover({
                content: $compile(html)(scope),
                html: true,
                trigger: "manual",
                title: "Workitem details"
            });
            element.hover(function(e) {
                var workitem_id = attrs['utWkPopover'];
                scope.hello = workitem_id;
                var dontBubble = true;
                e.stopPropagation();
                $('.popover').hide();
                element.popover('show');
            }, function(e) {
                //element.popover('hide');
            });
            $document.bind('click', function(e) {
                element.popover('hide');
            })
        }
    };
});

ut.directive('utFilterPane', function(db) {
    return {
        templateUrl : 'filter-pane',
        controller : function($scope) {
            $scope.users = db.get('project_details').users;
            $scope.selectedUsers = [];
            $scope.applyFilter = function() {
                console.log($scope.selectedUsers);
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