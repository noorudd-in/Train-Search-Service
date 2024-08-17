const {
  validateCreateSchedule,
  validateCreateStation,
  validateCreateTrain,
  validateId,
  validateTrainSearch,
  validateTrainNumber
} = require("./requestValidation");
const { isLoggedIn, isAdmin } = require("./authValidation");

module.exports = {
  validateCreateSchedule,
  validateCreateStation,
  validateCreateTrain,
  validateId,
  validateTrainNumber,
  validateTrainSearch,
  isLoggedIn,
  isAdmin,
};
