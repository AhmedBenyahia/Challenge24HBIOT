const {SensorData} = require('../model/sensor-data');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const sensorDataDebug = require('debug')('app:sensorData');
const mongoose = require('mongoose');
const config = require('config');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    sensorDataDebug("GET ALL SensorData");
    res.send(await SensorData.find());
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const sensorData = await SensorData.findOne({_id: req.params.id});
    if (!sensorData) return res.status(404).send({message: ' The sensorData with the giving id was not found'});
    res.send(sensorData);
});

// Add new sensorData
router.post('/', async (req, res) => {
    sensorDataDebug('POST:/sensorData');
    // create sensorData object
    const sensorData = new SensorData(req.body);
    // save the sensorData in DB
    await sensorData.save();
    return res.send(sensorData);
});

module.exports = router;
