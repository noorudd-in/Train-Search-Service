const { TrainRepository } = require("../repositories/index");

class TrainService {
  constructor() {
    this.trainService = new TrainRepository();
  }

  async createTrain(data) {
    try {
      const train = await this.trainService.createTrain(data);
      return train;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      console.log(error);
    }
  }

  async updateTrain(trainId, data) {
    try {
      const train = await this.trainService.updateTrain(trainId, data);
      return train;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      console.log(error);
    }
  }

  async deleteTrain(trainId) {
    try {
      const train = await this.trainService.deleteTrain(trainId);
      return train;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      console.log(error);
    }
  }

  async getTrain(trainId) {
    try {
      const train = await this.trainService.getTrain(trainId);
      return train;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      console.log(error);
    }
  }
}
module.exports = TrainService;
