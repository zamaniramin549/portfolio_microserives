const mongoose = require ('mongoose');
const { Schema } = mongoose;

const User = Schema ({
    fullName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    joinedDate:{
        type: Date, 
        default: Date.now
    },
});


module.exports =  mongoose.model('User', User);