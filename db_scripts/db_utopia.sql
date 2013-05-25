-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 25, 2013 at 05:42 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_utopia`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_authenticate_user`(username varchar(200), pass varchar(200))
BEGIN
	SELECT id,display_name,email_verified FROM tbl_users WHERE user_name = username AND password = pass;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_select_projects_by_user_id`(userid BIGINT)
BEGIN
	SELECT tbl_projects.id,tbl_projects.title, tbl_projects.description
  FROM    db_utopia.tbl_project_users tbl_project_users
       INNER JOIN
          db_utopia.tbl_projects tbl_projects
       ON (tbl_project_users.project_id = tbl_projects.id)
 WHERE tbl_project_users.user_id = userid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_set_final_workitem_state`(kid BIGINT, kworkitem_type_id BIGINT)
BEGIN
	UPDATE tbl_workitem_states SET
     is_final = 0
  WHERE workitem_type_id = kworkitem_type_id;
  
  UPDATE tbl_workitem_states SET
     is_final = 1
  WHERE id = kid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediments_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_impediments
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediments_lst`()
BEGIN
	SELECT id,
	       issue_title,
	       project_id,
	       workitem_id,
	       created_by,
	       created_at,
	       is_resolved
	  FROM tbl_impediments;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediments_sel`(pkid bigint(20))
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediments_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediment_comments_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_impediment_comments
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediment_comments_lst`()
BEGIN
	SELECT id,
	       created_by,
	       created_at,
	       comment_body,
	       impediment_id
	  FROM tbl_impediment_comments;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediment_comments_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       created_by,
	       created_at,
	       comment_body,
	       impediment_id
	  FROM tbl_impediment_comments
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_impediment_comments_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_milestones_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_milestones
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_milestones_lst`()
BEGIN
	SELECT id,
	       title,
	       start_date,
	       end_date,
	       project_id,
	       created_by
	  FROM tbl_milestones;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_milestones_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       start_date,
	       end_date,
	       project_id,
	       created_by
	  FROM tbl_milestones
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_milestones_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_projects_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_projects
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_projects_insert`(
	kvtitle varchar(200),
	kvdescription text,
	kvsprint_duration int(11),
	kvneed_review bit(1),
	kvcreated_by bigint(20))
BEGIN
		INSERT INTO tbl_projects(title,description,
    sprint_duration,
    need_review,
    created_by)
    
		VALUES (
			kvtitle,
			kvdescription,
			kvsprint_duration,
			kvneed_review,
			kvcreated_by);
    SELECT LAST_INSERT_ID() as project_id;
    CALL sp_tbl_project_users_upd(0,kvcreated_by,LAST_INSERT_ID(),1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_projects_lst`()
