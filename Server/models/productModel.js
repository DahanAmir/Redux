const mongoose = require('mongoose');

let ProductsSchema = new mongoose.Schema({
    name : String,
    price : Number,
    serialNo : String,
    pic : String
})

module.exports = mongoose.model('products',ProductsSchema);

