const Category = require('../../models/category');

const getSingleCategory = (req, res) => {
    const id = req.params.id;
    Category.findById(id).then(result => {
        res.send(result);
    })
};

module.exports = getSingleCategory;