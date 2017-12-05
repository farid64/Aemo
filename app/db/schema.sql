DROP DATABASE IF EXISTS aemo;
CREATE DATABASE aemo;

USE aemo;

CREATE TABLE aemo_user_login (
  user_id INT AUTO_INCREMENT NOT NULL,
  userlast_name VARCHAR(45) NOT NULL,
  userfirst_name VARCHAR(45) NOT NULL,
  user_tmstmp TIMESTAMP NOT NULL,
  user_email VARCHAR(45) NOT NULL,
  primary key(user_id)
);

SELECT * FROM aemo_user_login;

CREATE TABLE aemo_action (
  emotion_id INT AUTO_INCREMENT NOT NULL,
  emotions VARCHAR(45) NOT NULL,
  action_type VARCHAR(45) NOT NULL,
  action_subtype TIMESTAMP NOT NULL,
  action_status VARCHAR(45) NOT NULL
  primary key(emotion_id),
);

SELECT * FROM aemo_action;

CREATE TABLE aemo_user_state (
  emotion_state VARCHAR(20) NOT NULL,
  action_taken_type VARCHAR(20) NOT NULL,
  action_taken_subtype VARCHAR(20) NOT NULL,
  action_status BOOLEAN DEFAULT NULL,
  primary key(emotion_id),
);

SELECT * FROM aemo_user_state;

