const mongoose = require('mongoose');


const sensorDataSchema = new mongoose.Schema( {
    num: {
        type: String,
        length: 6,
        trim: true,
    },
    typeSensor: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

exports.sensorDataSchema = sensorDataSchema;
exports.SensorData = SensorData;
