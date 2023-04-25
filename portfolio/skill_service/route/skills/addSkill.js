const Skill = require('../../models/skill');

const addSkill = (req, res) => {
    const {name, content, image} = req.body;
    const saveSkill = new Skill({
        name: name,
        content: content,
        image: image
    });
    saveSkill.save().then(result => {
        res.send(result);
    }).catch(err => {res.send(err);})
};

module.exports = addSkill;