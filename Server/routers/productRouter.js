const express = require('express');
const productBL = require('../models/productBL');

const router = express.Router();

router.route('/')
    .get( function(req,resp)
    {
        productBL.getAllProducts().then(data =>
            {
                return resp.json(data);
            })
    })

router.route('/:id')
    .get( function(req,resp)
    {
        let id = req.params.id;

        productBL.getProduct(id).then(data =>
            {
                return resp.json(data);
            })
    })

router.route('/')
    .post( function(req,resp)
    {
        let obj = req.body;

        productBL.addProduct(obj).then(status =>
            {
                return resp.json(status);
            })
    })

router.route('/:id')
    .put( function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;

        productBL.updateProduct(id,obj).then(status =>
            {
                return resp.json(status);
            })
    })

router.route('/:id')
    .delete( function(req,resp)
    {
        let id = req.params.id;

        productBL.deleteProduct(id).then(status =>
            {
                return resp.json(status);
            })
    })





module.exports = router;