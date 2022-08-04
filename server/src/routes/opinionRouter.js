const express = require('express')
const opinionController = require('../controllers/opinionController')
const validator = require('express-joi-validation').createValidator({})
const {bodyValidator, queryValidator, paramsValidator} = require('../validations/validationOpinion')

const router = (Opinion) => {
    const opinionRouter = express.Router()

    const { getAllOpinion, getOpinionById, postOpinion, putOpinionById, deleteOpinionById } =
        opinionController(Opinion)

        opinionRouter
        .route('/opinion')
        .get(validator.query(queryValidator), getAllOpinion)
        .post(validator.body(bodyValidator), postOpinion)

        opinionRouter
        .route('/opinion/:id')
        .get(validator.params(paramsValidator), getOpinionById)
        .put(validator.body(bodyValidator), putOpinionById)
        .delete(validator.params(paramsValidator), deleteOpinionById)
    return opinionRouter
}

module.exports = router