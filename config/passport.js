var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.aemo_user_login.findOne({
      where: {
        user_email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given username
      console.log("dbUser is " + JSON.stringify(dbUser));

    // {"id":1,"userfirst_name":"Bobb","userlast_name":"B",
    // "user_email":"hello@yahoo.com","user_password":"Hello1234!",
    // "createdAt":"2017-12-13T07:28:26.000Z",
    // "updatedAt":"2017-12-13T07:28:26.000Z"}

      console.log("password is " + password);
      // password here is what the user just typed

      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect Email."
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      // else if (!dbUser.validPassword(password)) {
      //   return done(null, false, {
      //     message: "Incorrect password."
      //   });
      // }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;