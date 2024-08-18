const CrudService = require('./crudService')
const { TrainRepository } = require("../repositories/index");

class TrainService extends CrudService {
  constructor() {
    const trainRepository = new TrainRepository()
    super(trainRepository)
    this.repository = trainRepository
  }

  async getByNumber(number) {
    try {
      const result = this.repository.getByNumber(number);
      return result;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateSeat(data) {
    try {
      const result = this.repository.updateSeat(data);
      return result;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}
module.exports = TrainService;
