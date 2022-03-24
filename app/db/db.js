const mongoose = require('mongoose');

// [***** MONGOOSE OPTIONS *****]

async function connectDB() {
  // mongod --dbpath ./app/mongodb

  try {
    console.log('Connecting to database...');

    // await mongoose.connect('mongodb://127.0.0.1:27017/sample'); // Local database
    await mongoose.connect(process.env.MONGODB_URI); // Remote database

    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
}

// [***** MONGOOSE OPTIONS *****]

module.exports = connectDB;
