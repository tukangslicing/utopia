
/**
 * Filter to avoid using <pre></pre> tags
 * @return {[type]} [description]
 */
angular.module('utopia').filter('lines', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
})
.filter('noHTML', function () {
    return function(text) {
        return text
                .replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;');
    }
});