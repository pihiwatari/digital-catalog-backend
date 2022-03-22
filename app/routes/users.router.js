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

router.get('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { password } = req.body;

    const user = await service.findOne(_id, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const user = await service.createUser(body);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});

router.put('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    const body = req.body;

    const user = await service.updateUser(_id, body);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
