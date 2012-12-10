exports.sp_map = {
  authenticate_user : "sp_authenticate_user",
  list_project_by_user : "sp_select_projects_by_user_id",
  insert_express_project : "sp_tbl_projects_insert",
  insert_workitem_type : "sp_tbl_workitem_types_upd",
  insert_workitem_state : "sp_tbl_workitem_states_insert",
  update_velocity_to_feature : "sp_update_velocity_feature",
  insert_module_to_project : "sp_tbl_project_modules_upd",
  delete_module_from_project : "sp_tbl_project_modules_del",
  select_project_by_id : "sp_tbl_projects_sel",
  insert_user_to_project : "sp_tbl_project_users_upd",
  select_user_by_email : "sp_tbl_users_select_by_email",
  delete_project_user_by_email : "sp_tbl_project_users_delete_by_email",
  select_workitem_types_project : "sp_tbl_workitem_types_by_project_id",
  select_users_by_project_id : "sp_tbl_project_users_select_by_project_id",
  select_modules_by_project_id : "sp_tbl_project_modules_lst",

  get_sp : function (name, args) {
    args = args.map(function (d) {
      return "'" + d + "'";
    });
    var sp = "CALL " + name + " (" + args.join(',') + ")";
    return sp;
  }
};