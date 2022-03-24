const Material = require('../schemas/material.schema');

class MaterialsService {
  async findMaterials(req, res, next) {
    try {
      const materials = await Material.find();
      res.status(200).json(materials);
    } catch (error) {
      next(error);
    }
  }

  async findOneMaterial(req, res, next) {
    const { _id } = req.params;
    try {
      const material = await Material.findById(_id);

      res.status(200).json(material);
    } catch (error) {
      next(error);
    }
  }

  async createMaterial(req, res, next) {
    const body = req.body;
    try {
      const newMaterial = await Material.create(body);
      res.status(201).json(newMaterial);
    } catch (error) {
      next(error);
    }
  }

  async updateMaterial(req, res, next) {
    const { _id } = req.params;
    const data = req.body;
    try {
      let material = await Material.findById(_id);
      material.set(data);
      await material.save();
      res.status(200).json(material);
    } catch (error) {
      next(error);
    }
  }

  async deleteMaterial(req, res, next) {
    const { _id } = req.params;
    try {
      const material = await Material.findById(_id);

      await material.deleteOne({ _id: _id });
      res.status(200).json(material.materialName);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MaterialsService;
