const Project = require('../../models/project');

const editProject = (req, res)=> {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.params.id;
    const {image, title, summary, content, category} = req.body;
    Project.findById(id).then(project =>{
        project.image = image;
        project.title = title;
        project.summary = summary;
        project.content = content;
        project.category = category;
        project.save().then(result => {
            return res.status(200).json(result);
        })
    })
};


module.exports = editProject