const express = require("express");
const router = express.Router();

const {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain
} = require("../../controllers/trainController");
const { validateId } = require('../../middlewares/requestValidation')

router.post('/train', createTrain);
router.patch('/train/:id', validateId, updateTrain);
router.delete('/train/:id', validateId, deleteTrain);
router.get('/train/:id', validateId, getTrain);
router.get('/trains', getAllTrain);

module.exports = router;
