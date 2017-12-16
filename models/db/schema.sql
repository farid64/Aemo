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

DROP TABLE aemo_action;

CREATE TABLE aemo_action (
  user_id INT NOT NULL,
  emotion_id INT AUTO_INCREMENT NOT NULL,
  emotions VARCHAR(45) NOT NULL,
  action_type VARCHAR(45) NOT NULL,
  action_subtype VARCHAR(45) NOT NULL,
  action_status VARCHAR(45) NOT NULL,
  primary key(emotion_id)
);

SELECT * FROM aemo_action;

DROP TABLE aemo_user_state;

CREATE TABLE aemo_user_state (
  emotion_state VARCHAR(20) NOT NULL,
  action_taken_type VARCHAR(20) NOT NULL,
  action_taken_subtype VARCHAR(45) NOT NULL
  );

SELECT * FROM aemo_user_state;

INSERT INTO aemo_user_login(user_id, userlast_name, userfirst_name, user_tmstmp, user_email) values (1111111, "Vaidyanthan", "Krishnamoorthy",'2017-01-19 03:14:07',"vaidy11@gmail.com");
INSERT INTO aemo_user_login(user_id, userlast_name, userfirst_name, user_tmstmp, user_email) values (2222222, "Farid", "Suhoni",'2017-02-19 01:12:07',"farid@gmail.com");
INSERT INTO aemo_user_login(user_id, userlast_name, userfirst_name, user_tmstmp, user_email) values (3333333, "Nicole", "Nicole",'2017-03-19 02:01:07',"nicole@gmail.com");
INSERT INTO aemo_user_login(user_id, userlast_name, userfirst_name, user_tmstmp, user_email) values (4444444, "Saba", "Zinati",'2017-04-19 03:05:07',"saba@gmail.com");
INSERT INTO aemo_user_login(user_id, userlast_name, userfirst_name, user_tmstmp, user_email) values (5555555, "Vaidy", "Krish",'2017-04-19 03:14:07',"vaidyd@gmail.com");

INSERT INTO aemo_action(user_id,emotion_id,emotions,action_type,action_subtype,action_status) values(1111111, 1, "Happy", "Coffee Shop", "Starbucks", "Chosen");
INSERT INTO aemo_action(user_id,emotion_id,emotions,action_type,action_subtype,action_status) values(2222222, 2, "Angry", "Songs", "I hate everything about you", "Chosen");
INSERT INTO aemo_action(user_id,emotion_id,emotions,action_type,action_subtype,action_status) values(3333333, 3, "Stressed", "Songs", "Shadow Days", "Not Chosen");
INSERT INTO aemo_action(user_id,emotion_id,emotions,action_type,action_subtype,action_status) values(4444444, 4, "Sad", "Park", "Griffith Park", "Chosen");

INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Happy","Coffee Shop","Starbucks");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Happy","Coffee Shop","Peets");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Happy","Coffee Shop","Coffee Bean");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Happy","Coffee Shop","Care Bar");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","I hate everything about you");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","Killing in the Name");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","One step close");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","Break Stuff");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","Kill You");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Angry","Songs ","Faint");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Bye Bye Bye");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Shadow Days");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Sunday morning");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Shake it off");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Butterfly");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Stay");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","Ooh Child");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Songs ","I can see clearly now");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Grifith Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Grand Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Will Rogers State Historic Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","The Japanese garden");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Runyon Canyon park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Stay");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","Hollywood Reservoir");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Stressed","Park ","La Brea Tar pits");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Bye Bye Bye");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Shadow Days");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Sunday morning");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Shake it off");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Butterfly");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Stay");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","Ooh Child");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Songs ","I can see clearly now");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Grifith Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Grand Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Will Rogers State Historic Park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","The Japanese garden");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Runyon Canyon park");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Stay");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","Hollywood Reservoir");
INSERT INTO aemo_user_state(emotion_state,action_taken_type,action_taken_subtype) values("Sad","Park ","La Brea Tar pits");













select * from aemo_user_login;
select * from aemo_action;
select * from aemo_user_state;