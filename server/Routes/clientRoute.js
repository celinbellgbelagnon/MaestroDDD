const express = require('express');
const clientCtrl = require('../Controllers/clientCtrl');
const router = express.Router();

router.post("/signup", clientCtrl.signup);
/* router.post('/login', clientCtrl.login); */

module.exports = router;