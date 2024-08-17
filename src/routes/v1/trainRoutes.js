const express = require("express");
const router = express.Router();

const {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain,
  getTrainSeat
} = require("../../controllers/trainController");
const { validateId, validateCreateTrain, isAdmin, isLoggedIn, validateTrainNumber } = require('../../middlewares/index')

router.post('/train', validateCreateTrain, isAdmin, createTrain);
router.patch('/train/:id', validateId, isAdmin, updateTrain);
router.delete('/train/:id', validateId, isAdmin, deleteTrain);
router.get('/seats/:number', isLoggedIn, validateTrainNumber, getTrainSeat)
router.get('/train/:id', validateId, getTrain);
router.get('/trains', getAllTrain);

module.exports = router;
