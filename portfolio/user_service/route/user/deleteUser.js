const { deleteUser } = require('supertokens-node');


const deleteaUser = async (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.body.id
    await deleteUser(id);
    return res.send({success:'User deleted'});
};


module.exports = deleteaUser;
