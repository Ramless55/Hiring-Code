const express = require('express')

const User = require('./models/userModel')

const userRouter = require('./routes/userRouter')(User)
const authRouter = require('./routes/authRouter')(User)


const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
const { expressjwt } = require('express-jwt')
require('dotenv').config()

const app = express();

require('./database/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.all('/*',
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
            path: ['/auth/login', '/auth/register', '/api/user']
        })
)

app.use((err, _, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(httpStatus.UNAUTHORIZED).json({
            error: err.name,
            cause: 'Unauthorized. Missing or invalid token provided.'
        })
    } else {
        next(err)
    }
})

app.use('/api', userRouter)
app.use('/', authRouter)


app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});