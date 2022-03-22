const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field cannot be left empty'],
    unique: true, // uniqueValidator will check this field.
    lowercase: true, // set this to lower case to match function in unique field.
    match: [/^[a-zA-Z0-9]+$/],
    index: true,
  },
  baseMaterial: String,
});

// Validacion de incidencia de elementos.
TechnologySchema.plugin(uniqueValidator, 'This machine already exists.');

module.exports.Technology = mongoose.model('Technology', TechnologySchema);
