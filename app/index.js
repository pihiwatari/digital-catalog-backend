const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// [***** CORS OPTIONS *****]

// [***** CORS OPTIONS *****]

app.use(cors());
app.use(express.json()); // Middleware for body in json format

// [***** MONGOOSE OPTIONS *****]

async function dbConnect() {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/test'); // Test database
    return db;
  } catch (err) {
    console.log(err);
  }
}

// [***** MONGOOSE OPTIONS *****]

app.get('/', async function (req, res) {
  try {
    const db = await dbConnect();
    console.log(db);
    res.send('hello world');
  } catch (error) {
    console.log(err);
  }
});

apiRouter(app);

app.listen(3000, () => console.log(`Listening on port ${PORT}`));
