const mongoose = require('mongoose');

const ThreeDModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  displayName: { type: String, required: true },
  dimensions: {
    x: { type: Number, required: 'Please add a dimension for X axis' },
    y: { type: Number, required: 'Please add a dimension for Y axis' },
    z: { type: Number, required: 'Please add a dimension for Z axis' },
  },
  material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
  printer: { type: mongoose.Schema.Types.ObjectId, ref: '3d printer' },
  technology: { type: mongoose.Schema.Types.ObjectId, ref: 'Technology' },
  customer: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  revision: { type: Number, default: 1 },
});

const ThreeDModel = mongoose.model('3d model', ThreeDModelSchema);

module.exports.ThreeDModel = ThreeDModel;
