const Skill = require('../../models/skill');
const getSingleSkill = (req, res) => {
    const id = req.params.id;
    Skill.findById(id).then(result => {
        res.send(result);
    }).catch(error => {res.send(error)});
};


module.exports = getSingleSkill;