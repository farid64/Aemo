var orm = require("./config/orm.js");

// ORM to select one value
orm.selectaemoone("userlast_name", "aemo_user_login", "user_id");

orm.selectaemoone("emotions", "aemo_action", "emotion_id");

orm.selectaemoone("action_taken_type", "aemo_user_state", "emotion_state");

// ORM to select one value with multiple where clauses

orm.selectaemotwo("userlast_name", "userfirst_name" "aemo_user_login", "user_id");

orm.selectaemotwo("action_type", "action_subtype" "aemo_action", "emotions");

orm.selectaemotwo("action_taken_type", "action_taken_subtype" "aemo_user_state", "emotion_state");

// ORM to select multiple value with multiple where clauses

orm.selectaemomoreformore("userlast_name", "userfirst_name" "aemo_user_login", "user_id", "user_email");

orm.selectaemomoreformore("action_type", "action_subtype" "aemo_action", "emotions", "action_status");

orm.selectaemomoreformore("action_taken_type", "action_taken_subtype" "aemo_user_state", "emotion_state", "action_status");

