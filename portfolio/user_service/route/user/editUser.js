const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');

const editUser = (req, res) => {
    const id = req.params.id;
    const {fullName, email, password} = req.body;
    User.findById(id).then(user => {
        bcrypt.hash(password, 12).then(hashPassword => {
            user.fullName = fullName;
            user.email = email;
            user.password = hashPassword;
            user.save()
            res.send(user)
        }).catch(err => {res.send(err)});
    }).catch(err => {res.send(err)});
};



module.exports = editUser;

