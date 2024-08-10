const express = require("express");
const router = express.Router();

const {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  getAllSchedule
} = require("../../controllers/scheduleController");

router.post('/schedule', createSchedule);
router.patch('/schedule/:id', updateSchedule);
router.delete('/schedule/:id', deleteSchedule);
router.get('/schedule/:id', getSchedule);
router.get('/schedules', getAllSchedule);

module.exports = router;
