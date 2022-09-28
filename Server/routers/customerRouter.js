const express = require('express');
const customerBL = require('../models/customerBL');

const router = express.Router();

router.route('/')
    .get( function(req,resp)
    {
        customerBL.getAllCustomers().then(result =>
            {
                return resp.json(result.data);
            })
    })

module.exports = router;