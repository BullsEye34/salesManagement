const mongoose = require('mongoose');
const Product = require('./productModel');

    const leadSchema = mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        company:{
            type: String,
            required: true
        },
        phone:{
            type:Number,
            required: true,
        },
        product:[{
            type: Product,
            required: true,
        }]
    });
    
    module.exports = mongoose.model('Lead', leadSchema);