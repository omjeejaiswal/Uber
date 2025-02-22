const userModel = require('../models/user.models');
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')

module.exports.registerUser = async(req, res, next ) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    console.log(req.body)

    const {fullname, email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = userService.createUser({
        firstname : fullname.firstname,
        // firstname,
        // lastname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({token, user})

}