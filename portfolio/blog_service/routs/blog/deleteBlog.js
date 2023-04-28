const Blog = require('../../models/blog');

const deleteBlog = (req, res)=>{
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.body.id;
    Blog.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteBlog;