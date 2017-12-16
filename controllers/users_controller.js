var db       = require('../models');
var express  = require('express');
var router   = express.Router();
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var orm = require('../models/orm/orm.js');
const MySQL = require('mysql');


const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aemo'
});


router.get('/signup', function(req,res) {
	res.render('users/registration', {
    layout: 'main-registration'
  });
});

router.get('/sign-out', function(req,res) {
  req.logout();
  res.redirect("/");
});


// login
router.post('/login', passport.authenticate("local", { failureFlash: 'Invalid username or password.' }), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
});


// register a user
router.post('/signup', function(req,res) {
  db.aemo_user_login.findAll({
    where: {user_email: req.body.email}
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      db.aemo_user_login.create({
        userfirst_name: req.body.userfirst_name,
        userlast_name: req.body.userlast_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        res.json(err);
      });
    }
  })
});


//NEED HELP
router.post('/emotion', function(req,res) {
    var result;
        connection.query('SELECT action_taken_type, action_taken_subtype FROM aemo_user_state WHERE emotion_state = "' + req.body.emotion + '"', function (error, results, fields) {
            console.log("results inside controller " + JSON.stringify(results[0]));
            if (error) throw error;
            result = results[0];
            res.json(results[0]);
        });


});





module.exports = router;
