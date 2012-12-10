"use strict";

var db = require("../db-connector").pool,
  sp = require("../utils/db-utils").sp_map,
  logger = require("../utils/logger"),
  fs = require('fs'),
  events = require('events'),
  helpers = require("../utils/helpers");

function ProjectController() {
}

/*
 * Flow is something like this,
 * validate input
 * read file for default configuration
 * call for creating project
 * get project_id for callback
 * send user notification
 * insert workitem_types using project_id
 * send user notification
 * get work_item_types in callback
 * insert workitem_states
 * send user notification - express setup complete.
 * Release db client
 * @param req
 * @param res
 */

ProjectController.prototype.create_express = function (req, res) {
  var workitem_types = [],
    db_client,
    project_id,
    res_obj = [];

  function create_workitem_states(err, rows) {
    var i = 0,
      query_string = [];

    if (err) {
      logger.write('[ERROR] : project_controller, create_express, send_workitems');
    }
    res_obj.push("Workitem types successfully created");
    query_string.push(sp.get_sp(sp.update_velocity_to_feature, [project_id]));
    for (i = 0; i < workitem_types.length; i++) {
      workitem_types[i].states.forEach(function (d) {
        var args = [];
        args.push(project_id);
        args.push(workitem_types[i].name);
        args.push(d);
        query_string.push(sp.get_sp(sp.insert_workitem_state, args));
      });
    }
    db_client.query(query_string.join(";"), function (err, rows) {
      res_obj.push("Workitem states successfully created");
      res.json({project_id : project_id, notifications : res_obj });
      db.release(db_client);
    });
  }

  function insert_workitem() {
    var index,
      query_string = [];
    for (index in workitem_types) {
      var args = [];
      args.push(0);
      args.push(workitem_types[index].name);
      args.push(project_id);
      query_string.push(sp.get_sp(sp.insert_workitem_type, args));
    }
    db_client.query(query_string.join(";"), create_workitem_states);
  }

  function send_project_id(err, rowset) {
    if (err) {
      logger.write('[ERROR] : project_controller, create_express, send_project_id');
    }
    project_id = rowset[0][0].project_id;
    res_obj.push("Project successfully created");
    insert_workitem();
  }

  function create_project_objects(data) {
    var args = [],
      project = data[0];

    workitem_types = data.splice(1, data.length);

    project.title = req.body.title;
    project.description = req.body.description;

    args.push(project.title);
    args.push(project.description);
    args.push(project.sprint_duration);
    args.push(project.need_review);
    args.push(req.session.user.id);

    db.acquire(function (err, client) {
      if (err) {
        logger.write('[ERROR] : project_controller, create_express, db.acquire');
      }
      client.query(sp.get_sp(sp.insert_express_project, args), send_project_id);
      db_client = client;
    });
  }


  if (req.body.title !== "") {
    fs.readFile(helpers.config_path + "default-project.config", 'utf8', function (err, data) {
      if (err) {
        logger.write('[ERROR] : project_controller, create_express, readFile' + JSON.stringify(err));
      } else {
        create_project_objects(JSON.parse(data));
      }
    });
  } else {
    res.send({project_id : -1, notifications : ["Project can not be created with empty name"]});
  }
};

ProjectController.prototype.update = function (req, res) {

};

ProjectController.prototype.delete = function (req, res) {

};

ProjectController.prototype.select_by_id = function (req, res) {
  var db_client = {};

  function send_response(err, rows) {
    res.json(rows[0][0]);
    db.release(db_client);
  }

  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.select_project_by_id, [req.params.project_id]), send_response);
  });
};

ProjectController.prototype.add_module = function (req, res) {
  var db_client,
    project_id = req.params.project_id,
    module_title = req.params.module_title;

  function return_response(err, rows) {
    var result = new helpers.response();
    result.data = rows[0];
    if (err) {
      result.success = false;
      result.message = "Operation could not be completed";
      result.data = null;
    } else {
      result.success = true;
      result.message = "Operation successfully completed";
      result.data = rows[0];
    }
    db.release(db_client);
    res.json(result);
  }

  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.insert_module_to_project, [0, project_id, module_title]), return_response);
  });
};

ProjectController.prototype.remove_module = function (req, res) {
  var db_client,
    module_id = req.params.module_id;

  function return_response(err, rows) {
    var result = new helpers.response();
    if (err) {
      result.data = null;
      result.success = false;
      result.message = "Operation can not be completed";
    } else {
      result.data = {id : module_id};
      result.success = true;
      result.message = "Module successfully deleted";
    }
    res.json(result);
    db.release(db_client);
  }

  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.delete_module_from_project, [module_id]), return_response);
  });
};

ProjectController.prototype.add_user = function (req, res) {
  var db_client,
    user,
    result = new helpers.response();

  function update_table(err, rows) {
    if (err) {
      console.log(err);
      res.end();
      return;
    }
    if (rows[0][0].id) {
      user = rows[0][0];
      var args = [0, rows[0][0].id, req.params.project_id, 1 ];
      db_client.query(sp.get_sp(sp.insert_user_to_project, args), send_response);
    } else {
      console.log("mail to user sent");
      //send a mail to him
      send_response(null, null);
    }
  }

  function send_response(err, rows) {
    db.release(db_client);
    if (err) {
      result.success = false;
      result.message = "failed to add user";
      result.data = null;
    } else {
      result.success = true;
      result.message = "User successfully added";
      result.data = {user_name : req.params.email_id};
    }
    res.json(result);
  }

  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.select_user_by_email, [req.params.email_id]), update_table);
  });
};

ProjectController.prototype.remove_user = function (req, res) {
  var db_client,
    result = new helpers.response();

  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.delete_project_user_by_email, [req.params.email_id, req.params.project_id]), send_response);
  });

  function send_response(err, rows) {
    db.release(db_client);
    if (err) {
      result.data = null;
      result.success = false;
      result.message = "User can not be removed";
    } else {
      result.data = null;
      result.success = true;
      result.message = "User removed";
    }
    res.json(result);
  }
};

ProjectController.prototype.get_modules = function (req, res) {
  var db_client;
  db.acquire(function (err, client) {
    db_client = client;
    get_modules();
  });
  function get_modules() {
    db_client.query(sp.get_sp(sp.select_modules_by_project_id, [req.params.project_id]), send_response);
  }

  function send_response(err, rows) {
    var result = new helpers.response();
    db.release(db_client);
    if (err) {
      result.message = "Operation could not be completed";
      result.data = {};
      result.success = false;
    } else {
      result.message = "Operation successfully completed";
      result.data = rows[0];
      result.success = true;
    }
    res.json(result);
  }
};

ProjectController.prototype.get_workitem_details = function (req, res) {
  var db_client,
    workitem_types = [];
  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.select_workitem_types_project, [req.params.project_id]), get_workitem_states);
  });

  function get_workitem_states(err, rows) {
    if (err) {
      console.log(err);
      res.end();
      return;
    } else {
      res.json(rows[0]);
    }
    db.release(db_client);
  }
};

ProjectController.prototype.get_users = function (req, res) {
  var db_client;
  db.acquire(function (err, client) {
    db_client = client;
    client.query(sp.get_sp(sp.select_users_by_project_id, [req.params.project_id]), send_response);
  });
  function send_response(err, rows) {
    db.release(db_client);
    res.json(rows[0]);
  }
};

ProjectController.prototype.add_workitem_type = function (req, res) {
  var db_client;

  function send_response(err, rows) {
    var result = new helpers.response();
    if (err) {
      result.success = false;
      result.data = null;
      result.message = "Operation could not be completed, avoid duplicate values";
    } else {
      result.success = true;
      result.data = rows[0][0];
      result.message = "Operation successfully completed";
    }
    res.json(result);
    db.release(db_client);
  }

  db.acquire(function (err, client) {
    db_client = client;
    var args = [0, req.params.workitem_type, req.params.project_id];
    db_client.query(sp.get_sp(sp.insert_workitem_type, args), send_response);
  });
};

ProjectController.prototype.remove_workitem_type = function (req, res) {
  var db_client;

  function send_response(err, rows) {
    var result = new helpers.response();
    if (err) {
      result.success = false;
      result.data = null;
      result.message = "Operation could not be completed, avoid duplicate values";
    } else {
      result.success = true;
      result.data = rows[0][0];
      result.message = "Operation successfully completed";
    }
    res.json(result);
    db.release(db_client);
  }

  db.acquire(function (err, client) {
    db_client = client;
    var args = [0, req.params.workitem_type, req.params.project_id];
    send_response(null, null);
  });
};

ProjectController.prototype.update_workitem_type = function (req, res) {
  var db_client;

  function send_response() {
    db.release(db_client);
    var result = {};
    result.message = "Not updated in database but done."
    result.success = true;
    result.data = null;
    res.json(result);
  }


  db.acquire(function (err, client) {
    db_client = client;
    send_response();
  });
};

ProjectController.prototype.add_workitem_state = function (req, res) {

};

ProjectController.prototype.update_workitem_state = function (req, res) {

};

ProjectController.prototype.remove_workitem_state = function (req, res) {

};

module.exports = new ProjectController();