const express = require('express');
const MaterialsService = require('../services/materials.service');

const router = express.Router();

const service = new MaterialsService();

// If we don't create an instance of the UsersService,
// we won't have access to the data.

router.get('/', service.findMaterials);
router.get('/:_id', service.findOneMaterial);
router.post('/', service.createMaterial);
router.put('/:_id', service.updateMaterial);
router.delete('/:_id', service.deleteMaterial);

module.exports = router;
