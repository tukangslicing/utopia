'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('utopia.services', []).
  value('version', '0.1').
  factory('socket', function ($rootScope) {
    var socket = io.connect();
    return {
      on : function (eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit : function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    };
  });

utopia.directive('chosen', function () {
  var linker = function (scope, element, attr) {
    var watch_me = element.attr("chosen-watch");
    scope.$watch(watch_me, function () {
      element.trigger('liszt:updated');
    });
    element.chosen();
  };

  return {
    restrict : 'A',
    link : linker
  };
});

utopia.filter('range', function () {
  return function (input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i = min; i <= max; i++)
      input.push(i);
    return input;
  };
});