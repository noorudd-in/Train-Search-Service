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

router.post('/station', validateCreateStation, createStation);
router.patch('/station/:id', validateId, updateStation);
router.delete('/station/:id', validateId, deleteStation);
router.get('/station/:id', validateId, getStation);
router.get('/stations', getAllStation);

module.exports = router;
