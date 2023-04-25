const Blog = require('../../models/blog');

const deleteBlog = (req, res)=>{
    const id = req.body.id;
    Blog.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteBlog;