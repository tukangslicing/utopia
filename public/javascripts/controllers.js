function ProjectListCtrl($scope, $http, socket) {
  $http.get("/api/home").success(function (data) {
    $scope.projects = data;
  });
}

function ProjectNewCtrl($scope, $http, $routeParams) {
}

function CreateExpressProject($scope, $http, $routeParams) {
  $scope.notifications = [];
  $scope.modules = [];
  $scope.users = [];
  $scope.disable = "";
  $scope.current_project_id = 0;
  $scope.create_project_ajax_loader = "none";
  $scope.module_ajax_loader = "none";
  $scope.nt_class = "";
  var i = 0;

  $scope.create = function () {
    $scope.create_project_ajax_loader = "block";
    if ($scope.disable !== "disabled") {
      $http.post('/api/project/create/express', $scope.form).success(function (data) {
        $scope.current_project_id = data.project_id;
        $scope.nt_class = $scope.current_project_id !== -1 ? "i-tick" : "i-cross";
        for (i = 0; i < data.notifications.length; i++) {
          $scope.notifications.push(data.notifications[i]);
        }
        $scope.disable = "disabled";
        $scope.create_project_ajax_loader = "none";
        console.log($scope.current_project_id);
      });
    } else {
      $scope.create_project_ajax_loader = "none";
    }
  };

  $scope.add_module = function () {
    if ($scope.current_project_id !== 0) {
      $scope.module_ajax_loader = "block";
      $http.get('/api/project/' + $scope.current_project_id + '/add_module/' + $scope.form.module_name)
        .success(function (data) {
          for (i = 0; i < data.length; i++) {
            $scope.modules.push(data[i]);
          }
          $scope.module_ajax_loader = "none";
        }).error(function (data) {
          console.log(data);
        });
    }
    $scope.form.module_name = "";
  };

  $scope.remove_module = function (module_id) {
    $http.get('/api/project/' + $scope.current_project_id + '/remove_module/' + module_id)
      .success(function (data) {
        $scope.modules = $scope.modules.filter(function (d) {
          return d.id !== data.id;
        });
        $scope.module_ajax_loader = "none";
      });
  };

  $scope.add_user = function () {
    if ($scope.current_project_id !== 0) {
      $http.get("/api/project/" + $scope.current_project_id + "/add_user/" + $scope.form.email_id)
        .success(function (data) {
          $scope.users.push(data);
        });
      $scope.form.email_id = "";
    }
  };

  $scope.remove_user = function (user_name) {
    $http.get("/api/project/" + $scope.current_project_id + "/remove_user/" + $scope.form.email_id)
      .success(function (data) {
        if (data.success) {
          $scope.users = $scope.users.filter(function (d) {
            return d.user_name !== user_name;
          });
        }
      });
  };
}

function ProjectController($scope, $http, $routeParams) {
  console.log($routeParams);
}

