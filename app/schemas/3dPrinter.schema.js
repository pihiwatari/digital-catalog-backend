const mongoose = require('mongoose');

const PrinterSchema = new mongoose.Schema({
  OEMName: { type: String, required: true },
  printerName: { type: String, required: true, unique: true, lowercase: true },
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }],
  buildSize: {
    x: { type: Number, required: 'X dimension is required' },
    y: { type: Number, required: 'Y dimension is required' },
    z: { type: Number, required: 'Z dimension is required' },
  },
  technology: { type: mongoose.Schema.Types.ObjectId, ref: 'Technology' },
});

const Printer = mongoose.model('3d printer', PrinterSchema);

module.exports = Printer;
