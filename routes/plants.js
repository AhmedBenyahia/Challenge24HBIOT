const {Plant: Plants} = require('../model/plant');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const plantDebug = require('debug')('app:plant');
const mongoose = require('mongoose');
const config = require('config');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    plantDebug("GET ALL Plants");
    res.send(await Plants.find());
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const plant = await Plants.findOne({_id: req.params.id});
    if (!plant) return res.status(404).send({message: ' The plant with the giving id was not found'});
    res.send(plant);
});

// Add new plant
router.post('/', async (req, res) => {
    plantDebug('POST:/plant');
    // create plant object
    const plant = new Plants(req.body);
    // save the plant in DB
    await plant.save();
    return res.send(plant);
});

module.exports = router;
