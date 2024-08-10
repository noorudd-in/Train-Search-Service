const CrudRepository = require("./crudRepository");
const { Schedule } = require("../models/index");

class ScheduleRepository extends CrudRepository {
  constructor() {
    super(Schedule);
  }
}
module.exports = ScheduleRepository;
