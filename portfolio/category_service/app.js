const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routs/routers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers);



mongoose.connect('mongodb://category_service:password@database:27017/category').then(()=> {
    app.listen(3002);
    console.log('category service port:3002');
}).catch(e => {console.log(e)});