const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const mongoose = require('mongoose');
const res = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 3000;

// [***** CORS OPTIONS *****]

// [***** CORS OPTIONS *****]

app.use(cors());
app.use(express.json()); // Middleware for body in json format

// [***** MONGOOSE OPTIONS *****]

async function connectDB() {
  try {
    console.log('Connecting to database');
    await mongoose.connect('mongodb://localhost:27017/sample');
    console.log('Connected to database');
  } catch (error) {
    res.status(500).send(error);
  }
}

// [***** MONGOOSE OPTIONS *****]

app.get('/', (req, res, next) => res.send('Hola desde el home'));

connectDB();

apiRouter(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
