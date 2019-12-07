const express = require('express');
const router = express.Router();
const moment = require('moment');
const docDebug = require('debug')('app:doc');
resolve = require('path').resolve;

router.post('/upload/disease-detection', async function(req, res) {

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./upload/leaf', function(err) {
        if (!err)  {
            console.log('ok, file has been uploaded') ;
            return res.send('File uploaded!');
        } else {
            console.log('no, The file has not been uploaded!!');
            docDebug("The document hasn't been upload err =>  "+ err);
            return res.status(500).send({message: err});
        }
    });

});


module.exports = router;









