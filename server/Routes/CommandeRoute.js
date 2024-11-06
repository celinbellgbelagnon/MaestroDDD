const express = require('express')
const router = express.Router()
const commandeCtrl = require('../Controllers/commandeCtrl')

router.post('/select/add', commandeCtrl.AddNewCommande)
router.get('/select/commande', commandeCtrl.selectCommande)

module.exports = router 