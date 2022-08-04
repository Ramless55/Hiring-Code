const mongoose = require('mongoose');

const { Schema } = mongoose;

const publicationModel = new Schema(
    {
        //deberia ser un  objeto
        created_by: { type: String, required: true, minLength: 3, maxLength: 30 },
        title: { type: String, required: true, minLength: 3, maxLength: 30 },
        description: { type: String, required: true, minLength: 20, maxLength: 600},
        files: { type : Array , "default" : [] },
        created_date: { type: String, required: true , length: 10},
        price: { type: Number, unique: true, minLength: 1, maxLength: 999999999999999},
        labels: { type: String, required: true, minLength: 3, maxLength: 30 },
        rating: { type: Number, required: true, minLength: 1, maxLength: 5 }
    }
)

module.exports = mongoose.model('Publication', publicationModel);