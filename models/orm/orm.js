var connection = require("../db/connection.js");

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
    insert: function(table, cols, vals, cb) {
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
    }
};

module.exports = orm;
