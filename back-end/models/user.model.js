const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
	//lastname: {type: String, required: true, max: 100},
	email: {type: String,unique: true,required: true,trim: true},
    //password: {type: String,required: true,},
	///passwordConf: {type: String,}
});


// Export the model
module.exports = mongoose.model('User', UserSchema);