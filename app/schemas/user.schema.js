const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'This field cannot be left empty'],
      unique: true, // uniqueValidator will check this field. Deprecated package
      match: [/^[a-zA-Z0-9]+$/],
      index: true,
    },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, requried: 'Please provide an email to register' },
    password: { type: String, required: 'Password is required to register' },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Password management (hashing)
UserSchema.pre('save', async function (next) {
  // Hashing only happens when is modified or new
  if (!this.isModified('password')) return next();

  try {
    // Generate salt
    const salt = await bcrypt.genSalt();

    // Hashing password
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    next(err);
  }
});

// Password verification
UserSchema.methods.comparePassword = async function (textPassword) {
  return bcrypt.compare(textPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
