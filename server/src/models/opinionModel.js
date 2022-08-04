const mongoose = require('mongoose');

const { Schema } = mongoose;

const opinionModel = new Schema(
    {
        created_by: { type: String, required: true, minLength: 3, maxLength: 30 },
        publication_id: { type: String, required: true, minLength: 3, maxLength: 30 },
        text: { type: String, required: true, minLength: 3, maxLength: 30 },
        rating: { type: String, required: true}
    }
)

module.exports = mongoose.model('Opinion', opinionModel);