const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST  /api/users

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
//POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
//POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;