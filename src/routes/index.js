const express = require('express');
const router = express.Router();

const stationRoutes = require('./v1/stationRoutes');
const trainRoutes = require('./v1/trainRoutes');
const scheduleRoutes = require('./v1/scheduleRoutes')

router.use('/v1', stationRoutes);
router.use('/v1', trainRoutes);
router.use('/v1', scheduleRoutes);

module.exports = router;