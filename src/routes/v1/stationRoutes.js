const express = require("express");
const router = express.Router();

const {
  createStation,
  updateStation,
  deleteStation,
  getStation,
  getAllStation,
} = require("../../controllers/stationController");
const { validateId, validateCreateStation } = require('../../middlewares/requestValidation')
const { isAdmin } = require('../../middlewares/authValidation')

router.post('/station', validateCreateStation, isAdmin, createStation);
router.patch('/station/:id', validateId, isAdmin, updateStation);
router.delete('/station/:id', validateId, isAdmin, deleteStation);
router.get('/station/:id', validateId, getStation);
router.get('/stations', getAllStation);

module.exports = router;
