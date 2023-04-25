const express = require('express');
const mongoose = require('mongoose')
const app = express()
const routers = require('./routs/routers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', routers);


mongoose.connect('mongodb://blog_service:password@database:27017/blog').then(()=> {
    app.listen(3003);
    console.log('blog service port:3003');
}).catch(e => {console.log(e)});