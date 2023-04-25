const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema ({
    name:{
        type: String,
        require: true
    },
    publishDate:{
        type: Date, 
        default: Date.now
    },
})


module.exports = mongoose.model('Category', Category)