const express = require('express');
const rout = express.Router();
const getCategories = require('./category/getCategories');
const addCategory = require('./category/addCategory');
const deleteCategory = require('./category/deleteCategory');
const editCategory = require('./category/editCategory');
const getSingleCategory = require('./category/getSingleCategory');

rout.get('/get-categories', getCategories)
rout.post('/add-category', addCategory);
rout.delete('/delete-category', deleteCategory);
rout.put('/edit-category/:id', editCategory);
rout.get('/get-single-category/:id', getSingleCategory);


module.exports = rout;