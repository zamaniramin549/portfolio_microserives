const User = require('../../models/user.js');

const getSingleUser = (req, res) => {
    const id = req.params.id;
    User.findById(id).then(user => {
        res.send(user)
    }).catch(err => {res.send(err)});
};


module.exports = getSingleUser;

