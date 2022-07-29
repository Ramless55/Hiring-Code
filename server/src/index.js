const express = require('express');
require('dotenv').config()
const { expressjwt } = require('express-jwt');

const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')

const app = express();

require('./database/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Server is running!');
});