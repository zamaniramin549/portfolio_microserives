const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');


const addUser = (req, res) => {
    const {fullName, email, password} = req.body;
    User.findOne({email:email}).then(findOne => {
        if(findOne) {
            res.send(res.send('The email is already exist.'))
        }
        bcrypt.hash(password, 12).then(hashPssword =>{
            const saveUser = new User({
                email:email,
                password:hashPssword,
                fullName: fullName,
            });
            saveUser.save().then(user => {
                res.send(user);
            })
        })
    }).catch(err => {res.send(err)})
};


module.exports = addUser;