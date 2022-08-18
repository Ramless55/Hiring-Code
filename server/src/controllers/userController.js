const bcrypt = require('bcrypt')
const httpStatus = require('../helpers/httpStatus')

const userController = (User) => {
    const getAllUser = async (req, res, next) => {
        try {
            const { query } = req

            const response = await User.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postUser = async (req, res, next) => {
        try {
            const { body } = req

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            const encryptedData = {
                ...body,
                password: encryptedPassword
            }

            const user = await new User(encryptedData)

            await user.save()

            return res.status(httpStatus.CREATED).json(user)
        } catch (err) {
            next(err)
        }
    }

    const putUserById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await User.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }
            
            await User.findByIdAndUpdate(params.id, body)

            return res.status(httpStatus.CREATED).json({
                status: 'updated',
                user: {
                    // id: body._id,
                    name: body.name,
                    lastName: body.lastName,
                    userName: body.userName,
                    phone: body.phone,
                    country: body.country,
                    date: body.date,
                    address: body.address,
                    email: body.email,
                    image: body.image,
                    password: body.password,
                    rating: body.rating,
                    role: body.role
                }
            })

        } catch (err) {
            next(err)
        }
    }

    const getUserById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await User.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            const response = await User.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const deleteUserById = async (req, res, next) => {
        try {
            const { params } = req

            const checkData = await User.find({
                _id: params.id
            })

            if (checkData.length === 0) {
                return res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
            }

            await User.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).send('Data successful deleted')
        } catch (err) {
            next(err)
        }
    }

    return {
        getAllUser,
        getUserById,
        postUser,
        putUserById,
        deleteUserById
    }
}

module.exports = userController