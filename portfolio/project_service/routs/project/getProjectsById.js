const Project = require('../../models/project');

const getProjectsById = (req, res) => {
    const id = req.query.id;
    Project.find({category:id}).populate('category').then(result => {
        return res.status(200).json(result);
    });
};

module.exports = getProjectsById;