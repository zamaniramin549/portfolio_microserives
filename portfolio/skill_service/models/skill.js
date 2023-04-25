const mongoose = require('mongoose');
const { Schema } = mongoose;

const Skill = Schema ({
    name:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    publishDate:{
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model('Skill', Skill);