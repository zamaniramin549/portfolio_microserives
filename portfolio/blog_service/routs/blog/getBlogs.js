const Blog = require('../../models/blog');

const getBlogs = (req, res) => {
    Blog.find().then(result => {
        return res.status(200).json(result);
    })
};


module.exports = getBlogs