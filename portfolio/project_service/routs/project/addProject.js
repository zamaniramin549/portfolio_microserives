const Project = require('../../models/project');

const addProject = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const {image, title, summary, content, category} = req.body;
    const saveProject = new Project({
        image : image,
        title : title,
        summary: summary,
        content : content,
        category : category
    });
    saveProject.save().then(result => {
        return res.status(200).json(result);
    })
}

module.exports = addProject