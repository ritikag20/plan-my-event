const mongoose = require('mongoose');

const uri =  "mongodb+srv://kkviks:mongodb@cluster0.3p90o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const uri = 'mongodb://localhost:27017/test';
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;