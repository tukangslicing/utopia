/**
 * A localstorage wrapper for utopia
 * @param  {[type]} $rootScope [description]
 * @return {[type]}            [description]
 */
angular.module('utopia').service('db', function($rootScope) {
	var dataset = localStorage || {};
	
	var returnObject = {
		/**
		 * Gets a data value
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		get : function(key) {
			return dataset[key] ? JSON.parse(dataset[key]) : undefined;
		},

		/**
		 * Sets a data value in localstorage
		 * @param {[type]} key   [description]
		 * @param {[type]} value [description]
		 */
		set : function(key, value) {
			dataset[key] = (typeof value == "string") ? value : JSON.stringify(value);
		},

		/**
		 * If key given, clears the data for key 
		 * else
		 * entire database
		 * @param  {[type]} key [description]
		 * @return {[type]}     [description]
		 */
		clear : function(key) {
			if(key) {
				delete dataset[key];
			} else {
				for (var a in dataset) {
					delete dataset[a];
				};
			}
		},
		print : function() {
			console.log(dataset);
		}
	};
	return returnObject;
})