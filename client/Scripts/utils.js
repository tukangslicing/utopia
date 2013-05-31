
//Constants
ut.loggedInNav = [{text : "About", href: "#/about"}, {text : "Logout", href: "#/logout"}];
ut.notLoggedInNav = [{text : "Get started", href: "#/get-started"}];

// utility methods
ut.setTitle = function (title) {
	$('title').html(title);
}

ut.flashMessage = function (message) {
  console.log('flash-message', message);
}

ut.redirectTo = function (url) {
  window.location = "#/" + url;
}

ut.updateNav = function(data) {
  var menu = $('.menu-bar ul');
  var html = "";
  for (var i = 0; i < data.length; i++) {
    var current = data[i];
    html += "<li><a href='"+ current.href +"'>" + current.text + "</li>";
  };
  menu.html(html);
};
