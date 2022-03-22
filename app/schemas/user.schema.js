const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const { hashSync } = require('bcrypt');

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
    email: { type: String, requried: 'Please provide an email to register' },
    password: {},
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Validacion de incidencia de usuarios.
UserSchema.plugin(uniqueValidator, 'This user already exists.');

// Password management (hashing)
UserSchema.pre('save', function (next) {
  const salt = bcrypt.genSaltSync();
  (this.password = bcrypt), hashSync();
});

module.exports.User = mongoose.model('User', UserSchema);
