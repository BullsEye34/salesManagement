const mongoose = require('mongoose');
const Product = require('./productModel');

    const saleSchema = mongoose.Schema({
        custID:{
            type: String,
            required: true,
        },
        company:{
            type: String,
            required: true
        },
        date:{
            type:Date,
            required: true,
        },
        product:[{
            type: Product,
            required: true,
        }]
    });
    
    module.exports = mongoose.model('Sale', saleSchema);