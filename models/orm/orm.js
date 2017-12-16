var connection = require("../db/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectaemotwo: function(tableInput1, tableInput2, colToSearch, valOfCol) {
        var queryString = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput1, tableInput2, colToSearch, valOfCol], function(err, result) {
            console.log(result);
        });
    },
    selectaemoone: function(tableInput1, colToSearch, valOfCol) {
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput1, colToSearch, valOfCol], function(err, result) {
            console.log(result);
        });
    },
    selectaemooneformore: function(tableInput, colToSearch, valOfCol1, valOfCol2, valOfCol3) {
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ? AND ?? = ? AND ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol1, valOfCol2,valOfCol3], function(err, result) {
            console.log(result);
        });
    },
    selectaemomoreformore: function(tableInput1, tableInput2, colToSearch, valOfCol1, valOfCol2) {
        var queryString = "SELECT ??, ?? FROM ?? WHERE ?? = ? AND ?? = ?";
        connection.query(queryString, [tableInput1, tableInput2, colToSearch, valOfCol1, valOfCol2], function(err, result) {
            console.log(result);
        });
    },
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


module.exports = orm;
