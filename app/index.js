const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// [***** CORS OPTIONS *****]

// [***** CORS OPTIONS *****]

// [***** MONGOOSE OPTIONS *****]
// [***** MONGOOSE OPTIONS *****]

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => console.log(`Listening on port ${PORT}`));
