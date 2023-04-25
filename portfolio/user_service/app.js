const express = require('express');
const mongoose = require('mongoose');
const routers = require('./route/routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', routers)


mongoose.connect('mongodb://user_service:password@database:27017/user').then(()=> {
    app.listen(3006);
    console.log('user service port:3006');
}).catch(e => {console.log(e)});