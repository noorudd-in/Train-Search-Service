const express = require("express");
const router = express.Router();

const {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  getAllSchedule
} = require("../../controllers/scheduleController");
const { validateId, validateCreateSchedule } = require('../../middlewares/requestValidation');
const { isLoggedIn, isAdmin } = require('../../middlewares/authValidation');

router.post('/schedule', validateCreateSchedule, isAdmin, createSchedule);
router.patch('/schedule/:id', validateId, isAdmin, updateSchedule);
router.delete('/schedule/:id', validateId, isAdmin, deleteSchedule);
router.get('/schedule/:id', validateId, isLoggedIn, getSchedule);
router.get('/schedules', isAdmin, getAllSchedule);

module.exports = router;
