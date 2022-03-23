const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field cannot be left empty'],
    unique: true, // uniqueValidator will check this field. Deprecated package.
    lowercase: true, // set this to lower case to match function in unique field.
    match: [/^[a-zA-Z0-9]+$/],
    index: true,
  },
  baseMaterial: String,
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }],
});

const Technology = mongoose.model('Technology', TechnologySchema);

module.exports = Technology;
