const User = require('../../models/user.js');



const deleteUser = (req, res) => {
    const id = req.body.id
    User.findByIdAndDelete(id).then(result => {
        res.send(result);
    }).catch(err => {res.send(err)});
};


module.exports = deleteUser;
