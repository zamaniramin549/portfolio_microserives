const express = require('express');
const mongoose = require('mongoose');
const routers = require('./route/routers');

// Super Token API //
const supertokens = require('supertokens-node');
const Session = require('supertokens-node/recipe/session');
const EmailPassword = require('supertokens-node/recipe/emailpassword');
const cors = require('cors');
const { middleware } = require('supertokens-node/framework/express');
// ----------- //

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Super Token API //
supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://dev-3e6d6441e38711edae38099579cc48fa-ap-southeast-1.aws.supertokens.io:3569",
        apiKey: "4lUiVABR815HpbH8lo9ukjHl8CxLwP",
    },
    appInfo: {
        apiDomain: 'http://127.0.0.1:3006',
        appName: 'portfolio',
        websiteDomain: 'http://127.0.0.1:3006',
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), // initializes signin / sign up features
        Session.init(), // initializes session features
        // jwt.init()
    ]
});
app.use(cors({
    origin: 'http://127.0.0.1',
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));
app.use(middleware());
// ----------- //



app.use('/', routers)


mongoose.connect('mongodb://user_service:password@database:27017/user').then(()=> {
    app.listen(3006);
    console.log('user service port:3006');
}).catch(e => {console.log(e)});