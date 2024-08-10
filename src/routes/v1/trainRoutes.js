const express = require("express");
const router = express.Router();

const {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain
} = require("../../controllers/trainController");

router.post('/train', createTrain);
router.patch('/train/:id', updateTrain);
router.delete('/train/:id', deleteTrain);
router.get('/train/:id', getTrain);
router.get('/trains', getAllTrain);

module.exports = router;
