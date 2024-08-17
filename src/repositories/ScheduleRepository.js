const CrudRepository = require("./crudRepository");
const { Schedule, sequelize } = require("../models/index");
const { QueryTypes } = require('sequelize');

class ScheduleRepository extends CrudRepository {
  constructor() {
    super(Schedule);
  }

  async searchTrain(data) {
    const searchTrainQuery = `
    SELECT
	    s1.id as from_schedul_id,
	    s2.id as to_schedule_id,
      st1.name as from_station_name,
      st2.name as to_station_name,
      t.number as train_number,
      t.name as train_name,
      t.sl as SL,
      t.\`3e\` as 3E,
      t.\`3a\` as 3A,
      t.\`2a\` as 2A,
      t.\`1a\` as 1A
    FROM schedules s1
    JOIN schedules s2 ON s1.train_id = s2.train_id
    JOIN stations st1 ON st1.id = s1.station_id
    JOIN stations st2 ON st2.id = s2.station_id
    JOIN trains t ON t.id = s1.train_id
    WHERE st1.name LIKE '%${data.from}%'
    AND st2.name LIKE '%${data.to}%'
    AND s1.stop < s2.stop;`;
    try {
      const result = await sequelize.query(searchTrainQuery, {type: QueryTypes.SELECT});
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      console.log(error);
      return {
        data: null,
        message: error.message,
        success: false,
        error: error.name,
      };
    }
  }
}
module.exports = ScheduleRepository;
