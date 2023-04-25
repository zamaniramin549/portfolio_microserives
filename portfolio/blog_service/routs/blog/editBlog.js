const Blog = require('../../models/blog');

const editBlog = (req, res)=> {
    const id = req.params.id;
    const {title, image, summery, content, category} = req.body;
    Blog.findById(id).then(blog => {
        blog.title = title;
        blog.image = image;
        blog.summery = summery;
        blog.content = content;
        blog.category = category;
        blog.save().then(result => {
            return res.status(200).json(result);
        })
    })
};

module.exports = editBlog