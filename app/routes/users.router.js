const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();

const service = new UsersService();

// If we don't create an instance of the UsersService,
// we won't have access to the data.

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    //
  } catch (err) {
    next(err);
  }
});

module.exports = router;
