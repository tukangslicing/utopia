var db = (function() {
	var dataset = localStorage || {};
	var returnObject = {
		get : function(key) {
			if(dataset[key]) {
				return JSON.parse(dataset[key]);
			}
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
				if(a != 'api-token') {
					delete dataset[a];
				}
			};
		},
		print : function() {
			console.log(dataset);
		},
		get_user : function(data, callback) {
			post('http://localhost/utopia/api/auth', data, callback);
		},
		listen : function() {
			setInterval(function() {
				console.log('call server');
			}, 1500);
			
		},
		sync : function () {
			var self = this;
			get('http://localhost/utopia/api/user_projects', "", function(data) {
				self.emit('data-updated');
				self.set('projects',data.data);
			});
		}
	};

	function Request(url, data, callback, method) {
		$.ajax({
			url : url,
			method : method,
			data : data,
			success : function(data) {
				ut.handleMessage(data);
				callback(data);
			},
			error : function(data) {
				console.log('err', data);
			}
		})		
	};

	function get(url, data, callback) {
		Request(url + data, "", callback,'GET');
	};
	
	function post(url, data, callback) {
		Request(url, data, callback,'POST');
	};
	
	function del(url, data, callback) {
		Request(url, data, callback,'DELETE');
	};

	function put(url, data, callback) {
		Request(url, data, callback,'PUT');
	};

	$.extend(returnObject, jQuery.eventEmitter);
	return returnObject;
})();