BEGIN
	SELECT id,
	       title,
	       description,
	       sprint_duration,
	       need_review,
	       calculate_velocity_on,
	       created_by
	  FROM tbl_projects;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_projects_sel`(pkid bigint(20))
BEGIN
	SELECT tbl_projects.id,
       tbl_projects.title,
       tbl_projects.description,
       tbl_projects.sprint_duration,
       tbl_projects.need_review,
       tbl_projects.velocity_state,
       tbl_users.display_name,
       tbl_workitem_types.title AS `velocity_workitem`,
       tbl_projects.calculate_velocity_on
  FROM    (   db_utopia.tbl_workitem_types tbl_workitem_types
           INNER JOIN
              db_utopia.tbl_projects tbl_projects
           ON     (tbl_workitem_types.project_id = tbl_projects.id)
              AND (tbl_projects.calculate_velocity_on = tbl_workitem_types.id))
       INNER JOIN
          db_utopia.tbl_users tbl_users
       ON (tbl_projects.created_by = tbl_users.id)
	 WHERE db_utopia.tbl_projects.id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_projects_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_modules_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_project_modules
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_modules_lst`(kproject_id BIGINT)
BEGIN
	SELECT id,
	       project_id,
	       module_name
	  FROM tbl_project_modules
    WHERE project_id = kproject_id; 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_modules_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       project_id,
	       module_name
	  FROM tbl_project_modules
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_modules_upd`(kvid BIGINT,
	kvproject_id bigint(20),
	kvmodule_name varchar(200))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_project_modules
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_project_modules(
				project_id,
				module_name)
		VALUES (
				kvproject_id,
				kvmodule_name);
        SELECT id,module_name FROM tbl_project_modules WHERE id = LAST_INSERT_ID();
	ELSE
		UPDATE tbl_project_modules
		SET 
			project_id = kvproject_id,
			module_name = kvmodule_name
		WHERE id = kvid;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_project_users
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_delete_by_email`(kemail_id varchar(200), kproject_id BIGINT(20))
BEGIN
	DECLARE kuser_id BIGINT(20);
  SELECT id INTO kuser_id FROM tbl_users WHERE tbl_users.user_name = kemail_id;
  DELETE FROM tbl_project_users WHERE user_id = kuser_id AND project_id = kproject_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_lst`()
BEGIN
	SELECT id,
	       user_id,
	       project_id,
	       has_joined
	  FROM tbl_project_users;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       project_id,
	       has_joined
	  FROM tbl_project_users
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_select_by_project_id`(kproject_id BIGINT(20))
BEGIN
	SELECT tbl_users.user_name, tbl_users.display_name, tbl_users.id
  FROM    db_utopia.tbl_project_users tbl_project_users
       INNER JOIN
          db_utopia.tbl_users tbl_users
       ON (tbl_project_users.user_id = tbl_users.id)
       WHERE tbl_project_users.project_id = kproject_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_project_users_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_users_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_users
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_users_lst`()
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_users_sel`(pkid bigint(20))
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_users_select_by_email`(kuser_name varchar(200))
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
	 WHERE user_name = kuser_name;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_users_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_modules_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_user_modules
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_modules_lst`()
BEGIN
	SELECT id,
	       user_id,
	       module_id
	  FROM tbl_user_modules;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_modules_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       module_id
	  FROM tbl_user_modules
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_modules_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_preferences_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_user_preferences
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_preferences_lst`()
BEGIN
	SELECT id,
	       user_id,
	       workitem_type,
	       workitem_state,
	       priority
	  FROM tbl_user_preferences;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_preferences_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       user_id,
	       workitem_type,
	       workitem_state,
	       priority
	  FROM tbl_user_preferences
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_user_preferences_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitems_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitems
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitems_lst`()
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitems_sel`(pkid bigint(20))
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitems_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_comments_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_comments
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_comments_lst`()
BEGIN
	SELECT id,
	       workitem_id,
	       comment_body,
	       created_at,
	       created_by
	  FROM tbl_workitem_comments;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_comments_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_id,
	       comment_body,
	       created_at,
	       created_by
	  FROM tbl_workitem_comments
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_comments_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_log_del`(pkid bigint(20))
BEGIN
	DELETE FROM tbl_workitem_log
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_log_lst`()
BEGIN
	SELECT id,
	       workitem_id,
	       action,
	       user_id,
	       old_value,
	       new_value
	  FROM tbl_workitem_log;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_log_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_id,
	       action,
	       user_id,
	       old_value,
	       new_value
	  FROM tbl_workitem_log
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_log_upd`(kvid bigint(20),
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_states_del`(pkid bigint(20),kproject_id BIGINT)
BEGIN
  DECLARE vproject_id BIGINT;
  
  SELECT tbl_workitem_types.project_id INTO vproject_id
  FROM    db_utopia.tbl_workitem_states tbl_workitem_states
       INNER JOIN
          db_utopia.tbl_workitem_types tbl_workitem_types
       ON (tbl_workitem_states.workitem_type_id = tbl_workitem_types.id)
  WHERE tbl_workitem_states.id = pkid;
    
  IF kproject_id = vproject_id THEN  
  	DELETE FROM tbl_workitem_states
  	 WHERE id = pkid;
  END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_states_insert`(kproject_id BIGINT ,kworkitem_title varchar(40),
kworkitem_state varchar(200))
BEGIN
  DECLARE workitem_id BIGINT;
	SELECT id INTO workitem_id FROM tbl_workitem_types WHERE title = kworkitem_title AND project_id = kproject_id;
  INSERT INTO tbl_workitem_states(workitem_type_id,state_title) VALUES (workitem_id,kworkitem_state);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_states_lst`()
BEGIN
	SELECT id,
	       workitem_type_id,
	       state_title
	  FROM tbl_workitem_states;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_states_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       workitem_type_id,
	       state_title
	  FROM tbl_workitem_states
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_states_upd`(kvid bigint(20),
	kvworkitem_type_id bigint(20),
	kvstate_title varchar(200))
BEGIN
	DECLARE lcount INT;
	SELECT count(1) INTO lcount
	  FROM tbl_workitem_states
	 WHERE id = kvid;
	IF lcount = 0 THEN
		INSERT INTO tbl_workitem_states(id,
				workitem_type_id,
				state_title)
		VALUES (kvid,
				kvworkitem_type_id,
				kvstate_title);
    SELECT id,state_title as `title` FROM tbl_workitem_states WHERE id = LAST_INSERT_ID();
	ELSE
		UPDATE tbl_workitem_states
		SET id = kvid,
			workitem_type_id = kvworkitem_type_id,
			state_title = kvstate_title
		WHERE id = kvid;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_types_by_project_id`(kproject_id BIGINT(20))
