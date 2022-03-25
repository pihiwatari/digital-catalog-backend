const User = require('../schemas/user.schema');

class UsersService {
  async findUsers(req, res, next) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async findOneUser(req, res, next) {
    const { _id } = req.params;
    const { password } = req.body;
    try {
      const user = await User.findById(_id);

      // Password matching
      const isMatch = await user.comparePassword(password);

      if (isMatch) res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    const body = req.body;
    try {
      const newUser = await User.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const { _id } = req.params;
    let data = req.body;
    try {
      let user = await User.findById(_id);
      user.set(data);
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const { _id } = req.params;
    const { password } = req.body;
    try {
      const user = await User.findById(_id);
      const isMatch = await user.comparePassword(password);

      if (isMatch) await user.deleteOne({ _id: _id });
      res.status(200).json(user.username);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersService;
