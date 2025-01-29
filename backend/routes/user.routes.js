const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controller/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invaild Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 Character long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be least 6 character long')
],
    userController.registerUser
)


module.exports = router;