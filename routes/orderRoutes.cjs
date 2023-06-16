const express = require("express")
const orderController = require('./../controllers/orderController.cjs')
const authController = require('./../controllers/authController.cjs')
const router = express.Router()

router
.route('/')
.get( authController.protect , orderController.getMyOrder)

router
.route('/createorder')
.post(authController.protect , orderController.createOrder)

module.exports = router