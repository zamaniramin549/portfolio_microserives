const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');
const supertokens = require('supertokens-node');
const jwt = require('supertokens-node/recipe/jwt');
const Session = require('supertokens-node/recipe/session');
const EmailPassword = require('supertokens-node/recipe/emailpassword');




const authUser = async (req, res) => {
    const {email, password} = req.body;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "formFields": [
        {
            "id": "email",
            "value": `${email}`
        },
        {
            "id": "password",
            "value": `${password}`
        }
    ]
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`${process.env.USER_SERVICE}/auth/signin`, requestOptions);
    const user = await response.json();
    return res.send(user['user']);
};


module.exports = authUser;
