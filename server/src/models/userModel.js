const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
    {
        name: { type: String, required: true, minLength: 3, maxLength: 30 },
        lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
        userName: { type: String, required: true, unique: true, minLength: 3, maxLength: 30 },
        password: { type: String, required: true },
        phone: { type: String, required: true, unique: true},
        country: { type: String, required: true},
        date: { type: String, required: true},
        address: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        image: { type: String, required: true, unique: true},
        rating: { type: String, required: true},
        role: { type: String, required: true}
    }
)

module.exports = mongoose.model('User', userModel);