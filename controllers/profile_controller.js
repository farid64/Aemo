var db  = require('../models');
var express = require('express');
var router  = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

// only show profile if signed in
router.get('/', isAuthenticated, function(req, res) {

	db.aemo_user_login.findAll({
    where: {
    	user_email: req.body.email
    }
  }).then(function(dbUser) {
  	console.log(dbUser);
      res.render('index', {
      layout: 'main',
    // res.render('profiles/profiles', {
  		// layout: 'main-profiles',
  		// trip: dbTrip
  	});
  });

});

router.post('/new', isAuthenticated, function(req, res) {

	// Add id from User onto req.body
	req.body.UserId = req.user.id;

  db.User.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;
