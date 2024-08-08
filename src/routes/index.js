const express = require('express');
const router = express.Router();

const stationRoutes = require('../routes/v1/stationRoutes');
const trainRoutes = require('../routes/v1/trainRoutes');

router.use('/v1', stationRoutes);
router.use('/v1', trainRoutes);

module.exports = router;