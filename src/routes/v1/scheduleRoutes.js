const express = require("express");
const router = express.Router();

const {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  getAllSchedule
} = require("../../controllers/scheduleController");
const { validateId, validateCreateSchedule } = require('../../middlewares/requestValidation')

router.post('/schedule', validateCreateSchedule, createSchedule);
router.patch('/schedule/:id', validateId, updateSchedule);
router.delete('/schedule/:id', validateId, deleteSchedule);
router.get('/schedule/:id', validateId, getSchedule);
router.get('/schedules', getAllSchedule);

module.exports = router;
