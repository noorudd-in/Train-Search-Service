const {
  validateCreateSchedule,
  validateCreateStation,
  validateCreateTrain,
  validateId,
  validateTrainSearch,
} = require("./requestValidation");
const { isLoggedIn, isAdmin } = require("./authValidation");

module.exports = {
  validateCreateSchedule,
  validateCreateStation,
  validateCreateTrain,
  validateId,
  validateTrainSearch,
  isLoggedIn,
  isAdmin,
};