BEGIN
	SELECT tbl_workitem_states.id AS `workitem_state_id`,
       tbl_workitem_states.workitem_type_id,
       tbl_workitem_states.state_title,
       tbl_workitem_types.title,
       tbl_workitem_types.project_id,
       tbl_workitem_types.id,
       tbl_workitem_states.is_final
  FROM    db_utopia.tbl_workitem_states tbl_workitem_states
       RIGHT OUTER JOIN
          db_utopia.tbl_workitem_types tbl_workitem_types
       ON (tbl_workitem_states.workitem_type_id = tbl_workitem_types.id)
  WHERE tbl_workitem_types.project_id = kproject_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_types_del`(pkid bigint(20),kvproject_id BIGINT)
BEGIN
	DELETE FROM tbl_workitem_types
	 WHERE id = pkid and project_id = kvproject_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_types_lst`()
BEGIN
	SELECT id,
	       title,
	       project_id
	  FROM tbl_workitem_types;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_types_sel`(pkid bigint(20))
BEGIN
	SELECT id,
	       title,
	       project_id
	  FROM tbl_workitem_types
	 WHERE id = pkid;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_tbl_workitem_types_upd`(kvid BIGINT,
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
		VALUES (
        kvid,
				kvtitle,
				kvproject_id);
    SELECT id,title FROM tbl_workitem_types WHERE id = LAST_INSERT_ID();
	ELSE
		UPDATE tbl_workitem_types
		SET title = kvtitle
		WHERE id = kvid AND project_id = kvproject_id;
	END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_update_velocity_feature`(kvproject_id BIGINT)
BEGIN
  DECLARE workitem_id BIGINT;
	SELECT id INTO workitem_id FROM tbl_workitem_types WHERE project_id = kvproject_id AND title = "feature";
  UPDATE tbl_projects SET calculate_velocity_on = workitem_id WHERE id = kvproject_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_workitem_by_user_id`(kuser_id BIGINT, kproject_id BIGINT)
BEGIN
	SELECT * FROM tbl_workitems WHERE assigned_to = kuser_id AND project_id = kproject_id ORDER BY importance DESC;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_impediments`
--

CREATE TABLE IF NOT EXISTS `tbl_impediments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `issue_title` varchar(80) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `workitem_id` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_resolved` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_impediments_project_id` (`project_id`),
  KEY `FK_tbl_impediments_user_id` (`created_by`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_impediment_comments`
--

CREATE TABLE IF NOT EXISTS `tbl_impediment_comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_by` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment_body` text,
  `impediment_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_impediment_comments_user_id` (`created_by`),
  KEY `FK_tbl_impediment_comments_impediment_id` (`impediment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_milestones`
--

CREATE TABLE IF NOT EXISTS `tbl_milestones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `start_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `project_id` bigint(20) NOT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_milestones_project_id` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE IF NOT EXISTS `tbl_projects` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `description` text,
  `sprint_duration` int(11) DEFAULT NULL,
  `need_review` bit(1) DEFAULT NULL,
  `calculate_velocity_on` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `velocity_state` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_projects_created_by` (`created_by`),
  KEY `FK_tbl_projects_workitem_type` (`calculate_velocity_on`),
  KEY `FK_tbl_projects_workitem_state` (`velocity_state`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `title`, `description`, `sprint_duration`, `need_review`, `calculate_velocity_on`, `created_by`, `velocity_state`) VALUES
(42, 'Utopia', 'Project management tool', 4, '1', 94, 123, 279),
(52, 'asdads', 'asdasd', 4, '1', 126, 123, 409);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_modules`
--

CREATE TABLE IF NOT EXISTS `tbl_project_modules` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `project_id` bigint(20) DEFAULT NULL,
  `module_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id` (`project_id`,`module_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=67 ;

--
-- Dumping data for table `tbl_project_modules`
--

INSERT INTO `tbl_project_modules` (`id`, `project_id`, `module_name`) VALUES
(66, 42, 'New module'),
(65, 42, 'This is another module'),
(64, 42, 'this is new'),
(60, 42, 'This is nice'),
(59, 42, 'Views');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_users`
--

CREATE TABLE IF NOT EXISTS `tbl_project_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `has_joined` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_project_users_project_id` (`project_id`),
  KEY `FK_tbl_project_users_user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

--
-- Dumping data for table `tbl_project_users`
--

INSERT INTO `tbl_project_users` (`id`, `user_id`, `project_id`, `has_joined`) VALUES
(40, 123, 42, 1),
(54, 123, 52, 1),
(55, 114, 52, 1),
(56, 111, 42, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(200) DEFAULT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `last_logged_in` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email_verified` tinyint(1) DEFAULT '0',
  `send_email_only_me` tinyint(1) DEFAULT NULL,
  `send_daily_report` tinyint(1) DEFAULT NULL,
  `whiteboard_workitems_length` int(11) DEFAULT '30',
  `intelligent_sorting` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=124 ;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `display_name`, `user_name`, `password`, `last_logged_in`, `email_verified`, `send_email_only_me`, `send_daily_report`, `whiteboard_workitems_length`, `intelligent_sorting`) VALUES
(1, 'Chinmay Kulkarni', 'mac300390@gmail.com', 'password', '2012-10-27 06:21:45', 1, NULL, NULL, 30, NULL),
(103, 'Hayden Jenkins', 'Ut.tincidunt.vehicula@tristique.org', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(104, 'Gannon Dawson', 'pellentesque@magnisdis.org', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(105, 'Lester Dejesus', 'erat@Nunclaoreetlectus.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(106, 'Maxwell Rice', 'enim.consequat@nisi.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(107, 'Nehru Whitley', 'dui.nec@semperpretium.com', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(108, 'Calvin Hickman', 'pretium.neque.Morbi@enim.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(109, 'Guy Velez', 'molestie.dapibus@enimcondimentum.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(110, 'Nehru Peck', 'nec.quam.Curabitur@Donecat.edu', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(111, 'Solomon Caldwell', 'vulputate.eu.odio@id.edu', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(112, 'Burke Acosta', 'sollicitudin.commodo@ligulaAliquam.com', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(113, 'Raymond Mckenzie', 'penatibus.et.magnis@lorem.edu', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(114, 'Reed Cannon', 'Phasellus.nulla@nec.org', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(115, 'Xanthus Daugherty', 'faucibus.Morbi.vehicula@ipsumdolor.org', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(116, 'Berk Rush', 'Nam@Quisqueimperdiet.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(117, 'Edan Atkinson', 'elit@ametdiameu.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(118, 'Hamish Hodge', 'ut.lacus@Praesenteu.com', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(119, 'Fuller Hatfield', 'placerat@Donecfringilla.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(120, 'Quinlan Hodges', 'Curabitur.consequat.lectus@Nullaeuneque.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(121, 'Cooper Patton', 'orci@pede.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(122, 'Joseph Vaughn', 'Proin.sed.turpis@non.ca', 'password', '2012-10-28 05:10:12', 1, NULL, NULL, 30, NULL),
(123, 'Chinmay K', 'c@k.com', 'password', '2012-10-28 06:02:08', 1, NULL, NULL, 30, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_modules`
--

CREATE TABLE IF NOT EXISTS `tbl_user_modules` (
  `id` bigint(20) NOT NULL DEFAULT '0',
  `user_id` bigint(20) DEFAULT NULL,
  `module_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_id` (`user_id`),
  KEY `FK_module_id` (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_preferences`
--

CREATE TABLE IF NOT EXISTS `tbl_user_preferences` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `workitem_type` bigint(20) DEFAULT NULL,
  `workitem_state` bigint(20) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_user_preferences_story_state` (`workitem_state`),
  KEY `FK_tbl_user_preferences_story_type` (`workitem_type`),
  KEY `FK_tbl_user_preferences_user_id` (`user_id`),
  KEY `FK_tbl_user_preferences_project_id` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitems`
--

CREATE TABLE IF NOT EXISTS `tbl_workitems` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` text,
  `created_by` bigint(20) NOT NULL,
  `assigned_to` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) NOT NULL,
  `importance` varchar(20) DEFAULT NULL,
  `type` bigint(20) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `planned_for` bigint(20) DEFAULT NULL,
  `story_points` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_tbl_workitems_planned_for` (`planned_for`),
  KEY `FK_tbl_workitems_project_id` (`project_id`),
  KEY `FK_tbl_workitems_user_id_assignee` (`assigned_to`),
  KEY `FK_tbl_workitems_user_id_creator` (`created_by`),
  KEY `FK_tbl_workitems_workitem_type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;

--
-- Dumping data for table `tbl_workitems`
--

INSERT INTO `tbl_workitems` (`id`, `title`, `description`, `created_by`, `assigned_to`, `project_id`, `importance`, `type`, `created_date`, `planned_for`, `story_points`) VALUES
(1, 'velit dui, semper et, lacinia', 'lobortis augue scelerisque mollis. Phasellus libero mauris,', 123, 123, 42, '0', 96, '2013-02-09 13:19:42', NULL, 0),
(2, 'eu elit. Nulla facilisi. Sed', 'ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget', 123, 123, 42, '2', 94, '2013-02-09 13:19:42', NULL, 1),
(3, 'id sapien. Cras dolor dolor,', 'urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat', 123, 123, 42, '0', 94, '2013-02-09 13:19:42', NULL, 2),
(4, 'sem egestas blandit. Nam nulla', 'cursus luctus, ipsum leo elementum sem, vitae', 123, 123, 42, '2', 94, '2013-02-09 13:19:42', NULL, 2),
(5, 'auctor. Mauris vel turpis. Aliquam', 'dictum augue malesuada malesuada. Integer id magna et ipsum cursus', 123, 123, 42, '1', 96, '2013-02-09 13:19:42', NULL, 2),
(6, 'mauris. Morbi non sapien molestie', 'lorem lorem, luctus ut,', 123, 123, 42, '0', 94, '2013-02-09 13:19:42', NULL, 3),
(7, 'neque sed sem egestas blandit.', 'gravida molestie arcu. Sed eu nibh vulputate mauris', 123, 123, 42, '0', 94, '2013-02-09 13:19:43', NULL, 1),
(8, 'sed leo. Cras vehicula aliquet', 'Vestibulum accumsan neque et', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 3),
(9, 'sem ut cursus luctus, ipsum', 'hendrerit neque.', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 3),
(10, 'turpis egestas. Fusce aliquet magna', 'aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 1),
(11, 'pretium neque. Morbi quis urna.', 'dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.', 123, 123, 42, '0', 94, '2013-02-09 13:19:43', NULL, 2),
(12, 'velit in aliquet lobortis, nisi', 'nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 0),
(13, 'elit, pharetra ut, pharetra sed,', 'ipsum. Phasellus vitae mauris sit amet lorem', 123, 123, 42, '0', 94, '2013-02-09 13:19:43', NULL, 3),
(14, 'ut, pellentesque eget, dictum placerat,', 'metus. In', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(15, 'Mauris eu turpis. Nulla aliquet.', 'felis orci, adipiscing non, luctus sit amet,', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 1),
(16, 'Integer vitae nibh. Donec est', 'Donec egestas.', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 1),
(17, 'scelerisque, lorem ipsum sodales purus,', 'adipiscing lacus. Ut nec urna et', 123, 123, 42, '0', 96, '2013-02-09 13:19:43', NULL, 3),
(18, 'Nullam velit dui, semper et,', 'mauris erat eget ipsum. Suspendisse sagittis.', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 3),
(19, 'pharetra nibh. Aliquam ornare, libero', 'ultrices, mauris ipsum porta elit, a', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 0),
(20, 'egestas hendrerit neque. In ornare', 'aliquet nec, imperdiet', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 0),
(21, 'nisl elementum purus, accumsan interdum', 'molestie arcu. Sed eu nibh', 123, 123, 42, '0', 94, '2013-02-09 13:19:43', NULL, 0),
(22, 'enim. Suspendisse aliquet, sem ut', 'nec orci. Donec', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 1),
(23, 'Nullam vitae diam. Proin dolor.', 'vel,', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 0),
(24, 'Nunc lectus pede, ultrices a,', 'ut cursus luctus,', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 1),
(25, 'eleifend nec, malesuada ut, sem.', 'posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 2),
(26, 'vitae, aliquet nec, imperdiet nec,', 'pede blandit congue. In scelerisque scelerisque dui. Suspendisse', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(27, 'convallis in, cursus et, eros.', 'et, magna.', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(28, 'cubilia Curae; Donec tincidunt. Donec', 'in, tempus', 123, 123, 42, '0', 94, '2013-02-09 13:19:43', NULL, 0),
(29, 'commodo tincidunt nibh. Phasellus nulla.', 'ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor.', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 1),
(30, 'Integer vulputate, risus a ultricies', 'amet, consectetuer adipiscing elit. Etiam laoreet, libero', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 1),
(31, 'gravida sit amet, dapibus id,', 'Nullam enim. Sed nulla ante, iaculis', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 3),
(32, 'non quam. Pellentesque habitant morbi', 'mauris blandit mattis. Cras', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 1),
(33, 'auctor vitae, aliquet nec, imperdiet', 'Quisque fringilla euismod enim. Etiam gravida molestie arcu.', 123, 123, 42, '0', 96, '2013-02-09 13:19:43', NULL, 2),
(34, 'sagittis. Duis gravida. Praesent eu', 'sem, vitae aliquam eros turpis', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(35, 'purus. Nullam scelerisque neque sed', 'cursus vestibulum. Mauris magna.', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(36, 'egestas blandit. Nam nulla magna,', 'erat volutpat. Nulla', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 1),
(37, 'in consectetuer ipsum nunc id', 'ut cursus luctus, ipsum leo elementum sem, vitae', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 2),
(38, 'nibh sit amet orci. Ut', 'risus. In mi pede, nonummy ut, molestie in,', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 2),
(39, 'tristique senectus et netus et', 'tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet', 123, 123, 42, '2', 96, '2013-02-09 13:19:43', NULL, 0),
(40, 'ac mi eleifend egestas. Sed', 'nunc nulla vulputate dui, nec tempus mauris', 123, 123, 42, '1', 96, '2013-02-09 13:19:43', NULL, 1),
(41, 'a, arcu. Sed et libero.', 'auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 1),
(42, 'natoque penatibus et magnis dis', 'aliquet', 123, 123, 42, '1', 94, '2013-02-09 13:19:43', NULL, 1),
(43, 'Donec vitae erat vel pede', 'Proin nisl sem, consequat nec, mollis', 123, 123, 42, '2', 94, '2013-02-09 13:19:43', NULL, 1),
(44, 'libero est, congue a, aliquet', 'non justo. Proin non massa non ante bibendum ullamcorper.', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 3),
(45, 'ornare, libero at auctor ullamcorper,', 'Suspendisse sagittis. Nullam', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 3),
(46, 'lacus. Ut nec urna et', 'Phasellus ornare. Fusce', 123, 123, 42, '2', 94, '2013-02-09 13:19:44', NULL, 0),
(47, 'lorem ipsum sodales purus, in', 'orci quis lectus. Nullam suscipit, est ac', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 0),
(48, 'egestas a, scelerisque sed, sapien.', 'nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis', 123, 123, 42, '2', 94, '2013-02-09 13:19:44', NULL, 1),
(49, 'quis massa. Mauris vestibulum, neque', 'et arcu imperdiet', 123, 123, 42, '0', 94, '2013-02-09 13:19:44', NULL, 1),
(50, 'Donec egestas. Duis ac arcu.', 'sapien molestie', 123, 123, 42, '2', 94, '2013-02-09 13:19:44', NULL, 2),
(51, 'est. Mauris eu turpis. Nulla', 'vehicula risus.', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 0),
(52, 'vulputate eu, odio. Phasellus at', 'convallis convallis dolor. Quisque tincidunt pede ac', 123, 123, 42, '0', 94, '2013-02-09 13:19:44', NULL, 1),
(53, 'Fusce diam nunc, ullamcorper eu,', 'tristique senectus et netus et malesuada fames ac turpis egestas.', 123, 123, 42, '0', 94, '2013-02-09 13:19:44', NULL, 3),
(54, 'magna sed dui. Fusce aliquam,', 'Maecenas ornare egestas ligula. Nullam feugiat', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 2),
(55, 'lorem vitae odio sagittis semper.', 'tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem,', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 1),
(56, 'Ut tincidunt orci quis lectus.', 'convallis in, cursus', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 0),
(57, 'ullamcorper viverra. Maecenas iaculis aliquet', 'magna. Ut', 123, 123, 42, '0', 94, '2013-02-09 13:19:44', NULL, 0),
(58, 'mauris, aliquam eu, accumsan sed,', 'at pretium aliquet, metus urna convallis erat, eget tincidunt', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 1),
(59, 'velit in aliquet lobortis, nisi', 'a, dui. Cras pellentesque. Sed dictum. Proin', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 2),
(60, 'Sed pharetra, felis eget varius', 'felis. Nulla tempor augue ac ipsum.', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 3),
(61, 'Duis dignissim tempor arcu. Vestibulum', 'non massa non ante bibendum ullamcorper. Duis', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 2),
(62, 'nisi nibh lacinia orci, consectetuer', 'elementum, lorem ut aliquam iaculis, lacus pede sagittis', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 3),
(63, 'Cum sociis natoque penatibus et', 'fringilla. Donec feugiat metus sit amet', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 1),
(64, 'Sed pharetra, felis eget varius', 'luctus. Curabitur egestas nunc sed libero. Proin', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 3),
(65, 'ipsum porta elit, a feugiat', 'turpis. Aliquam', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 1),
(66, 'a tortor. Nunc commodo auctor', 'et, euismod et,', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 3),
(67, 'ligula. Aenean euismod mauris eu', 'Maecenas libero est, congue a, aliquet vel, vulputate eu,', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 0),
(68, 'elit, pellentesque a, facilisis non,', 'erat. Etiam vestibulum massa rutrum magna. Cras', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 0),
(69, 'Integer urna. Vivamus molestie dapibus', 'sapien,', 123, 123, 42, '0', 94, '2013-02-09 13:19:44', NULL, 1),
(70, 'cursus. Integer mollis. Integer tincidunt', 'blandit mattis. Cras eget nisi dictum augue malesuada', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 3),
(71, 'id, erat. Etiam vestibulum massa', 'velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 2),
(72, 'ridiculus mus. Proin vel arcu', 'malesuada', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 0),
(73, 'venenatis lacus. Etiam bibendum fermentum', 'eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 0),
(74, 'lacus pede sagittis augue, eu', 'Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 3),
(75, 'risus. In mi pede, nonummy', 'quis lectus. Nullam', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 0),
(76, 'blandit mattis. Cras eget nisi', 'Sed id risus quis', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 3),
(77, 'orci. Donec nibh. Quisque nonummy', 'et, magna. Praesent interdum', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 2),
(78, 'ac mattis semper, dui lectus', 'metus urna convallis', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 2),
(79, 'metus vitae velit egestas lacinia.', 'Ut sagittis lobortis', 123, 123, 42, '2', 96, '2013-02-09 13:19:44', NULL, 3),
(80, 'nec enim. Nunc ut erat.', 'Praesent eu dui. Cum sociis natoque', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 0),
(81, 'sollicitudin a, malesuada id, erat.', 'quis diam luctus lobortis. Class aptent taciti', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 3),
(82, 'pulvinar arcu et pede. Nunc', 'quis diam. Pellentesque habitant morbi tristique senectus', 123, 123, 42, '1', 96, '2013-02-09 13:19:44', NULL, 0),
(83, 'Donec elementum, lorem ut aliquam', 'elit sed consequat auctor, nunc', 123, 123, 42, '0', 96, '2013-02-09 13:19:44', NULL, 3),
(84, 'mollis vitae, posuere at, velit.', 'Suspendisse ac metus vitae velit egestas lacinia. Sed congue,', 123, 123, 42, '1', 94, '2013-02-09 13:19:44', NULL, 2),
(85, 'sit amet lorem semper auctor.', 'dolor. Donec fringilla. Donec feugiat metus', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 0),
(86, 'risus. Donec nibh enim, gravida', 'gravida molestie arcu.', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 1),
(87, 'aliquet. Phasellus fermentum convallis ligula.', 'feugiat tellus lorem eu metus. In lorem. Donec elementum,', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 2),
(88, 'Nullam scelerisque neque sed sem', 'elementum at, egestas a,', 123, 123, 42, '1', 96, '2013-02-09 13:19:45', NULL, 0),
(89, 'Morbi sit amet massa. Quisque', 'Nullam feugiat placerat velit. Quisque varius. Nam porttitor', 123, 123, 42, '1', 96, '2013-02-09 13:19:45', NULL, 2),
(90, 'amet, consectetuer adipiscing elit. Curabitur', 'sollicitudin adipiscing ligula. Aenean gravida', 123, 123, 42, '0', 96, '2013-02-09 13:19:45', NULL, 1),
(91, 'ipsum dolor sit amet, consectetuer', 'justo nec ante. Maecenas mi', 123, 123, 42, '0', 94, '2013-02-09 13:19:45', NULL, 3),
(92, 'Cras lorem lorem, luctus ut,', 'urna. Nullam', 123, 123, 42, '0', 94, '2013-02-09 13:19:45', NULL, 1),
(93, 'luctus sit amet, faucibus ut,', 'a', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 0),
(94, 'eu dui. Cum sociis natoque', 'pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,', 123, 123, 42, '1', 94, '2013-02-09 13:19:45', NULL, 2),
(95, 'Duis gravida. Praesent eu nulla', 'sit', 123, 123, 42, '1', 96, '2013-02-09 13:19:45', NULL, 3),
(96, 'ligula. Nullam feugiat placerat velit.', 'fames ac turpis egestas. Aliquam fringilla', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 3),
(97, 'Nunc ac sem ut dolor', 'est tempor bibendum. Donec felis orci,', 123, 123, 42, '0', 94, '2013-02-09 13:19:45', NULL, 3),
(98, 'luctus lobortis. Class aptent taciti', 'pede,', 123, 123, 42, '0', 96, '2013-02-09 13:19:45', NULL, 2),
(99, 'tempus non, lacinia at, iaculis', 'conubia nostra, per inceptos hymenaeos.', 123, 123, 42, '2', 96, '2013-02-09 13:19:45', NULL, 3),
(100, 'hymenaeos. Mauris ut quam vel', 'massa. Vestibulum accumsan neque et nunc. Quisque', 123, 123, 42, '1', 94, '2013-02-09 13:19:45', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_comments`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workitem_id` bigint(20) NOT NULL,
  `comment_body` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_workitem_comments_workitem_id` (`workitem_id`),
  KEY `FK_workitem_comments_user_id` (`created_by`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_log`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workitem_id` bigint(20) DEFAULT NULL,
  `action` varchar(40) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `old_value` varchar(200) DEFAULT NULL,
  `new_value` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_workitem_log` (`user_id`),
  KEY `FK_workitem_log_workitem_id` (`workitem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_states`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_states` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workitem_type_id` bigint(20) NOT NULL,
  `state_title` varchar(200) DEFAULT NULL,
  `is_final` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_workitem_states_workitem_id` (`workitem_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=429 ;

--
-- Dumping data for table `tbl_workitem_states`
--

INSERT INTO `tbl_workitem_states` (`id`, `workitem_type_id`, `state_title`, `is_final`) VALUES
(276, 94, 'started', 0),
(277, 94, 'finished', 0),
(278, 94, 'verified', 1),
(279, 94, 'resolved', 0),
(286, 96, 'started', 0),
(287, 96, 'finished', 0),
(288, 96, 'resolved', 1),
(406, 126, 'started', 0),
(407, 126, 'finished', 0),
(408, 126, 'verified', 0),
(409, 126, 'resolved', 0),
(410, 126, 'reopened', 0),
(411, 127, 'started', 0),
(412, 127, 'finished', 0),
(413, 127, 'verified', 0),
(414, 127, 'resolved', 0),
(415, 127, 'reopened', 0),
(416, 128, 'started', 0),
(417, 128, 'finished', 0),
(418, 128, 'resolved', 0),
(422, 94, 'reopened', 0),
(424, 131, 'begining', 0),
(425, 131, 'middle', 0),
(426, 131, 'epilog', 1),
(428, 130, 'created', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_types`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_types` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_workitem_types_project_id` (`project_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=133 ;

--
-- Dumping data for table `tbl_workitem_types`
--

INSERT INTO `tbl_workitem_types` (`id`, `title`, `project_id`) VALUES
(94, 'feature', 42),
(96, 'essential', 42),
(126, 'feature', 52),
(127, 'bug', 52),
(128, 'essential', 52),
(130, 'logical only bugs', 42),
(131, 'human erros', 42),
(132, 'human erros', 42);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_impediments`
--
ALTER TABLE `tbl_impediments`
  ADD CONSTRAINT `FK_tbl_impediments_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tbl_impediments_user_id` FOREIGN KEY (`created_by`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_impediment_comments`
--
ALTER TABLE `tbl_impediment_comments`
  ADD CONSTRAINT `FK_tbl_impediment_comments_impediment_id` FOREIGN KEY (`impediment_id`) REFERENCES `tbl_impediments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tbl_impediment_comments_user_id` FOREIGN KEY (`created_by`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_milestones`
--
ALTER TABLE `tbl_milestones`
  ADD CONSTRAINT `FK_tbl_milestones_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD CONSTRAINT `FK_tbl_projects_workitem_state` FOREIGN KEY (`velocity_state`) REFERENCES `tbl_workitem_states` (`id`),
  ADD CONSTRAINT `FK_tbl_projects_workitem_type` FOREIGN KEY (`calculate_velocity_on`) REFERENCES `tbl_workitem_types` (`id`);

--
-- Constraints for table `tbl_project_modules`
--
ALTER TABLE `tbl_project_modules`
  ADD CONSTRAINT `FK_project_modules_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_project_users`
--
ALTER TABLE `tbl_project_users`
  ADD CONSTRAINT `FK_tbl_project_users_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tbl_project_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_user_modules`
--
ALTER TABLE `tbl_user_modules`
  ADD CONSTRAINT `FK_module_id` FOREIGN KEY (`module_id`) REFERENCES `tbl_project_modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_user_preferences`
--
ALTER TABLE `tbl_user_preferences`
  ADD CONSTRAINT `FK_tbl_user_preferences_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tbl_user_preferences_story_state` FOREIGN KEY (`workitem_state`) REFERENCES `tbl_workitem_states` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_tbl_user_preferences_story_type` FOREIGN KEY (`workitem_type`) REFERENCES `tbl_workitem_types` (`id`),
  ADD CONSTRAINT `FK_tbl_user_preferences_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_workitems`
--
ALTER TABLE `tbl_workitems`
  ADD CONSTRAINT `Fk_tbl_workitems_planned_for` FOREIGN KEY (`planned_for`) REFERENCES `tbl_milestones` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_user_id_assignee` FOREIGN KEY (`assigned_to`) REFERENCES `tbl_users` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_user_id_creator` FOREIGN KEY (`created_by`) REFERENCES `tbl_users` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_workitem_type` FOREIGN KEY (`type`) REFERENCES `tbl_workitem_types` (`id`);

--
-- Constraints for table `tbl_workitem_comments`
--
ALTER TABLE `tbl_workitem_comments`
  ADD CONSTRAINT `FK_workitem_comments_user_id` FOREIGN KEY (`created_by`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_workitem_comments_workitem_id` FOREIGN KEY (`workitem_id`) REFERENCES `tbl_workitems` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_workitem_log`
--
ALTER TABLE `tbl_workitem_log`
  ADD CONSTRAINT `FK_workitem_log` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`),
  ADD CONSTRAINT `FK_workitem_log_workitem_id` FOREIGN KEY (`workitem_id`) REFERENCES `tbl_workitems` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_workitem_states`
--
ALTER TABLE `tbl_workitem_states`
  ADD CONSTRAINT `FK_tbl_workitem_states_workitem_id` FOREIGN KEY (`workitem_type_id`) REFERENCES `tbl_workitem_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_workitem_types`
--
ALTER TABLE `tbl_workitem_types`
  ADD CONSTRAINT `FK_tbl_workitem_types_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
