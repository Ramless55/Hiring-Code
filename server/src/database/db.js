const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('could not connect to DB'));
// module.exports = mongoose;