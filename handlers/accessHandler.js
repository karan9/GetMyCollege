var User = require('../models/UserSchema');
var errorConfig = require('../configs/errorConfigs');

function signupHandler(req, res) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) {
      res.json({
        message: err
      });
    } else if (user) {
      res.json({
        message: 'User already registered'
      });
    } else {
      var user = new User();
      user.username = req.body.username;
      user.name = req.body.name;
      user.password = req.body.password;
      user.phone = req.body.phone;
      user.email = req.body.email;

      user.save(function (err, user) {
        if (err) {
          res.json({
            message: err
          });
        } else if (user) {
          res.json({
            message: "Sign up Sucessfull",
            user: user
          });
        } else {
          res.json({
            message: 'Unkown Server error'
          })
        }
      });
    }
  });
}


function signinHandler(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      res.json({
        message: errorConfig.responses.messages.INTERNAL_ERROR
      });
    }
    else if (user) {
      res.json({
        user: user
      })
    } else {
      res.json({message: 'User Not registered'});
    }
  });
}

module.exports = {
  signupHandler: signupHandler,
  signinHandler: signinHandler
}