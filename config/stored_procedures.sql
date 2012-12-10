DELIMITER GO
--
-- Table: tbl_impediment_comments
--


CREATE PROCEDURE sp_tbl_impediment_comments_lst()
BEGIN
	SELECT id,
	       created_by,
	       created_at,
	       comment_body,
	       impediment_id
	  FROM tbl_impediment_comments;
END;
GO


CREATE PROCEDURE sp_tbl_impediment_comments_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       created_by,
	       created_at,
	       comment_body,
	       impediment_id
	  FROM tbl_impediment_comments
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_impediment_comments_upd(kvid bigint(20),
	kvcreated_by bigint(20),
	kvcreated_at timestamp,
	kvcomment_body text,
	kvimpediment_id bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_impediment_comments
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_impediment_comments(id,
				created_by,
				created_at,
				comment_body,
				impediment_id)
		VALUES (kvid,
				kvcreated_by,
				kvcreated_at,
				kvcomment_body,
				kvimpediment_id);
	ELSE
		UPDATE tbl_impediment_comments
		SET id = kvid,
			created_by = kvcreated_by,
			created_at = kvcreated_at,
			comment_body = kvcomment_body,
			impediment_id = kvimpediment_id
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_impediment_comments_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_impediment_comments
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_impediments
--


CREATE PROCEDURE sp_tbl_impediments_lst()
BEGIN
	SELECT id,
	       issue_title,
	       project_id,
	       workitem_id,
	       created_by,
	       created_at,
	       is_resolved
	  FROM tbl_impediments;
END;
GO


CREATE PROCEDURE sp_tbl_impediments_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       issue_title,
	       project_id,
	       workitem_id,
	       created_by,
	       created_at,
	       is_resolved
	  FROM tbl_impediments
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_impediments_upd(kvid bigint(20),
	kvissue_title varchar(80),
	kvproject_id bigint(20),
	kvworkitem_id bigint(20),
	kvcreated_by bigint(20),
	kvcreated_at timestamp,
	kvis_resolved bit(1))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_impediments
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_impediments(id,
				issue_title,
				project_id,
				workitem_id,
				created_by,
				created_at,
				is_resolved)
		VALUES (kvid,
				kvissue_title,
				kvproject_id,
				kvworkitem_id,
				kvcreated_by,
				kvcreated_at,
				kvis_resolved);
	ELSE
		UPDATE tbl_impediments
		SET id = kvid,
			issue_title = kvissue_title,
			project_id = kvproject_id,
			workitem_id = kvworkitem_id,
			created_by = kvcreated_by,
			created_at = kvcreated_at,
			is_resolved = kvis_resolved
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_impediments_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_impediments
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_milestones
--


CREATE PROCEDURE sp_tbl_milestones_lst()
BEGIN
	SELECT id,
	       title,
	       start_date,
	       end_date,
	       project_id,
	       created_by
	  FROM tbl_milestones;
END;
GO


CREATE PROCEDURE sp_tbl_milestones_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       start_date,
	       end_date,
	       project_id,
	       created_by
	  FROM tbl_milestones
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_milestones_upd(kvid bigint(20),
	kvtitle varchar(200),
	kvstart_date timestamp,
	kvend_date timestamp,
	kvproject_id bigint(20),
	kvcreated_by bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_milestones
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_milestones(id,
				title,
				start_date,
				end_date,
				project_id,
				created_by)
		VALUES (kvid,
				kvtitle,
				kvstart_date,
				kvend_date,
				kvproject_id,
				kvcreated_by);
	ELSE
		UPDATE tbl_milestones
		SET id = kvid,
			title = kvtitle,
			start_date = kvstart_date,
			end_date = kvend_date,
			project_id = kvproject_id,
			created_by = kvcreated_by
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_milestones_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_milestones
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_project_modules
--


CREATE PROCEDURE sp_tbl_project_modules_lst()
BEGIN
	SELECT id,
	       project_id,
	       module_name
	  FROM tbl_project_modules;
END;
GO


CREATE PROCEDURE sp_tbl_project_modules_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       project_id,
	       module_name
	  FROM tbl_project_modules
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_project_modules_upd(kvid bigint(20),
	kvproject_id bigint(20),
	kvmodule_name varchar(200))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_project_modules
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_project_modules(id,
				project_id,
				module_name)
		VALUES (kvid,
				kvproject_id,
				kvmodule_name);
	ELSE
		UPDATE tbl_project_modules
		SET id = kvid,
			project_id = kvproject_id,
			module_name = kvmodule_name
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_project_modules_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_project_modules
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_project_users
--


CREATE PROCEDURE sp_tbl_project_users_lst()
BEGIN
	SELECT id,
	       user_id,
	       project_id,
	       has_joined
	  FROM tbl_project_users;
END;
GO


CREATE PROCEDURE sp_tbl_project_users_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       project_id,
	       has_joined
	  FROM tbl_project_users
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_project_users_upd(kvid bigint(20),
	kvuser_id bigint(20),
	kvproject_id bigint(20),
	kvhas_joined tinyint(4))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_project_users
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_project_users(id,
				user_id,
				project_id,
				has_joined)
		VALUES (kvid,
				kvuser_id,
				kvproject_id,
				kvhas_joined);
	ELSE
		UPDATE tbl_project_users
		SET id = kvid,
			user_id = kvuser_id,
			project_id = kvproject_id,
			has_joined = kvhas_joined
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_project_users_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_project_users
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_projects
--


CREATE PROCEDURE sp_tbl_projects_lst()
BEGIN
	SELECT id,
	       title,
	       description,
	       sprint_duration,
	       need_review,
	       calculate_velocity_on,
	       created_by
	  FROM tbl_projects;
END;
GO


CREATE PROCEDURE sp_tbl_projects_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       description,
	       sprint_duration,
	       need_review,
	       calculate_velocity_on,
	       created_by
	  FROM tbl_projects
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_projects_upd(kvid bigint(20),
	kvtitle varchar(200),
	kvdescription text,
	kvsprint_duration int(11),
	kvneed_review bit(1),
	kvcalculate_velocity_on bigint(20),
	kvcreated_by bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_projects
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_projects(id,
				title,
				description,
				sprint_duration,
				need_review,
				calculate_velocity_on,
				created_by)
		VALUES (kvid,
				kvtitle,
				kvdescription,
				kvsprint_duration,
				kvneed_review,
				kvcalculate_velocity_on,
				kvcreated_by);
	ELSE
		UPDATE tbl_projects
		SET id = kvid,
			title = kvtitle,
			description = kvdescription,
			sprint_duration = kvsprint_duration,
			need_review = kvneed_review,
			calculate_velocity_on = kvcalculate_velocity_on,
			created_by = kvcreated_by
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_projects_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_projects
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_user_modules
--


CREATE PROCEDURE sp_tbl_user_modules_lst()
BEGIN
	SELECT id,
	       user_id,
	       module_id
	  FROM tbl_user_modules;
END;
GO


CREATE PROCEDURE sp_tbl_user_modules_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       module_id
	  FROM tbl_user_modules
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_user_modules_upd(kvid bigint(20),
	kvuser_id bigint(20),
	kvmodule_id bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_user_modules
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_user_modules(id,
				user_id,
				module_id)
		VALUES (kvid,
				kvuser_id,
				kvmodule_id);
	ELSE
		UPDATE tbl_user_modules
		SET id = kvid,
			user_id = kvuser_id,
			module_id = kvmodule_id
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_user_modules_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_user_modules
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_user_preferences
--


CREATE PROCEDURE sp_tbl_user_preferences_lst()
BEGIN
	SELECT id,
	       user_id,
	       workitem_type,
	       workitem_state,
	       priority
	  FROM tbl_user_preferences;
END;
GO


CREATE PROCEDURE sp_tbl_user_preferences_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       workitem_type,
	       workitem_state,
	       priority
	  FROM tbl_user_preferences
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_user_preferences_upd(kvid bigint(20),
	kvuser_id bigint(20),
	kvworkitem_type bigint(20),
	kvworkitem_state bigint(20),
	kvpriority int(11))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_user_preferences
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_user_preferences(id,
				user_id,
				workitem_type,
				workitem_state,
				priority)
		VALUES (kvid,
				kvuser_id,
				kvworkitem_type,
				kvworkitem_state,
				kvpriority);
	ELSE
		UPDATE tbl_user_preferences
		SET id = kvid,
			user_id = kvuser_id,
			workitem_type = kvworkitem_type,
			workitem_state = kvworkitem_state,
			priority = kvpriority
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_user_preferences_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_user_preferences
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_users
--


CREATE PROCEDURE sp_tbl_users_lst()
BEGIN
	SELECT id,
	       display_name,
	       user_name,
	       password,
	       last_logged_in,
	       email_verified,
	       send_email_only_me,
	       send_daily_report,
	       whiteboard_workitems_length,
	       intelligent_sorting
	  FROM tbl_users;
END;
GO


CREATE PROCEDURE sp_tbl_users_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       display_name,
	       user_name,
	       password,
	       last_logged_in,
	       email_verified,
	       send_email_only_me,
	       send_daily_report,
	       whiteboard_workitems_length,
	       intelligent_sorting
	  FROM tbl_users
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_users_upd(kvid bigint(20),
	kvdisplay_name varchar(200),
	kvuser_name varchar(200),
	kvpassword varchar(200),
	kvlast_logged_in timestamp,
	kvemail_verified tinyint(1),
	kvsend_email_only_me tinyint(1),
	kvsend_daily_report tinyint(1),
	kvwhiteboard_workitems_length int(11),
	kvintelligent_sorting tinyint(1))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_users
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_users(id,
				display_name,
				user_name,
				password,
				last_logged_in,
				email_verified,
				send_email_only_me,
				send_daily_report,
				whiteboard_workitems_length,
				intelligent_sorting)
		VALUES (kvid,
				kvdisplay_name,
				kvuser_name,
				kvpassword,
				kvlast_logged_in,
				kvemail_verified,
				kvsend_email_only_me,
				kvsend_daily_report,
				kvwhiteboard_workitems_length,
				kvintelligent_sorting);
	ELSE
		UPDATE tbl_users
		SET id = kvid,
			display_name = kvdisplay_name,
			user_name = kvuser_name,
			password = kvpassword,
			last_logged_in = kvlast_logged_in,
			email_verified = kvemail_verified,
			send_email_only_me = kvsend_email_only_me,
			send_daily_report = kvsend_daily_report,
			whiteboard_workitems_length = kvwhiteboard_workitems_length,
			intelligent_sorting = kvintelligent_sorting
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_users_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_users
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_workitem_comments
--


CREATE PROCEDURE sp_tbl_workitem_comments_lst()
BEGIN
	SELECT id,
	       workitem_id,
	       comment_body,
	       created_at,
	       created_by
	  FROM tbl_workitem_comments;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_comments_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_id,
	       comment_body,
	       created_at,
	       created_by
	  FROM tbl_workitem_comments
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_comments_upd(kvid bigint(20),
	kvworkitem_id bigint(20),
	kvcomment_body text,
	kvcreated_at timestamp,
	kvcreated_by bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitem_comments
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitem_comments(id,
				workitem_id,
				comment_body,
				created_at,
				created_by)
		VALUES (kvid,
				kvworkitem_id,
				kvcomment_body,
				kvcreated_at,
				kvcreated_by);
	ELSE
		UPDATE tbl_workitem_comments
		SET id = kvid,
			workitem_id = kvworkitem_id,
			comment_body = kvcomment_body,
			created_at = kvcreated_at,
			created_by = kvcreated_by
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_comments_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_comments
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_workitem_log
--


CREATE PROCEDURE sp_tbl_workitem_log_lst()
BEGIN
	SELECT id,
	       workitem_id,
	       action,
	       user_id,
	       old_value,
	       new_value
	  FROM tbl_workitem_log;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_log_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_id,
	       action,
	       user_id,
	       old_value,
	       new_value
	  FROM tbl_workitem_log
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_log_upd(kvid bigint(20),
	kvworkitem_id bigint(20),
	kvaction varchar(40),
	kvuser_id bigint(20),
	kvold_value varchar(200),
	kvnew_value varchar(200))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitem_log
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitem_log(id,
				workitem_id,
				action,
				user_id,
				old_value,
				new_value)
		VALUES (kvid,
				kvworkitem_id,
				kvaction,
				kvuser_id,
				kvold_value,
				kvnew_value);
	ELSE
		UPDATE tbl_workitem_log
		SET id = kvid,
			workitem_id = kvworkitem_id,
			action = kvaction,
			user_id = kvuser_id,
			old_value = kvold_value,
			new_value = kvnew_value
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_log_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_log
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_workitem_states
--


CREATE PROCEDURE sp_tbl_workitem_states_lst()
BEGIN
	SELECT id,
	       workitem_type_id,
	       state_title,
	       order_number
	  FROM tbl_workitem_states;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_states_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_type_id,
	       state_title,
	       order_number
	  FROM tbl_workitem_states
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_states_upd(kvid bigint(20),
	kvworkitem_type_id bigint(20),
	kvstate_title varchar(200),
	kvorder_number int(11))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitem_states
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitem_states(id,
				workitem_type_id,
				state_title,
				order_number)
		VALUES (kvid,
				kvworkitem_type_id,
				kvstate_title,
				kvorder_number);
	ELSE
		UPDATE tbl_workitem_states
		SET id = kvid,
			workitem_type_id = kvworkitem_type_id,
			state_title = kvstate_title,
			order_number = kvorder_number
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_states_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_states
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_workitem_types
--


CREATE PROCEDURE sp_tbl_workitem_types_lst()
BEGIN
	SELECT id,
	       title,
	       project_id
	  FROM tbl_workitem_types;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_types_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       project_id
	  FROM tbl_workitem_types
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_types_upd(kvid bigint(20),
	kvtitle varchar(40),
	kvproject_id bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitem_types
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitem_types(id,
				title,
				project_id)
		VALUES (kvid,
				kvtitle,
				kvproject_id);
	ELSE
		UPDATE tbl_workitem_types
		SET id = kvid,
			title = kvtitle,
			project_id = kvproject_id
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_workitem_types_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_types
	 WHERE id = pkid;
END;
GO
--
-- Table: tbl_workitems
--


CREATE PROCEDURE sp_tbl_workitems_lst()
BEGIN
	SELECT id,
	       title,
	       description,
	       created_by,
	       assigned_to,
	       project_id,
	       importance,
	       type,
	       created_date,
	       planned_for
	  FROM tbl_workitems;
END;
GO


CREATE PROCEDURE sp_tbl_workitems_sel(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       description,
	       created_by,
	       assigned_to,
	       project_id,
	       importance,
	       type,
	       created_date,
	       planned_for
	  FROM tbl_workitems
	 WHERE id = pkid;
END;
GO


CREATE PROCEDURE sp_tbl_workitems_upd(kvid bigint(20),
	kvtitle varchar(200),
	kvdescription text,
	kvcreated_by bigint(20),
	kvassigned_to bigint(20),
	kvproject_id bigint(20),
	kvimportance varchar(20),
	kvtype bigint(20),
	kvcreated_date timestamp,
	kvplanned_for bigint(20))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitems
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitems(id,
				title,
				description,
				created_by,
				assigned_to,
				project_id,
				importance,
				type,
				created_date,
				planned_for)
		VALUES (kvid,
				kvtitle,
				kvdescription,
				kvcreated_by,
				kvassigned_to,
				kvproject_id,
				kvimportance,
				kvtype,
				kvcreated_date,
				kvplanned_for);
	ELSE
		UPDATE tbl_workitems
		SET id = kvid,
			title = kvtitle,
			description = kvdescription,
			created_by = kvcreated_by,
			assigned_to = kvassigned_to,
			project_id = kvproject_id,
			importance = kvimportance,
			type = kvtype,
			created_date = kvcreated_date,
			planned_for = kvplanned_for
		WHERE id = kvid;
	END IF;
END;
GO


CREATE PROCEDURE sp_tbl_workitems_del(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitems
	 WHERE id = pkid;
END;
GO
DELIMITER ;
