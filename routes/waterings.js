const {Watering} = require('../model/watering');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const wateringDebug = require('debug')('app:watering');
const mongoose = require('mongoose');
const config = require('config');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    wateringDebug("GET ALL Watering");
    res.send(await Watering.find());
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const watering = await Watering.findOne({_id: req.params.id});
    if (!watering) return res.status(404).send({message: ' The watering with the giving id was not found'});
    res.send(watering);
});

// Add new watering
router.post('/', async (req, res) => {
    wateringDebug('POST:/watering');
    // create watering object
    const watering = new Watering(req.body);
    // save the watering in DB
    await watering.save();
    return res.send(watering);
});

module.exports = router;
