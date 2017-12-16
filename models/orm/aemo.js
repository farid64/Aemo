var orm = require("../config/orm.js");

var aemo = {
    create: function(cols, vals, cb) {
        orm.create("", cols, vals, function(res) {
            cb(res);
        });
    }
};

module.exports = aemo;
