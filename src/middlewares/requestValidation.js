const { client } = require("../utils/statusCodes")

const validateId = (req, res, next) => {
    if (!req.params.id) {
        return res.status(client.BAD_REQUEST).json({
            data: null,
            message: "Id is required",
            success: false,
            error: "Invalid request"
        })
    }
    next()
}

module.exports = {
    validateId
}