
const express = require('express')
const router = express.Router()

const commonController = require('../controllers/commonController')

router.use('/ping', commonController.index)

module.exports = router
