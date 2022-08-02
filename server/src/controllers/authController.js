const bcrypt = require('bcrypt')
const generateToken = require('../helpers/generateToken')
const httpStatus = require('../helpers/httpStatus')

const authController = (User) => {
    const logIn = async (req, res, next) => {
            try {
            const { body } = req
            const user = await User.findOne({
                username: body.username
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
                token
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

            return res.status(httpStatus.CREATED).json(user)
        } catch (err) {
            next(err)
        }
    }
    return { logIn, register }
}

module.exports = authController