const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.createUser = function (req, res,next) {
	
	    let user = new User(
			{
            firstname: req.body.firstname,
            //lastname: req.body.lasttname,
			email: req.body.email,
			//password: req.body.password
			}
		);
	
		user.save(function (err) {
        if (err) {
           return next(err);
        }
        res.send('User Created successfully')
    })
};

