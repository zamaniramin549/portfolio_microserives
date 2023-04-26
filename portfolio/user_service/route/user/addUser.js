const fetch = require('node-fetch');



const addUser = async (req, res) => {
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

    const response = await fetch(`${process.env.USER_SERVICE}/auth/signup`, requestOptions);
    const user = await response.json();
    return res.send(user['user']);
    
};


module.exports = addUser;