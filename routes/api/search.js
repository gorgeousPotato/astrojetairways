const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/search');

//GET  /api/search
router.get('/', searchCtrl.search);



module.exports = router;