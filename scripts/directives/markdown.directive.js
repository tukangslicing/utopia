/*
 * angular-markdown-directive v0.1.0
 */
 angular.module('utopia').directive('markdown', function () {
  var converter = new Showdown.converter();
  return {
    restrict: 'AE',
    link: function (scope, element, attrs) {
      if (attrs.markdown) {
        scope.$watch(attrs.markdown, function (newVal) {
          var html = newVal ? converter.makeHtml(newVal) : '';
          element.html(html);
        });
      } else {
        var html = converter.makeHtml(element.text());
        element.html(html);
      }
    }
  };
});