const Printer = require('../schemas/3dPrinter.schema');

class PrintersService {
  async findPrinters(req, res, next) {
    try {
      Printer.find()
        .populate('materials')
        .exec((err, docs) => res.status(200).json(docs));
    } catch (error) {
      next(error);
    }
  }

  async findOnePrinter(req, res, next) {
    const { _id } = req.params;
    try {
      Printer.findById(_id)
        .populate('materials')
        .exec((err, doc) => res.status(200).json(doc));
    } catch (error) {
      next(error);
    }
  }

  async createPrinter(req, res, next) {
    const body = req.body;
    try {
      const newPrinter = await Printer.create(body);
      res.status(201).json(newPrinter);
    } catch (error) {
      next(error);
    }
  }

  async updatePrinter(req, res, next) {
    const { _id } = req.params;
    const data = req.body;
    try {
      let printer = await Printer.findById(_id);
      printer.set(data);
      await printer.save();
      res.status(200).json(printer);
    } catch (error) {
      next(error);
    }
  }

  async deletePrinter(req, res, next) {
    const { _id } = req.params;
    try {
      const printer = await Printer.findById(_id);

      await printer.deleteOne({ _id: _id });
      res.status(200).json(printer.printerName);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PrintersService;
