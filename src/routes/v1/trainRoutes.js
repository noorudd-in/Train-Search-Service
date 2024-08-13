const express = require("express");
const router = express.Router();

const {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain
} = require("../../controllers/trainController");
const { validateId, validateCreateTrain } = require('../../middlewares/requestValidation')
const { isAdmin } = require('../../middlewares/authValidation')

router.post('/train', validateCreateTrain, isAdmin, createTrain);
router.patch('/train/:id', validateId, isAdmin, updateTrain);
router.delete('/train/:id', validateId, isAdmin, deleteTrain);
router.get('/train/:id', validateId, getTrain);
router.get('/trains', getAllTrain);

module.exports = router;
