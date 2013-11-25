-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 25, 2013 at 04:03 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_utopia`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_api_keys`
--

CREATE TABLE IF NOT EXISTS `tbl_api_keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(40) NOT NULL,
  `level` int(2) NOT NULL,
  `ignore_limits` tinyint(1) NOT NULL DEFAULT '0',
  `is_private_key` tinyint(1) NOT NULL DEFAULT '0',
  `ip_addresses` text,
  `date_created` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tbl_api_keys`
--

INSERT INTO `tbl_api_keys` (`id`, `key`, `level`, `ignore_limits`, `is_private_key`, `ip_addresses`, `date_created`, `user_id`) VALUES
(2, 'fbe9ded91c32a18a67e4cbb541b41d0d', 0, 0, 0, NULL, 2013, 123),
(3, '0508180c998a23ff86ab80d95aed369f', 0, 0, 0, NULL, 2013, 123),
(4, '579b73208fa0b6aa47c59251b1f4e893', 0, 0, 0, NULL, 2013, 123),
(5, '07c48b71a92b37fc7540bdab0e7810ea', 0, 0, 0, NULL, 2013, 123),
(6, 'f87cf1bdcd5c2dd7611a2e2972a7bcaa', 0, 0, 0, NULL, 2013, 123),
(7, '7af8a39d8f437ca9ccff8e60016c28a5', 0, 0, 0, NULL, 2013, 123);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_impediments`
--

CREATE TABLE IF NOT EXISTS `tbl_impediments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) DEFAULT NULL,
  `description` text NOT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_resolved` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_impediments_project_id` (`project_id`),
  KEY `FK_tbl_impediments_user_id` (`created_by`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tbl_impediments`
--

INSERT INTO `tbl_impediments` (`id`, `title`, `description`, `project_id`, `created_by`, `created_at`, `is_resolved`) VALUES
(2, 'Setting restangular resource urls', '#This is a nice tool\n\n1. Also markdown\n2. Looks nice\n3. feels nice', 42, 123, '2013-11-25 13:54:51', 1),
(3, 'Let me add a new one', '1. This is new one\n2. And this one as well\n\n```\n$scope.deleteImpediment = function() {\n	$scope.selectedImpediment.remove().then(function(e){\n		$scope.impediments = $scope.impediments.filter(function(d){\n			return d.id !== $scope.selectedImpediment.id;\n		});\n		$scope.selectedImpediment = null;\n		$location.search().id = null;\n	})\n}\n```\nThis code will create issue, need inputs', 42, 123, '2013-11-25 15:50:47', 0),
(5, 'File uploads', 'How to do file uploads ?\nNot really sure!', 42, 123, '2013-11-25 15:59:36', 0),
(6, 'Need to look at this', 'asdasasdasdasd', 42, 123, '2013-11-25 16:01:07', 0);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `tbl_impediment_comments`
--

INSERT INTO `tbl_impediment_comments` (`id`, `created_by`, `created_at`, `comment_body`, `impediment_id`) VALUES
(6, 123, '2013-11-25 14:05:31', '##This is new', 2),
(7, 123, '2013-11-25 14:15:04', '###So is this!', 2),
(8, 123, '2013-11-25 14:15:21', '```\nint i = 0;\n```', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_milestones`
--

CREATE TABLE IF NOT EXISTS `tbl_milestones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `goals` text,
  `start_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `project_id` bigint(20) NOT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_milestones_project_id` (`project_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tbl_milestones`
--

INSERT INTO `tbl_milestones` (`id`, `title`, `goals`, `start_date`, `end_date`, `project_id`, `created_by`) VALUES
(3, 'Old Nov Sprint', 'Add some more features', '2013-11-06 18:17:56', '2013-11-30 00:00:00', 42, 123),
(5, 'Dec sprint', 'Dont Create a stable build', '2013-11-06 16:21:14', '2013-11-21 15:22:45', 42, 123),
(6, 'Jan sprint', 'Create a stable build', '2013-11-06 16:22:14', '0000-00-00 00:00:00', 42, 123);

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
  `user_id` bigint(20) DEFAULT NULL,
  `velocity_state` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_projects_created_by` (`user_id`),
  KEY `FK_tbl_projects_workitem_type` (`calculate_velocity_on`),
  KEY `FK_tbl_projects_workitem_state` (`velocity_state`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `title`, `description`, `sprint_duration`, `need_review`, `calculate_velocity_on`, `user_id`, `velocity_state`) VALUES
(42, 'Utopia', 'Project management tool', 4, b'1', 94, 123, 279),
(52, 'New title', 'I have no freaking idea', 4, b'1', 126, 123, 409);

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
(1, 'Chinmay Kulkarni', 'mac300390@gmail.com', 'password', '2012-10-27 11:51:45', 1, NULL, NULL, 30, NULL),
(103, 'Hayden Jenkins', 'Ut.tincidunt.vehicula@tristique.org', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(104, 'Gannon Dawson', 'pellentesque@magnisdis.org', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(105, 'Lester Dejesus', 'erat@Nunclaoreetlectus.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(106, 'Maxwell Rice', 'enim.consequat@nisi.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(107, 'Nehru Whitley', 'dui.nec@semperpretium.com', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(108, 'Calvin Hickman', 'pretium.neque.Morbi@enim.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(109, 'Guy Velez', 'molestie.dapibus@enimcondimentum.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(110, 'Nehru Peck', 'nec.quam.Curabitur@Donecat.edu', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(111, 'Solomon Caldwell', 'vulputate.eu.odio@id.edu', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(112, 'Burke Acosta', 'sollicitudin.commodo@ligulaAliquam.com', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(113, 'Raymond Mckenzie', 'penatibus.et.magnis@lorem.edu', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(114, 'Reed Cannon', 'Phasellus.nulla@nec.org', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(115, 'Xanthus Daugherty', 'faucibus.Morbi.vehicula@ipsumdolor.org', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(116, 'Berk Rush', 'Nam@Quisqueimperdiet.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(117, 'Edan Atkinson', 'elit@ametdiameu.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(118, 'Hamish Hodge', 'ut.lacus@Praesenteu.com', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(119, 'Fuller Hatfield', 'placerat@Donecfringilla.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(120, 'Quinlan Hodges', 'Curabitur.consequat.lectus@Nullaeuneque.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(121, 'Cooper Patton', 'orci@pede.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(122, 'Joseph Vaughn', 'Proin.sed.turpis@non.ca', 'password', '2012-10-28 10:40:12', 1, NULL, NULL, 30, NULL),
(123, 'Chinmay Kulkarni', 'c@k.com', 'password', '2013-11-21 16:09:23', 1, NULL, NULL, 30, NULL);

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

--
-- Dumping data for table `tbl_user_modules`
--


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

--
-- Dumping data for table `tbl_user_preferences`
--


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
  `last_updated` datetime NOT NULL,
  `state` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_tbl_workitems_planned_for` (`planned_for`),
  KEY `FK_tbl_workitems_project_id` (`project_id`),
  KEY `FK_tbl_workitems_user_id_assignee` (`assigned_to`),
  KEY `FK_tbl_workitems_user_id_creator` (`created_by`),
  KEY `FK_tbl_workitems_workitem_type` (`type`),
  KEY `state` (`state`),
  KEY `title` (`title`),
  KEY `title_2` (`title`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;

--
-- Dumping data for table `tbl_workitems`
--

INSERT INTO `tbl_workitems` (`id`, `title`, `description`, `created_by`, `assigned_to`, `project_id`, `importance`, `type`, `created_date`, `planned_for`, `story_points`, `last_updated`, `state`) VALUES
(2, 'Don''t Allow grouping in timeline', 'User should be able to group items by user or by workitem', 123, 123, 42, '2', 94, '2013-02-09 18:49:42', 3, 1, '2013-11-03 20:57:57', 278),
(3, 'This should not appear now', 'Lets change the description', 123, 111, 42, '1', 94, '2013-02-09 18:49:42', 3, 1, '2013-07-12 15:47:58', 277),
(4, 'Add impediments view', 'This should be new.w', 123, 123, 42, '1', 94, '2013-02-09 18:49:42', 5, 0, '2013-11-25 06:12:10', 278),
(14, 'lets change its title', 'metus. Ina', 123, 111, 42, '2', 96, '2013-02-09 18:49:43', 3, 0, '2013-07-11 22:39:33', 286),
(18, 'Implement planning view', 'mauris erat eget ipsum. Suspendisse sagittis.', 123, 123, 42, '1', 94, '2013-02-09 18:49:43', 5, 3, '2013-08-25 11:25:57', 278),
(20, 'Allow users to add impediments', 'Tasks\n\nAdd a button which can allow users to add the impediment', 123, 123, 42, '1', 94, '2013-02-09 18:49:43', 5, 0, '2013-11-25 15:33:03', 277),
(21, 'Lets give it a nice title', 'And a description !', 123, 123, 42, '0', 94, '2013-02-09 18:49:43', 5, 0, '2013-11-21 10:31:37', 277),
(22, 'Let me change the title', 'Cleaning up the description', 123, 123, 42, '1', 94, '2013-02-09 18:49:43', 6, 1, '2013-11-21 10:32:47', 277),
(24, 'Implement planning view', 'ut cursus luctus,', 123, 123, 42, '1', 96, '2013-02-09 18:49:43', 6, 1, '2013-11-21 10:56:23', 286),
(25, 'eleifend nec, malesuada ut, sem.', 'posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 2, '2013-07-06 11:18:49', 286),
(26, 'vitae, aliquet nec, imperdiet nec,', 'pede blandit congue. In scelerisque scelerisque dui. Suspendisse', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 0, '2013-07-06 11:18:49', 286),
(27, 'convallis in, cursus et, eros.', 'et, magna.', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 0, '2013-07-06 11:18:49', 286),
(28, 'cubilia Curae; Donec tincidunt. Donec', 'in, tempus', 123, 123, 42, '0', 94, '2013-02-09 18:49:43', 6, 0, '2013-07-06 11:18:49', 286),
(29, 'commodo tincidunt nibh. Phasellus nulla.', 'ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor.', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 1, '2013-07-06 11:18:49', 286),
(30, 'Integer vulputate, risus a ultricies', 'amet, consectetuer adipiscing elit. Etiam laoreet, libero', 123, 123, 42, '2', 94, '2013-02-09 18:49:43', 5, 1, '2013-07-06 11:18:49', 286),
(31, 'gravida sit amet, dapibus id,', 'Nullam enim. Sed nulla ante, iaculis', 123, 123, 42, '2', 94, '2013-02-09 18:49:43', 5, 3, '2013-07-06 11:18:49', 286),
(32, 'non quam. Pellentesque habitant morbi', 'mauris blandit mattis. Cras', 123, 123, 42, '1', 96, '2013-02-09 18:49:43', 5, 1, '2013-11-22 13:20:27', 286),
(33, 'auctor vitae, aliquet nec, imperdiet', 'Quisque fringilla euismod enim. Etiam gravida molestie arcu.', 123, 123, 42, '0', 96, '2013-02-09 18:49:43', 5, 2, '2013-07-06 11:18:49', 286),
(34, 'sagittis. Duis gravida. Praesent eu', 'sem, vitae aliquam eros turpis', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 5, 0, '2013-07-06 11:18:49', 286),
(35, 'purus. Nullam scelerisque neque sed', 'cursus vestibulum. Mauris magna.', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 0, '2013-11-22 09:41:47', 286),
(36, 'egestas blandit. Nam nulla magna,', 'erat volutpat. Nulla', 123, 123, 42, '2', 94, '2013-02-09 18:49:43', 3, 1, '2013-07-06 11:18:49', 286),
(37, 'in consectetuer ipsum nunc id', 'ut cursus luctus, ipsum leo elementum sem, vitae', 123, 123, 42, '1', 94, '2013-02-09 18:49:43', 6, 2, '2013-07-06 11:18:49', 286),
(38, 'nibh sit amet orci. Ut', 'risus. In mi pede, nonummy ut, molestie in,', 123, 123, 42, '1', 96, '2013-02-09 18:49:43', 5, 2, '2013-11-21 10:54:35', 286),
(39, 'tristique senectus et netus et', 'tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet', 123, 123, 42, '2', 96, '2013-02-09 18:49:43', 6, 0, '2013-07-06 11:18:49', 286),
(40, 'ac mi eleifend egestas. Sed', 'nunc nulla vulputate dui, nec tempus mauris', 123, 123, 42, '1', 96, '2013-02-09 18:49:43', 3, 1, '2013-07-06 11:18:49', 286),
(41, 'a, arcu. Sed et libero.', 'auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque', 123, 123, 42, '2', 94, '2013-02-09 18:49:43', 3, 1, '2013-07-06 11:18:49', 286),
(42, 'natoque penatibus et magnis dis', 'aliquet', 123, 123, 42, '1', 94, '2013-02-09 18:49:43', 3, 1, '2013-07-06 11:18:49', 286),
(43, 'Donec vitae erat vel pede', 'Proin nisl sem, consequat nec, mollis', 123, 123, 42, '2', 94, '2013-02-09 18:49:43', 3, 1, '2013-07-06 11:18:49', 286),
(44, 'libero est, congue a, aliquet', 'non justo. Proin non massa non ante bibendum ullamcorper.', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(45, 'ornare, libero at auctor ullamcorper,', 'Suspendisse sagittis. Nullam', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(46, 'lacus. Ut nec urna et', 'Phasellus ornare. Fusce', 123, 123, 42, '2', 94, '2013-02-09 18:49:44', 3, 2, '2013-11-22 09:16:16', 276),
(47, 'lorem ipsum sodales purus, in', 'orci quis lectus. Nullam suscipit, est ac', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(48, 'egestas a, scelerisque sed, sapien.', 'nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis', 123, 123, 42, '2', 94, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(49, 'quis massa. Mauris vestibulum, neque', 'et arcu imperdiet', 123, 123, 42, '0', 94, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(50, 'Donec egestas. Duis ac arcu.', 'sapien molestie', 123, 123, 42, '2', 94, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(51, 'est. Mauris eu turpis. Nulla', 'vehicula risus.', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(52, 'vulputate eu, odio. Phasellus at', 'convallis convallis dolor. Quisque tincidunt pede ac', 123, 123, 42, '0', 94, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(53, 'Fusce diam nunc, ullamcorper eu,', 'tristique senectus et netus et malesuada fames ac turpis egestas.', 123, 123, 42, '0', 94, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(54, 'magna sed dui. Fusce aliquam,', 'Maecenas ornare egestas ligula. Nullam feugiat', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(55, 'lorem vitae odio sagittis semper.', 'tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem,', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(56, 'Ut tincidunt orci quis lectus.', 'convallis in, cursus', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(57, 'ullamcorper viverra. Maecenas iaculis aliquet', 'magna. Ut', 123, 123, 42, '0', 94, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(58, 'mauris, aliquam eu, accumsan sed,', 'at pretium aliquet, metus urna convallis erat, eget tincidunt', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(59, 'velit in aliquet lobortis, nisi', 'a, dui. Cras pellentesque. Sed dictum. Proin', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(60, 'Sed pharetra, felis eget varius', 'felis. Nulla tempor augue ac ipsum.', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(61, 'Duis dignissim tempor arcu. Vestibulum', 'non massa non ante bibendum ullamcorper. Duis', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(62, 'nisi nibh lacinia orci, consectetuer', 'elementum, lorem ut aliquam iaculis, lacus pede sagittis', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(63, 'Cum sociis natoque penatibus et', 'fringilla. Donec feugiat metus sit amet', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(64, 'Sed pharetra, felis eget varius', 'luctus. Curabitur egestas nunc sed libero. Proin', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(65, 'ipsum porta elit, a feugiat', 'turpis. Aliquam', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(66, 'a tortor. Nunc commodo auctor', 'et, euismod et,', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(67, 'ligula. Aenean euismod mauris eu', 'Maecenas libero est, congue a, aliquet vel, vulputate eu,', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(68, 'elit, pellentesque a, facilisis non,', 'erat. Etiam vestibulum massa rutrum magna. Cras', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(69, 'Integer urna. Vivamus molestie dapibus', 'sapien,', 123, 123, 42, '0', 94, '2013-02-09 18:49:44', 3, 1, '2013-07-06 11:18:49', 286),
(70, 'cursus. Integer mollis. Integer tincidunt', 'blandit mattis. Cras eget nisi dictum augue malesuada', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(71, 'id, erat. Etiam vestibulum massa', 'velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(72, 'ridiculus mus. Proin vel arcu', 'malesuada', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(73, 'venenatis lacus. Etiam bibendum fermentum', 'eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(74, 'lacus pede sagittis augue, eu', 'Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(75, 'risus. In mi pede, nonummy', 'quis lectus. Nullam', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(76, 'blandit mattis. Cras eget nisi', 'Sed id risus quis', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(77, 'orci. Donec nibh. Quisque nonummy', 'et, magna. Praesent interdum', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(78, 'ac mattis semper, dui lectus', 'metus urna convallis', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(79, 'metus vitae velit egestas lacinia.', 'Ut sagittis lobortis', 123, 123, 42, '2', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(80, 'nec enim. Nunc ut erat.', 'Praesent eu dui. Cum sociis natoque', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(81, 'sollicitudin a, malesuada id, erat.', 'quis diam luctus lobortis. Class aptent taciti', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(82, 'pulvinar arcu et pede. Nunc', 'quis diam. Pellentesque habitant morbi tristique senectus', 123, 123, 42, '1', 96, '2013-02-09 18:49:44', 3, 0, '2013-07-06 11:18:49', 286),
(83, 'Donec elementum, lorem ut aliquam', 'elit sed consequat auctor, nunc', 123, 123, 42, '0', 96, '2013-02-09 18:49:44', 3, 3, '2013-07-06 11:18:49', 286),
(84, 'mollis vitae, posuere at, velit.', 'Suspendisse ac metus vitae velit egestas lacinia. Sed congue,', 123, 123, 42, '1', 94, '2013-02-09 18:49:44', 3, 2, '2013-07-06 11:18:49', 286),
(85, 'sit amet lorem semper auctor.', 'dolor. Donec fringilla. Donec feugiat metus', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 0, '2013-07-06 11:18:49', 286),
(86, 'risus. Donec nibh enim, gravida', 'gravida molestie arcu.', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 1, '2013-07-06 11:18:49', 286),
(87, 'aliquet. Phasellus fermentum convallis ligula.', 'feugiat tellus lorem eu metus. In lorem. Donec elementum,', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 2, '2013-07-06 11:18:49', 286),
(88, 'Nullam scelerisque neque sed sem', 'elementum at, egestas a,', 123, 123, 42, '1', 96, '2013-02-09 18:49:45', 3, 0, '2013-07-06 11:18:49', 286),
(89, 'Morbi sit amet massa. Quisque', 'Nullam feugiat placerat velit. Quisque varius. Nam porttitor', 123, 123, 42, '1', 96, '2013-02-09 18:49:45', 3, 2, '2013-07-06 11:18:49', 286),
(90, 'amet, consectetuer adipiscing elit. Curabitur', 'sollicitudin adipiscing ligula. Aenean gravida', 123, 123, 42, '0', 96, '2013-02-09 18:49:45', 3, 1, '2013-07-06 11:18:49', 286),
(91, 'ipsum dolor sit amet, consectetuer', 'justo nec ante. Maecenas mi', 123, 123, 42, '0', 94, '2013-02-09 18:49:45', 3, 3, '2013-07-06 11:18:49', 286),
(92, 'Cras lorem lorem, luctus ut,', 'urna. Nullam', 123, 123, 42, '0', 94, '2013-02-09 18:49:45', 3, 1, '2013-07-06 11:18:49', 286),
(93, 'luctus sit amet, faucibus ut,', 'a', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 0, '2013-07-06 11:18:49', 286),
(94, 'eu dui. Cum sociis natoque', 'pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,', 123, 123, 42, '1', 94, '2013-02-09 18:49:45', 3, 2, '2013-07-06 11:18:49', 286),
(95, 'Duis gravida. Praesent eu nulla', 'sit', 123, 123, 42, '1', 96, '2013-02-09 18:49:45', 3, 3, '2013-07-06 11:18:49', 286),
(96, 'ligula. Nullam feugiat placerat velit.', 'fames ac turpis egestas. Aliquam fringilla', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 3, '2013-07-06 11:18:49', 286),
(97, 'Nunc ac sem ut dolor', 'est tempor bibendum. Donec felis orci,', 123, 123, 42, '0', 94, '2013-02-09 18:49:45', 3, 3, '2013-07-06 11:18:49', 286),
(98, 'luctus lobortis. Class aptent taciti', 'pede,', 123, 123, 42, '0', 96, '2013-02-09 18:49:45', 3, 2, '2013-07-06 11:18:49', 286),
(99, 'tempus non, lacinia at, iaculis', 'conubia nostra, per inceptos hymenaeos.', 123, 123, 42, '2', 96, '2013-02-09 18:49:45', 3, 3, '2013-07-06 11:18:49', 286),
(100, 'hymenaeos. Mauris ut quam vel', 'massa. Vestibulum accumsan neque et nunc. Quisque', 123, 123, 42, '1', 94, '2013-02-09 18:49:45', 3, 2, '2013-07-06 11:18:49', 286);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_comments`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workitem_id` bigint(20) NOT NULL,
  `comment_body` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_workitem_comments_workitem_id` (`workitem_id`),
  KEY `FK_workitem_comments_user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tbl_workitem_comments`
--

INSERT INTO `tbl_workitem_comments` (`id`, `workitem_id`, `comment_body`, `created_at`, `user_id`) VALUES
(2, 46, ':p : p :p', '2013-11-22 09:16:10', 123),
(3, 46, 'How come this is an hour ago', '2013-11-22 10:14:37', 123),
(4, 20, 'Where should we add the button ?', '2013-11-25 15:33:04', 123);

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
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_workitem_log` (`user_id`),
  KEY `FK_workitem_log_workitem_id` (`workitem_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=112 ;

--
-- Dumping data for table `tbl_workitem_log`
--

INSERT INTO `tbl_workitem_log` (`id`, `workitem_id`, `action`, `user_id`, `old_value`, `new_value`, `timestamp`) VALUES
(1, 4, 'description', 123, 'cursus luctus, ipsum leo elementum sem, vitae', 'Some thing new now !', '2013-07-11 06:01:58'),
(2, 4, 'description', 123, 'Some thing new now !', 'And new description', '2013-07-11 06:01:58'),
(3, 4, 'title', 123, 'New name', 'New name !', '2013-07-11 06:01:58'),
(4, 4, 'description', 123, 'And new description', 'Ok ok ok !', '2013-07-11 06:01:58'),
(5, 4, 'description', 123, 'Ok ok ok !', 'This should be new', '2013-07-11 06:01:58'),
(6, 4, 'importance', 123, '2', '1', '2013-07-11 06:01:58'),
(7, 4, 'story_points', 123, '2', '0', '2013-07-11 06:01:58'),
(8, 4, 'state', 123, '286', '276', '2013-07-11 06:01:58'),
(16, 2, 'description', 123, 'Is this new ?', 'Is this new ?g', '2013-07-11 06:01:58'),
(19, 2, 'description', 123, 'Is this new ?g', 'No this one is old', '2013-07-11 06:01:58'),
(23, 2, 'description', 123, 'No this one is old', 'This should be UTC', '2013-07-11 06:01:58'),
(24, 2, 'description', 123, 'This should be UTC', 'This should be UTCf', '2013-07-11 06:01:58'),
(25, 2, 'description', 123, 'This should be UTCf', 'This should be UTC', '2013-07-11 06:01:58'),
(26, 2, 'title', 123, 'Change the title!', 'Change the title', '2013-07-11 06:01:58'),
(27, 2, 'description', 123, 'This should be UTC', 'This should be UTCg', '2013-07-11 06:01:58'),
(28, 2, 'description', 123, 'This should be UTCg', 'This should be UTC', '2013-07-11 06:01:58'),
(29, 2, 'description', 123, 'This should be UTC', 'This should be UTCa', '2013-07-11 06:01:58'),
(30, 4, 'description', 123, 'This should be new', 'This should be newas', '2013-07-11 06:01:58'),
(31, 2, 'description', 123, 'This should be UTCa', 'This should be UTCab', '2013-07-11 06:01:58'),
(33, 2, 'description', 123, 'This should be UTCa', 'This should be UTC', '2013-07-11 06:01:58'),
(34, 4, 'description', 123, 'This should be newas', 'This should be new.', '2013-07-11 06:01:58'),
(36, 14, 'description', 123, 'metus. In', 'metus. Ina', '2013-07-11 06:01:58'),
(37, 4, 'description', 123, 'This should be new.', 'This should be new.w', '2013-07-11 11:49:31'),
(38, 2, 'description', 123, 'This should be UTC', 'This should be UTC1', '2013-07-11 11:53:15'),
(40, 14, 'assigned_to', 123, '123', '111', '2013-07-11 14:03:57'),
(41, 18, 'state', 123, '286', '276', '2013-07-11 14:29:14'),
(42, 4, 'state', 123, '276', '277', '2013-07-11 14:36:00'),
(43, 4, 'state', 123, '277', '278', '2013-07-11 14:36:51'),
(44, 4, 'state', 123, '278', '279', '2013-07-11 14:37:35'),
(45, 2, 'state', 123, '276', '277', '2013-07-11 14:38:38'),
(46, 2, 'state', 123, '277', '279', '2013-07-11 14:39:05'),
(47, 18, 'state', 123, '276', '279', '2013-07-11 14:39:26'),
(49, 20, 'state', 123, '286', '277', '2013-07-11 14:41:56'),
(50, 22, 'state', 123, '286', '277', '2013-07-11 14:42:29'),
(51, 21, 'state', 123, '286', '277', '2013-07-11 14:44:30'),
(53, 18, 'state', 123, '279', '278', '2013-07-11 14:45:25'),
(54, 4, 'state', 123, '279', '278', '2013-07-11 14:45:51'),
(55, 2, 'description', 123, 'This should be UTC1', 'This should appear in timeline', '2013-07-11 20:31:51'),
(56, 3, 'state', 111, '286', '277', '2013-07-11 22:33:54'),
(57, 14, 'title', 111, 'ut, pellentesque eget, dictum placerat,', 'lets change its title', '2013-07-11 22:34:42'),
(58, 3, 'description', 111, 'urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat', 'Lets change the description', '2013-07-12 15:42:19'),
(59, 3, 'importance', 111, '0', '1', '2013-07-12 15:47:58'),
(60, 18, 'title', 123, 'Nullam velit dui, semper et,', 'Implement planning view', '2013-07-12 17:16:33'),
(64, 4, 'title', 123, 'New name !', 'Add impediments view', '2013-07-15 23:16:13'),
(66, 20, 'description', 123, 'aliquet nec, imperdiet', 'This has a new description', '2013-07-19 18:27:06'),
(67, 2, 'title', 123, 'Change the title', 'Allow grouping in timeline', '2013-07-28 12:01:42'),
(68, 2, 'description', 123, 'This should appear in timeline', 'User should be able to group items by user or by workitem', '2013-07-28 12:01:42'),
(69, 21, 'title', 123, 'nisl elementum purus, accumsan interdum', 'Lets give it a nice title', '2013-11-04 19:38:22'),
(74, 21, 'description', 123, 'molestie arcu. Sed eu nibh', 'Change the description', '2013-11-04 19:41:39'),
(76, 21, 'description', 123, 'Change the description', 'New description!', '2013-11-04 19:43:35'),
(78, 21, 'description', 123, 'New description!', 'Not a description', '2013-11-04 19:45:04'),
(80, 20, 'title', 123, 'egestas hendrerit neque. In ornare', 'Need a better title', '2013-11-04 20:08:10'),
(81, 22, 'title', 123, 'enim. Suspendisse aliquet, sem ut', 'Let me change the title', '2013-11-05 21:07:00'),
(82, 21, 'description', 123, 'Not a description', 'A description !', '2013-11-05 21:45:21'),
(83, 24, 'title', 123, 'Nunc lectus pede, ultrices a,', 'Implement planning view', '2013-11-05 21:46:31'),
(84, 18, 'planned_for', 123, '3', '5', '2013-11-21 10:36:13'),
(85, 20, 'planned_for', 123, '3', '5', '2013-11-21 10:36:14'),
(86, 21, 'planned_for', 123, '3', '5', '2013-11-21 10:36:15'),
(87, 22, 'planned_for', 123, '3', '6', '2013-11-21 10:36:16'),
(88, 25, 'planned_for', 123, '3', '6', '2013-11-21 10:36:17'),
(89, 26, 'planned_for', 123, '3', '6', '2013-11-21 10:36:18'),
(90, 27, 'planned_for', 123, '3', '6', '2013-11-21 10:36:20'),
(91, 29, 'planned_for', 123, '3', '6', '2013-11-21 10:36:21'),
(92, 30, 'planned_for', 123, '3', '5', '2013-11-21 10:36:22'),
(93, 31, 'planned_for', 123, '3', '5', '2013-11-21 10:36:23'),
(94, 33, 'planned_for', 123, '3', '5', '2013-11-21 10:36:24'),
(95, 34, 'planned_for', 123, '3', '5', '2013-11-21 10:36:25'),
(96, 35, 'planned_for', 123, '3', '5', '2013-11-21 10:36:26'),
(97, 28, 'planned_for', 123, '3', '6', '2013-11-21 10:36:27'),
(98, 37, 'planned_for', 123, '3', '6', '2013-11-21 10:36:28'),
(99, 39, 'planned_for', 123, '3', '6', '2013-11-21 10:36:28'),
(100, 20, 'description', 123, 'This has a new description', 'This has a new description An another sentence!', '2013-11-21 15:38:49'),
(101, 21, 'description', 123, 'A description !', 'And a description !', '2013-11-21 16:01:37'),
(102, 22, 'description', 123, 'nec orci. Donec', 'Cleaning up the description', '2013-11-21 10:32:47'),
(103, 38, 'planned_for', 123, '3', '5', '2013-11-21 10:54:35'),
(104, 24, 'planned_for', 123, '3', '6', '2013-11-21 10:56:23'),
(105, 46, 'story_points', 123, '0', '2', '2013-11-22 09:16:16'),
(106, 46, 'state', 123, '286', '276', '2013-11-22 09:16:16'),
(107, 35, 'planned_for', 123, '5', '6', '2013-11-22 09:41:46'),
(108, 32, 'planned_for', 123, '3', '5', '2013-11-22 13:20:27'),
(109, 4, 'planned_for', 123, '3', '5', '2013-11-25 06:12:10'),
(110, 20, 'title', 123, 'Need a better title', 'Allow users to add impediments', '2013-11-25 15:31:17'),
(111, 20, 'description', 123, 'This has a new description An another sentence!', 'Tasks\n\nAdd a button which can allow users to add the impediment', '2013-11-25 15:33:03');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workitem_states`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_states` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `workitem_type_id` bigint(20) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `is_final` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_workitem_states_workitem_id` (`workitem_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=429 ;

--
-- Dumping data for table `tbl_workitem_states`
--

INSERT INTO `tbl_workitem_states` (`id`, `workitem_type_id`, `title`, `is_final`) VALUES
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
-- Table structure for table `tbl_workitem_tasks`
--

CREATE TABLE IF NOT EXISTS `tbl_workitem_tasks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `task` varchar(200) NOT NULL,
  `done` tinyint(1) NOT NULL,
  `done_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `workitem_id` bigint(20) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tbl_workitem_tasks_workitem_id` (`workitem_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `tbl_workitem_tasks`
--

INSERT INTO `tbl_workitem_tasks` (`id`, `task`, `done`, `done_date`, `workitem_id`, `user_id`) VALUES
(9, 'one more task', 1, '2013-07-11 20:16:15', 2, 123),
(10, 'Whats up with this ?', 1, '2013-07-11 20:20:25', 2, 123),
(13, 'Why not!', 0, '2013-07-11 22:34:17', 3, 111),
(14, 'Let me finish this task', 1, '2013-07-11 22:34:28', 3, 111),
(15, 'Ok this seems nice', 1, '2013-07-11 22:39:32', 14, 111),
(16, 'Add another task', 0, '2013-07-12 23:09:31', 4, 123),
(17, 'And complete me', 1, '2013-07-12 23:09:37', 4, 123),
(20, ':):):)', 0, '2013-11-22 10:17:12', 46, 0),
(21, 'Is this a task ?', 1, '2013-11-22 13:08:13', 20, 0);

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
  ADD CONSTRAINT `FK_tbl_workitems_state` FOREIGN KEY (`state`) REFERENCES `tbl_workitem_states` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_user_id_assignee` FOREIGN KEY (`assigned_to`) REFERENCES `tbl_users` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_user_id_creator` FOREIGN KEY (`created_by`) REFERENCES `tbl_users` (`id`),
  ADD CONSTRAINT `FK_tbl_workitems_workitem_type` FOREIGN KEY (`type`) REFERENCES `tbl_workitem_types` (`id`);

--
-- Constraints for table `tbl_workitem_comments`
--
ALTER TABLE `tbl_workitem_comments`
  ADD CONSTRAINT `FK_workitem_comments_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
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
-- Constraints for table `tbl_workitem_tasks`
--
ALTER TABLE `tbl_workitem_tasks`
  ADD CONSTRAINT `FK_tbl_workitem_tasks_workitem_id` FOREIGN KEY (`workitem_id`) REFERENCES `tbl_workitems` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_workitem_types`
--
ALTER TABLE `tbl_workitem_types`
  ADD CONSTRAINT `FK_tbl_workitem_types_project_id` FOREIGN KEY (`project_id`) REFERENCES `tbl_projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
