const User = require('../../models/user.js');
const bcrypt = require('bcryptjs');
const supertokens = require('supertokens-node');
const jwt = require('supertokens-node/recipe/jwt');



supertokens.init({
    appInfo: {
        apiDomain: 'http://127.0.0.1:3006',
        appName: 'portfolio',
        websiteDomain: 'http://127.0.0.1:3006'
    },
    supertokens: {
        connectionURI: 'https://dev-3e6d6441e38711edae38099579cc48fa-ap-southeast-1.aws.supertokens.io:3569',
        apiKey: '4lUiVABR815HpbH8lo9ukjHl8CxLwP'
    },
    recipeList: [
        jwt.init()
    ]
})

async function createJWT(payload) {
    let jwtResposne = await jwt.createJWT({
        ...payload,
        source: "microservice"
    });
    if (jwtResposne.status === "OK") {
        // Send JWT as Authorization header to M2
        return jwtResposne.jwt;
    }
    throw new Error("Unable to create JWT. Should never come here.")
}



const authUser = async (req, res) => {
    const {email, password} = req.body;
    User.findOne({email:email}).then(user => {
        if(user){
            bcrypt.compare(password, user.password).then(async doMatch => {
                if (doMatch){
                    res.status(200).json({jwtoken: await createJWT()});
                }else{
                    res.send('encorect password!!')
                }
            }).catch(err => {return res.send(err)})
        }else{
            res.send('encorect email!!')
        }
    }).catch(err => {return res.status(302).send(err)});
};


module.exports = authUser;
