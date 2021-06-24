const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
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

module.exports = mongoose.model('Agent', agentSchema);