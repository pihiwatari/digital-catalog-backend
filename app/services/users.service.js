const User = require('../schemas/user.schema');

class UsersService {
  constructor() {
    // this.users = User.find();
  }

  async find() {
    const users = await User.find();
    return users;
  }

  async findOne(id, password) {
    const user = await User.findById(id);

    // Test matching password
    const isMatch = await user.comparePassword(password);

    if (isMatch) return user;
  }

  async createUser(data) {
    const user = new User(data); // data is received from body request object.
    await user.save();
    return user;
  }

  async updateUser(id, data) {
    const user = await User.findById(id);
    return user, data; // aqui hay que seguirle
  }
}

module.exports = UsersService;
