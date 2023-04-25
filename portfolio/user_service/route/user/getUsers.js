const User = require('../../models/user.js');


const getUsers = (req, res) => {
    User.find().then(result => {
        return res.send(result)
    }).catch(err => {res.send(err)});
};



module.exports = getUsers;
