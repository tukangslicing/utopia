var db = (function() {
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
		print : function() {
			console.log(dataset);
		},
		getUser : function(data, callback) {
			post('http://localhost/utopia/key', data, callback);
		},
		listen : function() {
			setInterval(function() {
				console.log('call server');
			}, 1500);
		},
		getProjects : function(callback) {
			get('http://localhost/utopia/api/project/user_projects', "	", callback);
		},
		getProjectById : function(id) {
			return this.get('projects').filter(function(d) { return d.id == id })[0];
		},
		sync : function () {
		},
		loadProject : function(id, callback) {
			get('http://localhost/utopia/api/project/', id, callback);	
		}
	};

	function Request(url, data, callback, method) {
		if(!dataset['api-key']) {
			ut.redirectTo('login');
			db.clear();
			return;
		}
		$("html").css("cursor", "busy");
		$.ajax({
			url : url,
			method : method,
			data : data,
			contentType: "application/json; charset=utf-8",
			beforeSend: function (request) {
				var key = dataset['api-key'] || "";
				request.setRequestHeader("utopia-server-version", key.slice(1,41));
			},
			statusCode: {
				200: function(data) {
					callback(data.data);
					$("html").css("cursor", "");
				},
				201: function(data) {
					callback(data.data);
					$("html").css("cursor", "");
				},
				401:function(){
					ut.flashMessage("You're not authorized to view this information");
					ut.redirectTo('login');
					$("html").css("cursor", "");
				},
				400 : function(data) {
					ut.flashMessage("Bad request, please try again");
					$("html").css("cursor", "");
				},
				403 : function(data) {
					ut.flashMessage("Please login to see this information");
					$("html").css("cursor", "");
				}
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