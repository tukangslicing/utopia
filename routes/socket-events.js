//push notifications
var io = require('socket.io'),
  session_sockets = require('session.socket.io');

exports.init = function (server, session_store, express) {
  var connections = [],
    socket_listener = io.listen(server),
    sessionSockets = new session_sockets(socket_listener, session_store, express.cookieParser('utopia'));

  socket_listener.configure('development', function () {
    socket_listener.set('log level', 1);
  });

  sessionSockets.on('connection', function (err, socket, session) {
    if (session && session.user) {
      socket.emit('notification', session.user.username);
      var singleConnection = {};
      singleConnection.session = session;
      singleConnection.sockets = [];
      singleConnection.sockets.push(socket);

      if (!connections[session]) {
        connections.push(singleConnection);
      } else {
        connections[session].sockets.push(socket);
      }
    }
  });
};

