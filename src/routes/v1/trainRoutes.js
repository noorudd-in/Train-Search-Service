const express = require("express");
const router = express.Router();

const {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain,
  getTrainSeat,
  updateSeat
} = require("../../controllers/trainController");
const { validateId, validateCreateTrain, isAdmin, isLoggedIn, validateTrainNumber, validateSeatUpdate } = require('../../middlewares/index')

router.post('/train', validateCreateTrain, isAdmin, createTrain);
router.patch('/train/:id', validateId, isAdmin, updateTrain);
router.delete('/train/:id', validateId, isAdmin, deleteTrain);
router.post('/seats/:number', isLoggedIn, validateTrainNumber, getTrainSeat)
router.get('/train/:id', validateId, getTrain);
router.get('/trains', getAllTrain);
// Update seats of a train (after ticket is booked).
router.post('/train/:number', validateSeatUpdate, updateSeat)

module.exports = router;
