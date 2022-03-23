const Technology = require('../schemas/technology.schema');

class TechnologiesService {
  async findTechnologies(req, res, next) {
    try {
      const technologies = await Technology.find();
      res.status(200).json(technologies);
    } catch (error) {
      next(error);
    }
  }

  async findOneTechnology(req, res, next) {
    const { _id } = req.params;
    try {
      const technology = await Technology.findById(_id);

      res.status(200).json(technology);
    } catch (error) {
      next(error);
    }
  }

  async createTechnology(req, res, next) {
    const body = req.body;
    try {
      const newTechnology = await Technology.create(body);
      res.status(201).json(newTechnology);
    } catch (error) {
      next(error);
    }
  }

  async updateTechnology(req, res, next) {
    const { _id } = req.params;
    const data = req.body;
    try {
      let technology = await Technology.findById(_id);
      technology.set(data);
      await technology.save();
      res.status(200).json(technology);
    } catch (error) {
      next(error);
    }
  }

  async deleteTechnology(req, res, next) {
    const { _id } = req.params;
    try {
      const technology = await Technology.findById(_id);

      await technology.deleteOne({ _id: _id });
      res.status(200).json(technology.technologyname);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TechnologiesService;
