const bcrypt = require('bcrypt')
const generateToken = require('../helpers/generateToken')
const httpStatus = require('../helpers/httpStatus')

const authController = (User) => {
    const logIn = async (req, res, next) => {
        try {
            const { body } = req
            console.log(body)
            const user = await User.findOne({
                userName: body.userName
            })
            if
                (user === null ||
                !(await bcrypt.compare(body.password, user.password))
            ) {
                return res.status(httpStatus.FORBIDDEN).send('invalid credentials')
            }
            const token = generateToken()

            return res.status(httpStatus.OK).json({
                status: 'logged in',
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    lastName: user.lastName,
                    userName: user.userName,
                    phone: user.phone,
                    country: user.country,
                    date: user.date,
                    address: user.address,
                    email: user.email,
                    image: user.image,
                    password: user.password,
                    rating: user.rating,
                    role: user.role
                }
            })
        } catch (err) {
            next(err)
        }
    }

    const register = async (req, res, next) => {
        try {
            const { body } = req

            const encryptedPassword = await bcrypt.hash(body.password, 10)

            const encryptedData = {
                ...body,
                password: encryptedPassword
            }

            const user = await new User(encryptedData)

            await user.save()

            return res.status(httpStatus.CREATED).json({
                status: 'registered'
            })
        } catch (err) {
            next(err)
        }
    }
    return { logIn, register }
}

module.exports = authController