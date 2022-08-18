const mongoose = require('mongoose');

const { Schema } = mongoose;

const publicationModel = new Schema(
    {
        created_by: {
            name: {
                type: String,
                default: null
            },
            lastName: {
                type: String,
                default: null
            },
            userName: {
                type: String,
                default: null
            },
            image: {
                type: String,
                default: null
            },
            phone: {
                type: String,
                default: null
            },
            country: {
                type: String,
                default: null
            },
            email: {
                type: String,
                default: null
            },

        },
        title: { type: String, required: true, minLength: 3, maxLength: 30 },
        description: { type: String, required: true, minLength: 20, maxLength: 600},
        created_date: { type: String, required: true , length: 10},
        price: { type: Number, minLength: 1, maxLength: 999999999999999},
        labels: { type : Array , "default" : [] },
        rating: { type : Array , "default" : [] }
    }
)

module.exports = mongoose.model('Publication', publicationModel);