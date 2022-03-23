const express = require('express');
const TechnologiesService = require('../services/technologies.service');

const router = express.Router();

const service = new TechnologiesService();

// If we don't create an instance of the UsersService,
// we won't have access to the data.

router.get('/', service.findTechnologies);
router.get('/:_id', service.findOneTechnology);
router.post('/', service.createTechnology);
router.put('/:_id', service.updateTechnology);
router.delete('/:_id', service.deleteTechnology);

module.exports = router;
