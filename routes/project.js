var project_controller = require("../controllers/project-controller"),
  helper = require('../utils/helpers');


exports.init = function (app) {
  app.get('/api/project*', helper.check_project_access);
  app.post('/api/project*', helper.check_project_access);

  app.post('/api/project/create/express', project_controller.create_express);
  app.get('/api/project/delete/:id', project_controller.delete);
  app.get('/api/project/:project_id/add_module/:module_title', project_controller.add_module);
  app.get('/api/project/:project_id/remove_module/:module_id', project_controller.remove_module);
  app.get('/api/project/:project_id/get_details', project_controller.select_by_id);
  app.get('/api/project/:project_id/add_user/:email_id', project_controller.add_user);
  app.get('/api/project/:project_id/remove_user/:email_id', project_controller.remove_user);
  app.get('/api/project/:project_id/get_workitem_details', project_controller.get_workitem_details);
  app.get('/api/project/:project_id/get_users', project_controller.get_users);
  app.get('/api/project/:project_id/get_modules', project_controller.get_modules);
  app.get('/api/project/:project_id/add_workitem_type/:workitem_type', project_controller.add_workitem_type);
  app.get('/api/project/:project_id/update_workitem_type/:workitem_id/:workitem_title', project_controller.update_workitem_type);
  app.get('/api/project/:project_id/remove_workitem_type/:workitem_id', project_controller.remove_workitem_type);

  app.get('/api/project/:project_id/add_workitem_state/:workitem_id/:workitem_state', project_controller.add_workitem_state);
  app.get('/api/project/:project_id/update_workitem_state/:workitem_id/:workitem_state_id/:workitem_state_title', project_controller.update_workitem_state);
  app.get('/api/project/:project_id/remove_workitem_state/:workitem_id/:workitem_state_id', project_controller.remove_workitem_state);
};
