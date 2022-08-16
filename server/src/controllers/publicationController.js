const httpStatus = require('../helpers/httpStatus')

const publicationController = (Publication) => {
    const getAllPublication = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Publication.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postPublication = async (req, res, next) => {
        try {
            const { body } = req

            const publication = await new Publication(body)

            await publication.save()

            return res.status(httpStatus.CREATED).json(publication)
        } catch (err) {
            next(err)
        }
    }

    const putPublicationById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await Publication.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await Publication.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        ceated_by: body.ceated_by,
                        title: body.title,
                        description: body.description,
                        created_date: body.created_date,
                        price: body.price,
                        labels: body.labels,
                        rating: body.rating,
                    }
                }
            )

            return res.status(httpStatus.CREATED).send('Data successful updated')
        } catch (err) {
            next(err)
        }
    }

    const getPublicationById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await Publication.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            const response = await Publication.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const deletePublicationById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await Publication.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await Publication.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).send('Data successful deleted')
        } catch (err) {
            next(err)
        }
    }

    return {
        getAllPublication,
        getPublicationById,
        postPublication,
        putPublicationById,
        deletePublicationById
    }
}

module.exports = publicationController