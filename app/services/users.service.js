const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersService {
  constructor() {
    this.users = [{ id: 1 }, { id: 2 }];
  }

  async find() {
    return this.users;
  }

  async createUser(data) {
    const user = new User(data); // data is received from body request object.
    await user.save();
    return user;
  }
}

module.exports = UsersService;
