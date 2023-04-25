const Post = require('../../models/blog');

const getSingleBlog = (req, res) => {
    const id = req.params.id
    Post.findById(id).then(post => {
        return res.status(200).json(post);
    })
}

module.exports = getSingleBlog