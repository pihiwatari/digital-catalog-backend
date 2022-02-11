const mongoose = require('mongoose');
const User = require('../schemas/user.schema');

class UsersService {
  constructor() {
    this.users = User.find();
  }

  async find() {
    return await this.users;
  }

  async findOne(id) {
    return await User.findById(id);
  }

  async createUser(data) {
    const user = new User(data); // data is received from body request object.
    await user.save();
    return user;
  }

  // async updateUser(id, data) {
  //   const updatedUser = User.updateOne()
  // }
}

module.exports = UsersService;
