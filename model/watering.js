const mongoose = require('mongoose');


const wateringSchema = new mongoose.Schema( {
    wateringVolume: {
        type: Number,
        required: true,
    },
    wateringDate: {
        type: Date,
        default: Date.now()
    },
    weather: { //TODO: make it json object not just a string
        type: String,
        minLength: 5,
        maxLength: 155,
        trim: true,
    }
});

const Watering = mongoose.model('Watering', wateringSchema);

exports.wateringSchema = wateringSchema;
exports.Watering = Watering;
