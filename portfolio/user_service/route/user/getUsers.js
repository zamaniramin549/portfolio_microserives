const EmailPassword = require('supertokens-node/recipe/emailpassword');
const User = require('../../models/user.js');


const getUsers = (req, res) => {
    console.log(EmailPassword);
    // User.find().then(result => {
    //     return res.send(result)
    // }).catch(err => {res.send(err)});
};



module.exports = getUsers;
