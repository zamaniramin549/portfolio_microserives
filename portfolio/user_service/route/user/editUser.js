const EmailPassword = require('supertokens-node/recipe/emailpassword');

const editUser = async (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const {id, email, password} = req.body;
    const userId = id;
    const userInfo = await EmailPassword.getUserById(userId);
    if (userInfo === undefined) {
        return res.send({success:'user not exist'})
    }

    await EmailPassword.updateEmailOrPassword({
        userId,
        password: password,
        email: email
    })
    return res.send({success:'updated successfully'});
};
module.exports = editUser;

