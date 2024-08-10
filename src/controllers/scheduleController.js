const { ScheduleService } = require("../services/index");

const scheduleService = new ScheduleService();

const createSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.create(req.body);
    return res.status(201).json({
      data: schedule,
      success: true,
      message: "Schedule created successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot create a schedule.",
      error: { error },
    });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.update(req.params.id, req.body);
    if (!schedule) {
      return res.status(404).json({
        data: schedule,
        success: false,
        message: "Schedule you want to update, doesn't exist!",
        error: {},
      });
    }
    return res.status(201).json({
      data: schedule,
      success: true,
      message: "Schedule updated successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot update a schedule.",
      error: { error },
    });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.delete(req.params.id);
    if (!schedule) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "The schedule you want to delete doesn't exist!",
        error: {},
      });
    }
    return res.status(201).json({
      data: schedule,
      success: true,
      message: "Schedule deleted successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot delete a schedule.",
      error: { error },
    });
  }
};

const getSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.get(req.params.id);
    if (!schedule) {
      return res.status(404).json({
        data: schedule,
        success: false,
        message: "Schedule you specified doesn't exist!",
        error: {},
      });
    }
    return res.status(200).json({
      data: schedule,
      success: true,
      message: "Schedule fetched successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot fetch a schedule.",
      error: { error },
    });
  }
};

const getAllSchedule = async (req, res) => {
  try {
      const schedule = await scheduleService.getAll();
      return res.status(200).json({
          data: schedule,
          success: true,
          message: "All schedule fetched successfully.",
          error: {}
      })
  } catch (error) {
      console.log(error);
      return res.status(500).json({
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
