var global_controller = require("../controllers/global-controller");

exports.init = function (app) {
  app.get('/login/:username/:password', global_controller.login);
  app.get('/api/home', global_controller.home);

  app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
  });
};