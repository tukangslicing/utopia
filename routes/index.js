var global_routes = require('./global'),
  project_routes = require('./project');

exports.init = function (app) {
  //add authentication for every request html and data
  app.get("/home*", check_session);
  app.get("/api*", check_session);
  app.get('/login', login);

  //define routes
  global_routes.init(app);
  project_routes.init(app);

  app.get('/home', function (req, res) {
    res.render('home');
  });
  app.get('/not-valid', function (req, res) {
    res.render('not-valid');
  });
  app.get('/', function (req, res) {
    res.redirect('/home');
  });
  app.get('/partials/:foldername/:filename', check_session, function (req, res) {
    res.render('partials/' + req.params.foldername + '/' + req.params.filename);
  });
  app.use(function (req, res, next) {
    var o = {url : req.url};
    res.status(404).render('./error-pages/404', o);
  });
  app.use(function (err, req, res, next) {
    var o = {err : err};
    res.status(500).render('./error-pages/500', o);
  });
};

function login(req, res) {
  res.render('login');
}

function check_session(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}