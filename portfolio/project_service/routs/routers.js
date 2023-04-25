const express = require('express');
const rout = express.Router();
const addCategory = require('./category/addCategory');
const getCategories = require('./category/getCategory');
const editCategory = require('./category/editCategory');
const deleteCategory = require('./category/deleteCategory');

const addProject = require('./project/addProject');
const getProjects = require('./project/GetProjects');
const deleteProject = require('./project/deleteProject');
const editProject = require('./project/editProject');
const GetSingleProjects = require('./project/GetSingleProjects');
const getProjectsById = require('./project/getProjectsById');

rout.get('/categories', getCategories)
rout.post('/add-category',addCategory);
rout.put('/edit-category/:id', editCategory);
rout.delete('/delete-category', deleteCategory);

rout.get('/projects', getProjects);
rout.get('/project-by-id', getProjectsById);
rout.get('/project/:id', GetSingleProjects);
rout.post('/add-project', addProject);
rout.delete('/delete-project', deleteProject);
rout.put('/edit-project/:id', editProject);


module.exports = rout;