const mongoose = require('mongoose');


const plantSchema = new mongoose.Schema( {
    typePlant: {
        type: String,
        required: true
    },
    nitrogen: {
        type: Number,
    },
    potassium: {
        type: Number,
    },
    organicMateriel: {
        type: Number,
    },
    wetness: {
        type: Number,
    },
});

const Plant = mongoose.model('Plant', plantSchema);

exports.plantSchema = plantSchema;
exports.Plant = Plant;
