const {Sensor} = require('../model/sensor');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const sensorDebug = require('debug')('app:sensor');
const mongoose = require('mongoose');
const config = require('config');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    sensorDebug("GET ALL Sensor");
    res.send(await Sensor.find());
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const sensor = await Sensor.findOne({_id: req.params.id});
    if (!sensor) return res.status(404).send({message: ' The sensor with the giving id was not found'});
    res.send(sensor);
});

// Add new sensor
router.post('/', async (req, res) => {
    sensorDebug('POST:/sensor');
    // create sensor object
    const sensor = new Sensor(req.body);
    // save the sensor in DB
    await sensor.save();
    return res.send(sensor);
});

module.exports = router;
