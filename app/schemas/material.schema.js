const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const MaterialSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  materialName: { type: String, required: true, unique: true, lowercase: true },
  technology: { type: String, required: true },
});

MaterialSchema.plugin(uniqueValidator, 'This material already exists');

module.exports.Material = mongoose.model('Material', MaterialSchema);
