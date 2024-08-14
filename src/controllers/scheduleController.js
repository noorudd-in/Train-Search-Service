const { ScheduleService } = require("../services/index");
const {success, client, server} = require('../utils/statusCodes');

const scheduleService = new ScheduleService();

const createSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.create(req.body);
    if (schedule.success == false) {
      return res.status(server.INTERNAL_SERVER_ERROR).json({
        data: null,
        success: false,
        message: schedule.message,
        error: schedule.error,
      });
    }
    return res.status(success.CREATED).json({
      data: schedule,
      success: true,
      message: "Schedule created successfully.",
      error: null,
    });
  } catch (error) {
    res.status(server.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Cannot create a schedule.",
      error: error,
    });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.update(req.params.id, req.body);
    if (!schedule || schedule[0] == 0) {
      return res.status(client.NOT_FOUND).json({
        data: schedule,
        success: false,
        message: "Schedule you want to update, doesn't exist!",
        error: 'Schedule not found',
      });
    }
    return res.status(success.CREATED).json({
      data: schedule,
      success: true,
      message: "Schedule updated successfully.",
      error: null,
    });
  } catch (error) {
    res.status(server.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Cannot update a schedule.",
      error: error,
    });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.delete(req.params.id);
    if (!schedule) {
      return res.status(client.NOT_FOUND).json({
        data: null,
        success: false,
        message: "The schedule you want to delete doesn't exist!",
        error: 'Schedule not found',
      });
    }
    return res.status(success.CREATED).json({
      data: schedule,
      success: true,
      message: "Schedule deleted successfully.",
      error: null,
    });
  } catch (error) {
    res.status(server.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Cannot delete a schedule.",
      error: error,
    });
  }
};

const getSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.get(req.params.id);
    if (!schedule) {
      return res.status(client.NOT_FOUND).json({
        data: schedule,
        success: false,
        message: "Schedule you specified doesn't exist!",
        error: 'Schedule not found',
      });
    }
    return res.status(success.OK).json({
      data: schedule,
      success: true,
      message: "Schedule fetched successfully.",
      error: null,
    });
  } catch (error) {
    res.status(server.INTERNAL_SERVER_ERROR).json({
      data: null,
      success: false,
      message: "Cannot fetch a schedule.",
      error: error,
    });
  }
};

const getAllSchedule = async (req, res) => {
  try {
      const schedule = await scheduleService.getAll();
      return res.status(success.OK).json({
          data: schedule,
          success: true,
          message: "All schedule fetched successfully.",
          error: null
      })
  } catch (error) {
      console.log(error);
      return res.status(server.INTERNAL_SERVER_ERROR).json({
          data: null,
          success: false,
          message: "Cannot fetch schedule.",
          error: error
      })
  }
};

module.exports = {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  getAllSchedule
};
