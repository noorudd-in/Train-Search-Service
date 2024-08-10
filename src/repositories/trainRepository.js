const CrudRepository = require("./crudRepository");
const { Train } = require("../models/index");

class TrainRepository extends CrudRepository {
  constructor() {
    super(Train);
  }
}

module.exports = TrainRepository;
