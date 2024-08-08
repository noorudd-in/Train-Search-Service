const express = require("express");
const router = express.Router();

const {
  createStation,
  updateStation,
  deleteStation,
  getStation,
  getAllStation,
} = require("../../controllers/stationController");

router.post('/station', createStation);
router.patch('/station/:id', updateStation);
router.delete('/station/:id', deleteStation);
router.get('/station/:id', getStation);
router.get('/stations', getAllStation);

module.exports = router;
