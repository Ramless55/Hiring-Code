const mongoose = require('mongoose');

const { Schema } = mongoose;

const opinionModel = new Schema(
    {
            //created_by deberia ser un objeto
        created_by: { type: String, required: true, minLength: 3, maxLength: 30 },
        publication_id: { type: String, required: true , length: 24},
        text: { type: String, required: true, minLength: 3, maxLength: 600 },
        rating: { type: Number, required: true, minLength: 1, maxLength: 5}
    }
)

module.exports = mongoose.model('Opinion', opinionModel);