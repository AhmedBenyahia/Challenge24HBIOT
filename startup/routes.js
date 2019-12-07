const error = require('../middleware/error');
const authorization = require('../middleware/authorization');
const express = require('express');
const logging = require('../middleware/req-log');

// routes imports goes here
// const client  = require('../routes/clients');
// const authentication  = require('../routes/authentication');
const document  = require('../routes/document');


module.exports = (app) => {

// Authorization checking
    app.use(express.json()) ;
    // app.use(authorization);
// logging middleware
    app.use(logging);
// routes middleware stack goes here
    app.use('/', document);
    /*
        app.use('/client', client);
        app.use('/', authentication);
     */
// handling global error
    app.use(error);
};
