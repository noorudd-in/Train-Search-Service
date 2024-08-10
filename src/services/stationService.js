const CrudService = require('./crudService');
const { StationRepository } = require("../repositories/index");

class StationService extends CrudService {
  constructor() {
    const stationRepository =  new StationRepository();
    super(stationRepository)
  }
}

module.exports = StationService;