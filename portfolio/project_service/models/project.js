const mongoose = require('mongoose');
const { Schema } = mongoose;

const Project = new Schema ({
    image: {
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    summary :{ 
        type: String,
        require: true
    },
    content :{ 
        type: String,
        require: true
    },
    publishDate:{
        type: Date, 
        default: Date.now
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            require: true
        }
    ]
})

module.exports = mongoose.model('Project', Project);