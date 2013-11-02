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