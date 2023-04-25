const mongoose = require('mongoose');

const { Schema } = mongoose;

const Blog = new Schema({
    title:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    summery:{
        type:String,
        require: true
    },
    content:{
        type:String,
        require: true
    },
    category:{
        type:Object,
    },
    publishDate:{
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model('Blog', Blog);