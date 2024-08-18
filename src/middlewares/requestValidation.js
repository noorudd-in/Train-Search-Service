const { client } = require("../utils/statusCodes");

const validateId = (req, res, next) => {
  if (!req.params.id) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Id is required",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateTrainNumber = (req, res, next) => {
  if (!req.params.number) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Train number is required",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateCreateTrain = (req, res, next) => {
  if (!req.body.name) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Train name is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.number) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Train number is required.",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateCreateStation = (req, res, next) => {
  if (!req.body.name) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Station name is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.code) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Station code is required.",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateCreateSchedule = (req, res, next) => {
  if (!req.body["train_id"]) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Train id is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body["station_id"]) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Station id is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.stop) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Stop number is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.arrival && !req.body.departure) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Either arrival or departure can be null at a time.",
      success: false,
      error: "Invalid request",
    });
  }
  if (req.body.arrival && req.body.arrival.length != 5) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message:
        "Arrival time format is incorrect. It should be in the format of 'XX:XX' following 24 hour clock. Eg: 18:05 or 04:15.",
      success: false,
      error: "Invalid request",
    });
  }
  if (req.body.departure && req.body.departure.length != 5) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message:
        "Departure time format is incorrect. It should be in the format of 'XX:XX' following 24 hour clock. Eg: 18:05 or 04:15.",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateTrainSearch = (req, res, next) => {
  if (!req.body.from) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Source station name is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.to) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Destination station name is required.",
      success: false,
      error: "Invalid request",
    });
  }
  next();
};

const validateSeatUpdate = (req, res, next) => {
  if (!req.params.number) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Train number is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.type) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Seat type is required.",
      success: false,
      error: "Invalid request",
    });
  }
  if (!["SL", "3E", "1A", "2A", "3A", 'ladies', 'senior_citizen', 'tatkal'].includes(req.body.type)) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message:
        "Inavlid inputs. Allowed values are 'SL', '3E', '1A', '2A', '3A', 'ladies', 'senior_citizen' or 'tatkal'",
      success: false,
      error: "Invalid request",
    });
  }
  if (!req.body.new_seats) {
    return res.status(client.BAD_REQUEST).json({
      data: null,
      message: "Updated seat count is required.",
      success: false,
      error: "Invalid request",
    });
  }

  next();
};

module.exports = {
  validateId,
  validateTrainNumber,
  validateCreateTrain,
  validateCreateStation,
  validateCreateSchedule,
  validateTrainSearch,
  validateSeatUpdate,
};
