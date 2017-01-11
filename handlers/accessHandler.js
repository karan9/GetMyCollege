var User = require('../models/UserSchema');


function signupHandler(req, res) {
    User.findOne({ username: req.body.username }, function(err, user) {
        if (err) {
            res.json({message: err});
        }
        else if (user) {
            res.json({message: 'User already registered'});
        }
        else {
            var user = new User();
            user.username = req.body.username;
            user.name =  req.body.name;
            user.password = req.body.password;
            user.phone= req.body.phone;
            user.email = req.body.email;

            user.save(function(err, user) {
                if (err) {
                    res.json({message: err});
                }
                else if (user) {
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
    res.json({message: 'Signin working'})
}

module.exports = {
    signupHandler: signupHandler,
    signinHandler: signinHandler
}