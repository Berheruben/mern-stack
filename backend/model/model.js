const mongoose = require('mongoose')

const goalschema = mongoose.Schema({
    text:{
        type: String,
        require: [true,'please add value']
    }
},{
    timestamps: true, 
})

module.exports = mongoose.model('goal', goalschema)