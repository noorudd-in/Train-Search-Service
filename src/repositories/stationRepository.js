const { Station } = require("../models/index");

class StationRepository {
  async createStation({ name, code }) {
    try {
      const station = await Station.create({ name, code });
      return station;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateStation(stationId, data) {
    try {
      let station = await Station.findByPk(stationId);
      if (!station) {
        return null;
      }
      const {name = station.name, code = station.code} = data;
      station.name = name;
      station.code = code;
      await station.save();
      return station;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteStation(stationId) {
    try {
      const station = await Station.destroy({
        where: {
          id: stationId,
        },
      });
      if (!station) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getStation(stationId) {
    try {
      const station = await Station.findByPk(stationId);
      return station;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllStation() {
    try {
      const stations = Station.findAll();
      return stations; 
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = StationRepository