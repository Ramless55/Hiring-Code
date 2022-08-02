const express = require('express')
const userController = require('../controllers/userController')
const validator = require('express-joi-validation').createValidator({})
const {bodyValidator, queryValidator, paramsValidator} = require('../validations/validationUsers')

const router = (User) => {
    const userRouter = express.Router()

    const { getAllUser, getUserById, postUser, putUserById, deleteUserById } =
        userController(User)

        userRouter
        .route('/user')
        .get(validator.query(queryValidator), getAllUser)
        .post(validator.body(bodyValidator), postUser)

    userRouter
        .route('/user/:id')
        .get(validator.params(paramsValidator), getUserById)
        .put(validator.body(bodyValidator), putUserById)
        .delete(validator.params(paramsValidator), deleteUserById)
    return userRouter
}

module.exports = router