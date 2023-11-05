const express = require('express');
const router = express.Router();
const flightsCtrl = require('../../controllers/api/flights');

//GET  /api/flights
router.get('/', flightsCtrl.search);



module.exports = router;