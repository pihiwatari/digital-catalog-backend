const express = require('express');
const usersRouter = require('./users.router');

function apiRouter(app) {
  const router = express.Router();

  // api homepage endpoint
  app.use('/api/v1', router);
  router.get('/', (req, res, next) => res.status(200).send('Home page here'));

  // [***** USING ENDPOINT ROUTERS *****]

  router.use('/users', usersRouter);
}

module.exports = apiRouter;
