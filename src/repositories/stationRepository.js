const CrudRepository = require('./crudRepository')
const { Station } = require("../models/index");

class StationRepository extends CrudRepository {
  constructor() {
    super(Station)
  }
}

module.exports = StationRepository