function ProjectEditController($scope, $http, $routeParams) {
  function init() {
    $http.get("/api/project/" + $routeParams.project_id + "/get_details").success(function (data) {
      handle_message(data);
      $scope.project = data;
      $scope.velocity_workitem_type = data.calculate_velocity_on.toString();
      $scope.velocity_type_changed();
      $scope.velocity_workitem_state = data.velocity_state.toString();
    });
    $http.get("/api/project/" + $routeParams.project_id + "/get_users").success(function (data) {
      handle_message(data);
      $scope.users = data;
    });
    $http.get("/api/project/" + $routeParams.project_id + "/get_workitem_details").success(function (data) {
      handle_message(data);
      var i = 0,
        workitem_types = data.map(function (d) {
          return d.title;
        }),
        res = [],
        a = {},
        similar_items,
        j = 0,
        b = {};
      workitem_types = get_distinct(workitem_types);
      for (i = 0; i < workitem_types.length; i++) {
        similar_items = data.filter(function (d) {
          return d.title === workitem_types[i];
        });
        a = {};
        a.title = workitem_types[i];
        a.id = similar_items[0].id;
        a.states = [];
        for (j = 0; j < similar_items.length; j++) {
          b = {};
          b.id = similar_items[j].workitem_state_id;
          b.title = similar_items[j].state_title;
          b.is_final = similar_items[j].is_final;
          if (b.id !== null) {
            a.states.push(b);
          }
        }
        res.push(a);
      }
      $scope.velocity_workitem_details = res.slice(0);
      a = {};
      a.title = "[Add a new workitem type]";
      a.id = 0;
      a.states = [
        {id : 0, title : "[Add a new workitem state]"}
      ];
      res.push(a);
      $scope.workitem_details = res;
      console.log(res);
    });
    $http.get("/api/project/" + $routeParams.project_id + "/get_modules").success(function (data) {
      $scope.modules = data.data;
    });
    set_edit_icons_none();
  }

  init();

  function set_edit_icons_none(no_state) {
    $scope.visible = {};
    $scope.visible.save = 'none';
    $scope.visible.remove = 'none';
    $scope.visible.add = 'none';
    if (!no_state) {
      state_hide_all();
    }
  }

  $scope.add_module = function () {
    $scope.module_ajax_loader = "block";
    $http.get('/api/project/' + $routeParams.project_id + '/add_module/' + $scope.form.module_name)
      .success(function (data) {
        handle_message(data);
        for (i = 0; i < data.data.length; i++) {
          $scope.modules.push(data.data[i]);
        }
        $scope.module_ajax_loader = "none";
      });
    $scope.form.module_name = "";
    $scope.module_ajax_loader = "none";
  };

  $scope.remove_module = function (module_id) {
    $http.get('/api/project/' + $routeParams.project_id + '/remove_module/' + module_id)
      .success(function (data) {
        handle_message(data);
        $scope.modules = $scope.modules.filter(function (d) {
          return d.id !== data.data.id;
        });
        $scope.module_ajax_loader = "none";
      });
  };

  $scope.type_changed = function () {
    $scope.selected_workitem_type = $scope.workitem_details.filter(function (d) {
      return d.id === $scope.workitem_type;
    })[0];
    var l = $scope.selected_workitem_type.states.filter(function (d) {
      return d.id === 0;
    }).length;
    if (l === 0) {
      $scope.selected_workitem_type.states.push({id : 0, title : "[Add a new workitem state]"});
    }
    $scope.workitem_states = $scope.selected_workitem_type.states;
    if ($scope.selected_workitem_type.title === "[Add a new workitem type]") {
      workitem_show_new();
    } else {
      workitem_show_edit();
    }
    state_show_selected();
    state_hide_all();
  };

  $scope.velocity_type_changed = function () {
    var ok = $scope.velocity_workitem_details.filter(function (d) {
      return d.id === $scope.velocity_workitem_type;
    })[0];
    $scope.velocity_workitem_states = ok.states.filter(function (d) {
      return d.id !== 0;
    });
  };

  $scope.state_changed = function () {
    $scope.selected_workitem_state = $scope.selected_workitem_type.states.filter(function (d) {
      return d.id === $scope.workitem_state;
    })[0];
    set_edit_icons_none(true);
    state_show_selected();
  };

  $scope.add_user = function () {
    $http.get("/api/project/" + $routeParams.project_id + "/add_user/" + $scope.form.email_id)
      .success(function (data) {
        handle_message(data);
        $scope.users.push(data.data);
      });
    $scope.form.email_id = "";
  };

  $scope.remove_user = function (user_name) {
    $http.get("/api/project/" + $routeParams.project_id + "/remove_user/" + user_name)
      .success(function (data) {
        handle_message(data);
        if (data.success) {
          $scope.users = $scope.users.filter(function (d) {
            return d.user_name !== user_name;
          });
        }
      });
  };

  function workitem_show_edit() {
    $scope.visible.save = 'inline-block';
    $scope.visible.remove = 'inline-block';
    $scope.visible.add = 'none';
  }

  function workitem_show_new() {
    $scope.visible.save = 'none';
    $scope.visible.remove = 'none';
    $scope.visible.add = 'inline-block';
  }

  function state_hide_all() {
    $scope.visible.state_save = 'none';
    $scope.visible.state_remove = 'none';
    $scope.visible.state_add = 'none';
  }

  function state_show_selected() {
    if ($scope.selected_workitem_type.id !== 0 && $scope.workitem_state !== undefined) {
      if ($scope.workitem_state === 0) {
        $scope.visible.state_save = 'none';
        $scope.visible.state_remove = 'none';
        $scope.visible.state_add = 'inline-block';
      } else {
        $scope.visible.state_save = 'inline-block';
        $scope.visible.state_remove = 'inline-block';
        $scope.visible.state_add = 'none';
      }
    } else {
      $scope.visible.state_save = 'none';
      $scope.visible.state_remove = 'none';
      $scope.visible.state_add = 'none';
    }
  }

  $scope.add_workitem_type = function () {
    $http.get('/api/project/' + $routeParams.project_id + '/add_workitem_type/' + $scope.new_workitem_type)
      .success(function (data) {
        handle_message(data);
        var type = data.data;
        type.states = [];
        console.log(type);
        $scope.workitem_details.unshift(type);
      });
  };

  $scope.update_workitem = function () {
    if ($scope.new_workitem_type === "") {
      handle_message({success : false, message : "Workitem name can not be empty"});
      return;
    }
    $http.get("/api/project/" + $routeParams.project_id + "/update_workitem_type/" + $scope.workitem_type + "/" + $scope.new_workitem_type)
      .success(function (data) {
        handle_message(data);
        var item = $scope.workitem_details.filter(function (d) {
          return d.id === $scope.workitem_type
        })[0];
        item.title = $scope.new_workitem_type;
      });
    set_edit_icons_none();
  };

  $scope.remove_workitem_type = function () {
    $http.get("/api/project/" + $routeParams.project_id + "/remove_workitem_type/" + $scope.workitem_type)
      .success(function (data) {
        handle_message(data);
        var item = $scope.workitem_details.filter(function (d) {
          return d.id === $scope.workitem_type;
        })[0];
        var index = $scope.workitem_details.indexOf(item);
        $scope.workitem_details.splice(index, 1);
      });
    set_edit_icons_none();
  }

  $scope.add_workitem_state = function () {
    $http.get("/api/project/" + $routeParams.project_id + "/add_workitem_state/" + $scope.workitem_type + "/" + $scope.new_workitem_state)
      .success(function (data) {
        handle_message(data);
        var item = $scope.workitem_details.filter(function (d) {
          return d.id === $scope.workitem_type;
        })[0];
        item.states.unshift(data.data);
      });
    state_hide_all();
  };

  $scope.update_workitem_state = function () {

  };

  $scope.remove_workitem_state = function () {
    $http.get("/api/project/" + $routeParams.project_id + "/remove_workitem_state/" + $scope.workitem_type + "/" + $scope.workitem_state)
      .success(function (data) {
        handle_message(data);
        var item = $scope.workitem_details.filter(function (d) {
          return d.id === $scope.workitem_type;
        })[0];
        var index = item.states.indexOf(item.states.filter(function (d) {
          return d.id === $scope.workitem_state;
        })[0]);
        item.states.splice(index, 1);
      });
    state_hide_all();
  };

  $scope.set_final_workitem_state = function () {

  };
}