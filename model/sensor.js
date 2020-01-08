const mongoose = require('mongoose');


const sensorSchema = new mongoose.Schema( {
    num: {
        type: String,
        length: 6,
        trim: true,
    },
    typeSensor: {
        type: String,
        // required: true
    },
    measureDate: {
        type: Date,
        default: Date.now()
    },
    values: Object
});

const Sensor = mongoose.model('Sensor', sensorSchema);

exports.sensorSchema = sensorSchema;
exports.Sensor = Sensor;
