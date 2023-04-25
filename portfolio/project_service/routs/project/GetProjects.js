const Project = require('../../models/project');

const GetProjects = (req, res) => {
    Project.find().populate('category').then(result => {
        return res.status(200).json(result);
    })
};

module.exports = GetProjects;