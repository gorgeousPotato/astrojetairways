const express = require('express');
const router = express.Router();
const flightsCtrl = require('../../controllers/api/flights');

//GET  /api/flights
router.get('/', flightsCtrl.search);

//GET /api/flights/:id
router.get('/:id', flightsCtrl.show);

module.exports = router;