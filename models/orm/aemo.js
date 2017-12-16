var orm = require("../config/orm.js");

var aemo = {
    all: function(cb) {
        orm.all("aemo_user_state", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("aemo_user_state", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("aemo_user_state", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = aemo;
