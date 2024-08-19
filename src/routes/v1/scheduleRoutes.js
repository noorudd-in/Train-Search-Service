const express = require("express");
const router = express.Router();

const {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  getAllSchedule,
  searchTrain
} = require("../../controllers/scheduleController");
const { validateId, validateCreateSchedule, isLoggedIn, isAdmin, validateTrainSearch } = require('../../middlewares/index');

router.post('/schedule', validateCreateSchedule, isAdmin, createSchedule);
router.patch('/schedule/:id', validateId, isAdmin, updateSchedule);
router.delete('/schedule/:id', validateId, isAdmin, deleteSchedule);
router.get('/schedules', isAdmin, getAllSchedule);

// Routes available to users
router.get('/search', validateTrainSearch, searchTrain)
// Get details of their journey/schedule
router.post('/schedule/:id', validateId, isLoggedIn, getSchedule);

module.exports = router;
