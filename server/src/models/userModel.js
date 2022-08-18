const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
    {
        name: { type: String, required: true, minLength: 3, maxLength: 60 },
        lastName: { type: String, required: true, minLength: 3, maxLength: 60 },
        userName: { type: String, required: true, unique: true, minLength: 3, maxLength: 50 },
        password: { type: String, required: true, minLength: 8, maxLength: 60 },
        phone: { type: String, required: true, unique: true, minLength: 11, maxLength: 18},
        country: { type: String, required: true, minLength: 3, maxLength: 58},
        date: { type: String, required: true, length: 10},
        address: { type: String, required: true, minLength: 5, maxLength: 50 },
        email: { type: String, required: true, unique: true, minLength: 5, maxLength: 50},
        image: { type: String, required: true},
        rating: { type: Number, required: true, minLength: 0, maxLength: 5},
        role: { type: String, required: true, minLength: 3, maxLength: 30 }
    }
)

module.exports = mongoose.model('User', userModel);