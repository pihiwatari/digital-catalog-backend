const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  materialName: { type: String, required: true },
  technology: { type: String, required: true },
});

const Material = mongoose.model('Material', MaterialSchema);

module.exports = Material;
