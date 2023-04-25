const Skill = require('../../models/skill');

const deleteSkill = (req, res) => {
    const id = req.body.id;
    Skill.findByIdAndDelete(id).then(reslut => {
        res.send(reslut);
    }).catch(err => {res.send(err)});
}

module.exports = deleteSkill