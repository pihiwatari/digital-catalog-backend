const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This field cannot be left empty'],
    unique: true, // uniqueValidator will check this field. Deprecated package.
    lowercase: true, // set this to lower case to match function in unique field.
    index: true,
  },
  baseMaterial: { type: String, required: true },
  materials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Material',
    },
  ],
});

const Technology = mongoose.model('Technology', TechnologySchema);

module.exports = Technology;
