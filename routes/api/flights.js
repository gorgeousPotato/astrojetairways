const express = require('express');
const router = express.Router();
const flightsCtrl = require('../../controllers/api/flights');

//GET  /api/flights
router.get('/', flightsCtrl.search);

//GET /api/flights/:id
router.get('/:id', flightsCtrl.show);

//POST /api/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.create);

module.exports = router;