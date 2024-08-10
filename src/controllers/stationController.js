const {StationService} = require('../services/index');
const {success, client, server} = require('../utils/statusCodes');

const stationService = new StationService()

const createStation = async (req, res) => {
    try {
        const station = await stationService.create(req.body);
        return res.status(success.CREATED).json({
            data: station,
            success: true,
            message: "Station created successfully.",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(server.INTERNAL_SERVER_ERROR).json({
            data: null,
            success: false,
            message: "Cannot create station.",
            error: error
        })
    }
}

const updateStation = async (req, res) => {
    try {
        const station = await stationService.update(req.params.id, req.body);
        if (!station) {
            return res.status(client.NOT_FOUND).json({
                data: station,
                success: false,
                message: "The station you want to update doesn't exist!",
                error: {}
            })
        }
        return res.status(success.CREATED).json({
            data: station,
            success: true,
            message: "Station updated successfully.",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(server.INTERNAL_SERVER_ERROR).json({
            data: null,
            success: false,
            message: "Cannot update station.",
            error: error
        })
    }
}

const deleteStation = async (req, res) => {
    try {
        const station = await stationService.delete(req.params.id);
        if (!station) {
            return res.status(client.NOT_FOUND).json({
                data: null,
                success: false,
                message: "The station you want to delete doesn't exist!",
                error: {}
            })
        }
        return res.status(success.CREATED).json({
            data: station,
            success: true,
            message: "Station deleted successfully.",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(server.INTERNAL_SERVER_ERROR).json({
            data: null,
            success: false,
            message: "Cannot delete station.",
            error: error
        })
    }
}

const getStation = async (req, res) => {
    try {
        const station = await stationService.get(req.params.id);
        if (!station) {
            return res.status(client.BAD_REQUEST).json({
            data: station,
            success: false,
            message: "Cannot find the specified station.",
            error: {}
            })
        }
        return res.status(success.CREATED).json({
            data: station,
            success: true,
            message: "Station fetched successfully.",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(server.INTERNAL_SERVER_ERROR).json({
            data: null,
            success: false,
            message: "Cannot fetch station.",
            error: error
        })
    }
}

const getAllStation = async (req, res) => {
    try {
        const station = await stationService.getAll();
        return res.status(success.CREATED).json({
            data: station,
            success: true,
            message: "All stations fected successfully.",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(server.INTERNAL_SERVER_ERROR).json({
            data: null,
            success: false,
            message: "Cannot fetch stations.",
            error: error
        })
    }
}

module.exports = {
    createStation,
    updateStation,
    deleteStation,
    getStation,
    getAllStation
}