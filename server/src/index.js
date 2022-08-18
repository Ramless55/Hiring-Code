const express = require('express')

const User = require('./models/userModel')
const Publication = require('./models/publicationModel')
const Opinion = require('./models/opinionModel')

const userRouter = require('./routes/userRouter')(User)
const authRouter = require('./routes/authRouter')(User)
const publicationRouter = require('./routes/publicationRouter')(Publication)
const opinionRouter = require('./routes/opinionRouter')(Opinion)

const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
const { expressjwt } = require('express-jwt')
const cors = require('cors')
require('dotenv').config()

const app = express();

require('./database/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors())

app.all('/*',
    expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
            path: ['/auth/login', '/auth/register','/api/user', '/api/opinion', '/api/publication']
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

app.use('/api', userRouter, publicationRouter, opinionRouter)
app.use('/', authRouter)

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});