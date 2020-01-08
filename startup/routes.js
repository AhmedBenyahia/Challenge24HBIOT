const error = require('../middleware/error');
const authorization = require('../middleware/authorization');
const express = require('express');
const logging = require('../middleware/req-log');

// routes imports goes here
// const client  = require('../routes/clients');
// const authentication  = require('../routes/authentication');
// const document  = require('../routes/document');
const sensor  = require('../routes/sensors');
const sensorData  = require('../routes/sensors-datas');
const watering  = require('../routes/waterings');
const parcel  = require('../routes/parcels');
const plant  = require('../routes/plants');


module.exports = (app) => {

// Authorization checking
    app.use(express.json()) ;
    // app.use(authorization);
// logging middleware
    app.use(logging);
// routes middleware stack goes here
    app.use('/sensor', sensor);
    app.use('/sensor-data', sensorData);
    app.use('/watering', watering);
    app.use('/parcel', parcel);
    app.use('/plant', plant);

// handling global error
    app.use(error);
};
