const Skill = require('../../models/skill');

const getSkills = (req, res) => {
    Skill.find().then(result => {
        res.send(result);
    }).catch(err => {res.send(err)});
};


module.exports = getSkills;