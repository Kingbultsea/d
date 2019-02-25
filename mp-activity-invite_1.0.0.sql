/*
 Navicat Premium Data Transfer

 Source Server         : 阿斯达
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost
 Source Database       : vx

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : utf-8

 Date: 01/21/2019 15:34:21 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `appid_platform`
-- ----------------------------
DROP TABLE IF EXISTS `appid_platform`;
CREATE TABLE `appid_platform` (
  `appid` varchar(40) CHARACTER SET latin1 NOT NULL,
  `authorization_code` varchar(300) CHARACTER SET latin1 NOT NULL,
  `authorization_access_token` varchar(300) CHARACTER SET latin1 NOT NULL,
  `update` varchar(300) CHARACTER SET latin1 NOT NULL,
  `qrcode_url` varchar(300) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`appid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `data_message`
-- ----------------------------
DROP TABLE IF EXISTS `data_message`;
CREATE TABLE `data_message` (
  `key` varchar(30) NOT NULL,
  `res_list` varchar(5000) NOT NULL,
  `max_people_count` varchar(10) NOT NULL,
  `end_time` varchar(20) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `owner`
-- ----------------------------
DROP TABLE IF EXISTS `owner`;
CREATE TABLE `owner` (
  `unionid` varchar(30) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `hash` varchar(30) NOT NULL,
  `accept_hash` varchar(30) NOT NULL,
  `invitation_count` varchar(30) NOT NULL,
  `count_update` varchar(30) NOT NULL,
  `update` varchar(30) NOT NULL,
  `openid` varchar(30) NOT NULL,
  `conversion_code` varchar(30) DEFAULT NULL,
  `code_id` int(6) DEFAULT NULL,
  `id` int(6) DEFAULT NULL,
  PRIMARY KEY (`unionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `sleep_station`
-- ----------------------------
DROP TABLE IF EXISTS `sleep_station`;
CREATE TABLE `sleep_station` (
  `unionid` varchar(30) DEFAULT NULL,
  `nick_name` varchar(30) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `exchange_unionid` varchar(30) DEFAULT NULL,
  `update` varchar(30) DEFAULT NULL,
  `platform_id` varchar(30) DEFAULT NULL,
  `step` int(2) DEFAULT NULL,
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `exchange_message_one` varchar(1000) DEFAULT NULL,
  `exchange_message_two` varchar(1000) DEFAULT NULL,
  `pic_url` varchar(240) DEFAULT NULL,
  `voice_mediaid` varchar(300) DEFAULT NULL,
  `pic_mediaid` varchar(300) DEFAULT NULL,
  `busy` varchar(10) DEFAULT NULL,
  `no_voice` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `subject_list`
-- ----------------------------
DROP TABLE IF EXISTS `subject_list`;
CREATE TABLE `subject_list` (
  `tid` varchar(30) NOT NULL,
  `title` varchar(300) NOT NULL,
  `correspondence` varchar(1000) NOT NULL,
  `subject` text NOT NULL,
  `tags` varchar(2000) NOT NULL,
  `count` varchar(5000) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `user_session`
-- ----------------------------
DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session` (
  `unionid` varchar(400) NOT NULL,
  `session` varchar(1000) NOT NULL,
  `message_leave` varchar(10000) NOT NULL,
  `update` varchar(300) NOT NULL,
  `save_session` varchar(1000) DEFAULT NULL,
  `user_name` varchar(30) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
