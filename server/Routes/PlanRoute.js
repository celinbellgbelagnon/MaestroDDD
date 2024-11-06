const express = require('express')
const router = express.Router()
const planCtrl = require('../Controllers/plantCtrl')


router.get('/select/plantType', planCtrl.getPlantType)
router.post('/select/add', planCtrl.AddNewPlant )

module.exports = router