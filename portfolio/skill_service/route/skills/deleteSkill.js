const Skill = require('../../models/skill');

const deleteSkill = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.body.id;
    Skill.findByIdAndDelete(id).then(reslut => {
        res.send(reslut);
    }).catch(err => {res.send(err)});
}

module.exports = deleteSkill