const express = require('express');
const mongoose = require('mongoose');
const routers = require('./route/routers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', routers)


mongoose.connect('mongodb://skill_service:password@database:27017/skill').then(()=> {
    app.listen(3005);
    console.log('skill service port:3005');
}).catch(e => {console.log(e)});