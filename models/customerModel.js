const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
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
    date:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Customer', customerSchema);