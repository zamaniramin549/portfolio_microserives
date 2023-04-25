const express = require('express');
const rout = express.Router();
const getBlogs = require('./blog/getBlogs');
const addBlog = require('./blog/addBlog');
const deleteBlog = require('./blog/deleteBlog');
const editBlog = require('./blog/editBlog');
const getSingleBlog = require('./blog/getSingleBlog');

rout.get('/blogs', getBlogs);
rout.get('/blog/:id', getSingleBlog);
rout.post('/add-blog', addBlog);
rout.delete('/delete-blog', deleteBlog);
rout.put('/edit-blog/:id', editBlog);


module.exports = rout;