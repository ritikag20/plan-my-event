const mongoose = require('mongoose');

const uri =  "mongodb+srv://kkviks:mongodb@cluster0.3p90o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Connects to database
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        // Change deprecated settings to resolve warnings
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log("LOG: MongoDB Connected");
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;