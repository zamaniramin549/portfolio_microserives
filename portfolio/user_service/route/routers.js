const express = require('express');
const route = express.Router();



const getUsers = require('./user/getUsers');
const addUser = require('./user/addUser');
const deleteUser = require('./user/deleteUser');
const editUser = require('./user/editUser');
const getSingleUser = require('./user/getSingleUser');
const authUser = require('./user/authUser');


route.get('/users', getUsers);
route.get('/get-single-user/:id', getSingleUser);
route.post('/add-user', addUser);
route.delete('/delete-user', deleteUser);
route.put('/edit-user/:id', editUser);
route.post('/auth-user', authUser);


module.exports = route;

