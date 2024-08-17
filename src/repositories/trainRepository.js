const CrudRepository = require("./crudRepository");
const { Train } = require("../models/index");

class TrainRepository extends CrudRepository {
  constructor() {
    super(Train);
  }

  async getByNumber(number) {
    try {
      const result = Train.findOne({
        where: {
          number: number
        }
      });
      if (!result) {
        return null;
      }
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
      return {
        data: null,
        message: error.message,
        success: false,
        error: error.name
      };
    }
  }
}

module.exports = TrainRepository;
