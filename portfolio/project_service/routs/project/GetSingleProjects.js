const Project = require('../../models/project');

const GetSingleProjects = (req, res) => {
    const id = req.params.id;
    Project.findById(id).populate('category').then(project => {
        return res.status(200).json(project);
    });
};

module.exports = GetSingleProjects