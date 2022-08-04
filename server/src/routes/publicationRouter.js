const express = require('express')
const publicationController = require('../controllers/publicationController')
const validator = require('express-joi-validation').createValidator({})
const {bodyValidator, queryValidator, paramsValidator} = require('../validations/validationPublication')

const router = (Publication) => {
    const publicationRouter = express.Router()

    const { getAllPublication, getPublicationById, postPublication, putPublicationById, deletePublicationById } =
        publicationController(Publication)

        publicationRouter
        .route('/publication')
        .get(validator.query(queryValidator), getAllPublication)
        .post(validator.body(bodyValidator), postPublication)

        publicationRouter
        .route('/publication/:id')
        .get(validator.params(paramsValidator), getPublicationById)
        .put(validator.body(bodyValidator), putPublicationById)
        .delete(validator.params(paramsValidator), deletePublicationById)
    return publicationRouter
}

module.exports = router