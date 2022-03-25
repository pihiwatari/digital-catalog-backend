const Technology = require('../schemas/technology.schema');

class TechnologiesService {
  async findTechnologies(req, res, next) {
    try {
      Technology.find()
        .populate('materials')
        .exec((err, docs) => res.status(200).json(docs));
    } catch (error) {
      next(error);
    }
  }

  async findOneTechnology(req, res, next) {
    const { _id } = req.params;
    try {
      Technology.findById(_id)
        .populate('materials')
        .exec((err, doc) => res.status(200).json(doc));
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
      let technology = await Technology.findByIdAndUpdate(_id, data, {
        new: true,
      });
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
      res.status(200).json(technology);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TechnologiesService;
