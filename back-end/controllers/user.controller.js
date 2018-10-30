const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.createUser = function (req, res, next) {
	
	    var userData ={
				email: req.body.email,
				username: req.body.username,
				password: req.body.password,
				passwordConf: req.body.passwordConf,
			};
	
		//use schema.create to insert data into the db
		  User.create(userData, function (err, user) {
			if (err) {
			  return next(err)
			} else {
			  return res.redirect('/profile');
			}
		  });
};

