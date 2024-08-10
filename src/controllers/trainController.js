const { TrainService } = require("../services/index");

const trainService = new TrainService();

const createTrain = async (req, res) => {
  try {
    const train = await trainService.create(req.body);
    return res.status(201).json({
      data: train,
      success: true,
      message: "Train created successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot create a train.",
      error: { error },
    });
  }
};

const updateTrain = async (req, res) => {
  try {
    const train = await trainService.update(req.params.id, req.body);
    if (!train) {
      return res.status(404).json({
        data: train,
        success: false,
        message: "Train you want to update, doesn't exist!",
        error: {},
      });
    }
    return res.status(201).json({
      data: train,
      success: true,
      message: "Train updated successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot update a train.",
      error: { error },
    });
  }
};

const deleteTrain = async (req, res) => {
  try {
    const train = await trainService.delete(req.params.id);
    if (!train) {
      return res.status(404).json({
        data: null,
        success: false,
        message: "The train you want to delete doesn't exist!",
        error: {},
      });
    }
    return res.status(201).json({
      data: train,
      success: true,
      message: "Train deleted successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot delete a train.",
      error: { error },
    });
  }
};

const getTrain = async (req, res) => {
  try {
    const train = await trainService.get(req.params.id);
    if (!train) {
      return res.status(404).json({
        data: train,
        success: false,
        message: "Train you specified doesn't exist!",
        error: {},
      });
    }
    return res.status(200).json({
      data: train,
      success: true,
      message: "Train fetched successfully.",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: "Cannot fetch a train.",
      error: { error },
    });
  }
};

const getAllTrain = async (req, res) => {
  try {
      const train = await trainService.getAll();
      return res.status(200).json({
          data: train,
          success: true,
          message: "All trains fetched successfully.",
          error: {}
      })
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          data: null,
          success: false,
          message: "Cannot fetch trains.",
          error: error
      })
  }
};

module.exports = {
  createTrain,
  updateTrain,
  deleteTrain,
  getTrain,
  getAllTrain
};
