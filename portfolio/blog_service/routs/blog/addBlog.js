const Blog = require('../../models/blog');
// const fetch = require('node-fetch');


// const response = await fetch('https://github.com/');

const addBlog = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const {title, image, summery, content, category} = req.body;
    const saveBlog = new Blog({
        title:title,
        image:image,
        summery:summery,
        content:content,
        category:category
    });
    saveBlog.save().then(result => {
        return res.status(200).json(result);
    })
};


module.exports = addBlog