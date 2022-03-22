const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// const Material = require('./material.schema');

const PrinterSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  modelName: { type: String, required: true, unique: true, lowercase: true },
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }],
  buildSize: {
    x: { type: Number, required: 'X dimension is required' },
    y: { type: Number, required: 'Y dimension is required' },
    z: { type: Number, required: 'Z dimension is required' },
  },
  technology: { type: String, required: true },
});

PrinterSchema.plugin(uniqueValidator, 'This machine already exists');

module.exports.Printer = mongoose.model('3d printer', PrinterSchema);
