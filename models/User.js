'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('aemo_user_login', {
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     len: [6]
    //   }
    // },
    userfirst_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userlast_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // user_tmstmp: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  //}
  // , {
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //     User.hasMany(models.Trip, {
    //         onDelete: "cascade"
    //     });
    //   }
    // },
    // instanceMethods: {
    //   validPassword: function(password) {
    //     return bcrypt.compareSync(password, this.user_password);
    //   }
    // },
    // // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // // In this case, before a User is created, we will automatically hash their password
    // hooks: {
    //   beforeCreate: function(user, options, cb) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    //     console.log(" so what is the users pw? " + user.password);
    //     cb(null, options);
    //   }
    // }
  });
  return User;
};