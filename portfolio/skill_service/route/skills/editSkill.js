const Skill = require('../../models/skill');

const editSkill = (req, res) => {
    const id = req.params.id;
    const {name, content, image} = req.body;
    Skill.findById(id).then(skill => {
        skill.name = name;
        skill.content = content;
        skill.image = image;
        skill.save().then(resutl => {
            res.send(resutl)
        }).catch(err=>{res.send(err)})
    }).catch(error => {error.send(error)});
};


module.exports = editSkill;