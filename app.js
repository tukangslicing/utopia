var express = require('express'),
  routes = require('./routes'),
  https = require('https'),
  path = require('path'),
  fs = require('fs'),
  sockets = require('./routes/socket-events');

//HTTPS code
var privateKey = fs.readFileSync(path.join(__dirname, 'config/https/privatekey.pem')).toString(),
  certificate = fs.readFileSync(path.join(__dirname, 'config/https/certificate.pem')).toString(),
  credentials = {key : privateKey, cert : certificate};

var app = express(),
  session_store = new express.session.MemoryStore();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser('utopia'));
  app.use(express.session({store : session_store}));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compress());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});


//create and run server
var server = https.createServer(credentials, app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

sockets.init(server, session_store, express);
//create routes
routes.init(app);
