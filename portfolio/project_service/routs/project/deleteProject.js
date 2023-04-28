const Project = require('../../models/project');

const deleteProject = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.body.id;
    Project.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteProject