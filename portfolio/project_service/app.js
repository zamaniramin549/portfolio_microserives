const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routs/routers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers);



mongoose.connect('mongodb://project_service:password@database:27017/projects').then(()=> {
    app.listen(3001);
    console.log('project service port:3001');
}).catch(e => {console.log(e)});