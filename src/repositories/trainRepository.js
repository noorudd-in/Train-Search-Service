const { Train } = require("../models/index");

class TrainRepository {
  async createTrain({ name, number, coaches }) {
    try {
      const train = await Train.create({ name, number, coaches });
      return train;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
      return null
    }
  }

  async updateTrain(trainId, data) {
    try {
      const train = await Train.findByPk(trainId);
      if (!train) {
        console.log("Train which you want to update cannot be found.");
        return null;
      }
      console.log('INSIDE LINE 23')
      const {name = train.name, number = train.number, coaches = train.coaches} = data
      train.name = name;
      train.number = number;
      train.coaches = coaches;
      console.log('INSIDE LINE 33')
      await train.save();
      return train;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }

  async deleteTrain(trainId) {
    try {
      const train = await Train.destroy({
        where: {
          id: trainId,
        },
      });
      if (!train) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }

  async getTrain(trainId) {
    try {
      const train = Train.findByPk(trainId);
      if (!train) {
        return null;
      }
      return train;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
    }
  }
}

module.exports = TrainRepository;
