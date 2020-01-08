const {Parcel} = require('../model/parcel');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const parcelDebug = require('debug')('app:parcel');
const mongoose = require('mongoose');
const config = require('config');
const validateObjectId = require('../middleware/validateObjectId');


// GET ALL
router.get('/', async (req, res) => {
    parcelDebug("GET ALL Parcel");
    res.send(await Parcel.find());
});

// GET BY ID
router.get('/:id', validateObjectId, async (req, res) => {
    const parcel = await Parcel.findOne({_id: req.params.id});
    if (!parcel) return res.status(404).send({message: ' The parcel with the giving id was not found'});
    res.send(parcel);
});

// Add new parcel
router.post('/', async (req, res) => {
    parcelDebug('POST:/parcel');
    // create parcel object
    const parcel = new Parcel(req.body);
    // save the parcel in DB
    await parcel.save();
    return res.send(parcel);
});

module.exports = router;
