const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://uttamuser:Uttam12345@ds127129.mlab.com:27129/recipe-spinner';
const user = require('./routes/user.route'); // Imports routes for the products
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let mongoDB = process.env.MONGODB_URI || dev_db_url;
app.use('/users', user);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});