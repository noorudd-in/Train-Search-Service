const { StationRepository } = require("../repositories/index");

class StationService {
  constructor() {
    this.stationRepository = new StationRepository();
  }

  async createStation(data) {
    try {
      const station = await this.stationRepository.createStation(data);
      return station;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async updateStation(stationId, data) {
    try {
      const station = await this.stationRepository.updateStation(stationId, data);
      return station;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async deleteStation(stationId) {
    try {
      const station = await this.stationRepository.deleteStation(stationId);
      return station;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getStation(stationId) {
    try {
      const station = this.stationRepository.getStation(stationId);
      return station;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getAllStation() {
    try {
      const stations = this.stationRepository.getAllStation()
      return stations;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = StationService;