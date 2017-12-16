var express = require("express");

var router = express.Router();

var aemo = require("../models/aemo.js");


router.post("/api/aemo", function(req, res) {
    aemo.create([
        "user_id", "emotion_id","emotions","action_type","action_subtype","action_status"
    ], [
        req.body.userid, req.body.emotionid,req.body.emotions,req.body.actiontype,
        req.body.actionsubtype,req.body.actionstatus
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/aemo/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    aemo.update({
        sleepy: req.body.sleepy
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/aemo/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    aemo.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
