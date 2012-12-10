var db = require("../db-connector").pool,
  sp = require("./db-utils").sp_map;

exports.check_project_access = function (req, res, next) {
  var db_client,
    project_id = req.params[0].split('/')[1],
    user_id = req.session.user.id;

  if (project_id && typeof (project_id) === 'number') {
    db.acquire(function (err, client) {
      db_client = client;
      db_client.query(sp.get_sp(sp.list_project_by_user, [user_id]), return_value);
    });
  } else {
    next();
  }

  function return_value(err, rows) {
    var projects_length = rows[0].filter(function (d) {
      return d.id === project_id;
    }).length;
    db.release(db_client);
    if (projects_length !== 0) {
      next();
    } else {
      res.json({not_valid : true});
    }
  }
};

exports.config_path = "D:\\nodejs\\utopia\\config\\";

exports.response = function () {
  this.data = {};
  this.success = false;
  this.message = "";
};