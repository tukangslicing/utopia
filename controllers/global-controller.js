var db = require("../db-connector").pool;
var sp = require("../utils/db-utils").sp_map;

function GlobalController() {

  this.login = function (req, res) {
    var args = [],
      db_client;
    args.push(req.params.username);
    args.push(req.params.password);
    db.acquire(function (err, client) {
      call_db(client);
      db_client = client;
    });

    function send_response(err, row) {
      if (err) {
        res.end(err.toString());
      }
      if (row[0].length === 1) {
        req.session.user = row[0][0];
        res.json({failed : false });
      } else {
        res.json({failed : true });
      }
      db.release(db_client);
    }

    function call_db(client) {
      client.query(sp.get_sp(sp.authenticate_user, args), send_response);
    }
  };

  this.home = function (req, res) {
    var args = [],
      db_client;
    args.push(req.session.user.id);

    db.acquire(function (err, client) {
      call_db(client);
      db_client = client;
    });
    function call_db(client) {
      client.query(sp.get_sp(sp.list_project_by_user, args), send_response);

    }

    function send_response(err, row) {
      if (err) {
        res.end(err);
      } else {
        res.json(row[0]);
      }
      db.release(db_client);
    }
  };
}

module.exports = new GlobalController();