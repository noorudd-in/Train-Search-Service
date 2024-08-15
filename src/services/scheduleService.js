const CrudService = require("./crudService");
const { ScheduleRepository } = require("../repositories/index");

class ScheduleService extends CrudService {
  constructor() {
    const scheduleRepository = new ScheduleRepository();
    super(scheduleRepository);
    this.scheduleRepository = scheduleRepository;
  }

  async searchTrain(data) {
    try {
      const result = await this.scheduleRepository.searchTrain(data)
      return result;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
}

module.exports = ScheduleService;
