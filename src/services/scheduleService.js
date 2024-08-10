const CrudService = require('./crudService');
const { ScheduleRepository } = require('../repositories/index');

class ScheduleService extends CrudService {
    constructor() {
        const scheduleRepository = new ScheduleRepository();
        super(scheduleRepository);
    }
}

module.exports = ScheduleService;