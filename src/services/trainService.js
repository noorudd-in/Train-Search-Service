const CrudService = require('./crudService')
const { TrainRepository } = require("../repositories/index");

class TrainService extends CrudService {
  constructor() {
    const trainRepository = new TrainRepository()
    super(trainRepository)
  }
}
module.exports = TrainService;
