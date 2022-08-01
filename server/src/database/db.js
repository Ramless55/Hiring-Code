const mongoose = require('mongoose')
require('dotenv').config()

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('could not connect to DB'));
// module.exports = mongoose;