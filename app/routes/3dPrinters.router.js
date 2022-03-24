const express = require('express');
const PrintersService = require('../services/3dPrinters.service');

const router = express.Router();

const service = new PrintersService();

// If we don't create an instance of the UsersService,
// we won't have access to the data.

router.get('/', service.findPrinters);
router.get('/:_id', service.findOnePrinter);
router.post('/', service.createPrinter);
router.put('/:_id', service.updatePrinter);
router.delete('/:_id', service.deletePrinter);

module.exports = router;
