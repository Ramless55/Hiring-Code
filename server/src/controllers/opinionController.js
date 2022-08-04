const httpStatus = require('../helpers/httpStatus')

const opinionController = (Opinion) => {
    const getAllOpinion = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Opinion.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postOpinion = async (req, res, next) => {
        try {
            const { body } = req

            const opinion = await new Opinion(body)

            await opinion.save()

            return res.status(httpStatus.CREATED).json(opinion)
        } catch (err) {
            next(err)
        }
    }

    const putOpinionById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await Opinion.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await Opinion.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        ceated_by: body.ceated_by,
                        publication_id: body.publication_id,
                        text: body.text,
                        rating: body.rating,
                    }
                }
            )

            return res.status(httpStatus.CREATED).send('Data successful updated')
        } catch (err) {
            next(err)
        }
    }

    const getOpinionById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await Opinion.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            const response = await Opinion.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const deleteOpinionById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await Opinion.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await Opinion.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).send('Data successful deleted')
        } catch (err) {
            next(err)
        }
    }

    return {
        getAllOpinion,
        getOpinionById,
        postOpinion,
        putOpinionById,
        deleteOpinionById
    }
}

module.exports = opinionController