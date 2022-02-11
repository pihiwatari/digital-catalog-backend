const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'This field cannot be left empty'],
      unique: true, // uniqueValidator will check this field.
      lowercase: true, // set this to lower case to match function in unique field.
      match: [/^[a-zA-Z0-9]+$/],
      index: true,
    },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { timestamps: true }
);

// Validacion de incidencia de usuarios.
UserSchema.plugin(uniqueValidator, 'This user already exists.');

const User = mongoose.model('User', UserSchema);

module.exports = User;
