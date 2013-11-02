ut.service('db', function($rootScope) {
	var dataset = localStorage || {};
	
	var returnObject = {
		get : function(key) {
			return dataset[key] ? JSON.parse(dataset[key]) : undefined;
		},
		set : function(key, value) {
			dataset[key] = JSON.stringify(value);
		},
		clear : function(key) {
			if(key) {
				delete dataset[key];
			} else {
				for (var a in dataset) {
					delete dataset[a];
				};
			}
		}, 
		resetData : function() {
			for (var a in dataset) {
				if(a != 'api-key') {
					delete dataset[a];
				}
			};
		},
		listen : function() {
			$rootScope.$broadcast('event',{data : 'updated'});
			setInterval(this.listen, 1000);
		},
		print : function() {
			console.log(dataset);
		}
	};
	returnObject.listen();
	return returnObject;
})