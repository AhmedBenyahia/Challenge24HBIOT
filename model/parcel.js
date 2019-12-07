const mongoose = require('mongoose');


const parcelSchema = new mongoose.Schema( {
    surface: {
        type: Number,
        required: true,
    },
    num: {
        type: String,
        length: 6,
        trim: true,
    },
    plant: {
        type: new mongoose.Schema({
            typePlant: {
                type: String,
                required: true,
                minLength: 4,
                maxLength: 55,
            },
            plantationDate: {
                type: Date,
                default: Date.now(),
            },
            ageWhenPlanted: {
                type: String,
                minLength: 4,
                maxLength: 55,
                trim: true,
                default: "0" //TODO: put in static configuration file
            },
            state: {
                type: String, //TODO: maybe disease list and history of treatment
                trim: true,
            },
        }),
        required: true,
    },
    sensors: {
        type: [new mongoose.Schema({
            num: {
                type: String,
                required: true,
                length: 6,
            },
            typeSensor: {
                type: String,
                required: true
            }
        })],
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Parcel = mongoose.model('Parcel', parcelSchema);

exports.parcelSchema = parcelSchema;
exports.Parcel = Parcel;
