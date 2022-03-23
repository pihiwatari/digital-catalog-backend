const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();

const service = new UsersService();

// If we don't create an instance of the UsersService,
// we won't have access to the data.

router.get('/', service.findUsers);
router.get('/:_id', service.findOneUser);
router.post('/', service.createUser);
router.put('/:_id', service.updateUser);
router.delete('/:_id', service.deleteUser);

module.exports = router;
