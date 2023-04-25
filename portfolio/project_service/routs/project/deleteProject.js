const Project = require('../../models/project');

const deleteProject = (req, res) => {
    const id = req.body.id;
    Project.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteProject