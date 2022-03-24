require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const helmet = require('helmet');
const connectDB = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;

// [***** CORS OPTIONS *****]

// [***** CORS OPTIONS *****]

app.use(helmet());
app.use(cors());
app.use(express.json()); // Middleware for receiving data within body in json format

app.get('/', (req, res, next) => res.send('This is the home...'));

connectDB();

apiRouter(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
